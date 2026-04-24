import { useTranslation } from "react-i18next";
import CompanyPage from "./CompanyPage";
import ImageBrand from "../components/ImageBrand";
import Banner from "../components/Banner";
import SectionWithImageOrProject from "../components/cardTopics";
import SectionWithImage from "../components/SectionWithImage";

export default function TeleradPage() {
  const { t } = useTranslation();
  const intro = t("contentPage.telerad.subtitle");

  const sections = [
    {
      title: t("contentPage.telerad.sections.locacao.title"),
      items: t("contentPage.telerad.sections.locacao.items",  { returnObjects: true }) as string[],
      imgSrc: "",
      imgAlt: "",
    },
    {
      title: t("contentPage.telerad.sections.produtividade.title"),//"Elaboração de Projeto Técnico",
      items: t("contentPage.telerad.sections.produtividade.items",  { returnObjects: true }) as string[],
      imgSrc: "",
      imgAlt: "",
    },
    {
      title:  t("contentPage.telerad.sections.infraestrutura.title"),//"Execução da Obra",
      items:  t("contentPage.telerad.sections.infraestrutura.items",  { returnObjects: true }) as string[],
      imgSrc: "",
      imgAlt: "",
    },
    {
      title: t("contentPage.telerad.sections.manutencao.title"),//"Acompanhamento Técnico",
      items: t("contentPage.telerad.sections.manutencao.items",  { returnObjects: true }) as string[],
      imgSrc: "",
      imgAlt: "",
    },
    {
      title:  t("contentPage.telerad.sections.atualizacao.title"),//"Relatórios e Documentação",
      items:  t("contentPage.telerad.sections.atualizacao.items",  { returnObjects: true }) as string[],
      imgSrc: "",
      imgAlt: "",
    },
    {
      title:  t("contentPage.telerad.sections.suporte.title"),//"Relatórios e Documentação",
      items:  t("contentPage.telerad.sections.suporte.items",  { returnObjects: true }) as string[],
      imgSrc: "",
      imgAlt: "",
    },
  ];

  return (
    <CompanyPage title="" prev="/gi-engenharia/diferencial" next="/telerad/comparative">
      <div className="w-full min-h-screen bg-white">
        {/* Navbar */}
        <nav className="w-full px-6 py-8 flex items-center justify-between shadow-md bg-white sticky top-0 z-50">
          <ImageBrand src="/assets/telerad-logo.png" width={180} height={56} />
        </nav>

        {/* Hero Section */}
        <section className="px-8 py-24 bg-gray-50 flex flex-col items-center">
          <div className="max-w-6xl mx-auto flex flex-col items-center gap-16 text-center lg:text-left lg:flex-row">
            <div className="flex-1 space-y-10">
              <span className="inline-block px-5 py-2 bg-[#00524D]/10 text-[#00524D] text-sm font-bold tracking-widest uppercase rounded-full">
                Diagnóstico Conectado
              </span>
              <h2 className="font-clash text-3xl md:text-5xl lg:text-7xl font-black text-gray-900 leading-[1.1]">
                {t("contentPage.telerad.aboutTelerad")}
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
                  src="/assets/telerad/telerad-01.png"
                  className="w-full h-auto object-contain"
                  alt="TeleRad"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="px-8 py-24 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20 space-y-4">
              <h2 className="font-clash text-4xl md:text-6xl font-bold text-gray-900">
                {t("contentPage.telerad.teleradSolutions")}
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
                  />
                )
              )}
            </div>
          </section>
      </div>
    </CompanyPage>
  );
}
