import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import AppVideo from "./AppVideo";

interface SectionWithImageProps {
  title: string;
  items: string[];
  imgSrc: string;
  imgAlt: string;
  reverse?: boolean;
}

interface SectionProps {
  title: string;
  items: string[];
  videoSrc?: string;
  poster?: string;
  imgAlt: string;
  reverse?: boolean;
}


const SectionWithVideo: React.FC<SectionProps> = ({
  title,
  items,
  videoSrc,
  poster,
  imgAlt,
  reverse = false,
}) => {

  const hasVideo = !!videoSrc;

  console.log('hasVideo', hasVideo, title)
  return (
    <motion.section
      className="py-16 border-b border-gray-200 last:border-none"
      initial={{ opacity: 0, x: reverse ? 40 : -40 }}  // Se 'reverse' for true, começa da direita, caso contrário da esquerda
      whileInView={{ opacity: 1, x: 0 }} // Move para a posição original
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Imagem */}
        <div
          className={`flex justify-center ${
            reverse ? "md:order-last" : "md:order-first"
          }`}
        >
          {/* <img
            src={imgSrc}
            alt={imgAlt}
            className="w-full max-w-md h-auto object-contain rounded-2xl"
          /> */}
          {hasVideo ? (
            <AppVideo 
              src={videoSrc}
              poster={poster}
            />
          ) : (
            <img
              src={poster}
              alt={imgAlt}
              className="w-full max-w-md h-auto object-contain rounded-2xl shadow-lg"
            />
          )}
          
        </div>

        {/* Texto */}
        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <h3 className="font-clash text-xl font-semibold mb-4">{title}</h3>
          <ul className="space-y-2 text-gray-600">
            {items.map((item, index) => (
              <li className="font-general flex items-start gap-3" key={index}><CheckCircle className="text-green-600 w-5 h-5 shrink-0 mt-1" /> <span>{item}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
};


export default SectionWithVideo;
