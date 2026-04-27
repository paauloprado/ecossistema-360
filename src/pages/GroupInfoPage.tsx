import React from "react";
import { motion } from "framer-motion";
import { 
  Coins, 
  Calculator, 
  Zap, 
  TrendingUp, 
  BarChart3,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { useTranslation } from "react-i18next";
import CompanyPage from "./CompanyPage";

export const GroupInfoPage = () => {
  const { t } = useTranslation();

  const cashItems = t("care.comparison.cash.items", { returnObjects: true });
  const financedItems = t("care.comparison.financed.items", { returnObjects: true });
  const rentalItems = t("care.comparison.rental.items", { returnObjects: true });

  return (
    <CompanyPage next="/consult/" prev="/galaxy/viewer/">
      <div className="w-full min-h-screen bg-white text-[#003B5C] font-general overflow-x-hidden">
        
        {/* Navbar - Refined Translation */}
        <nav className="w-full px-8 py-10 flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 bg-[#A1CE28] rounded-2xl flex items-center justify-center text-white font-black text-3xl shadow-lg shadow-[#A1CE28]/20 transition-transform hover:rotate-6">?</div>
             <span className="font-clash text-2xl font-black uppercase tracking-tighter">
               {t("care.comparison.insights").split(' ')[0]} <span className="text-[#A1CE28]">{t("care.comparison.insights").split(' ')[1] || 'Insights'}</span>
             </span>
          </div>
          <div className="hidden md:block text-[10px] font-black text-gray-400 uppercase tracking-[0.5em]">Grupo Imagem • Ecossistema 360</div>
        </nav>

        {/* Hero Section - Refined */}
        <section className="px-8 py-20 lg:py-24 bg-gray-50/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#A1CE28]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#003B5C]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
            <div className="flex-1 space-y-10 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <span className="inline-block px-5 py-1.5 bg-[#A1CE28]/10 text-[#00524D] text-[10px] font-black tracking-[0.4em] uppercase rounded-full border border-[#A1CE28]/20">
                  {t("care.comparison.analysis")}
                </span>
                <h1 className="font-clash text-5xl md:text-7xl lg:text-8xl font-black text-[#003B5C] leading-[0.95] tracking-tighter uppercase">
                  Comparativo <br />
                  <span className="text-[#A1CE28]">Estratégico</span>
                </h1>
                <p className="font-general text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  {t("care.comparison.subtitle")}
                </p>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-1 w-full max-w-xl relative"
            >
              <div className="absolute inset-0 bg-[#003B5C] rounded-[48px] rotate-1 opacity-5 scale-105" />
              <div className="relative bg-white p-10 rounded-[48px] shadow-2xl border border-gray-100 flex flex-col items-center text-center gap-6">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-[#A1CE28]">
                  <TrendingUp size={32} />
                </div>
                <div className="space-y-1">
                  <div className="text-6xl lg:text-7xl font-black text-[#003B5C] tracking-tighter leading-none">{t("care.comparison.impact.totalEconomy")}</div>
                  <div className="text-[10px] font-black text-gray-300 uppercase tracking-[0.4em]">Economia Real Projetada</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Comparison Cards */}
        <section className="px-8 py-20 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              
              {/* Card 1: Cash */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group p-10 rounded-[48px] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="flex items-center gap-5 mb-10">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-[#003B5C] group-hover:bg-[#003B5C] group-hover:text-white transition-colors">
                    <Coins size={28} />
                  </div>
                  <h3 className="font-clash text-2xl lg:text-3xl font-black uppercase tracking-tight">{t("care.comparison.cash.title")}</h3>
                </div>

                <div className="space-y-8">
                  <div className="space-y-1 border-l-4 border-[#A1CE28] pl-6">
                    <div className="text-[10px] font-black text-gray-300 uppercase tracking-widest">{t("care.comparison.cash.monthly")}</div>
                    <div className="text-4xl lg:text-5xl font-black tracking-tighter">{t("care.comparison.cash.total")}</div>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    {Array.isArray(cashItems) && cashItems.map((item: string, i: number) => (
                      <div key={i} className="flex items-center gap-3 text-gray-500">
                        <CheckCircle2 size={20} className="text-[#A1CE28] opacity-40" />
                        <span className="text-lg font-bold">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Financed */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group p-10 rounded-[48px] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="flex items-center gap-5 mb-10">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-[#003B5C] group-hover:bg-[#003B5C] group-hover:text-white transition-colors">
                    <Calculator size={28} />
                  </div>
                  <h3 className="font-clash text-2xl lg:text-3xl font-black uppercase tracking-tight">{t("care.comparison.financed.title")}</h3>
                </div>

                <div className="space-y-8">
                  <div className="space-y-1 border-l-4 border-red-100 pl-6">
                    <div className="text-[10px] font-black text-gray-300 uppercase tracking-widest">{t("care.comparison.financed.monthly")}</div>
                    <div className="text-4xl lg:text-5xl font-black tracking-tighter text-red-900/60">{t("care.comparison.financed.total")}</div>
                  </div>

                  <div className="p-6 bg-red-50/30 rounded-2xl border border-red-100/30">
                    <div className="text-[10px] font-black text-red-300 uppercase tracking-widest mb-1">{t("care.comparison.financed.description")}</div>
                    <div className="text-xl font-black text-red-900/40">{t("care.comparison.financed.parcel")}</div>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    {Array.isArray(financedItems) && financedItems.map((item: string, i: number) => (
                      <div key={i} className="flex items-center gap-3 text-gray-400 opacity-60">
                        <CheckCircle2 size={20} className="text-gray-200" />
                        <span className="text-lg font-bold">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Card 3: Rental GI */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-10 group relative p-10 lg:p-16 rounded-[56px] bg-[#003B5C] text-white shadow-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none" />
              
              <div className="relative z-10 grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="space-y-10">
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 bg-[#A1CE28] rounded-2xl flex items-center justify-center text-[#003B5C] shadow-xl shadow-[#A1CE28]/20">
                      <Zap size={36} fill="currentColor" />
                    </div>
                    <h3 className="font-clash text-3xl lg:text-5xl font-black uppercase tracking-tight">{t("care.comparison.rental.title")}</h3>
                  </div>

                  <div className="space-y-2">
                    <div className="text-7xl lg:text-8xl font-black text-[#A1CE28] tracking-tighter leading-none">
                      {t("care.comparison.rental.effectiveMonthly")}
                    </div>
                    <p className="text-lg font-black text-white/30 uppercase tracking-[0.4em]">Custo Mensal Efetivo</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {Array.isArray(rentalItems) && rentalItems.map((item: string, i: number) => (
                      <div key={i} className="flex items-center gap-3 text-white/60 font-black uppercase tracking-tighter text-lg">
                        <CheckCircle2 size={18} className="text-[#A1CE28]" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-[40px]">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-10 bg-[#A1CE28] rounded-full flex items-center justify-center text-[#003B5C]">
                        <TrendingUp size={22} />
                      </div>
                      <span className="text-[#A1CE28] font-black text-sm uppercase tracking-widest">Efficiency GI</span>
                    </div>
                    <h4 className="text-3xl lg:text-4xl font-black text-white mb-4 leading-tight">
                      {t("care.comparison.rental.taxBenefit")}
                    </h4>
                    <p className="text-white/60 text-lg leading-relaxed font-medium">
                      {t("care.comparison.rental.explanation")}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final Verdict Section - Refined for Elegance */}
        <section className="px-8 py-20 bg-gray-50/30">
          <div className="max-w-4xl mx-auto text-center space-y-12">
             <div className="w-16 h-1 bg-[#A1CE28] mx-auto rounded-full" />
             
             {/* Refined Verdict Text */}
             <div className="space-y-6">
               <p className="font-general text-2xl lg:text-3xl font-medium text-gray-500 leading-relaxed max-w-3xl mx-auto italic">
                 "{t("care.comparison.impact.verdict")}"
               </p>
             </div>

             <div className="flex flex-col sm:flex-row items-center justify-center gap-10 pt-6">
                <div className="space-y-1">
                  <div className="text-5xl font-black text-[#A1CE28] tracking-tighter leading-none">{t("care.comparison.impact.monthlyEconomy")}</div>
                  <div className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Economia Mensal</div>
                </div>
                <div className="w-px h-12 bg-gray-200 hidden sm:block" />
                <div className="space-y-1">
                  <div className="text-5xl font-black text-[#003B5C] tracking-tighter leading-none">{t("care.comparison.impact.totalEconomy")}</div>
                  <div className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Economia Total Projetada</div>
                </div>
             </div>
          </div>
        </section>

      </div>
    </CompanyPage>
  );
};

export default GroupInfoPage;
