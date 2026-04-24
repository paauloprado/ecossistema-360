import React from "react";

interface BannerProps {
  title?: string;
  subtitle?: string;
  imageGrid?: [string, string, string, string]; // 4 imagens
  children?: React.ReactNode;
  overlay?: boolean;
  textColor?: string;
  className?: string;
}

const BannerGrid: React.FC<BannerProps> = ({
  title,
  subtitle,
  imageGrid,
  children,
  overlay = true,
  textColor = "text-white",
  className = "aspect-square",
}) => {
  return (
    <div className={`w-full flex items-center justify-center relative rounded-[32px] overflow-hidden ${className}`}>
      {/* Grid de Imagens */}
      {imageGrid && imageGrid.length === 4 ? (
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 w-full h-full gap-2">
          {imageGrid.map((src, index) => {
            const roundedClasses = [
              "rounded-tl-2xl",
              "rounded-tr-2xl",
              "rounded-bl-2xl",
              "rounded-br-2xl",
            ];
            return (
              <img
                key={index}
                src={src}
                alt={`Banner image ${index + 1}`}
                className={`w-full h-full object-cover ${
                  roundedClasses[index]
                }`}
              />
            );
          })}
        </div>
      ) : null}

      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-0" />
      )}

      {/* Conteúdo */}
      <div
        className={`relative z-10 text-center px-4 flex flex-col items-center ${textColor}`}
      >
        {title && <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>}
        {subtitle && <p className="text-base md:text-lg mt-2">{subtitle}</p>}
        {children && <div className="mt-4">{children}</div>}
      </div>
    </div>
  );
};

export default BannerGrid;
