// import React from "react";

// interface BannerProps {
//   title?: string;
//   titleImage?: string;
//   subtitle?: string;
//   backgroundImage?: string;
//   children?: React.ReactNode;
//   overlay?: boolean; // <<<<< Adicionamos isso
//   textColor?: string;
// }

// const Banner: React.FC<BannerProps> = ({
//   title,
//   titleImage,
//   subtitle,
//   backgroundImage,
//   children,
//   overlay = true,
//   textColor = "text-white",
// }) => {
//   return (
//     <div
//       className="w-full h-96 flex items-center justify-center rounded-2xl overflow-hidden relative bg-cover bg-center"
//       style={{
//         backgroundImage: backgroundImage
//           ? `url(${backgroundImage})`
//           : "linear-gradient(to right, #4f46e5, #3b82f6)",
//       }}
//     >
//       {/* Overlay */}
//       {overlay && (
//         <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm" />
//       )}
      
//       {/* Conteúdo */}
//       <div className={`relative z-10 text-center px-4 flex flex-col items-center ${textColor}`}>
//         {titleImage ? (
//           <img src={titleImage} alt="Banner Title" className="max-w-xs mx-auto" />
//         ) : (
//           title && <h1 className="text-4xl font-bold">{title}</h1>
//         )}
//         {subtitle && <p className="text-lg mt-2">{subtitle}</p>}
//         {children && <div className="mt-4">{children}</div>}
//       </div>
//     </div>
//   );
// };

// export default Banner;

import React from "react";

interface BannerProps {
  title?: string;
  titleImage?: string;
  subtitle?: string;
  backgroundImage?: string;
  children?: React.ReactNode;
  overlay?: boolean;
  textColor?: string;
  className?: string;
}

const Banner: React.FC<BannerProps> = ({
  title,
  titleImage,
  subtitle,
  backgroundImage,
  children,
  overlay = true,
  textColor = "text-white",
  className = "",
}) => {
  return (
    <div
      className={`w-full flex items-center justify-center rounded-[32px] overflow-hidden relative bg-cover bg-center ${className}`}
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : "linear-gradient(to right, #4f46e5, #3b82f6)",
      }}
    >
      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm" />
      )}

      {/* Conteúdo */}
      <div className={`relative z-10 text-center px-4 flex flex-col items-center ${textColor}`}>
        {titleImage ? (
          // <img
          //   src={titleImage}
          //   alt="Banner Title"
          //   className="w-48 md:w-64 lg:w-80 mx-auto object-contain"
          // />
          <img
            src={titleImage}
            alt="Banner Title"
            className="w-40 md:w-60 lg:w-80 mx-auto object-contain"
          />

        ) : (
          title && <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        )}
        {subtitle && <p className="text-base md:text-lg mt-2">{subtitle}</p>}
        {children && <div className="mt-4">{children}</div>}
      </div>
    </div>
  );
};

export default Banner;
