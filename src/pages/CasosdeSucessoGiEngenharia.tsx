import { useTranslation } from "react-i18next";
import ImageBrand from "../components/ImageBrand";
import ArrowButton from "../components/ArrowButton";
import HomeButton from "../components/HomeButton";
import YoutubeVideo from "../components/YoutubeVideo";
import SectionWithImageOrProject from "../components/cardTopics";
import SectionWithImage from "../components/SectionWithImage";
import CompanyPage from "./CompanyPage";
import AppVideo from "../components/AppVideo";

const SuccessCaseConsultoriaPage: React.FC = () => {
  const { t } = useTranslation();
  // Lista de seções com tópicos, imagens e alternância de posição
  const sections = [
    {
      title: "Especialistas em Implantação de Serviços de Saúde...",
      items: [
        "Montagem de serviços completos em hospitais do Norte e Nordeste",
        "Estruturação de clínicas com portfólio completo de exames",
        "Adequação técnica e ampliação de unidades já existentes",
        "Projetos com ROI validado, alta eficiência e rápido crescimento",
      ],
      imgSrc: "/assets/consultoria/diferencial.png",
      imgAlt: "Mapeamento do cenário",
      reverse: true, // Imagem à esquerda
    },
  ];
  return (
    <CompanyPage next="/telerad/" prev="/gi-engenharia/diferencial">
      <div className="w-full min-h-screen">
        {/* Navbar */}
        <nav className="w-full px-6 py-4 flex items-center justify-between shadow-md bg-white">
          <ImageBrand
            src="/assets/gi-engenharia-logo.png"
            width={160}
            height={50}
          />
        </nav>
        <section className="px-6 pt-16 bg-gray-50 text-center">
          <h2 className="text-3xl font-bold mb-4">Cases de Sucesso</h2>
        </section>

        <section className="px-6 py-16 text-center">
          <div className="w-[60%] mx-auto">
            <AppVideo src="/videos/ANTES-E-DEPOIS-CALCOENE-E-AMAPA-GI-ENGENHARIA.mp4" poster="/videos/POSTER-VIDEO.png" />
          </div>
        </section>
      </div>
    </CompanyPage>
  );
};

export default SuccessCaseConsultoriaPage;
