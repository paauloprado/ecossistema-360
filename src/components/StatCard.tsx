import React from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  value: string;
  label: string;
  delay?: number;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, delay = 0 }) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-xl shadow-custom text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <motion.div 
        className="text-4xl font-bold text-primary-600 mb-2"
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay * 0.1 + 0.2 }}
      >
        {value}
      </motion.div>
      <div className="text-gray-600">{label}</div>
    </motion.div>
  );
};

export default StatCard;