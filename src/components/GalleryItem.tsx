import { motion } from 'framer-motion';

interface GalleryItemProps {
  type: 'image' | 'video';
  src: string;
  alt?: string;
}

const GalleryItem = ({ type, src, alt }: GalleryItemProps) => {
  return (
    <motion.div
      className="rounded overflow-hidden shadow-md"
      whileHover={{ scale: 1.05 }}
    >
      {type === 'image' ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <video src={src} controls className="w-full h-full object-cover" />
      )}
    </motion.div>
  );
};

export default GalleryItem;
