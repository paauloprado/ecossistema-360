// components/ImageBrand.tsx
import React from "react";
import { Image } from "@heroui/react";

interface ImageBrandProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

const ImageBrand: React.FC<ImageBrandProps> = ({
  src,
  alt = "Logo",
  width = 150,
  height = 50,
  className = "",
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`object-contain ${className}`}
    />
  );
};

export default ImageBrand;
