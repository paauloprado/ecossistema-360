// import { motion } from 'framer-motion';
// import { CheckCircle } from 'lucide-react';
// // Certifique-se de ter o react-icons instalado

// type SectionProps = {
//   title: string;
//   items: string[];
//   imgSrc?: string;
//   imgAlt: string;
//   reverse?: boolean;
// };

// const SectionWithImageOrProject: React.FC<SectionProps> = ({
//   title,
//   items,

// }) => {
 
//     return (
//         <>         
//           <div className="p-6 bg-white shadow rounded-xl">
//             <h3 className="font-clash text-xl font-semibold mb-4">{title}</h3>
//             <ul className="space-y-2 text-gray-600">
//             {items.map((item, index) => (
//             <li key={index} className="font-general flex items-start gap-3">
//               <CheckCircle className="text-green-600 w-5 h-5 shrink-0 mt-1" />
//               <span>{item}</span>
//             </li>
//           ))}
//             </ul>
//           </div>
//         </>       
//     );

// };

// export default SectionWithImageOrProject;
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

type SectionProps = {
  title: string;
  items: string[];
  imgSrc?: string;
  imgAlt: string;
  reverse?: boolean;
  selected?: boolean;
};

const SectionWithImageOrProject: React.FC<SectionProps> = ({
  title,
  items,
  selected = false,
}) => {
  return (
    <div
      className={`
        bg-white border-2 border-gray-50 rounded-[24px] md:rounded-[32px] p-6 md:p-8 shadow-xl 
        transition-all duration-500 hover:border-[#00524D]/20 hover:-translate-y-2 
        group flex flex-col h-full
        ${selected ? "border-[#00524D]/30 ring-2 ring-[#00524D]/10" : ""}
      `}
    >
      <div className="w-16 h-16 rounded-[20px] bg-[#00524D]/5 flex items-center justify-center text-[#00524D] mb-6 group-hover:bg-[#00524D] group-hover:text-white transition-colors">
        <CheckCircle className="w-8 h-8" />
      </div>
      
      <h3 className="font-clash text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900 leading-tight">
        {title}
      </h3>
      
      <ul className="space-y-4 flex-grow">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-4">
            <CheckCircle
              className="w-6 h-6 text-[#A1CE28] shrink-0 mt-1 transition-colors duration-300"
            />
            <span className="font-general text-base md:text-lg text-gray-700 leading-relaxed">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SectionWithImageOrProject;

