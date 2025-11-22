import React from "react";

export interface ImageProps {
  src: string;
  alt: string;
  caption?: string;
  width?: number | string;
  height?: number | string;
  className?: string;
}

export const Image: React.FC<
  ImageProps & React.ImgHTMLAttributes<HTMLImageElement>
> = ({ src, alt, caption, width, height, className = "", ...rest }) => {
  const containerStyle = {
    width: width || "auto",
    height: height || "auto",
  };

  return (
    <div className={`ntgds-image ${className}`.trim()} style={containerStyle}>
      <figure className="ntgds-image__figure">
        <img
          src={src}
          alt={alt}
          className="ntgds-image__img"
          style={{ width: "100%", height: "100%" }}
          {...rest}
        />
        {caption && (
          <figcaption className="ntgds-image__caption">{caption}</figcaption>
        )}
      </figure>
    </div>
  );
};
