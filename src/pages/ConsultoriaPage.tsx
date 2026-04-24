// ConsultoriaPage.tsx
import { useTranslation } from "react-i18next";
import React from "react";
import CompanyPage from "./CompanyPage";

import SectionWithImage from "../components/SectionWithImage";

import ImageBrand from "../components/ImageBrand";
import Banner from "../components/Banner";
import SectionWithImageOrProject from "../components/cardTopics";

const ConsultoriaPage: React.FC = () => {
  const { t } = useTranslation();
  // Lista de seções com tópicos, imagens e alternância de posição

  const intro = t("contentPage.consultoria.subtitle");
  const sections = [
    {
      title: t("contentPage.consultoria.sections.mapeamento.title"),
      items: t("contentPage.consultoria.sections.mapeamento.items",  { returnObjects: true }),
      imgSrc: "/assets/consultoria/image79.png",
      imgAlt: "Mapeamento do cenário",
      reverse: false, // Imagem à esquerda
    },
    {
      title: t("contentPage.consultoria.sections.viabilidade.title"),
      items: t("contentPage.consultoria.sections.viabilidade.items",  { returnObjects: true }),
      imgSrc: "",
      imgAlt: "Planejamento financeiro",
      reverse: true, // Imagem à direita
    },
    {
      title: t("contentPage.consultoria.sections.implantacao.title"),//"Planejamento de Implantação 360°",
      items:  t("contentPage.consultoria.sections.implantacao.items",  { returnObjects: true }),
      imgSrc: "",
      imgAlt: "Implantação 360°",
      reverse: false, // Imagem à esquerda
    },
    {
      title: t("contentPage.consultoria.sections.equipamentos.title"),//"Portfólio de Equipamentos e Infraestrutura",
      items: t("contentPage.consultoria.sections.equipamentos.items",  { returnObjects: true }),
      imgSrc: "",
      imgAlt: "Equipamentos e Infraestrutura",
      reverse: true, // Imagem à direita
    },
    {
      title: t("contentPage.consultoria.sections.tecnologia.title"),//"Soluções Digitais e Tecnologia Aplicada",
      items: t("contentPage.consultoria.sections.tecnologia.items",  { returnObjects: true }),
      imgSrc: "",
      imgAlt: "Tecnologia aplicada",
      reverse: false, // Imagem à esquerda
    },
    {
      title: t("contentPage.consultoria.sections.gestao.title"),//"Gestão Inteligente e Otimização Operacional",
      items: t("contentPage.consultoria.sections.gestao.items",  { returnObjects: true }),
      imgSrc: "",
      imgAlt: "Gestão e otimização",
      reverse: true, // Imagem à direita
    },
  ];
  return (
    <CompanyPage title="" next="/consult/diferencial/" prev="/galaxy/viewer/">
      <div className="w-full min-h-screen bg-white">
        {/* Navbar */}
        <nav className="w-full px-6 py-8 flex items-center justify-between shadow-md bg-white sticky top-0 z-50">
          <ImageBrand src="/assets/consultoria.png" width={180} height={56} />
        </nav>

        {/* Hero Section */}
        <section className="px-8 py-24 bg-gray-50 flex flex-col items-center">
          <div className="max-w-7xl mx-auto flex flex-col items-center gap-16 text-center lg:text-left lg:flex-row">
            {/* Texto */}
            <div className="flex-1 space-y-10">
              <span className="inline-block px-5 py-2 bg-[#00524D]/10 text-[#00524D] text-sm font-bold tracking-widest uppercase rounded-full">
                Estratégia e Inteligência
              </span>
              <h2 className="font-clash text-3xl md:text-5xl lg:text-7xl font-black text-gray-900 leading-[1.1]">
                {t("contentPage.consultoria.aboutConsultoria")}
              </h2>
              <p className="font-general text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {intro}
              </p>
            </div>

            {/* Imagem/Banner */}
            <div className="flex-1 w-full max-w-4xl relative pt-12 lg:pt-0">
              <div className="absolute inset-0 bg-[#00524D] rounded-[40px] rotate-2 opacity-5 scale-105"></div>
              <div className="relative rounded-[40px] overflow-hidden shadow-3xl">
                <img
                  src="/assets/foto_gi_lotado.jpg.jpeg"
                  className="w-full h-auto object-contain"
                  alt="Consultoria"
                />
              </div>
            </div>
          </div>
        </section>


        <section className="px-8 py-24 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20 space-y-4">
              <h2 className="font-clash text-4xl md:text-6xl font-bold text-gray-900">
                {t("contentPage.consultoria.consultoriaSolutions")}
              </h2>
            </div>
          {sections.map((section, index) =>
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
          )}
          </div>
        </section>

        <section className="px-6 py-16 text-center bg-white">
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
          </section>
      </div>
    </CompanyPage>
  );
};

export default ConsultoriaPage;
