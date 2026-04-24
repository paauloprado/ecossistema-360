import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ArrowButton from '../components/ArrowButton';
import HomeButton from '../components/HomeButton';

type CompanyPageProps = {
  title?: string | null;
  next: string | null;
  prev: string | null;
  children: React.ReactNode;
};

const CompanyPage = ({ title, next, prev, children }: CompanyPageProps) => {
  const navigate = useNavigate();

  const onDragEnd = (event: any, info: any) => {
    const threshold = 50;
    // Verifica se o movimento horizontal é maior que o vertical
    if (Math.abs(info.offset.x) > Math.abs(info.offset.y)) {
      if (info.offset.x < -threshold && next) {
        navigate(next);
      } else if (info.offset.x > threshold && prev) {
        navigate(prev);
      }
    }
  };

  return (
    <>
      <motion.div 
        className="w-full min-h-dvh bg-white flex flex-col items-center justify-start overflow-x-hidden px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 lg:pt-12 pb-28 sm:pb-32"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={onDragEnd}
        style={{ cursor: 'grab' }}
        whileTap={{ cursor: 'grabbing' }}
      >
        {title ? <h1 className="text-3xl md:text-6xl font-bold text-secondary mb-12">{title}</h1> : null}
        <div className="w-full max-w-7xl">
          {children}
        </div>
      </motion.div>
      <ArrowButton to={next} direction="right" label="Avançar" />
      <HomeButton label="Página Inicial" />
      <ArrowButton to={prev} direction="left" label="Voltar" />
    </>
  );
};

export default CompanyPage;
