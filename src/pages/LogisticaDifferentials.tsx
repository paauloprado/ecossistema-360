import { useTranslation } from 'react-i18next';
import React from 'react';
import ImageBrand from '../components/ImageBrand';
import ArrowButton from '../components/ArrowButton';
import HomeButton from '../components/HomeButton';
import SectionWithImage from '../components/SectionWithImage';
import CompanyPage from './CompanyPage';




const LogisticaPage: React.FC = () => {
  const { t } = useTranslation();

  const solucoes = [
    {
      title: t('contentPage.logisticaDifferentials.sections.differentials.title'),
      description: t('contentPage.logisticaDifferentials.sections.differentials.items',  { returnObjects: true }),
      imgSrc: '/assets/caminhao-entregando.png',
      imgAlt: 'Diferenciais da GI Transporte',
    },
  ];
  

  return (
    <CompanyPage next="/theimagem/" prev="/logistica/">
      <div className="w-full min-h-screen bg-white">
        {/* Navbar */}
        <nav className="w-full px-6 py-8 flex items-center justify-between shadow-md bg-white sticky top-0 z-50">
          <ImageBrand src="/assets/logistica-logo.png" width={180} height={56} />
        </nav>

        <section className="px-8 py-24 bg-gray-50 text-center">
          <h2 className="font-clash text-5xl md:text-7xl font-black text-gray-900 leading-[1.1]">
            {t('contentPage.logisticaDifferentials.title')}
          </h2>
        </section>

        <section className="max-w-5xl mx-auto px-4  border-b border-gray-200 last:border-none">
          {solucoes.map((solucao, index) => (
            <SectionWithImage
              key={index}
              title={solucao.title}
              items={solucao.description}
              imgSrc={solucao.imgSrc}
              imgAlt={solucao.imgAlt}
              reverse={false}
            />
          ))}
          
        </section>




      </div>
    </CompanyPage>
  );
};

export default LogisticaPage;
