import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Clock, Settings, Users, Activity } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: 'check' | 'award' | 'clock' | 'settings' | 'users' | 'activity' | 'laptop';
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon = 'check',
  delay = 0
}) => {
  const iconMap = {
    check: <CheckCircle className="w-8 h-8 text-primary-600" />,
    award: <Award className="w-8 h-8 text-primary-600" />,
    clock: <Clock className="w-8 h-8 text-primary-600" />,
    settings: <Settings className="w-8 h-8 text-primary-600" />,
    users: <Users className="w-8 h-8 text-primary-600" />,
    activity: <Activity className="w-8 h-8 text-primary-600" />,
    laptop: <Settings className="w-8 h-8 text-primary-600" /> // Default icon for 'laptop'
  };

  return (
    <motion.div 
      className="card p-6 hover:shadow-lg hover:-translate-y-1"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <div className="mb-4">
        {iconMap[icon]}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;