export interface SlideProps {
  children: React.ReactNode;
  className?: string;
}

export interface SliderProps {
  children: React.ReactNode;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  infiniteLoop?: boolean;
  showControls?: boolean;
  showIndicators?: boolean;
  className?: string;
}

export interface SliderControlsProps {
  onPrev: () => void;
  onNext: () => void;
  className?: string;
}

export interface SlideIndicatorsProps {
  total: number;
  current: number;
  onClick: (index: number) => void;
  className?: string;
}