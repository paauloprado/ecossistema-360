import React from "react";

type SectionImageProps = {
  src: string;
  alt?: string;
  caption?: string;
};

const SectionImage = ({ src, alt, caption }: { src: string; alt: string; caption?: string }) => {
  return (
    <div className="w-full mb-8 flex flex-col items-center">
      <img
        src={src}
        alt={alt}
        className="w-full max-w-3xl h-auto rounded-xl object-contain"
      />
      {caption && (
        <p className="mt-2 text-sm text-gray-500 italic text-center">
          {caption}
        </p>
      )}
    </div>
  );
};

export default SectionImage;
