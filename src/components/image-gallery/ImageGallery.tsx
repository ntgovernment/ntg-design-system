import React, { useState, useCallback, useEffect } from "react";
import { Image } from "../image/Image";
import "./image-gallery.css";

export interface GalleryImage {
  /** Full-size image URL (JPG/PNG fallback) */
  src: string;
  /** Optional WebP version of the image for better compression */
  srcWebp?: string;
  /** Alt text for accessibility (required) */
  alt: string;
  /** Optional image title shown in lightbox */
  title?: string;
  /** Optional image description shown in lightbox */
  description?: string;
  /** Optional srcSet for responsive image selection */
  srcSet?: string;
  /** Optional WebP srcSet for responsive selection */
  srcSetWebp?: string;
  /** Width of the image in pixels (default: 320) */
  width?: number;
  /** Height of the image in pixels (default: 240) */
  height?: number;
}

export interface ImageGalleryProps {
  /** Array of images to display in gallery and lightbox */
  images: GalleryImage[];
  /** Number of images per row (responsive, default: 4). Images won't shrink below 320px except on small breakpoints. */
  imagesPerRow?: number;
  /** Gap between grid items in pixels */
  gap?: number;
  /** Default width for gallery images in pixels (default: 320) */
  imageWidth?: number;
  /** Default height for gallery images in pixels (default: 240) */
  imageHeight?: number;
  /** Additional CSS classes */
  className?: string;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  imagesPerRow = 4,
  gap = 16,
  imageWidth = 320,
  imageHeight = 240,
  className = "",
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Track container width for responsive calculations
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    const resizeObserver = new ResizeObserver(updateWidth);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  const handleImageClick = useCallback((index: number) => {
    setSelectedIndex(index);
    setLightboxOpen(true);
  }, []);

  const handleCloseLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const handlePrevImage = useCallback(() => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const handleNextImage = useCallback(() => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const baseClass = "ntgds-image-gallery";
  const classes = [baseClass, className].filter(Boolean).join(" ");

  // Calculate responsive columns based on container width and minimum image width
  const calculateResponsiveColumns = (): number => {
    if (containerWidth === 0) return imagesPerRow;

    // Minimum image width 320px + gap
    const minImageWidth = 320;
    const totalGapWidth = (imagesPerRow - 1) * gap;
    const minTotalWidth = minImageWidth * imagesPerRow + totalGapWidth;

    // If container is smaller than minimum, reduce columns
    if (containerWidth < minTotalWidth) {
      // Calculate how many columns fit without shrinking below 320px (except on very small screens)
      const availableWidth = containerWidth;
      let cols = imagesPerRow;

      while (cols > 1) {
        const totalGap = (cols - 1) * gap;
        const imageSize = (availableWidth - totalGap) / cols;
        if (imageSize >= minImageWidth) {
          break;
        }
        cols--;
      }
      return cols;
    }

    return imagesPerRow;
  };

  const responsiveColumns = calculateResponsiveColumns();

  // Group images into rows based on responsive columns
  const rows: GalleryImage[][] = [];
  for (let i = 0; i < images.length; i += responsiveColumns) {
    rows.push(images.slice(i, i + responsiveColumns));
  }

  // Calculate actual image width based on container and responsive columns
  const calculateImageWidth = (): number => {
    if (containerWidth === 0) return imageWidth;
    const totalGapWidth = (responsiveColumns - 1) * gap;
    const availableWidth = containerWidth - totalGapWidth;
    const calculatedWidth = availableWidth / responsiveColumns;

    // Don't shrink below imageWidth (320px default) except on very small screens
    return Math.max(calculatedWidth, imageWidth);
  };

  const actualImageWidth = calculateImageWidth();
  const aspectRatio = imageHeight / imageWidth;
  const actualImageHeight = actualImageWidth * aspectRatio;

  return (
    <>
      <div
        ref={containerRef}
        className={classes}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: `${gap}px`,
          width: "100%",
        }}
      >
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            style={{
              display: "flex",
              flexDirection: "row",
              gap: `${gap}px`,
              alignItems: "flex-end",
              flexWrap: "wrap",
            }}
          >
            {row.map((image, colIndex) => {
              const imageIndex = rowIndex * responsiveColumns + colIndex;
              const width = image.width || actualImageWidth;
              const height = image.height || actualImageHeight;
              return (
                <button
                  key={imageIndex}
                  className={`${baseClass}__button`}
                  onClick={() => handleImageClick(imageIndex)}
                  aria-label={`Open image ${imageIndex + 1}: ${image.alt}`}
                  style={{
                    width: `${width}px`,
                    height: `${height}px`,
                    padding: 0,
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <Image
                    src={image.src}
                    srcWebp={image.srcWebp}
                    alt={image.alt}
                    srcSet={image.srcSet}
                    srcSetWebp={image.srcSetWebp}
                    loading="lazy"
                    width={width}
                    height={height}
                    className={`${baseClass}__thumb`}
                  />
                  {(image.title || image.description) && (
                    <div className={`${baseClass}__overlay`}>
                      {image.title && (
                        <div className={`${baseClass}__overlay-title`}>
                          {image.title}
                        </div>
                      )}
                      {image.description && (
                        <div className={`${baseClass}__overlay-description`}>
                          {image.description}
                        </div>
                      )}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <ImageGalleryLightbox
          images={images}
          selectedIndex={selectedIndex}
          onClose={handleCloseLightbox}
          onPrev={handlePrevImage}
          onNext={handleNextImage}
          onSelectIndex={setSelectedIndex}
        />
      )}
    </>
  );
};
