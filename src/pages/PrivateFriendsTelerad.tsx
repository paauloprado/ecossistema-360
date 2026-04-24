import CompanyPage from './CompanyPage';
import ImageBrand from '../components/ImageBrand';
import Banner from '../components/Banner';
import SectionWithImageOrProject from '../components/cardTopics';
import { useTranslation } from 'react-i18next';
import SectionWithImage from '../components/SectionWithImage';

export default function PrivateFriendsTelerad() {
  const { t } = useTranslation();
  // Lista de seções com tópicos, imagens e alternância de posição

  const sections = [
    {
      title: t("contentPage.teleradPrivaty.sections.whatis.title"),
      items: t("contentPage.teleradPrivaty.sections.whatis.items",  { returnObjects: true }) as string[],
      imgSrc: "/assets/telerad/telerad-02.png",
      imgAlt: "O que é",
      reverse: false, // Imagem à esquerda
    },
    {
      title:t("contentPage.teleradPrivaty.sections.whatisincluded.title"),
      items: t("contentPage.teleradPrivaty.sections.whatisincluded.items",  { returnObjects: true }) as string[],
      imgSrc: "",
      imgAlt: "O que está incluso",
      reverse: true, // Imagem à direita
    },
    {
      title: t("contentPage.teleradPrivaty.sections.forwhois.title"),
      items: t("contentPage.teleradPrivaty.sections.forwhois.items",  { returnObjects: true }) as string[],
      imgSrc: "",
      imgAlt: "Para quem é indicado",
      reverse: false, // Imagem à esquerda
    },
    {
      title: t("contentPage.teleradPrivaty.sections.benefits.title"),
      items: t("contentPage.teleradPrivaty.sections.benefits.items",  { returnObjects: true }) as string[],
      imgSrc: "",
      imgAlt: "Benefícios",
      reverse: true, // Imagem à direita
    },
  ];
  return (
    <CompanyPage title=""  next="/telerad/unidades-moveis" prev="/telerad/comparative">
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
          <h2 className="font-clash text-5xl md:text-7xl font-black text-gray-900 leading-[1.1]">{t("contentPage.teleradPrivaty.title")}</h2>            
        </section>

        <section className="px-8 py-24 bg-white">
          <div className="max-w-6xl mx-auto">
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
          </div>
        </section>

        <section className="px-8 py-24 bg-white">
          <div className="max-w-6xl mx-auto">
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
          </div>
        </section>
      </div> 
    </CompanyPage>
  );
}