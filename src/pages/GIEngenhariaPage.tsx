// ConsultoriaPage.tsx
import { useTranslation } from "react-i18next";
import React from "react";
import CompanyPage from "./CompanyPage";
import Banner from "../components/Banner";
import ImageBrand from "../components/ImageBrand";
import SectionWithImageOrProject from "../components/cardTopics";

const GIEngenhariaPage: React.FC = () => {
  const { t } = useTranslation();

  const intro =t("contentPage.engenharia.subtitle");
   

  const sections = [
    {
      title: t("contentPage.engenharia.sections.levantamento.title"),
      items: t("contentPage.engenharia.sections.levantamento.items",  { returnObjects: true })
    },
    {
      title: t("contentPage.engenharia.sections.projeto.title"),//"Elaboração de Projeto Técnico",
      items: t("contentPage.engenharia.sections.projeto.items",  { returnObjects: true })
    },
    {
      title:  t("contentPage.engenharia.sections.execucao.title"),//"Execução da Obra",
      items:  t("contentPage.engenharia.sections.execucao.items",  { returnObjects: true })
    },
    {
      title: t("contentPage.engenharia.sections.acompanhamento.title"),//"Acompanhamento Técnico",
      items: t("contentPage.engenharia.sections.acompanhamento.items",  { returnObjects: true })
    },
    {
      title:  t("contentPage.engenharia.sections.relatorios.title"),//"Relatórios e Documentação",
      items:  t("contentPage.engenharia.sections.relatorios.items",  { returnObjects: true })
    }
  ];
  return (
    <CompanyPage next="/gi-engenharia/diferencial" prev="/consult/diferencial/">
      <div className="w-full min-h-screen bg-white">
        {/* Navbar */}
        <nav className="w-full px-6 py-8 flex items-center justify-between shadow-md bg-white sticky top-0 z-50">
          <ImageBrand
            src="/assets/gi-engenharia-logo.png"
            width={180}
            height={56}
          />
        </nav>

        {/* Hero Section */}
        <section className="px-8 py-24 bg-gray-50 flex flex-col items-center">
          <div className="max-w-6xl mx-auto flex flex-col items-center gap-16 text-center lg:text-left lg:flex-row">
            <div className="flex-1 space-y-10">
              <span className="inline-block px-5 py-2 bg-[#00524D]/10 text-[#00524D] text-sm font-bold tracking-widest uppercase rounded-full">
                Precisão e Segurança
              </span>
              <h2 className="font-clash text-3xl md:text-5xl lg:text-7xl font-black text-gray-900 leading-[1.1]">
                {t("contentPage.engenharia.aboutEngenharia")}
              </h2>
              <p className="font-general text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {intro}
              </p>
            </div>

            {/* Imagem/Banner */}
            <div className="flex-1 w-full max-w-2xl relative pt-12 lg:pt-0">
              <div className="absolute inset-0 bg-[#00524D] rounded-[40px] rotate-2 opacity-5 scale-105"></div>
              <div className="relative rounded-[40px] overflow-hidden shadow-3xl">
                <img
                  src="/assets/giengenharia/projeto.png"
                  className="w-full h-auto object-contain"
                  alt="GI Engenharia"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Soluções oferecidas */}
        <section className="px-8 py-24 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20 space-y-4">
              <h2 className="font-clash text-4xl md:text-6xl font-bold text-gray-900">
                {t("contentPage.engenharia.engenhariaSolutions")}
              </h2>
            </div>
          {/* <div className="max-w-4xl mx-auto text-left"> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
            {sections.map((section, index) =>
              // Verifica se imgSrc está definido e não é uma string vazia
              section.imgSrc ? null : (
                <SectionWithImageOrProject
                  key={index}
                  title={section.title}
                  items={section.items}
                  imgSrc={section.imgSrc}
                  imgAlt={section.imgAlt}
                  reverse={section.reverse}
                />
              )
            )}
          </div>
        </div>
      </section>
      </div>
    </CompanyPage>
  );
};

export default GIEngenhariaPage;
