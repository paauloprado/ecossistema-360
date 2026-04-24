import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Cloud, FileText, CheckCircle, TrendingUp, Zap, Shield, Maximize } from "lucide-react";
import { useTranslation } from "react-i18next";
import CompanyPage from "./CompanyPage";

// ─── Shared Components ───────────────────────────────────────────────────────

const InfoBlock = ({ icon: Icon, title, points }: { icon: any; title: string; points: string[] }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.02, backgroundColor: "rgba(0,0,0,0.02)" }}
    whileTap={{ scale: 0.98, boxShadow: "0 0 40px rgba(161,206,40,0.2)" }}
    viewport={{ once: true }}
    className="bg-white border border-gray-200 p-10 md:p-12 rounded-[42px] h-full cursor-pointer transition-colors shadow-lg flex flex-col justify-start overflow-hidden min-h-[360px]"
  >
    <div className="flex items-center gap-6 mb-8">
      <div className="bg-[#A1CE28]/10 p-4 rounded-2xl text-[#A1CE28] shadow-[0_0_20px_rgba(161,206,40,0.1)] shrink-0">
        <Icon size={38} />
      </div>
      <h3 className="text-3xl md:text-4xl font-black text-[#003B5C] uppercase tracking-tighter leading-[0.9] break-words">{title}</h3>
    </div>
    <ul className="space-y-5">
      {Array.isArray(points) ? points.map((p, i) => (
        <li key={i} className="flex items-start gap-4 text-gray-700 text-xl md:text-2xl leading-snug">
          <div className="mt-2.5 w-2 h-2 rounded-full bg-[#A1CE28] shrink-0 shadow-[0_0_10px_#A1CE28]" />
          <span className="break-words">{p}</span>
        </li>
      )) : points ? (
        <li className="flex items-start gap-4 text-gray-700 text-xl md:text-2xl leading-snug">
          <div className="mt-2.5 w-2 h-2 rounded-full bg-[#A1CE28] shrink-0 shadow-[0_0_10px_#A1CE28]" />
          <span className="break-words">{points}</span>
        </li>
      ) : null}
    </ul>
  </motion.div>
);


// ─── GALAXY MAIN PAGE ──────────────────────────────────────────

export const GalaxyMainPage = () => {
  const { t } = useTranslation();
  
  return (
    <CompanyPage next="/galaxy/viewer/" prev="/theimagem/unique-features/">
      <div className="w-full min-h-screen bg-white text-gray-800 pb-24 lg:pb-28">
        {/* Navbar */}
        <nav className="w-full px-4 sm:px-6 py-4 flex items-center justify-between shadow-md bg-white mb-10 lg:mb-12">
          <img src="/assets/galaxy/logo_galaxy_azul.png" alt="Galaxy" style={{ height: "50px" }} />
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-16 py-8 lg:py-12">
            <div className="w-full md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-7xl font-black text-[#003B5C] leading-tight tracking-tighter uppercase">
                {t("contentPage.galaxy.main.title")}
              </h1>
              <p className="text-[#A1CE28] text-xl md:text-2xl font-bold tracking-widest uppercase">
                {t("contentPage.galaxy.main.heroSubtitle")}
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="/assets/astronauta.png"
                className="w-full max-w-md drop-shadow-xl"
                alt="Astronaut"
                width={1195}
                height={1011}
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </div>
          </div>

          <section className="py-12 lg:py-20 space-y-20 lg:space-y-32">
            <div className="text-center mb-12 lg:mb-16 space-y-6">
              <span className="text-[#A1CE28] font-bold tracking-[0.4em] uppercase">
                {t("contentPage.galaxy.main.overview.tag")}
              </span>
              <h2 className="text-5xl md:text-6xl font-black text-[#003B5C] uppercase tracking-tighter">
                {t("contentPage.galaxy.main.overview.title1")} <br className="hidden md:block" />
                <span className="text-[#A1CE28]">{t("contentPage.galaxy.main.overview.title2")}</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
              <InfoBlock icon={Maximize} title={t("contentPage.galaxy.main.overview.integration.title")} points={t("contentPage.galaxy.main.overview.integration.points", { returnObjects: true }) as string[]} />
              <InfoBlock icon={Cloud} title={t("contentPage.galaxy.main.overview.cloud.title")} points={t("contentPage.galaxy.main.overview.cloud.points", { returnObjects: true }) as string[]} />
              <InfoBlock icon={TrendingUp} title={t("contentPage.galaxy.main.overview.strategy.title")} points={t("contentPage.galaxy.main.overview.strategy.points", { returnObjects: true }) as string[]} />
              <InfoBlock icon={Zap} title={t("contentPage.galaxy.main.overview.ris.title")} points={t("contentPage.galaxy.main.overview.ris.points", { returnObjects: true }) as string[]} />
            </div>

            <div>
              <h2 className="text-5xl md:text-6xl font-black text-[#003B5C] mb-12 lg:mb-16 text-center uppercase tracking-tighter">
                {t("contentPage.galaxy.main.features.title")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <InfoBlock icon={FileText} title={t("contentPage.galaxy.main.features.reports.title")} points={t("contentPage.galaxy.main.features.reports.points", { returnObjects: true }) as string[]} />
                <InfoBlock icon={Shield} title={t("contentPage.galaxy.main.features.signature.title")} points={t("contentPage.galaxy.main.features.signature.points", { returnObjects: true }) as string[]} />
                <InfoBlock icon={Zap} title={t("contentPage.galaxy.main.features.pacs.title")} points={t("contentPage.galaxy.main.features.pacs.points", { returnObjects: true }) as string[]} />
                <InfoBlock icon={Maximize} title={t("contentPage.galaxy.main.features.remote.title")} points={t("contentPage.galaxy.main.features.remote.points", { returnObjects: true }) as string[]} />
              </div>
            </div>

            <div className="bg-gray-50 rounded-[40px] lg:rounded-[48px] p-8 sm:p-10 lg:p-12 border border-gray-200 relative overflow-hidden shadow-sm">
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div className="space-y-8">
                  <h2 className="text-4xl sm:text-5xl font-black text-[#003B5C]">{t("contentPage.galaxy.main.impact.title")}</h2>
                  <div className="space-y-6">
                    <div className="flex gap-4"><div className="text-4xl font-black text-[#A1CE28]">-60%</div><div className="text-gray-600 text-lg">{t("contentPage.galaxy.main.impact.reduction")}</div></div>
                    <div className="flex gap-4"><div className="text-4xl font-black text-[#A1CE28]">+ROI</div><div className="text-gray-600 text-lg">{t("contentPage.galaxy.main.impact.roi")}</div></div>
                  </div>
                </div>
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-[#003B5C] uppercase tracking-widest">{t("contentPage.galaxy.main.impact.saas.title")}</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-4 text-gray-600 text-xl"><CheckCircle size={24} className="text-[#A1CE28]" /> {t("contentPage.galaxy.main.impact.saas.monthly")}</li>
                    <li className="flex items-center gap-4 text-gray-600 text-xl"><CheckCircle size={24} className="text-[#A1CE28]" /> {t("contentPage.galaxy.main.impact.saas.volume")}</li>
                    <li className="flex items-center gap-4 text-gray-600 text-xl"><CheckCircle size={24} className="text-[#A1CE28]" /> {t("contentPage.galaxy.main.impact.saas.focus")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </CompanyPage>
  );
};

// ─── GALAXY ECOSYSTEM ────────────────────────────────────────────

export const GalaxyEcosystemPage = () => {
  const { t } = useTranslation();

  return (
    <CompanyPage next="/galaxy/viewer/" prev="/galaxy/">
      <div className="w-full min-h-screen bg-white text-gray-800 pb-20">
        <nav className="w-full px-6 py-4 flex items-center justify-between shadow-md bg-white mb-12">
          <img src="/assets/galaxy/logo_galaxy_azul.png" alt="Galaxy" style={{ height: "50px" }} />
        </nav>

        <div className="max-w-7xl mx-auto px-8 py-12 text-center">
          <div className="space-y-6 mb-16">
            <span className="text-[#A1CE28] font-bold tracking-[0.4em] uppercase">
              {t("contentPage.galaxy.ecosystem.title")}
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-[#003B5C] uppercase tracking-tighter">
              {t("contentPage.galaxy.ecosystem.subtitle")}
            </h1>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg md:text-xl leading-relaxed">
              {t("contentPage.galaxy.main.overview.tag")} {t("contentPage.galaxy.main.overview.title1")}{" "}
              <span className="text-[#A1CE28]">{t("contentPage.galaxy.main.overview.title2")}</span>
            </p>
          </div>

          <div className="relative my-14 flex justify-center">
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full border-4 border-gray-100 bg-white shadow-xl flex items-center justify-center">
              <img
                src="/assets/galaxy/logo_galaxy_azul.png"
                alt="Galaxy RIS/PACS"
                className="w-32 md:w-44 object-contain"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-16">
            <InfoBlock
              icon={Maximize}
              title={t("contentPage.galaxy.ecosystem.dicom.title")}
              points={[t("contentPage.galaxy.ecosystem.dicom.desc")]}
            />
            <InfoBlock
              icon={Cloud}
              title={t("contentPage.galaxy.ecosystem.cloud.title")}
              points={[t("contentPage.galaxy.ecosystem.cloud.desc")]}
            />
          </div>
        </div>
      </div>
    </CompanyPage>
  );
};

// ─── GALAXY VIEWER ──────────────────────────────────────────────

export const GalaxyViewerPage = () => {
  const { t } = useTranslation();
  const viewerTitle = t("contentPage.galaxy.viewer.title");
  const viewerTitleParts = viewerTitle.split(" ");
  const viewerPrimaryTitle = viewerTitleParts[0] ?? viewerTitle;
  const viewerSecondaryTitle = viewerTitleParts.slice(1).join(" ") || viewerPrimaryTitle;
  const viewerHighlights = [
    {
      icon: Maximize,
      title: t("contentPage.galaxy.viewer.details.mobility.title"),
      points: t("contentPage.galaxy.viewer.details.mobility.points", { returnObjects: true }) as string[],
    },
    {
      icon: Shield,
      title: t("contentPage.galaxy.viewer.details.diagnostic.title"),
      points: t("contentPage.galaxy.viewer.details.diagnostic.points", { returnObjects: true }) as string[],
    },
    {
      icon: TrendingUp,
      title: t("contentPage.galaxy.viewer.details.continuity.title"),
      points: t("contentPage.galaxy.viewer.details.continuity.points", { returnObjects: true }) as string[],
    },
  ];
  
  return (
    <CompanyPage next="/consult/" prev="/galaxy/">
      <div className="w-full min-h-screen bg-white text-gray-800 pb-24 lg:pb-28">
        <nav className="w-full px-4 sm:px-6 py-4 flex items-center justify-between shadow-md bg-white mb-10 lg:mb-12">
          <div className="flex items-center gap-4">
            <img src="/assets/galaxy/logo_galaxy_azul.png" alt="Galaxy" style={{ height: "40px" }} />
            <img src="/assets/galaxy/eye_viewer.png" alt="Eye Viewer" style={{ height: "30px" }} />
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-10 lg:mb-16">
            <h1 className="text-4xl md:text-6xl font-black text-[#003B5C] uppercase">
              {viewerPrimaryTitle} <br />
              <span className="text-[#A1CE28]">{viewerSecondaryTitle}</span>
            </h1>
            <p className="text-gray-500 text-xl tracking-widest uppercase">{t("contentPage.galaxy.viewer.subtitle")}</p>
            <p className="mx-auto max-w-4xl text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              {t("contentPage.galaxy.viewer.lead")}
            </p>
          </div>
          
          <div className="flex justify-center mb-10 lg:mb-16">
            <img
              src="/assets/galaxy/galaxy_viewer_screenshot.png"
              className="w-full max-w-5xl rounded-xl shadow-2xl border border-gray-200"
              alt="Galaxy Viewer Screenshot"
              width={1365}
              height={687}
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full mb-12 lg:mb-16">
            <div className="p-8 lg:p-10 rounded-[32px] bg-white border border-gray-200 shadow-lg text-left">
              <h5 className="text-[#A1CE28] font-black text-2xl uppercase mb-4">{t("contentPage.galaxy.viewer.streaming.title")}</h5>
              <p className="text-gray-700 text-lg leading-relaxed">{t("contentPage.galaxy.viewer.streaming.desc")}</p>
            </div>
            <div className="p-8 lg:p-10 rounded-[32px] bg-white border border-gray-200 shadow-lg text-left">
              <h5 className="text-[#A1CE28] font-black text-2xl uppercase mb-4">{t("contentPage.galaxy.viewer.zeroWeb.title")}</h5>
              <p className="text-gray-700 text-lg leading-relaxed">{t("contentPage.galaxy.viewer.zeroWeb.desc")}</p>
            </div>
          </div>

          <section className="py-2 lg:py-6">
            <div className="text-center space-y-4 mb-8 lg:mb-10">
              <span className="text-[#A1CE28] font-bold tracking-[0.4em] uppercase">
                {t("contentPage.galaxy.viewer.details.tag")}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#003B5C] uppercase tracking-tighter">
                {t("contentPage.galaxy.viewer.details.title")}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
              {viewerHighlights.map(({ icon, title, points }) => (
                <InfoBlock key={title} icon={icon} title={title} points={points} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </CompanyPage>
  );
};

export default GalaxyMainPage;
