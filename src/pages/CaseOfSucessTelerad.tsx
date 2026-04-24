import CompanyPage from './CompanyPage';
import { useTranslation } from 'react-i18next';
import ImageBrand from '../components/ImageBrand';
import AppVideo from "../components/AppVideo";

export default function CaseOfSucessTelerad() {
  const { t } = useTranslation();
  // Lista de seções com tópicos, imagens e alternância de posição
  return (
    <CompanyPage title=""  next="/logistica/" prev="/telerad/unidades-moveis">
     <div className="w-full min-h-screen flex flex-col">
        {/* Navbar */}
        <nav className="w-full px-6 py-4 flex items-center justify-between shadow-md bg-white">
          <ImageBrand
          src="/assets/telerad-logo.png"
          width={160}
          height={50}
          />
        </nav>  
        <div className="flex-1 flex flex-col justify-center">
          <section className="px-6 pt-16 text-center">
            <h2 className="text-3xl font-bold mb-4">{t("contentPage.teleradSucessCase.title")}</h2>
          </section>
          
          <section className="px-6 py-16 text-center">
            <div className="w-[60%] mx-auto">
              <AppVideo src="/videos/ENTREGAS-REALIZADAS-TELERAD.mp4" poster="/videos/POSTER-VIDEO.png" />
            </div>
          </section>
        </div>

      </div>
    </CompanyPage>
  );
}