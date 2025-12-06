import React, { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "../button/Button";
import type { GalleryImage } from "./ImageGallery";

interface ImageGalleryLightboxProps {
  images: GalleryImage[];
  selectedIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onSelectIndex: (index: number) => void;
}

export const ImageGalleryLightbox: React.FC<ImageGalleryLightboxProps> = ({
  images,
  selectedIndex,
  onClose,
  onPrev,
  onNext,
  onSelectIndex,
}) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [panX, setPanX] = useState(0);
  const [panY, setPanY] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchStartY, setTouchStartY] = useState(0);
  const [touchStartDist, setTouchStartDist] = useState(0);
  const backdropRef = useRef<HTMLDivElement>(null);
  const mainImageRef = useRef<HTMLDivElement>(null);
  const thumbnailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const currentImage = images[selectedIndex];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        onNext();
        setPanX(0);
        setPanY(0);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        onPrev();
        setPanX(0);
        setPanY(0);
      } else if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onNext, onPrev, onClose]);

  // Zoom functions
  const handleZoomIn = useCallback(() => {
    setZoomLevel((prev) => {
      const levels = [1, 1.5, 2, 3];
      const currentIdx = levels.indexOf(prev);
      if (currentIdx < levels.length - 1) {
        setPanX(0);
        setPanY(0);
        return levels[currentIdx + 1];
      }
      return prev;
    });
  }, []);

  const handleZoomOut = useCallback(() => {
    setZoomLevel((prev) => {
      const levels = [1, 1.5, 2, 3];
      const currentIdx = levels.indexOf(prev);
      if (currentIdx > 0) {
        setPanX(0);
        setPanY(0);
        return levels[currentIdx - 1];
      }
      return prev;
    });
  }, []);

  // Zoom cycle (1 -> 1.5 -> 2 -> 3 -> 1)
  const handleZoomCycle = useCallback(() => {
    setZoomLevel((prev) => {
      const levels = [1, 1.5, 2, 3];
      const currentIdx = levels.indexOf(prev);
      const nextIdx = (currentIdx + 1) % levels.length;
      setPanX(0);
      setPanY(0);
      return levels[nextIdx];
    });
  }, []);

  // Click-outside detection for backdrop
  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === backdropRef.current) {
        onClose();
      }
    },
    [onClose]
  );

  // Touch swipe handling (30px threshold)
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setTouchStartX(e.touches[0].clientX);
      setTouchStartY(e.touches[0].clientY);
    } else if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      setTouchStartDist(Math.sqrt(dx * dx + dy * dy));
    }
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (e.changedTouches.length === 1) {
        const deltaX = e.changedTouches[0].clientX - touchStartX;
        const threshold = 30;

        if (Math.abs(deltaX) > threshold) {
          if (deltaX > 0) {
            // Swiped right = previous
            onPrev();
          } else {
            // Swiped left = next
            onNext();
          }
          setPanX(0);
          setPanY(0);
        }
      } else if (e.changedTouches.length === 0 && touchStartDist > 0) {
        // Pinch ended
        setTouchStartDist(0);
      }
    },
    [touchStartX, touchStartDist, onPrev, onNext]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (e.touches.length === 2 && touchStartDist > 0) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const delta = dist - touchStartDist;

        // Pinch-zoom: delta > 0 = zoom in, delta < 0 = zoom out
        if (Math.abs(delta) > 10) {
          if (delta > 0) {
            handleZoomIn();
          } else {
            handleZoomOut();
          }
          setTouchStartDist(dist);
        }
      }
    },
    [touchStartDist, handleZoomIn, handleZoomOut]
  );

  // Mouse drag for pan (when zoomed)
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragStartY, setDragStartY] = useState(0);
  const [dragStartPanX, setDragStartPanX] = useState(0);
  const [dragStartPanY, setDragStartPanY] = useState(0);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (zoomLevel > 1 && mainImageRef.current) {
        setIsDragging(true);
        setDragStartX(e.clientX);
        setDragStartY(e.clientY);
        setDragStartPanX(panX);
        setDragStartPanY(panY);
      }
    },
    [zoomLevel, panX, panY]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isDragging) {
        const deltaX = e.clientX - dragStartX;
        const deltaY = e.clientY - dragStartY;
        setPanX(dragStartPanX + deltaX);
        setPanY(dragStartPanY + deltaY);
      }
    },
    [isDragging, dragStartX, dragStartY, dragStartPanX, dragStartPanY]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Touch pan for zoomed images
  const [isTouchDragging, setIsTouchDragging] = useState(false);
  const [touchDragStartX, setTouchDragStartX] = useState(0);
  const [touchDragStartY, setTouchDragStartY] = useState(0);
  const [touchDragStartPanX, setTouchDragStartPanX] = useState(0);
  const [touchDragStartPanY, setTouchDragStartPanY] = useState(0);

  const handleTouchStartDrag = useCallback(
    (e: React.TouchEvent) => {
      if (zoomLevel > 1 && e.touches.length === 1) {
        setIsTouchDragging(true);
        setTouchDragStartX(e.touches[0].clientX);
        setTouchDragStartY(e.touches[0].clientY);
        setTouchDragStartPanX(panX);
        setTouchDragStartPanY(panY);
      }
    },
    [zoomLevel, panX, panY]
  );

  const handleTouchMoveDrag = useCallback(
    (e: React.TouchEvent) => {
      if (isTouchDragging && e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - touchDragStartX;
        const deltaY = e.touches[0].clientY - touchDragStartY;
        setPanX(touchDragStartPanX + deltaX);
        setPanY(touchDragStartPanY + deltaY);
      }
    },
    [isTouchDragging, touchDragStartX, touchDragStartY, touchDragStartPanX, touchDragStartPanY]
  );

  const handleTouchEndDrag = useCallback(() => {
    setIsTouchDragging(false);
  }, []);

  // IntersectionObserver for lazy-loading thumbnails
  useEffect(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target.querySelector("img") as HTMLImageElement;
              if (img && img.dataset.src && !img.src) {
                img.src = img.dataset.src;
                if (img.dataset.srcset) {
                  img.srcset = img.dataset.srcset;
                }
              }
              observerRef.current?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
    }

    thumbnailRefs.current.forEach((ref) => {
      if (ref) {
        observerRef.current?.observe(ref);
      }
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [images.length]);

  // Autoscroll selected thumbnail into view
  useEffect(() => {
    if (thumbnailRefs.current[selectedIndex]) {
      thumbnailRefs.current[selectedIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [selectedIndex]);

  // Attach global mouse listeners
  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove as any);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove as any);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  const isZoomInDisabled = zoomLevel === 3;
  const isZoomOutDisabled = zoomLevel === 1;
  const descriptionId = `image-desc-${selectedIndex}`;
  const titleId = `image-title-${selectedIndex}`;

  return (
    <div
      className={`ntgds-image-gallery-lightbox ${
        isFullscreen ? "ntgds-image-gallery-lightbox--fullscreen" : ""
      }`}
      ref={backdropRef}
      onClick={handleBackdropClick}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={(e) => {
        handleTouchStart(e);
        handleTouchStartDrag(e);
      }}
      onTouchEnd={(e) => {
        handleTouchEnd(e);
        handleTouchEndDrag();
      }}
      onTouchMove={(e) => {
        handleTouchMoveDrag(e);
      }}
      role="region"
      aria-label="Image gallery lightbox viewer"
      aria-modal="true"
    >
      <div
        className="ntgds-image-gallery-lightbox__container"
        style={{ cursor: zoomLevel > 1 ? (isDragging ? "grabbing" : "grab") : "default" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with counter and controls */}
        <div className="ntgds-image-gallery-lightbox__header">
          <div className="ntgds-image-gallery-lightbox__counter">
            {selectedIndex + 1} / {images.length}
          </div>
          <div className="ntgds-image-gallery-lightbox__controls">
            <Button
              variant="tertiary"
              size="small"
              iconLeft="magnifying-glass-minus"
              iconColor="inverse"
              onClick={handleZoomOut}
              disabled={isZoomOutDisabled}
              aria-label="Zoom out"
            > </Button>
            <Button
              variant="tertiary"
              size="small"
              iconLeft="magnifying-glass-plus"
              iconColor="inverse"
              onClick={handleZoomIn}
              disabled={isZoomInDisabled}
              aria-label="Zoom in"
            > </Button>
            <Button
              variant="tertiary"
              size="small"
              iconLeft="expand"
              iconColor="inverse"
              onClick={() => setIsFullscreen(!isFullscreen)}
              aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            > </Button>
          </div>
        </div>

        {/* Main image viewer */}
        <div className="ntgds-image-gallery-lightbox__main">
          <Button
            variant="tertiary"
            size="large"
            iconLeft="chevron-left"
            iconColor="inverse"
            onClick={onPrev}
            className="ntgds-image-gallery-lightbox__nav-prev"
            aria-label="Previous image"
          > </Button>

          <div className="ntgds-image-gallery-lightbox__viewer" ref={mainImageRef}>
            <div
              className="ntgds-image-gallery-lightbox__image-container"
              style={{
                transform: `scale(${zoomLevel}) translate(${panX / zoomLevel}px, ${panY / zoomLevel}px)`,
              }}
            >
              <picture>
                {currentImage.srcWebp && (
                  <source
                    srcSet={currentImage.srcSetWebp || currentImage.srcWebp}
                    type="image/webp"
                  />
                )}
                <img
                  src={currentImage.src}
                  alt={currentImage.alt}
                  onLoad={() => setImageLoaded(true)}
                  className="ntgds-image-gallery-lightbox__image"
                  aria-describedby={
                    currentImage.description ? descriptionId : currentImage.title ? titleId : undefined
                  }
                />
              </picture>
            </div>

            {/* Image title and description */}
            {(currentImage.title || currentImage.description) && (
              <div className="ntgds-image-gallery-lightbox__caption">
                {currentImage.title && (
                  <h2 id={titleId} className="ntgds-image-gallery-lightbox__title">
                    {currentImage.title}
                  </h2>
                )}
                {currentImage.description && (
                  <p id={descriptionId} className="ntgds-image-gallery-lightbox__description">
                    {currentImage.description}
                  </p>
                )}
              </div>
            )}
          </div>

          <Button
            variant="tertiary"
            size="large"
            iconLeft="chevron-right"
            iconColor="inverse"
            onClick={onNext}
            className="ntgds-image-gallery-lightbox__nav-next"
            aria-label="Next image"
          > </Button>
        </div>

        {/* Thumbnail strip */}
        <div className="ntgds-image-gallery-lightbox__thumbnails ntgds-scrollable">
          {images.map((image, index) => (
            <div
              key={index}
              ref={(el) => {
                thumbnailRefs.current[index] = el;
              }}
              className={`ntgds-image-gallery-lightbox__thumbnail ${
                index === selectedIndex
                  ? "ntgds-image-gallery-lightbox__thumbnail--selected"
                  : ""
              }`}
            >
              <button
                onClick={() => {
                  onSelectIndex(index);
                  setPanX(0);
                  setPanY(0);
                  setZoomLevel(1);
                }}
                aria-label={`Select image ${index + 1}: ${image.alt}`}
                className="ntgds-image-gallery-lightbox__thumbnail-button"
              >
                <picture>
                  {image.srcWebp && (
                    <source srcSet={image.srcWebp} type="image/webp" />
                  )}
                  <img
                    data-src={image.src}
                    alt={image.alt}
                    className="ntgds-image-gallery-lightbox__thumbnail-image"
                  />
                </picture>
              </button>
            </div>
          ))}
        </div>

        {/* Close button */}
        <Button
          variant="tertiary"
          size="small"
          iconLeft="xmark"
          iconColor="inverse"
          onClick={onClose}
          className="ntgds-image-gallery-lightbox__close"
          aria-label="Close lightbox"
        > </Button>
      </div>
    </div>
  );
};
