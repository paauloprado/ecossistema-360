import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
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
  imgSrc: string | string[]; // agora pode ser string ou array
  imgAlt: string;
  reverse?: boolean;
  gridLayout?: boolean;
}

const SectionWithImage: React.FC<SectionProps> = ({
  title,
  items,
  imgSrc,
  imgAlt,
  reverse = false,
  gridLayout = false,
}) => {
  const isArray = Array.isArray(imgSrc);

  return (
    <motion.section
      className="py-12 md:py-24 border-b border-gray-100 last:border-none"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Imagens */}
        <div
          className={`relative flex justify-center ${
            reverse ? "md:order-last" : "md:order-first"
          }`}
        >
          <div className="absolute inset-0 bg-[#00524D] rounded-[40px] rotate-2 opacity-5 scale-105"></div>
          
          {gridLayout && isArray ? (
            <div className="grid grid-cols-2 gap-4 w-full relative">
              {imgSrc.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`${imgAlt} ${index + 1}`}
                  className="w-full h-auto object-cover rounded-[32px] aspect-square shadow-lg"
                />
              ))}
            </div>
          ) : (
            <img
              src={imgSrc as string}
              alt={imgAlt}
              className="w-full h-auto object-cover rounded-[40px] shadow-2xl relative"
            />
          )}
        </div>

        {/* Texto */}
        <div className="space-y-6 md:space-y-8">
          <h3 className="font-clash text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
            {title}
          </h3>
          <ul className="space-y-5">
            {items.map((item, index) => (
              <li
                className="flex items-start gap-4 group"
                key={index}
              >
                <div className="bg-[#A1CE28]/10 p-1.5 rounded-full mt-1 group-hover:bg-[#A1CE28]/20 transition-colors">
                  <CheckCircle className="text-[#A1CE28] w-6 h-6 shrink-0" />
                </div>
                <span className="font-general text-lg md:text-xl text-gray-700 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default SectionWithImage;
