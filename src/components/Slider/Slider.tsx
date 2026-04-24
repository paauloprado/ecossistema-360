import React, { useCallback, useEffect, useRef, Children, useState } from 'react';
import { SliderProps } from './types';
import { SliderControls } from './SliderControls';
import { SlideIndicators } from './SlideIndicators';
import { useSlider } from './hooks/useSlider';

export const Slider: React.FC<SliderProps> = ({
  children,
  autoPlay = false,
  autoPlayInterval = 5000,
  infiniteLoop = true,
  showControls = true,
  showIndicators = true,
  className = '',
}) => {
  const childrenArray = Children.toArray(children);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const {
    currentSlide,
    direction,
    goToSlide,
    goToNextSlide,
    goToPrevSlide,
    pauseAutoPlay,
    resumeAutoPlay,
  } = useSlider({
    totalSlides: childrenArray.length,
    autoPlay,
    autoPlayInterval,
    infiniteLoop,
  });

  // Check if device supports touch events
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  // Touch handlers for swipe functionality
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    pauseAutoPlay();
  }, [pauseAutoPlay]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (touchStart - touchEnd > 100) {
      // Swipe left, go to next
      goToNextSlide();
    }

    if (touchStart - touchEnd < -100) {
      // Swipe right, go to prev
      goToPrevSlide();
    }
    resumeAutoPlay();
  }, [touchStart, touchEnd, goToNextSlide, goToPrevSlide, resumeAutoPlay]);

  // Render slides with transition
  const renderSlides = useCallback(() => {
    const transitionClass = `transition-transform duration-500 ease-in-out`;
    const transformStyle = {
      transform: `translateX(-${currentSlide * 100}%)`,
    };

    return (
      <div 
        className={`flex h-full w-full ${transitionClass}`}
        style={transformStyle}
      >
        {childrenArray}
      </div>
    );
  }, [childrenArray, currentSlide]);

  // Skip rendering if no slides
  if (childrenArray.length === 0) {
    return null;
  }

  return (
    <div 
      ref={sliderRef}
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={resumeAutoPlay}
      onTouchStart={isTouchDevice ? handleTouchStart : undefined}
      onTouchMove={isTouchDevice ? handleTouchMove : undefined}
      onTouchEnd={isTouchDevice ? handleTouchEnd : undefined}
      role="region"
      aria-roledescription="carousel"
      aria-label="Image slider"
    >
      {renderSlides()}
      
      {showControls && childrenArray.length > 1 && (
        <SliderControls onPrev={goToPrevSlide} onNext={goToNextSlide} />
      )}
      
      {showIndicators && childrenArray.length > 1 && (
        <SlideIndicators 
          total={childrenArray.length} 
          current={currentSlide} 
          onClick={goToSlide} 
        />
      )}
    </div>
  );
};