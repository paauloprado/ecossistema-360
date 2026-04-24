import { motion } from "framer-motion";

interface Section {
  title: string;
  imgSrc: string;
  imgAlt: string;
}

interface ImageComparisonProps {
  sections: Section[];
}

const ImageComparison = ({ sections }: ImageComparisonProps) => {
  if (!sections || sections.length < 2) return null;

  const [left, right] = sections;

  return (
    <div className="flex items-start justify-center gap-6 py-10">
      {[left, right].map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="flex flex-col items-center"
        >
          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
          <img
            src={item.imgSrc}
            alt={item.imgAlt}
            className="rounded-xl max-w-xl shadow-md w-full aspect-square object-cover"
          />
        </motion.div>
      ))}

      {/* X no meio se ambas estiverem presentes */}
      {/* {left && right && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="text-3xl font-bold text-gray-400 flex items-center"
        >
          X
        </motion.div>
      )} */}
    </div>
  );
};

export default ImageComparison;
