import CompanyPage from './CompanyPage';
import { useTranslation } from 'react-i18next';
import ImageBrand from '../components/ImageBrand';
import SectionWithImage from '../components/SectionWithImage';
import AppVideo from "../components/AppVideo";

const CaseStudies = () => {
  const { t } = useTranslation();
  // Lista de seções com tópicos, imagens e alternância de posição
  return (
    <CompanyPage title=""  next="/galaxy/" prev="/theimagem/unique-features/">
      <div className="w-full min-h-screen flex flex-col">  
        {/* Navbar */}
        <nav className="w-full px-6 py-4 flex items-center justify-between shadow-md bg-white">
          <ImageBrand
          src="/assets/theimagem-logo.png"
          width={160}
          height={50}
          />
        </nav>  

        {/* <section className="max-w-5xl mx-auto px-4">                 
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

        </section> */}
        <div className="flex-1 flex flex-col justify-center">
          <section className="px-6 pt-16  text-center">
            <h2 className="text-3xl font-bold mb-4">{t('contentPage.theImagemDifferentials.sucessCases')}</h2>
          </section>   
          <section className="px-6 py-16 text-center">
            <div className="w-[60%] mx-auto">
              <AppVideo src="/videos/TECNICOS-TRABALHANDO-THE-IMAGEM.mp4" poster="/videos/POSTER-VIDEO.png" />
            </div>
          </section>
        </div>


      </div>
    </CompanyPage>
  );
};

export default CaseStudies;