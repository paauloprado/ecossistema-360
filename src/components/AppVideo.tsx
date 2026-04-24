// // AppVideo.tsx
// import React from "react";

// interface AppVideoProps {
//   src: string;
//   poster?: string;
// }

// const AppVideo: React.FC<AppVideoProps> = ({ src, poster }) => {

//   return (
//     <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
//       <video className="w-full h-full object-cover" controls poster={poster}>
//         <source src={src} type="video/mp4" />
//         Seu navegador não suporta o elemento de vídeo.
//       </video>
//     </div>
//   );
// };

// export default AppVideo;
// AppVideo.tsx
import React from "react";

interface AppVideoProps {
  src: string;
  poster?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
}

const AppVideo: React.FC<AppVideoProps> = ({
  src,
  poster,
  autoPlay = false,
  muted = false,
  loop = false,
}) => {
  return (
    <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
      <video
        className="w-full h-full object-cover"
        controls
        poster={poster}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
      >
        <source src={src} type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
    </div>
  );
};

export default AppVideo;
