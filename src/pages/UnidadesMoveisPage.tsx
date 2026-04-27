import { useTranslation } from 'react-i18next';
import React from 'react';
import ImageBrand from '../components/ImageBrand';
import { CheckCircle, Truck, MapPin, Zap, Link2, BarChart3 } from 'lucide-react';
import CompanyPage from './CompanyPage';

const UnidadesMoveisPage: React.FC = () => {
  const { t } = useTranslation();

  const solucoes = [
    {
      title: t("contentPage.unidadesMoveis.solutions.items.0.title"),
      icon: <Truck className="w-10 h-10" />,
      items: t("contentPage.unidadesMoveis.solutions.items.0.points", { returnObjects: true }) as string[]
    },
    {
      title: t("contentPage.unidadesMoveis.solutions.items.1.title"),
      icon: <MapPin className="w-10 h-10" />,
      items: t("contentPage.unidadesMoveis.solutions.items.1.points", { returnObjects: true }) as string[]
    },
    {
      title: t("contentPage.unidadesMoveis.solutions.items.2.title"),
      icon: <Zap className="w-10 h-10" />,
      items: t("contentPage.unidadesMoveis.solutions.items.2.points", { returnObjects: true }) as string[]
    },
    {
      title: t("contentPage.unidadesMoveis.solutions.items.3.title"),
      icon: <CheckCircle className="w-10 h-10" />,
      items: t("contentPage.unidadesMoveis.solutions.items.3.points", { returnObjects: true }) as string[]
    },
    {
      title: t("contentPage.unidadesMoveis.solutions.items.4.title"),
      icon: <Link2 className="w-10 h-10" />,
      items: t("contentPage.unidadesMoveis.solutions.items.4.points", { returnObjects: true }) as string[]
    },
    {
      title: t("contentPage.unidadesMoveis.solutions.items.5.title"),
      icon: <BarChart3 className="w-10 h-10" />,
      items: t("contentPage.unidadesMoveis.solutions.items.5.points", { returnObjects: true }) as string[]
    }
  ];

  return (
    <CompanyPage next="/logistica/" prev="/telerad/private-colaboration">
      <div className="w-full min-h-screen bg-white">
        {/* Navbar */}
        <nav className="w-full px-6 py-8 flex items-center justify-between shadow-md bg-white sticky top-0 z-50">
          <div className="flex items-center gap-6">
            <ImageBrand src="/assets/telerad-logo.png" width={180} height={56} />
            <div className="h-8 w-px bg-gray-200" />
            <img src="/assets/CARRETA AGSUS.svg" alt="AGSUS" className="h-10 object-contain" />
          </div>
          <span className="font-clash text-2xl font-bold text-gray-800 hidden lg:block">
            {t("contentPage.unidadesMoveis.navTitle")}
          </span>
        </nav>

        {/* Hero Section */}
        <section className="px-8 py-20 bg-gray-50 flex flex-col items-center">
          <div className="max-w-7xl mx-auto flex flex-col items-center gap-16 text-center lg:text-left lg:flex-row">
            <div className="flex-1 space-y-8">
              <span className="inline-block px-4 py-2 bg-[#00524D]/10 text-[#00524D] text-sm font-bold tracking-widest uppercase rounded-full">
                {t("contentPage.unidadesMoveis.hero.tag")}
              </span>
              <h2 className="font-clash text-3xl md:text-5xl lg:text-7xl font-black text-gray-900 leading-[1.1]">
                {t("contentPage.unidadesMoveis.hero.title")}
              </h2>
              <p className="font-general text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {t("contentPage.unidadesMoveis.hero.description")}
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
                <div className="bg-white p-5 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-4">
                  <CheckCircle className="text-[#A1CE28] w-7 h-7" />
                  <span className="text-lg font-bold text-gray-800">{t("contentPage.unidadesMoveis.hero.benefit1")}</span>
                </div>
                <div className="bg-white p-5 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-4">
                  <CheckCircle className="text-[#A1CE28] w-7 h-7" />
                  <span className="text-lg font-bold text-gray-800">{t("contentPage.unidadesMoveis.hero.benefit2")}</span>
                </div>
              </div>
            </div>

            <div className="flex-1 w-full max-w-4xl relative pt-12 lg:pt-0">
              <div className="absolute inset-0 bg-[#00524D] rounded-[40px] rotate-2 opacity-5 scale-105"></div>
              <img 
                src="/assets/unidade_movel/Carreta de tomografia Mauriti - Foto-Erika Mavignier (13).jpg" 
                className="relative rounded-[40px] shadow-3xl w-full h-auto object-contain" 
                alt="Unidade Móvel de Tomografia" 
              />
            </div>
          </div>
        </section>

        {/* Solution Grid */}
        <section className="px-8 py-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20 space-y-4">
              <h2 className="font-clash text-4xl md:text-6xl font-bold text-gray-900">{t("contentPage.unidadesMoveis.solutions.title")}</h2>
              <p className="font-general text-xl text-gray-500 max-w-3xl mx-auto">
                {t("contentPage.unidadesMoveis.solutions.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {solucoes.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border-2 border-gray-50 rounded-[24px] md:rounded-[32px] p-6 md:p-10 shadow-xl transition-all duration-500 hover:border-[#00524D]/20 hover:-translate-y-2 group flex flex-col h-full"
                >
                  <div className="w-20 h-20 rounded-[24px] bg-[#00524D]/5 flex items-center justify-center text-[#00524D] mb-8 group-hover:bg-[#00524D] group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="font-clash text-3xl font-bold mb-6 text-gray-900">{item.title}</h3>
                  <ul className="space-y-4">
                    {item.items.map((point, pointIdx) => (
                      <li key={pointIdx} className="flex items-start gap-4">
                        <CheckCircle className="w-6 h-6 text-[#A1CE28] shrink-0 mt-1" />
                        <span className="font-general text-lg text-gray-700 leading-tight">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dynamic Model Section */}
        <section className="px-8 py-24 bg-[#00524D] text-white">
          <div className="max-w-6xl mx-auto flex flex-col gap-20">
            <div className="text-center space-y-6">
              <h2 className="font-clash text-5xl md:text-7xl font-bold">{t("contentPage.unidadesMoveis.models.title")}</h2>
              <p className="text-[#A1CE28] text-xl font-medium tracking-wide">{t("contentPage.unidadesMoveis.models.tag")}</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-10 order-2 lg:order-1">
                <div className="bg-white/10 backdrop-blur-xl p-10 rounded-[36px] border border-white/20 hover:bg-white/15 transition-colors">
                  <h4 className="font-clash text-3xl font-bold mb-4 text-[#A1CE28]">{t("contentPage.unidadesMoveis.models.rental.title")}</h4>
                  <p className="text-white/90 text-lg leading-relaxed">{t("contentPage.unidadesMoveis.models.rental.desc")}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-xl p-10 rounded-[36px] border border-white/20 hover:bg-white/15 transition-colors">
                  <h4 className="font-clash text-3xl font-bold mb-4 text-[#A1CE28]">{t("contentPage.unidadesMoveis.models.public.title")}</h4>
                  <p className="text-white/90 text-lg leading-relaxed">{t("contentPage.unidadesMoveis.models.public.desc")}</p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                 <img 
                   src="/assets/unidade_movel/VDF_2351.jpg" 
                   className="w-full h-[500px] object-cover rounded-[40px] shadow-2xl border-4 border-white/10" 
                   alt="Modelos Operacionais Unidade Móvel" 
                 />
              </div>
            </div>
          </div>
        </section>

        {/* High-Impact Footer ROI */}
        <section className="px-8 py-28 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-900 rounded-[48px] p-16 md:p-24 text-white relative overflow-hidden text-center lg:text-left">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-[#A1CE28]/10 blur-[120px] pointer-events-none"></div>
              <div className="relative z-10 space-y-12">
                <h2 className="font-clash text-5xl md:text-7xl font-bold leading-tight">
                    {t("contentPage.unidadesMoveis.roi.title")}
                </h2>
                <p className="text-white/70 text-2xl max-w-2xl leading-relaxed">
                  {t("contentPage.unidadesMoveis.roi.description")}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-8">
                  <div className="flex items-center gap-6 bg-white/5 p-8 rounded-3xl border border-white/10">
                    <div className="bg-[#A1CE28] p-4 rounded-2xl text-black shadow-lg"><BarChart3 size={32}/></div>
                    <div className="text-left">
                      <h5 className="font-bold text-xl">{t("contentPage.unidadesMoveis.roi.scalability.title")}</h5>
                      <p className="text-white/40 text-sm">{t("contentPage.unidadesMoveis.roi.scalability.desc")}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 bg-white/5 p-8 rounded-3xl border border-white/10">
                    <div className="bg-[#A1CE28] p-4 rounded-2xl text-black shadow-lg"><Link2 size={32}/></div>
                    <div className="text-left">
                      <h5 className="font-bold text-xl">{t("contentPage.unidadesMoveis.roi.connection.title")}</h5>
                      <p className="text-white/40 text-sm">{t("contentPage.unidadesMoveis.roi.connection.desc")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </CompanyPage>
  );
};

export default UnidadesMoveisPage;
