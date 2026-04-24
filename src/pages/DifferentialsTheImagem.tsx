import { motion } from 'framer-motion';
import { CheckCircle, BarChart, Map, Activity, Settings, PenTool as Tool } from 'lucide-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import StatCard from '../components/StatCard';
import CompanyPage from './CompanyPage';
import { useTranslation } from 'react-i18next';
import ImageBrand from '../components/ImageBrand';
import SectionWithImageOrProject from '../components/cardTopics';
import SectionWithImage from '../components/SectionWithImage';
import {Slide} from "../components/Slider/Slide"
import {Slider} from "../components/Slider"

const Differentials = () => {
  const { t } = useTranslation();
  // Lista de seções com tópicos, imagens e alternância de posição
  const sections = [
    {
      title: t('contentPage.theImagemDifferentials.sections.differentials.title'),
      items: t('contentPage.theImagemDifferentials.sections.differentials.items',  { returnObjects: true }),
      imgSrc: "/assets/theimagem/theimagem-diferentials03.jpeg", 
      imgAlt: "Acesso direto aos fabricantes",
      reverse: false, // Imagem à esquerda
    },
    {
      title: t('contentPage.theImagemDifferentials.sections.numbers.title'),
      items: t('contentPage.theImagemDifferentials.sections.numbers.items',  { returnObjects: true }),
      imgSrc: "/assets/theimagem/theimagem-diferentials04.jpeg", 
      imgAlt: "Números e Estrutura Técnica",
      reverse: true, // Imagem à esquerda
    },

  ];
  const slides = [
    {
      title: "Monitoramento técnico proativo",
      description: "teste",
      imgSrc: "/assets/theimagem/arkmedes01.jpeg", 
    },
    {
      title: "Monitoramento técnico proativo",
      description: "teste",
      imgSrc: "/assets/theimagem/arkmedes02.jpeg", 
    },
    {
      title: "Monitoramento técnico proativo",
      description: "teste",
      imgSrc: "/assets/theimagem/arkmedes03.jpeg", 
    },
    {
      title: "Monitoramento técnico proativo",
      description: "teste",
      imgSrc: "/assets/theimagem/arkmedes04.jpeg", 
    },
    {
      title: "Monitoramento técnico proativo",
      description: "teste",
      imgSrc: "/assets/theimagem/arkmedes05.jpeg", 
    },
    {
      title: "Monitoramento técnico proativo",
      description: "teste",
      imgSrc: "/assets/theimagem/arkmedes06.jpeg", 
    },
  ]
  return (
    <CompanyPage next="/galaxy/" prev="/theimagem/">
      <div className="w-full min-h-screen bg-white">  
        {/* Navbar */}
        <nav className="w-full px-6 py-8 flex items-center justify-between shadow-md bg-white sticky top-0 z-50">
          <ImageBrand
          src="/assets/theimagem-logo.png"
          width={180}
          height={56}
          />
        </nav>  
        <section className="px-8 py-24 bg-gray-50 text-center">
          <h2 className="font-clash text-5xl md:text-7xl font-black text-gray-900 leading-[1.1]">{t('contentPage.theImagemDifferentials.title')}</h2>
        </section>   
        <section className="max-w-5xl mx-auto px-4">                 
          {sections.map((section, index) => (
            // Verifica se imgSrc está definido e não é uma string vazia
            section.imgSrc ? (
              <SectionWithImage
                key={index}
                title={section.title}
                items={section.items}
                imgSrc={section.imgSrc}
                imgAlt={section.imgAlt}
                reverse={section.reverse}
              />
            ) : null
          ))}
        </section>
        <section className="px-6 py-16 text-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
                {sections.map((section, index) => (
                // Verifica se imgSrc está definido e não é uma string vazia
                section.imgSrc ? null: (
                    <SectionWithImageOrProject
                    key={index}
                    title={section.title}
                    items={section.items}
                    imgSrc={section.imgSrc}
                    imgAlt={section.imgAlt}
                    reverse={section.reverse}
                    />
                ) 
                ))}
            </div>
        </section>  
        <section className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">{t('contentPage.theImagemDifferentials.arkmedes')}</h2>
          <div className="h-96 mb-16">
            <Slider className="h-full" showIndicators={false}>
              {slides.map((slide, index) => (
                <Slide key={index} className="px-2">
                  <div className="rounded-xl h-full overflow-hidden flex flex-col mx-2 transition-transform hover:scale-[1.02] group">
                    <div
                      className="h-full w-full bg-no-repeat bg-center bg-contain"
                      style={{ backgroundImage: `url(${slide.imgSrc})` }}
                    ></div>
                  </div>
                </Slide>
              ))}
            </Slider>
          </div>
        </section>
      </div> 
    </CompanyPage>
  );
};

export default Differentials;