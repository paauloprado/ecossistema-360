import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
}

const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  description,
  imageUrl = "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-900 to-primary-800 text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={imageUrl} 
          alt="Medical equipment background" 
          className="w-full h-full object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/70"></div>
      </div>
      
      <div className="container-custom relative z-10 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {title.includes('THE IMAGEM SERVICE') ? (
                <>
                  <span className="text-black">THE IMAGEM </span>
                  <span className="bg-[#e11823] px-3 py-1 rounded text-white">SERVICE</span>
                </>
              ) : (
                title
              )}
            </h1>
            
            {subtitle && (
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6 inline-block">
                <p className="text-xl md:text-2xl font-medium italic">{subtitle}</p>
              </div>
            )}
            
            {description && (
              <motion.p 
                className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {description}
              </motion.p>
            )}
            
            <motion.div 
              className="flex justify-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
             
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Wave Shape Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 overflow-hidden">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="absolute bottom-0 w-full h-full text-white fill-current"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;