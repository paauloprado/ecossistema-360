import { useTranslation } from 'react-i18next';
import React from 'react';
import Banner from '../components/Banner';
import ImageBrand from '../components/ImageBrand';
import { CheckCircle } from 'lucide-react';
import ArrowButton from '../components/ArrowButton';
import HomeButton from '../components/HomeButton';
import CompanyPage from './CompanyPage';



const LogisticaPage: React.FC = () => {
  const { t } = useTranslation();

  const solucoes = [
    {
      title: t('contentPage.logistica.sections.transportation.title'),
      description: t('contentPage.logistica.sections.transportation.items',  { returnObjects: true }),
    },
    {
      title: t('contentPage.logistica.sections.fleet.title'),
      description: t('contentPage.logistica.sections.fleet.items',  { returnObjects: true }),
    },
    {
      title: t('contentPage.logistica.sections.integratedLogistics.title'),
      description: t('contentPage.logistica.sections.integratedLogistics.items',  { returnObjects: true }),
    },
    {
      title: t('contentPage.logistica.sections.storage.title'),
      description: t('contentPage.logistica.sections.storage.items',  { returnObjects: true }),
    },
    {
      title: t('contentPage.logistica.sections.team.title'),
      description: t('contentPage.logistica.sections.team.items',  { returnObjects: true }),
    },
    {
      title: t('contentPage.logistica.sections.management.title'),
      description: t('contentPage.logistica.sections.management.items',  { returnObjects: true }),
    },
  ];

  return (
    <CompanyPage next="/hr/differentials/" prev="/telerad/unidades-moveis/">
      <div className="w-full min-h-screen bg-white">
        {/* Navbar */}
        <nav className="w-full px-6 py-8 flex items-center justify-between shadow-md bg-white sticky top-0 z-50">
          <ImageBrand src="/assets/logistica-logo.png" width={180} height={56} />
        </nav>

        {/* Hero Section */}
        <section className="px-8 py-24 bg-gray-50 flex flex-col items-center">
          <div className="max-w-6xl mx-auto flex flex-col items-center gap-16 text-center lg:text-left lg:flex-row">
            <div className="flex-1 space-y-10">
              <span className="inline-block px-5 py-2 bg-[#00524D]/10 text-[#00524D] text-sm font-bold tracking-widest uppercase rounded-full">
                Eficiência em Movimento
              </span>
              <h2 className="font-clash text-3xl md:text-5xl lg:text-7xl font-black text-gray-900 leading-[1.1]">
                {t('contentPage.logistica.aboutLogistica')}
              </h2>
              <p className="font-general text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {t('contentPage.logistica.subtitle')}
              </p>
            </div>

            {/* Imagem/Banner */}
            <div className="flex-1 w-full max-w-2xl relative pt-12 lg:pt-0">
              <div className="absolute inset-0 bg-[#00524D] rounded-[40px] rotate-2 opacity-5 scale-105"></div>
              <img src="/assets/caminhao1.png" className="relative rounded-[40px] shadow-3xl w-full h-auto object-contain" alt="Logística" />
            </div>
          </div>
        </section>

        {/* Soluções Especializadas */}
        <section className="px-8 py-24 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20 space-y-4">
              <h2 className="font-clash text-4xl md:text-6xl font-bold text-gray-900">
                {t('contentPage.logistica.logisticaSolitions')}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {solucoes.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border-2 border-gray-50 rounded-[24px] md:rounded-[32px] p-6 md:p-10 shadow-xl transition-all duration-500 hover:border-[#00524D]/20 hover:-translate-y-2 group flex flex-col h-full"
                >
                  <div className="w-16 h-16 rounded-[20px] bg-[#00524D]/5 flex items-center justify-center text-[#00524D] mb-8 group-hover:bg-[#00524D] group-hover:text-white transition-colors">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-clash text-2xl font-bold mb-6 text-gray-900 leading-tight">
                    {item.title}
                  </h3>
                  <ul className="space-y-4 flex-grow">
                    {item.description.map((desc, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <CheckCircle className="w-6 h-6 text-[#A1CE28] shrink-0 mt-1" />
                        <span className="font-general text-lg text-gray-700 leading-relaxed">
                          {desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </CompanyPage>
  );
};

export default LogisticaPage;
