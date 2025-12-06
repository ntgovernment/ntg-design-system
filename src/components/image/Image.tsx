import React from "react";

export interface ImageProps {
  src: string;
  alt: string;
  caption?: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  /** Optional WebP version of the image for better compression */
  srcWebp?: string;
  /** Optional srcSet for responsive image selection (JPG/PNG) */
  srcSet?: string;
  /** Optional WebP srcSet for responsive selection */
  srcSetWebp?: string;
  /** Loading strategy - lazy or eager (default: lazy) */
  loading?: "lazy" | "eager";
  /** Position within container (for background positioning style) */
  objectPosition?: string;
}

export const Image: React.FC<
  ImageProps & React.ImgHTMLAttributes<HTMLImageElement>
> = ({
  src,
  alt,
  caption,
  width,
  height,
  className = "",
  srcWebp,
  srcSet,
  srcSetWebp,
  loading = "lazy",
  objectPosition = "center",
  ...rest
}) => {
  const containerStyle = {
    width: width || "auto",
    height: height || "auto",
  };

  return (
    <div className={`ntgds-image ${className}`.trim()} style={containerStyle}>
      <figure className="ntgds-image__figure">
        <picture>
          {/* WebP source with optional srcSet */}
          {srcWebp && (
            <source
              srcSet={srcSetWebp || srcWebp}
              type="image/webp"
            />
          )}
          {/* JPG/PNG fallback with optional srcSet */}
          {srcSet && <source srcSet={srcSet} />}
          {/* Fallback img element */}
          <img
            src={src}
            alt={alt}
            loading={loading}
            className="ntgds-image__img"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition,
            }}
            {...rest}
          />
        </picture>
        {caption && (
          <figcaption className="ntgds-image__caption">{caption}</figcaption>
        )}
      </figure>
    </div>
  );
};
