import React from "react";
import { useTranslation } from "react-i18next";
import {
  AlertTriangle,
  Brain,
  Building2,
  CheckCircle2,
  Coins,
  Hammer,
  RefreshCcw,
  Rocket,
  TrendingUp,
  X,
  type LucideIcon,
} from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import ArrowButton from "../components/ArrowButton";
import HomeButton from "../components/HomeButton";
import "./CareImagePresentation.css";

type AccentTone = "teal" | "navy";
type ImageRatio = "landscape" | "portrait" | "square";

type CareImageSlot = {
  src: string;
  alt?: string;
  ratio?: ImageRatio;
  naked?: boolean;
  maxWidth?: string;
  zoom?: number;
};

type CareMetric = {
  label: string;
  value: string;
};

type CareTextBlock = {
  title: string;
  body?: string;
  image?: string;
  zoom?: number;
};

type CareListBlock = {
  title: string;
  items?: string[];
  image?: string;
  zoom?: number;
};

type CareTableBlock = {
  title?: string;
  columns: string[];
  rows: string[][];
};

type CareModelCard = {
  title: string;
  subtitle: string;
  items: string[];
};

type CareCallout = {
  tone?: AccentTone | "warning";
  text: string;
};

type CarePresentationContent = {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  accent: AccentTone;
  Icon: LucideIcon;
  bullets: string[];
  description: string;
  imageSlots: CareImageSlot[];
  textBlocks?: CareTextBlock[];
  metrics?: CareMetric[];
  lists?: CareListBlock[];
  tables?: CareTableBlock[];
  modelCards?: CareModelCard[];
  callouts?: CareCallout[];
  source?: string;
};

export type CareNodeDefinition = {
  id: string;
  labelKey: string;
  accent: AccentTone;
  Icon: LucideIcon;
};

export const CARE_INSTITUTIONAL_ID = "care-about";


export const CARE_NODE_DEFINITIONS: CareNodeDefinition[] = [
  { id: "care-market", labelKey: "care.market.title", accent: "teal", Icon: TrendingUp },
  { id: "care-problem", labelKey: "care.problem.title", accent: "navy", Icon: AlertTriangle },
  { id: "care-solution", labelKey: "care.solution.title", accent: "teal", Icon: CheckCircle2 },
  { id: "care-ecosystem", labelKey: "care.ecosystem.title", accent: "teal", Icon: RefreshCcw },
  { id: "care-operations", labelKey: "care.operations.title", accent: "navy", Icon: Building2 },
  { id: "care-implantation", labelKey: "care.implantation.title", accent: "navy", Icon: Hammer },
  { id: "care-efficiency", labelKey: "care.efficiency.title", accent: "teal", Icon: Coins },
  { id: "care-scale", labelKey: "care.scale.title", accent: "teal", Icon: Rocket },
];


export const CarePresentationModal = ({
  modalId,
  onClose,
}: {
  modalId: string;
  onClose: () => void;
}) => {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();

  const allIds = [CARE_INSTITUTIONAL_ID, ...CARE_NODE_DEFINITIONS.map((d) => d.id)];
  const currentIndex = allIds.indexOf(modalId);

  const navigateTo = (newId: string) => {
    setSearchParams(
      (prev) => {
        prev.set("modal", newId);
        return prev;
      },
      { replace: true }
    );
  };

  const goNext = () => {
    if (currentIndex < allIds.length - 1) {
      navigateTo(allIds[currentIndex + 1]);
    } else {
      navigateTo(allIds[0]);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      navigateTo(allIds[currentIndex - 1]);
    } else {
      navigateTo(allIds[allIds.length - 1]);
    }
  };

  const goHome = () => {
    onClose();
  };

  const getUrlForId = (id: string) => `/?view=care&modal=${id}`;
  const nextId = allIds[(currentIndex + 1) % allIds.length];
  const prevId = allIds[(currentIndex - 1 + allIds.length) % allIds.length];

  const nextUrl = getUrlForId(nextId);
  const prevUrl = getUrlForId(prevId);

  const CARE_PRESENTATION_CONTENT: Record<string, CarePresentationContent> = {
    [CARE_INSTITUTIONAL_ID]: {
      id: CARE_INSTITUTIONAL_ID,
      badge: t("care.institutional.badge"),
      title: t("care.institutional.title"),
      subtitle: t("care.institutional.subtitle"),
      accent: "teal",
      Icon: Brain,
      bullets: [t("care.institutional.missionTitle"), t("care.institutional.visionTitle"), t("care.institutional.badge")],
      description: t("care.institutional.description"),
      imageSlots: [
        { src: "/assets/care_imagem/institucional/IMG FCI 02.png", alt: "CareImagem institucional", ratio: "landscape" },
      ],
      textBlocks: [
        {
          title: t("care.institutional.missionTitle"),
          body: t("care.institutional.missionBody"),
        },
        {
          title: t("care.institutional.visionTitle"),
          body: t("care.institutional.visionBody"),
        },
      ],
      metrics: [
        { label: t("care.institutional.metrics.lives"), value: "+10.000" },
        { label: t("care.institutional.metrics.years"), value: "20 anos" },
        { label: t("care.institutional.metrics.units"), value: "+100" },
        { label: t("care.institutional.metrics.equipments"), value: "+600" },
        { label: t("care.institutional.metrics.cities"), value: "+50" },
        { label: t("care.institutional.metrics.states"), value: "12" },
        { label: t("care.institutional.metrics.reports"), value: "+1 milhão" },
      ],
      callouts: [
        {
          tone: "teal",
          text: t("care.institutional.callout"),
        },
      ],
    },
    "care-market": {
      id: "care-market",
      badge: "Ícone 1",
      title: t("care.market.title"),
      subtitle: t("care.market.subtitle"),
      accent: "teal",
      Icon: TrendingUp,
      bullets: [t("care.market.deficitTitle"), t("care.market.longevityTitle")],
      description: t("care.market.description"),
      imageSlots: [
        { src: "/assets/care_imagem/oportunidade de mercado/IMG-20240405-WA0155.jpg", alt: "Oportunidade de mercado 1", ratio: "landscape" },
        { src: "/assets/care_imagem/oportunidade de mercado/IMG-20240612-WA0167.jpg", alt: "Oportunidade de mercado 2", ratio: "landscape", zoom: 1.6 },
      ],
      tables: [
        {
          title: t("care.market.tableTitle"),
          columns: ["Dado", "Valor"],
          rows: [
            ["Faturamento anual na saúde suplementar", "R$ 26 bilhões"],
            ["Exames de imagem em 2024", "24 milhões (+43% a.a.)"],
            ["Posição entre categorias de exames no Brasil", "2ª maior categoria"],
            ["Crescimento projetado (CAGR)", "8.5% ao ano"],
          ],
        },
      ],
      textBlocks: [
        {
          title: t("care.market.deficitTitle"),
          body: t("care.market.deficitBody"),
        },
        {
          title: t("care.market.longevityTitle"),
          body: t("care.market.longevityBody"),
        },
      ],
      callouts: [
        {
          tone: "teal",
          text: t("care.market.callout"),
        },
      ],
      source: "Fonte: ANS, DATASUS, ANAHP (2024)",
    },
    "care-problem": {
      id: "care-problem",
      badge: "Ícone 2",
      title: t("care.problem.title"),
      subtitle: t("care.problem.subtitle"),
      accent: "navy",
      Icon: AlertTriangle,
      bullets: [t("care.problem.impactTitle")],
      description: t("care.problem.description"),
      imageSlots: [],
      lists: [
        {
          title: t("care.problem.impactTitle"),
          items: t("care.problem.impacts", { returnObjects: true }) as string[],
        },
      ],
      callouts: [
        {
          tone: "warning",
          text: t("care.problem.callout"),
        },
      ],
    },
    "care-solution": {
      id: "care-solution",
      badge: "Ícone 3",
      title: t("care.solution.title"),
      subtitle: t("care.solution.subtitle"),
      accent: "teal",
      Icon: CheckCircle2,
      bullets: [t("care.solution.benefitsTitle")],
      description: t("care.solution.description"),
      imageSlots: [
        { src: "/assets/care_imagem/solucao-care-image/IMG CRI 04.png", alt: "Solução CareImagem", ratio: "landscape" },
      ],
      lists: [
        {
          title: t("care.solution.benefitsTitle"),
          items: t("care.solution.benefits", { returnObjects: true }) as string[],
        },
      ],
      textBlocks: [
        {
          title: t("care.solution.preventiveTitle"),
          body: t("care.solution.preventiveBody"),
        },
      ],
    },
    "care-ecosystem": {
      id: "care-ecosystem",
      badge: "Ícone 4",
      title: t("care.ecosystem.title"),
      subtitle: t("care.ecosystem.subtitle"),
      accent: "teal",
      Icon: RefreshCcw,
      bullets: [t("care.ecosystem.techTitle"), t("care.ecosystem.logisticsTitle")],
      description: t("care.ecosystem.description"),
      imageSlots: [
        { src: "/assets/care_imagem/ecossistema-integrado/360 CARE NOVA.png", alt: "Ecossistema Integrado 360°", ratio: "landscape", naked: true, maxWidth: "50%" },
      ],
      tables: [
        {
          title: t("care.ecosystem.tableTitle"),
          columns: ["Empresa", "Função no Negócio"],
          rows: [
            ["Telerad", "Equipamentos via locação (Redução Drástica de CAPEX)"],
            ["THE Imagem", "Manutenção técnica preventiva e corretiva inclusa"],
            ["Galaxy", "Sistema PACS + IA + Laudos Remotos 24h/7"],
            ["GI Logística", "Projeto, implantação e logística técnica especializada"],
          ],
        },
      ],
      textBlocks: [
        {
          title: t("care.ecosystem.techTitle"),
          body: t("care.ecosystem.techBody"),
        },
        {
          title: t("care.ecosystem.logisticsTitle"),
          body: t("care.ecosystem.logisticsBody"),
        },
      ],
    },
    "care-operations": {
      id: "care-operations",
      badge: "Ícone 5",
      title: t("care.operations.title"),
      subtitle: t("care.operations.subtitle"),
      accent: "navy",
      Icon: Building2,
      bullets: [t("care.operations.revenueTitle"), t("care.operations.journeyTitle")],
      description: t("care.operations.description"),
      lists: [
        {
          title: t("care.operations.revenueTitle"),
          items: t("care.operations.revenues", { returnObjects: true }) as string[],
        },
      ],
      imageSlots: [
        { src: "/assets/care_imagem/operacao-completa-flexivel/IMG CRI 06.png", alt: "Operação completa 1", ratio: "landscape" },
        { src: "/assets/care_imagem/operacao-completa-flexivel/IMG CRI 10.png", alt: "Operação completa 2", ratio: "landscape" },
      ],
      modelCards: [
        {
          title: "Modelo Start",
          subtitle: "Ideal para entrada enxuta e mercados iniciais.",
          items: [
            "Raios X Digital de alta performance",
            "Ultrassonografia multiespecialidade",
            "Mamografia Digital",
            "Exames Laboratoriais",
            "Telemedicina e Triagem Digital",
          ],
        },
        {
          title: "Modelo Plus",
          subtitle: "Equilíbrio entre investimento e mix de exames.",
          items: [
            "Tudo do Modelo Start +",
            "Tomografia Computadorizada (16/32 canais)",
            "Densitometria Óssea"
          ],
        },
        {
          title: "Modelo Premium",
          subtitle: "Centro de referência regional completo.",
          items: [
            "Tudo do Modelo Plus +",
            "Ressonância Magnética (1.5T)",
            "Alta complexidade diagnóstica"
          ],
        },
      ],
      textBlocks: [
        {
          title: t("care.operations.journeyTitle"),
          body: t("care.operations.journeyBody"),
        },
      ],
    },
    "care-implantation": {
      id: "care-implantation",
      badge: "Ícone 6",
      title: t("care.implantation.title"),
      subtitle: t("care.implantation.subtitle"),
      accent: "navy",
      Icon: Hammer,
      bullets: [t("care.implantation.phasesTitle")],
      description: t("care.implantation.description"),
      imageSlots: [
        { src: "/assets/care_imagem/implementacao-e-suporte/freepik_highquality-corporate-pho_2852768551.png", alt: "Implantação e suporte", ratio: "landscape" },
      ],
      lists: [
        {
          title: t("care.implantation.supportTitle"),
          image: "/assets/care_imagem/implementacao-e-suporte/26.png",
          zoom: 1.09,
        },
      ],
      textBlocks: [
        {
          title: t("care.implantation.phasesTitle"),
          body: t("care.implantation.phasesBody"),
        },
        {
          title: t("care.implantation.brandTitle"),
          body: t("care.implantation.brandBody"),
        },
      ],
    },
    "care-efficiency": {
      id: "care-efficiency",
      badge: "Ícone 7",
      title: t("care.efficiency.title"),
      subtitle: t("care.efficiency.subtitle"),
      accent: "teal",
      Icon: Coins,
      bullets: [t("care.efficiency.riskTitle"), t("care.efficiency.optTitle")],
      description: t("care.efficiency.description"),
      imageSlots: [],
      tables: [
        {
          title: t("care.efficiency.tableTitle"),
          columns: ["Critério", "Modelo Tradicional", "CareImagem"],
          rows: [
            ["Investimento inicial", "Muito Alto (Compra)", "Reduzido (Locação)"],
            ["Manutenção", "Custo Extra e Incerto", "Inclusa no ecossistema"],
            ["Sistemas / Software", "Contratação Separada", "Nativo e Integrado"],
            ["Corpo Médico local", "Custo Fixo Elevado", "Demanda sob medida"],
          ],
        },
      ],
      textBlocks: [
        {
          title: t("care.efficiency.riskTitle"),
          body: t("care.efficiency.riskBody"),
        },
        {
          title: t("care.efficiency.optTitle"),
          body: t("care.efficiency.optBody"),
        },
      ],
    },
    "care-scale": {
      id: "care-scale",
      badge: "Ícone 8",
      title: t("care.scale.title"),
      subtitle: t("care.scale.subtitle"),
      accent: "teal",
      Icon: Rocket,
      bullets: [t("care.scale.diffTitle")],
      description: t("care.scale.description"),
      imageSlots: [
        { src: "/assets/care_imagem/resultado-escala/IMG CRI 13.png", alt: "Resultado e escala", ratio: "landscape" },
      ],
      lists: [
        {
          title: t("care.scale.diffTitle"),
          items: t("care.scale.diffs", { returnObjects: true }) as string[],
        },
        {
          title: t("care.scale.profileTitle"),
          items: t("care.scale.profiles", { returnObjects: true }) as string[],
        },
      ],
      textBlocks: [
        {
          title: t("care.scale.perpetuityTitle"),
          body: t("care.scale.perpetuityBody"),
        },
      ],
      tables: [
        {
          title: t("care.scale.faqTitle"),
          columns: ["Pergunta", "Resposta"],
          rows: [
            ["Preciso ser médico?", "Não. Porém, a unidade terá RT técnico médico."],
            ["Quanto tempo para inaugurar?", "De 4 a 8 meses, dependendo do modelo."],
            ["E a parte regulatória?", "Nossa consultoria orienta toda a conformidade ANVISA."],
          ],
        },
      ],
      callouts: [
        {
          tone: "teal",
          text: t("care.scale.callout"),
        },
      ],
    },
  };

  const content = CARE_PRESENTATION_CONTENT[modalId];

  if (!content) {
    return null;
  }

  return (
    <motion.div
      className="mv-care-screen"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={(_, info) => {
        const threshold = 50;
        if (info.offset.x < -threshold) goNext();
        else if (info.offset.x > threshold) goPrev();
      }}
    >
      <div className="mv-care-screen__grid" aria-hidden="true" />

      <ArrowButton to={nextUrl} direction="right" label={t("company.common.all")} ringColor="#091f4a" />
      <HomeButton label={t("company.common.home")} ringColor="#091f4a" />
      <ArrowButton to={prevUrl} direction="left" label={t("company.common.all")} ringColor="#091f4a" />

      <button type="button" className="mv-care-close" onClick={onClose} aria-label="Fechar apresentação da CareImagem">
        <X size={22} />
      </button>

      <div className="mv-care-shell">
        <header className="mv-care-header">
          <div className="mv-care-header__copy w-full">
            <div className="flex flex-col gap-8 mb-10">
              <img
                src="/assets/careimagem-logo.svg"
                alt="CareImagem"
                className="h-14 lg:h-20 w-auto object-contain self-start"
              />
              <div>
                {content.title !== "CareImagem" && (
                  <h1 className="font-clash text-5xl md:text-7xl font-black text-[#091f4a] leading-[1.1] mb-4">
                    {content.title}
                  </h1>
                )}
                <p className="font-general text-3xl md:text-4xl font-bold text-[#00b4b0] tracking-tight">
                  {content.subtitle}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mb-10">
              {content.bullets.map((bullet) => (
                <span key={bullet} className="px-6 py-2 bg-[#091f4a]/5 border border-[#091f4a]/10 rounded-full font-general text-sm font-bold text-[#091f4a] tracking-wider uppercase">
                  {bullet}
                </span>
              ))}
            </div>
          </div>
        </header>

        <div className="flex flex-col lg:flex-row gap-12 items-center mt-0">
          <p className="font-general text-2xl md:text-3xl text-gray-700 leading-relaxed font-medium flex-1">
            {content.description}
          </p>

          {/* In-header image for specific modals (e.g. implantation) */}
          {modalId === "care-implantation" && content.imageSlots.length === 1 && (
            <div className="flex-1 w-full max-w-lg">
              <div className="rounded-[40px] overflow-hidden shadow-2xl border-2 border-white/20">
                <img
                  src={content.imageSlots[0].src}
                  alt={content.imageSlots[0].alt ?? ""}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          )}
        </div>

        {content.imageSlots.length === 1 && modalId !== "care-implantation" && (() => {
          const slot = content.imageSlots[0];
          return slot.naked ? (
            <section className="mt-16 flex justify-center">
              <img
                src={slot.src}
                alt={slot.alt ?? ""}
                className="h-auto object-contain"
                style={{ maxWidth: slot.maxWidth ?? "60%" }}
                loading="lazy"
              />
            </section>
          ) : (
            <section className="mt-16 flex justify-center">
              <div className="w-full max-w-[85%] mx-auto rounded-[48px] overflow-hidden shadow-2xl">
                <img
                  src={slot.src}
                  alt={slot.alt ?? ""}
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </section>
          );
        })()}

        {content.imageSlots.length > 1 && (
          <section className="mt-16">
            <div className="grid grid-cols-2 gap-10">
              {content.imageSlots.map((slot, i) => (
                <div key={i} className="rounded-[48px] overflow-hidden shadow-2xl bg-white flex items-center justify-center">
                  <img
                    src={slot.src}
                    alt={slot.alt ?? ""}
                    className="w-full h-auto object-contain transition-transform"
                    style={slot.zoom ? { transform: `scale(${slot.zoom})`, transformOrigin: "center center" } : undefined}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {content.textBlocks?.length ? (
          <section className="mt-20">
            <div className="grid grid-cols-1 gap-12">
              {content.textBlocks.map((block) => {
                // Check if this is the Patient Journey block to render a custom timeline
                const isJourney = block.title === t("care.operations.journeyTitle");
                const isPhases = block.title === t("care.implantation.phasesTitle");

                if (isJourney) {
                  const steps = [
                    "Agendamento Inteligente",
                    "Recepção Acolhedora",
                    "Triagem Técnica",
                    "Execução Precisa",
                    "Entrega Digital de Laudos"
                  ];

                  return (
                    <article key={block.title} className="bg-white border-2 border-gray-50 rounded-[30px] md:rounded-[40px] p-6 md:p-12 shadow-2xl transition-all duration-500 hover:border-[#00b4b0]/20 hover:-translate-y-2 group">
                      <h2 className="font-clash text-2xl md:text-4xl font-black mb-8 md:mb-12 text-[#091f4a] leading-tight">
                        {block.title}
                      </h2>

                      <div className="relative mb-12 md:mb-16 px-2 md:px-4">
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-10 relative z-10">
                          {steps.map((step, idx) => (
                            <div key={idx} className="flex flex-row md:flex-col items-center md:text-center group/step gap-4 md:gap-0">
                              <div className="relative flex justify-center items-center md:mb-6 shrink-0">
                                {idx < steps.length - 1 && (
                                  <>
                                    <div className="absolute left-1/2 w-full h-1 bg-[#00b4b0]/20 z-0 hidden md:block"></div>
                                    <div className="absolute top-1/2 w-1 h-full bg-[#00b4b0]/20 z-0 md:hidden"></div>
                                  </>
                                )}

                                <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#00b4b0] shadow-lg shadow-[#00b4b0]/40 flex items-center justify-center transition-transform group-hover/step:scale-125 border-4 border-white z-10">
                                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white"></div>
                                </div>
                              </div>

                              <span className="font-general text-base md:text-lg font-bold text-gray-800 leading-tight">
                                {step}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <p className="font-general text-lg md:text-2xl text-gray-700 leading-relaxed font-semibold border-t border-gray-100 pt-8 md:pt-10">
                        Cada etapa é monitorada por indicadores de performance (KPIs) em tempo real.
                      </p>
                    </article>
                  );
                }

                if (isPhases) {
                  const phases = [
                    "Estudo de Viabilidade e Ponto",
                    "Projeto Executivo e Aprovação Sanitária",
                    "Reforma e Adequação Técnica",
                    "Instalação e Treinamento de Equipe",
                    "Soft Opening e Inauguração Oficial"
                  ];

                  return (
                    <article key={block.title} className="bg-white border-2 border-gray-50 rounded-[30px] md:rounded-[40px] p-6 md:p-12 shadow-2xl transition-all duration-500 hover:border-[#00b4b0]/20 hover:-translate-y-2 group">
                      <h2 className="font-clash text-2xl md:text-4xl font-black mb-6 md:mb-10 text-[#091f4a] leading-tight">
                        {block.title}
                      </h2>
                      <p className="font-general text-lg md:text-xl text-gray-500 mb-8 md:mb-10 font-medium">
                        Nossa equipe acompanha o franqueado em 5 fases críticas:
                      </p>
                      <div className="space-y-4 md:space-y-6">
                        {phases.map((phase, idx) => (
                          <div key={idx} className="flex items-center gap-4 md:gap-6 group/phase">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-[#00b4b0]/10 flex items-center justify-center font-clash text-xl md:text-2xl font-black text-[#00b4b0] group-hover/phase:bg-[#00b4b0] group-hover/phase:text-white transition-all">
                              {idx + 1}
                            </div>
                            <span className="font-general text-lg md:text-2xl text-gray-700 font-bold">
                              {phase}
                            </span>
                          </div>
                        ))}
                      </div>
                    </article>
                  );
                }

                return (
                  <article key={block.title} className="bg-white border-2 border-gray-50 rounded-[30px] md:rounded-[40px] p-6 md:p-12 shadow-2xl transition-all duration-500 hover:border-[#00b4b0]/20 hover:-translate-y-2 group">
                    <h2 className="font-clash text-2xl md:text-4xl font-black mb-6 md:mb-8 text-[#091f4a] leading-tight">
                      {block.title}
                    </h2>
                    {block.body && (
                      <p className="font-general text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                        {block.body}
                      </p>
                    )}
                    {block.image && (
                      <div className="mt-6 rounded-[24px] overflow-hidden shadow-lg border border-gray-100 flex items-center justify-center bg-white">
                        <img
                          src={block.image}
                          alt={block.title}
                          className="w-full h-auto object-contain transition-transform"
                          style={block.zoom ? { transform: `scale(${block.zoom})`, transformOrigin: "center center" } : undefined}
                        />
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </section>
        ) : null}

        {content.metrics?.length ? (
          <section className="mt-12 md:mt-16 space-y-6 md:space-y-8">
            <div className="font-clash text-2xl md:text-4xl font-black text-[#00b4b0] border-b border-[#00b4b0]/20 pb-4">
              Apoiado pela experiência do Grupo Imagem, que já alcança:
            </div>
            <div className="grid grid-cols-1 gap-6 md:gap-10">
              {content.metrics.map((metric) => (
                <article key={metric.label} className="bg-white border-2 border-gray-50 rounded-[30px] md:rounded-[40px] p-8 md:p-12 shadow-2xl flex flex-col items-center text-center gap-4 md:gap-6 group hover:border-[#00b4b0]/20 transition-all duration-500">
                  <strong className="font-clash text-5xl md:text-7xl font-black text-[#00b4b0] group-hover:scale-110 transition-transform">
                    {metric.value}
                  </strong>
                  <span className="font-general text-base md:text-lg font-black text-gray-500 uppercase tracking-[0.15em]">
                    {metric.label}
                  </span>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {content.lists?.length ? (
          <section className="mt-16 md:mt-20">
            <div className="grid grid-cols-1 gap-8 md:gap-12">
              {content.lists.map((list) => (
                <article key={list.title} className="bg-white border-2 border-gray-50 rounded-[30px] md:rounded-[40px] p-6 md:p-12 shadow-2xl transition-all duration-500 hover:border-[#00b4b0]/20 hover:-translate-y-2 group">
                  <h2 className="font-clash text-2xl md:text-4xl font-black mb-8 md:mb-10 text-[#091f4a] leading-tight">
                    {list.title}
                  </h2>
                  {list.items && (
                    <ul className={`grid gap-x-12 gap-y-6 md:gap-y-10 ${list.items.length > 6 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}>
                      {list.items.map((item) => {
                        const [title, ...rest] = item.split(": ");
                        const description = rest.join(": ");

                        return (
                          <li key={item} className="flex items-start gap-4 md:gap-6">
                            <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-[#00b4b0] shrink-0 mt-1" />
                            <div className="flex flex-col">
                              <span className="font-general text-xl md:text-3xl text-[#091f4a] font-black leading-tight mb-2">
                                {title}
                              </span>
                              {description && (
                                <span className="font-general text-lg md:text-2xl text-gray-500 leading-relaxed font-medium">
                                  {description}
                                </span>
                              )}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                  {list.image && (
                    <div className="mt-4 rounded-[24px] overflow-hidden shadow-lg border border-gray-100 flex items-center justify-center bg-white">
                      <img
                        src={list.image}
                        alt={list.title}
                        className="w-full h-auto object-contain transition-transform"
                        style={list.zoom ? { transform: `scale(${list.zoom})`, transformOrigin: "center center" } : undefined}
                      />
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {content.modelCards?.length ? (
          <section className="mt-16 md:mt-20">
            <div className="grid grid-cols-1 gap-8 md:gap-12">
              {content.modelCards.map((card) => (
                <article key={card.title} className="bg-white border-2 border-gray-50 rounded-[30px] md:rounded-[40px] p-6 md:p-12 shadow-2xl transition-all duration-500 hover:border-[#00b4b0]/20 hover:-translate-y-2 group">
                  <h2 className="font-clash text-2xl md:text-4xl font-black mb-6 md:mb-10 text-[#091f4a] leading-tight">
                    {card.title}
                  </h2>
                  <p className="font-general text-lg md:text-2xl text-gray-500 mb-8 md:mb-10 leading-relaxed font-medium">
                    {card.subtitle}
                  </p>
                  <ul className="space-y-4 md:space-y-6">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-start gap-4 md:gap-6">
                        <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-[#00b4b0] shrink-0 mt-1" />
                        <span className="font-general text-lg md:text-2xl text-gray-700 leading-relaxed font-semibold">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {content.tables?.length ? (
          <section className="mt-16 space-y-12">
            {content.tables.map((table, index) => (
              <div key={`${table.title ?? "table"}-${index}`} className="space-y-6">
                {table.title && (
                  <h3 className="font-clash text-3xl font-bold text-[#091f4a]">
                    {table.title}
                  </h3>
                )}
                <div className="bg-white border-2 border-gray-50 rounded-[40px] overflow-hidden shadow-2xl">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50 border-b-2 border-gray-100">
                        {table.columns.map((col) => (
                          <th key={col} className="px-10 py-8 text-left font-clash text-base font-black text-[#00b4b0] tracking-wider uppercase">
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {table.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-gray-50 transition-colors">
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className={`px-10 py-8 font-general text-2xl text-gray-700 leading-relaxed ${cIdx === 0 ? "font-black text-[#091f4a]" : "font-medium"}`}>
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </section>
        ) : null}

        {content.callouts?.length ? (
          <section className="mt-24 space-y-8">
            {content.callouts.map((callout, idx) => (
              <div
                key={idx}
                className={`p-14 rounded-[48px] border-l-[12px] shadow-2xl flex items-center gap-10 ${callout.tone === "warning"
                  ? "bg-amber-50 border-amber-400 text-amber-900"
                  : "bg-[#00b4b0]/5 border-[#00b4b0] text-[#091f4a]"
                  }`}
              >
                <AlertTriangle className={`w-14 h-14 shrink-0 ${callout.tone === "warning" ? "text-amber-500" : "text-[#00b4b0]"}`} />
                <p className="font-general text-2xl font-bold leading-relaxed">
                  {callout.text}
                </p>
              </div>
            ))}
          </section>
        ) : null}

        {content.source && (
          <footer className="mt-16 pt-8 border-t border-gray-100 flex justify-end">
            <span className="font-general text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">
              {content.source}
            </span>
          </footer>
        )}
      </div>
    </motion.div>
  );
};

export const isCarePresentationModalId = (value: string) => {
  return (
    CARE_NODE_DEFINITIONS.some((def) => def.id === value) || value === CARE_INSTITUTIONAL_ID
  );
};
