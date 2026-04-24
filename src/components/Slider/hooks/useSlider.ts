import { useCallback, useEffect, useState } from 'react';

interface UseSliderProps {
  totalSlides: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  infiniteLoop?: boolean;
}

export const useSlider = ({
  totalSlides,
  autoPlay = false,
  autoPlayInterval = 5000,
  infiniteLoop = true,
}: UseSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (index === currentSlide || isTransitioning) return;
    
    setDirection(index > currentSlide ? 'right' : 'left');
    setIsTransitioning(true);
    setCurrentSlide(index);
    
    // Reset transitioning state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Match this with CSS transition duration
  }, [currentSlide, isTransitioning]);

  const goToNextSlide = useCallback(() => {
    if (currentSlide === totalSlides - 1) {
      if (infiniteLoop) {
        goToSlide(0);
      }
    } else {
      goToSlide(currentSlide + 1);
    }
  }, [currentSlide, goToSlide, infiniteLoop, totalSlides]);

  const goToPrevSlide = useCallback(() => {
    if (currentSlide === 0) {
      if (infiniteLoop) {
        goToSlide(totalSlides - 1);
      }
    } else {
      goToSlide(currentSlide - 1);
    }
  }, [currentSlide, goToSlide, infiniteLoop, totalSlides]);

  const toggleAutoPlay = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  const pauseAutoPlay = useCallback(() => {
    if (isPlaying) {
      setIsPlaying(false);
    }
  }, [isPlaying]);

  const resumeAutoPlay = useCallback(() => {
    if (autoPlay) {
      setIsPlaying(true);
    }
  }, [autoPlay]);

  // Handle autoplay
  useEffect(() => {
    if (!isPlaying || totalSlides <= 1) return;
    
    const interval = setInterval(() => {
      goToNextSlide();
    }, autoPlayInterval);
    
    return () => clearInterval(interval);
  }, [isPlaying, goToNextSlide, autoPlayInterval, totalSlides]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          goToPrevSlide();
          break;
        case 'ArrowRight':
          goToNextSlide();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNextSlide, goToPrevSlide]);

  return {
    currentSlide,
    direction,
    isTransitioning,
    isPlaying,
    goToSlide,
    goToNextSlide,
    goToPrevSlide,
    toggleAutoPlay,
    pauseAutoPlay,
    resumeAutoPlay,
  };
};