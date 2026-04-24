import CompanyPage from './CompanyPage';
import { useTranslation } from 'react-i18next';
import ImageBrand from '../components/ImageBrand';
import SectionWithImageOrProject from '../components/cardTopics';
import SectionWithImage from '../components/SectionWithImage';
import ImageComparison from "../components/ImageComparasion.tsx"; 

export default function ComparativeTelerad() {
    const { t } = useTranslation();
    // Lista de seções com tópicos, imagens e alternância de posição
    const sectionsComparative = [
        {   
          title: t("contentPage.teleradComparative.sectionsComparative.withTelerad.title"),
          imgSrc: t("contentPage.teleradComparative.sectionsComparative.withTelerad.imgSrc"),
          imgAlt: t("contentPage.teleradComparative.sectionsComparative.withTelerad.imgAlt"),
        },
        {
          title: t("contentPage.teleradComparative.sectionsComparative.withoutTelerad.title"),
          imgSrc: t("contentPage.teleradComparative.sectionsComparative.withoutTelerad.imgSrc"),
          imgAlt: t("contentPage.teleradComparative.sectionsComparative.withoutTelerad.imgAlt"),
        },
    ];
    const sections = [
        {
        title: t("contentPage.teleradComparative.sections.infrastructure.title"),
        items:  t("contentPage.teleradComparative.sections.infrastructure.items", { returnObjects: true }) as string[],
        imgSrc: "", 
        imgAlt: "Infraestrutura",
        reverse: true, // Imagem à esquerda
        },
        {
        title: t("contentPage.teleradComparative.sections.reserveEquipament.title"),
        items: t("contentPage.teleradComparative.sections.reserveEquipament.items", { returnObjects: true }) as string[],
        imgSrc: "", 
        imgAlt: "Equipamento reserva",
        reverse: false, // Imagem à esquerda
        },
        {
        title: t("contentPage.teleradComparative.sections.criticPieces.title"),
        items: t("contentPage.teleradComparative.sections.criticPieces.items", { returnObjects: true }) as string[],
        imgSrc: "", 
        imgAlt: "Peças críticas",
        reverse: true, // Imagem à esquerda
        },
        {
        title: t("contentPage.teleradComparative.sections.atualizationTecnology.title"),
        items: t("contentPage.teleradComparative.sections.atualizationTecnology.items", { returnObjects: true }) as string[],
        imgSrc: "", 
        imgAlt: "Peças críticas",
        reverse: false, // Imagem à esquerda
        },
        {
        title: t("contentPage.teleradComparative.sections.clinicSuport.title"),
        items: t("contentPage.teleradComparative.sections.clinicSuport.items", { returnObjects: true }) as string[],
        imgSrc: "", 
        imgAlt: "Suporte clínico e aplicação",
        reverse: true, // Imagem à esquerda
        },
        {
        title: t("contentPage.teleradComparative.sections.instalationAndLogistic.title"),
        items: t("contentPage.teleradComparative.sections.instalationAndLogistic.items", { returnObjects: true }) as string[],
        imgSrc: "", 
        imgAlt: "Logística e instalação",
        reverse: false, // Imagem à esquerda
        },
        {
        title: t("contentPage.teleradComparative.sections.riscsAndPrevisibility.title"),
        items: t("contentPage.teleradComparative.sections.riscsAndPrevisibility.items", { returnObjects: true }) as string[],
        imgSrc: "", 
        imgAlt: "Riscos e previsibilidade",
        reverse: true, // Imagem à esquerda
        },


    ];
    return (
        <CompanyPage title=""  next="/telerad/private-colaboration" prev="/gi-engenharia">
        <div className="w-full min-h-screen bg-white">  
            {/* Navbar */}
            <nav className="w-full px-6 py-8 flex items-center justify-between shadow-md bg-white sticky top-0 z-50">
            <ImageBrand
            src="/assets/telerad-logo.png"
            width={180}
            height={56}
            />
            </nav>  
            <section className="px-8 py-24 bg-gray-50 text-center">
            <h2 className="font-clash text-5xl md:text-7xl font-black text-gray-900 leading-[1.1]">{t("contentPage.teleradComparative.title")}</h2>
            </section>   
            <section className="max-w-5xl mx-auto px-4">      
                <ImageComparison sections={sectionsComparative} />
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
            <section className="px-7 py-16 text-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 max-w-6xl mx-auto text-left">
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
        </div> 
        </CompanyPage>
    );
}
