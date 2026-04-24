import React from "react";
import { useTranslation } from "react-i18next";
import CompanyPage from "./CompanyPage";
import ImageBrand from "../components/ImageBrand";
import Banner from "../components/Banner";
import BannerGrid from "../components/BannerGrid";
import SectionWithImageOrProject from "../components/cardTopics";
import SectionWithImage from "../components/SectionWithImage";

const TheImagemPage: React.FC = () => {
  const { t } = useTranslation();

  const intro = t('contentPage.theimagem.subtitle')
  const sections = [
    {
      title: t('contentPage.theimagem.sections.installation.title'),
      items: t('contentPage.theimagem.sections.installation.items', { returnObjects: true }),
      imgSrc: "",
      imgAlt: "",
      reverse: false, // Imagem à esquerda
    },
    {
      title: t('contentPage.theimagem.sections.maintenance.title'),
      items: t('contentPage.theimagem.sections.maintenance.items', { returnObjects: true }),
      imgSrc: "",
      imgAlt: "",
      reverse: true, // Imagem à direita
    },
    {
      title: t('contentPage.theimagem.sections.assetManagement.title'),
      items: t('contentPage.theimagem.sections.assetManagement.items', { returnObjects: true }),
      imgSrc: "",
      imgAlt: "",
      reverse: false, // Imagem à esquerda
    },
    {
      title: t('contentPage.theimagem.sections.operationsSystem.title'),
      items: t('contentPage.theimagem.sections.operationsSystem.items', { returnObjects: true }),
      imgSrc: "",
      imgAlt: "",
      reverse: true, // Imagem à direita
    },
    {
      title: t('contentPage.theimagem.sections.team.title'),
      items: t('contentPage.theimagem.sections.team.items', { returnObjects: true }),
      imgSrc: "",
      imgAlt: "",
      reverse: false, // Imagem à esquerda
    },
    {
      title: t('contentPage.theimagem.sections.lab.title'),
      items: t('contentPage.theimagem.sections.lab.items', { returnObjects: true }),
      imgSrc: "",
      imgAlt: "",
      reverse: true, // Imagem à direita
    },
  ];

  return (
    <CompanyPage next="/theimagem/unique-features/" prev="/hr/differentials/">
      <div className="w-full min-h-screen bg-white">
        {/* Navbar */}
        <nav className="w-full px-6 py-8 flex items-center justify-between shadow-md bg-white sticky top-0 z-50">
          <ImageBrand
            src="/assets/theimagem-logo.png"
            width={180}
            height={56}
          />
        </nav>

        {/* Hero Section */}
        <section className="px-8 py-24 bg-gray-50 flex flex-col items-center">
          <div className="max-w-6xl mx-auto flex flex-col items-center gap-16 text-center lg:text-left lg:flex-row">
            <div className="flex-1 space-y-10">
              <span className="inline-block px-5 py-2 bg-[#00524D]/10 text-[#00524D] text-sm font-bold tracking-widest uppercase rounded-full">
                Excelência Técnica
              </span>
              <h2 className="font-clash text-3xl md:text-5xl lg:text-7xl font-black text-gray-900 leading-[1.1]">
                {t('contentPage.theimagem.aboutTheImagem')}
              </h2>
              <p className="font-general text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {intro}
              </p>
            </div>

            {/* Imagem/Banner */}
            <div className="flex-1 w-full max-w-2xl relative pt-12 lg:pt-0">
              <div className="absolute inset-0 bg-[#00524D] rounded-[40px] rotate-2 opacity-5 scale-105"></div>
              <div className="relative rounded-[40px] overflow-hidden shadow-3xl">
                <BannerGrid
                  title=" "
                  subtitle=""
                  overlay={false}
                  className="min-h-[400px] md:min-h-[500px] lg:min-h-[700px]"
                  imageGrid={[
                    "/assets/theimagem/theimagem-header-01.jpeg",
                    "/assets/theimagem/theimagem-header-02.jpeg",
                    "/assets/theimagem/theimagem-header-03.jpeg",
                    "/assets/theimagem/theimagem-header-04.jpeg",
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Soluções Ativadas */}
        <section className="px-8 py-24 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20 space-y-4">
              <h2 className="font-clash text-4xl md:text-6xl font-bold text-gray-900">
                {t('contentPage.theimagem.theImagemSolutions')}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {sections.map((section, index) => (
                <SectionWithImageOrProject
                  key={index}
                  title={section.title}
                  items={section.items as string[]}
                  imgSrc={section.imgSrc}
                  imgAlt={section.imgAlt}
                  reverse={section.reverse}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </CompanyPage>
  );
};

export default TheImagemPage;
