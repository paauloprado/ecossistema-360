// ConsultoriaPage.tsx
import { useTranslation } from "react-i18next";
import React from "react";
import CompanyPage from "./CompanyPage";
import SectionWithImage from "../components/SectionWithImage";
import ArrowButton from "../components/ArrowButton";
import HomeButton from "../components/HomeButton";
import ImageBrand from "../components/ImageBrand";
import SectionWithImageOrProject from "../components/cardTopics";

const DiferencialConsultoriaPage: React.FC = () => {
  const { t } = useTranslation();
  // Lista de seções com tópicos, imagens e alternância de posição
  const sections = [
    {
      title:  t("subpages.consultoriaDiff.sections.excelencia.title"),//"Excelência Completa em Soluções",
      items:  t("subpages.consultoriaDiff.sections.excelencia.items", { returnObjects: true }) as string[],
      imgSrc: "/assets/consultoria/diferenciais-consultoria.jpg",
      imgAlt: "Mapeamento do cenário",
      reverse: false, // Imagem à esquerda
    },
    {
      title:  t("subpages.consultoriaDiff.sections.implantacao.title"),//"Especialistas em Implantação de Serviços de Saúde",
      items:t("subpages.consultoriaDiff.sections.implantacao.items", { returnObjects: true }) as string[],
      imgSrc: "/assets/consultoria/sucesso-consultoria.jpg",
      imgAlt: "Mapeamento do cenário",
      reverse: true, // Imagem à esquerda
    },
  ];
  return (
    <CompanyPage next="/gi-engenharia/" prev="/consult/">
      <div className="w-full min-h-screen bg-white">
        {/* Navbar */}
        <nav className="w-full px-6 py-8 flex items-center justify-between shadow-md bg-white sticky top-0 z-50">
          <ImageBrand src="/assets/consultoria.png" width={180} height={56} />
        </nav>
        <section className="px-8 py-24 bg-gray-50 text-center">
          <h2 className="font-clash text-5xl md:text-7xl font-black text-gray-900 leading-[1.1]">
            {t("subpages.consultoriaDiff.consultDiff")}
          </h2>
        </section>
        <section className="max-w-5xl mx-auto px-4">
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
        </section>
        <section className="px-6 py-16 text-center">
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

export default DiferencialConsultoriaPage;
