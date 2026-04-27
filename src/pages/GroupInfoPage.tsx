import React from "react";
import { motion } from "framer-motion";
import { 
  Coins, 
  Calculator, 
  Zap, 
  TrendingUp, 
  BarChart3,
  CheckCircle2,
  Trophy
} from "lucide-react";
import { useTranslation } from "react-i18next";
import CompanyPage from "./CompanyPage";

export const GroupInfoPage = () => {
  const { t } = useTranslation();

  const rentalItems = t("care.comparison.rental.items", { returnObjects: true });

  const cashTableRows = [
    { item: t("care.comparison.cash.table.equipment"),     calc: t("care.comparison.cash.table.equipmentCalc"),    value: "R$ 970.000" },
    { item: t("care.comparison.cash.table.depreciation"),  calc: t("care.comparison.cash.table.depreciationCalc"), value: "R$ 485.000" },
    { item: t("care.comparison.cash.table.tube"),          calc: t("care.comparison.cash.table.tubeCalc"),         value: "R$ 240.000" },
    { item: t("care.comparison.cash.table.maintenance"),   calc: t("care.comparison.cash.table.maintenanceCalc"),  value: "R$ 486.000" },
    { item: t("care.comparison.cash.table.transport"),     calc: t("care.comparison.cash.table.transportCalc"),    value: "R$ 17.500" },
    { item: t("care.comparison.cash.table.infra"),         calc: t("care.comparison.cash.table.infraCalc"),        value: "R$ 20.000" },
    { item: t("care.comparison.cash.table.panel"),         calc: t("care.comparison.cash.table.panelCalc"),        value: "R$ 15.000" },
    { item: t("care.comparison.cash.table.insurance"),     calc: t("care.comparison.cash.table.insuranceCalc"),    value: "R$ 48.500" },
  ];

  const financedTableRows = [
    { item: t("care.comparison.financed.table.financing"),   calc: t("care.comparison.financed.table.financingCalc"),   value: "R$ 1.398.000" },
    { item: t("care.comparison.financed.table.tube"),        calc: t("care.comparison.financed.table.tubeCalc"),        value: "R$ 240.000" },
    { item: t("care.comparison.financed.table.maintenance"), calc: t("care.comparison.financed.table.maintenanceCalc"), value: "R$ 540.000" },
    { item: t("care.comparison.financed.table.transport"),   calc: t("care.comparison.financed.table.transportCalc"),   value: "R$ 17.500" },
    { item: t("care.comparison.financed.table.infra"),       calc: t("care.comparison.financed.table.infraCalc"),       value: "R$ 20.000" },
    { item: t("care.comparison.financed.table.panel"),       calc: t("care.comparison.financed.table.panelCalc"),       value: "R$ 15.000" },
    { item: t("care.comparison.financed.table.insurance"),   calc: t("care.comparison.financed.table.insuranceCalc"),   value: "R$ 48.500" },
  ];

  const comparisonFinalRows = [
    { model: t("care.comparison.cash.title"),            total: "R$ 1.851.000", monthly: "R$ 30.850", highlight: false },
    { model: t("care.comparison.financed.title"),        total: "R$ 2.279.000", monthly: "R$ 37.983", highlight: false },
    { model: t("care.comparison.rental.finalLabel"),     total: "R$ 1.181.443", monthly: "R$ 19.690", highlight: true },
  ];

  // Totem-optimised table: bump all inner text to text-lg/xl
  const DataTable = ({ rows, accent }: { rows: { item: string; calc: string; value: string }[]; accent: string }) => (
    <div className="w-full overflow-hidden rounded-2xl border border-gray-100">
      {/* Header */}
      <div className={`grid grid-cols-3 gap-0 px-6 py-4 ${accent}`}>
        <span className="text-sm font-black uppercase tracking-wider text-gray-500">{t("care.comparison.tableHeaders.item")}</span>
        <span className="text-sm font-black uppercase tracking-wider text-gray-500 text-center">{t("care.comparison.tableHeaders.calc")}</span>
        <span className="text-sm font-black uppercase tracking-wider text-gray-500 text-right">{t("care.comparison.tableHeaders.value")}</span>
      </div>
      {/* Rows */}
      {rows.map((row, i) => (
        <div key={i} className={`grid grid-cols-3 gap-0 px-6 py-5 border-t border-gray-50 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
          <span className="text-lg font-bold text-gray-700 leading-snug pr-3">{row.item}</span>
          <span className="text-lg font-medium text-gray-400 text-center leading-snug px-2">{row.calc}</span>
          <span className="text-lg font-black text-gray-800 text-right leading-snug">{row.value}</span>
        </div>
      ))}
    </div>
  );

  return (
    <CompanyPage next="/consult/" prev="/galaxy/viewer/">
      <div className="w-full min-h-screen bg-white text-[#003B5C] font-general overflow-x-hidden">

        {/* Navbar */}
        <nav className="w-full px-8 py-10 flex items-center justify-between bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 shadow-sm">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-[#A1CE28] rounded-2xl flex items-center justify-center text-white font-black text-4xl shadow-lg shadow-[#A1CE28]/20 transition-transform hover:rotate-6">?</div>
            <span className="font-clash text-2xl font-black uppercase tracking-tighter">
              {t("care.comparison.insights").split(" ")[0]}{" "}
              <span className="text-[#A1CE28]">{t("care.comparison.insights").split(" ").slice(1).join(" ") || "Insights"}</span>
            </span>
          </div>
          <div className="hidden md:block text-sm font-bold text-gray-400 uppercase tracking-widest">Grupo Imagem • Ecossistema 360</div>
        </nav>

        {/* Hero */}
        <section className="px-8 py-16 lg:py-24 bg-gray-50/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#A1CE28]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#003B5C]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14 relative z-10">
            <div className="flex-1 space-y-8 text-center lg:text-left">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                <span className="inline-block px-6 py-2 bg-[#A1CE28]/10 text-[#00524D] text-sm font-black tracking-[0.3em] uppercase rounded-full border border-[#A1CE28]/20">
                  {t("care.comparison.analysis")}
                </span>
                <h1 className="font-clash text-5xl md:text-7xl lg:text-8xl font-black text-[#003B5C] leading-[0.95] tracking-tighter uppercase">
                  {t("care.comparison.heroLine1")} <br />
                  <span className="text-[#A1CE28]">{t("care.comparison.heroLine2")}</span>
                </h1>
                <p className="font-general text-2xl text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  {t("care.comparison.subtitle")}
                </p>
              </motion.div>
            </div>

            {/* Stat Box */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex-1 w-full max-w-md relative">
              <div className="absolute inset-0 bg-[#003B5C] rounded-[48px] rotate-1 opacity-5 scale-105" />
              <div className="relative bg-white p-12 rounded-[48px] shadow-2xl border border-gray-100 flex flex-col items-center text-center gap-5">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-[#A1CE28]">
                  <TrendingUp size={32} />
                </div>
                <div className="space-y-2">
                  <div className="text-base font-black text-[#A1CE28] uppercase tracking-widest">{t("care.comparison.upTo")}</div>
                  <div className="text-6xl lg:text-7xl font-black text-[#003B5C] tracking-tighter leading-none">
                    {t("care.comparison.impact.totalEconomy")}
                  </div>
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">{t("care.comparison.projected")}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Comparison Cards */}
        <section className="px-8 py-16 bg-white">
          <div className="max-w-7xl mx-auto space-y-10">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

              {/* Card 1: Cash */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group p-10 rounded-[48px] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col gap-8"
              >
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-[#003B5C] group-hover:bg-[#003B5C] group-hover:text-white transition-colors shrink-0">
                    <Coins size={32} />
                  </div>
                  <h3 className="font-clash text-2xl lg:text-3xl font-black uppercase tracking-tight">{t("care.comparison.cash.title")}</h3>
                </div>

                {/* Consideration note */}
                <div className="bg-gray-50 rounded-xl px-5 py-4 border border-gray-100">
                  <span className="text-sm font-black text-gray-600 uppercase tracking-wide">{t("care.comparison.cash.consideration")}: </span>
                  <span className="text-sm text-gray-500 font-medium">{t("care.comparison.cash.considerationText")}</span>
                </div>

                {/* Total + Formula */}
                <div className="border-l-4 border-[#A1CE28] pl-6 space-y-2">
                  <div className="text-4xl lg:text-5xl font-black tracking-tighter">{t("care.comparison.cash.total")}</div>
                  <div className="text-xl font-bold text-[#A1CE28] tracking-tight">{t("care.comparison.cash.formula")}</div>
                </div>

                <DataTable rows={cashTableRows} accent="bg-gray-50" />
              </motion.div>

              {/* Card 2: Financed */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group p-10 rounded-[48px] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col gap-8"
              >
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-[#003B5C] group-hover:bg-[#003B5C] group-hover:text-white transition-colors shrink-0">
                    <Calculator size={32} />
                  </div>
                  <h3 className="font-clash text-2xl lg:text-3xl font-black uppercase tracking-tight">{t("care.comparison.financed.title")}</h3>
                </div>

                {/* Structured considerations box */}
                <div className="p-6 bg-red-50/40 rounded-xl border border-red-100/40 space-y-3">
                  <p className="text-sm font-black text-red-400 uppercase tracking-widest mb-2">{t("care.comparison.financed.considerLabel")}</p>
                  <div className="grid grid-cols-1 gap-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-base font-bold text-red-400/80">{t("care.comparison.financed.rateLabel")}</span>
                      <span className="text-base font-black text-red-900/60">1,15% ao mês</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-base font-bold text-red-400/80">{t("care.comparison.financed.termLabel")}</span>
                      <span className="text-base font-black text-red-900/60">60 meses</span>
                    </div>
                    <div className="flex items-center justify-between border-t border-red-100/60 pt-2 mt-1">
                      <span className="text-base font-bold text-red-400/80">{t("care.comparison.financed.equipInitial")}</span>
                      <span className="text-base font-black text-red-900/60">R$ 970.000</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-base font-bold text-red-400/80">{t("care.comparison.financed.equipTotal")}</span>
                      <span className="text-base font-black text-red-900/60">R$ 1.398.000</span>
                    </div>
                  </div>
                </div>

                {/* Total */}
                <div className="border-l-4 border-red-200 pl-6">
                  <div className="text-4xl lg:text-5xl font-black tracking-tighter text-red-900/70">{t("care.comparison.financed.total")}</div>
                </div>

                <DataTable rows={financedTableRows} accent="bg-red-50/20" />
              </motion.div>
            </div>

            {/* Card 3: Locação GI */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-12 lg:p-16 rounded-[56px] bg-[#003B5C] text-white shadow-2xl overflow-hidden"
            >
              <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{backgroundImage:"radial-gradient(circle, #A1CE28 1px, transparent 1px)", backgroundSize:"24px 24px"}} />

              <div className="relative z-10 grid grid-cols-1 xl:grid-cols-2 gap-14 lg:gap-20 items-start">
                {/* Left */}
                <div className="space-y-10">
                  <div className="flex items-center gap-5">
                    <div className="w-18 h-18 bg-[#A1CE28] rounded-2xl p-4 flex items-center justify-center text-[#003B5C] shadow-xl shadow-[#A1CE28]/20 shrink-0">
                      <Zap size={40} fill="currentColor" />
                    </div>
                    <h3 className="font-clash text-3xl lg:text-5xl font-black uppercase tracking-tight">{t("care.comparison.rental.title")}</h3>
                  </div>

                  <div className="space-y-3">
                    <div className="text-7xl lg:text-8xl font-black text-[#A1CE28] tracking-tighter leading-none">
                      {t("care.comparison.rental.effectiveMonthly")}
                    </div>
                    <p className="text-lg font-black text-white/30 uppercase tracking-[0.3em]">{t("care.comparison.rental.monthlyLabel")}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {Array.isArray(rentalItems) && (rentalItems as string[]).map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-white/70 font-bold text-lg">
                        <CheckCircle2 size={20} className="text-[#A1CE28] shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Tax breakdown */}
                <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-[40px] space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#A1CE28] rounded-full flex items-center justify-center text-[#003B5C] shrink-0">
                      <TrendingUp size={24} />
                    </div>
                    <span className="text-[#A1CE28] font-black text-base uppercase tracking-widest">{t("care.comparison.rental.taxLabel")}</span>
                  </div>

                  <h4 className="text-3xl lg:text-4xl font-black text-white leading-tight">
                    {t("care.comparison.rental.taxBenefit")}
                  </h4>

                  <div className="space-y-5 pt-3 border-t border-white/10">
                    <div className="flex items-start gap-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#A1CE28] mt-2 shrink-0" />
                      <div>
                        <span className="text-white font-black text-xl">PIS/COFINS (9,25%)</span>
                        <p className="text-white/50 text-base font-medium mt-1">{t("care.comparison.rental.pisCofins")}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#A1CE28] mt-2 shrink-0" />
                      <div>
                        <span className="text-white font-black text-xl">IRPJ/CSLL (34%)</span>
                        <p className="text-white/50 text-base font-medium mt-1">{t("care.comparison.rental.irpjCsll")}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="text-[#A1CE28] font-black text-xl">👉 {t("care.comparison.rental.totalBenefit")}</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Final Comparison Summary Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 lg:p-14 rounded-[48px] bg-[#F8FAFC] border border-gray-100 shadow-sm"
            >
              <div className="flex items-center gap-5 mb-10">
                <div className="w-16 h-16 bg-[#A1CE28]/10 rounded-2xl flex items-center justify-center text-[#A1CE28]">
                  <Trophy size={32} />
                </div>
                <h3 className="font-clash text-2xl lg:text-3xl font-black uppercase tracking-tight">{t("care.comparison.finalTable.title")}</h3>
              </div>

              <div className="w-full overflow-hidden rounded-2xl border border-gray-200">
                {/* Header */}
                <div className="grid grid-cols-3 px-7 py-5 bg-[#003B5C]">
                  <span className="text-base font-black text-white/60 uppercase tracking-wider">{t("care.comparison.finalTable.model")}</span>
                  <span className="text-base font-black text-white/60 uppercase tracking-wider text-center">{t("care.comparison.finalTable.total")}</span>
                  <span className="text-base font-black text-white/60 uppercase tracking-wider text-right">{t("care.comparison.finalTable.monthly")}</span>
                </div>
                {/* Rows */}
                {comparisonFinalRows.map((row, i) => (
                  <div
                    key={i}
                    className={`grid grid-cols-3 px-7 py-6 border-t border-gray-100 items-center transition-all ${
                      row.highlight ? "bg-[#A1CE28]/10 border-l-4 border-l-[#A1CE28]" : "bg-white hover:bg-gray-50/50"
                    }`}
                  >
                    <span className={`text-lg lg:text-xl font-bold leading-snug pr-3 ${row.highlight ? "text-[#003B5C] font-black" : "text-gray-600"}`}>
                      {row.model}
                    </span>
                    <span className={`text-lg lg:text-xl font-black text-center ${row.highlight ? "text-[#003B5C]" : "text-gray-500"}`}>
                      {row.total}
                    </span>
                    <span className={`text-xl lg:text-2xl font-black text-right ${row.highlight ? "text-[#A1CE28]" : "text-gray-500"}`}>
                      {row.monthly}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Verdict Footer */}
        <section className="px-8 py-24 bg-gray-50/30">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="w-16 h-1.5 bg-[#A1CE28] mx-auto rounded-full" />
            <p className="font-general text-2xl lg:text-3xl font-medium text-gray-500 leading-relaxed italic max-w-3xl mx-auto">
              "{t("care.comparison.impact.verdict")}"
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-12 pt-4">
              <div className="space-y-2">
                <div className="text-5xl font-black text-[#A1CE28] tracking-tighter leading-none">{t("care.comparison.impact.monthlyEconomy")}</div>
                <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">{t("care.comparison.monthlySaving")}</div>
              </div>
              <div className="w-px h-14 bg-gray-200 hidden sm:block" />
              <div className="space-y-2">
                <div className="text-5xl font-black text-[#003B5C] tracking-tighter leading-none">{t("care.comparison.impact.totalEconomy")}</div>
                <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">{t("care.comparison.totalSaving")}</div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </CompanyPage>
  );
};

export default GroupInfoPage;
