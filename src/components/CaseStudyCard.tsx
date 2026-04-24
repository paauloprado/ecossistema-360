import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CaseStudyCardProps {
  title: string;
  description: string;
  imageUrl: string;
  delay?: number;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ 
  title, 
  description, 
  imageUrl,
  delay = 0 
}) => {
  return (
    <motion.div 
      className="card overflow-hidden flex flex-col hover:shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <div className="flex items-center text-primary-600 font-medium">
          <span>Saiba mais</span>
          <ArrowRight className="w-4 h-4 ml-2" />
        </div>
      </div>
    </motion.div>
  );
};

export default CaseStudyCard;