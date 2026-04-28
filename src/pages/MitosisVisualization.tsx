import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";
import {
  Brain
} from "lucide-react";
import "./MitosisVisualization.css";

// External Page Imports
import ConsultoriaPage from './ConsultoriaPage.tsx';
import GIEngenhariaPage from './GIEngenhariaPage.tsx';
import DiferenciaisGiEngenharia from './DiferenciaisGiEngenhatia.tsx';
import LogisticaPage from './LogisticaPage.tsx';
import TheImagemPage from './TheImagemPage.tsx';
import DifferentialsTheImagem from './DifferentialsTheImagem.tsx';
import DiferenciaisConsultoriaPages from './DiferenciaisConsultoriaPages.tsx';
import LogisticaDifferentials from './LogisticaDifferentials.tsx';
import TeleradPage from "./TeleradPage.tsx";
import ComparativeTelerad from "./ComparativeTelerad.tsx";
import PrivateFriendsTelerad from "./PrivateFriendsTelerad.tsx";
import UnidadesMoveisPage from "./UnidadesMoveisPage.tsx";
import BrazilMapAll from "./BrazilMapAll";
import GalaxyMainPage, { GalaxyEcosystemPage, GalaxyViewerPage } from "./GalaxyPresentationPage";
import GroupInfoPage from "./GroupInfoPage";
import { useTranslation } from "react-i18next";
import Goo from '../lib/gooey-react-master/gooey-react-master/src/index';
import { ErrorBoundary } from '../ErrorBoundary';
import {
  CarePresentationModal,
  CARE_INSTITUTIONAL_ID,
  CARE_NODE_DEFINITIONS,
  isCarePresentationModalId,
} from "./CareImagePresentation";

// ─── Auxiliary components ─────────────────────────────────────────────────────────────

// ─── Types ──────────────────────────────────────────────────────────────────
export type ViewState = "grupo" | "care";
export interface ONode {
  id?: string;
  angle: number;
  dist: number;
  content: React.ReactNode;
};

// ─── Viewport ───────────────────────────────────────────────────────────────
const useViewport = () => {
  const [size, setSize] = useState({ w: window.innerWidth, h: window.innerHeight });
  useEffect(() => {
    const cb = () => setSize({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener("resize", cb);
    return () => window.removeEventListener("resize", cb);
  }, []);
  return size;
};

// ─── Small node components ──────────────────────────────────────────────────
const CareNodeBubble = ({
  icon,
  label,
  accent,
}: {
  icon: React.ReactNode;
  label: string;
  accent: "teal" | "navy";
}) => (
  <div className={`mv-care-node-wrap mv-care-node-wrap--${accent} group`}>
    <div className="mv-care-node-pulse--slow" />
    <div className="mv-care-node-pulse" />
    <div className={`mv-care-node mv-care-node--${accent}`}>{icon}</div>
    <div className="mv-care-node__label">{label}</div>
  </div>
);

// Particle for the scission effect
const ScissionParticle = ({ x, y, dx, dy, delay }: { x: number, y: number, dx: number, dy: number, delay: number }) => (
  <motion.circle
    initial={{ cx: x, cy: y, r: 4, opacity: 1 }}
    animate={{ cx: x + dx, cy: y + dy, r: 0, opacity: 0 }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    fill="#c5e24a"
  />
);

const AppBox = ({ img, icon, label }: { img?: string; icon?: React.ReactNode; label?: string }) => (
  <div className="mv-appbox-wrap">
    <div className="mv-appbox-pulse--slow"></div>
    <div className="mv-appbox-pulse"></div>
    <div className="mv-appbox">
      <div className="mv-appbox-inner" title={label}>
        {img ? <img src={img} alt={label} className="mv-appbox-img" /> : icon}
      </div>
    </div>
  </div>
);

// ─── NEW badge ──────────────────────────────────────────────────────────────
const NewBadge = ({ className = "-top-2 -right-2" }: { className?: string }) => (
  <span className={`absolute ${className} z-50 bg-[#003B5C] text-white text-[11px] font-black uppercase tracking-wide px-2 py-1 rounded-full shadow-md leading-none pointer-events-none select-none`}>
    NEW
  </span>
);

const AppCircle = ({ icon, label, black }: { icon: React.ReactNode; label?: string; black?: boolean }) => (
  <div className="mv-appcircle-wrap group">
    <div className={`mv-appcircle-pulse--slow ${black ? '!bg-black/20' : ''}`}></div>
    <div className={`mv-appcircle-pulse ${black ? '!bg-black/30' : ''}`}></div>
    <div className={`mv-appcircle ${black ? 'bg-[#050505] border-2 border-white/20 shadow-2xl shadow-black/80' : ''}`}>
      <div className="flex items-center justify-center w-full h-full p-2">
        {icon}
      </div>
    </div>
    {label && (
      <div
        className="absolute top-full left-1/2 transform -translate-x-1/2 text-primary text-xs opacity-0 group-hover:opacity-100 mt-2 transition-opacity bg-white px-3 py-1 rounded-lg shadow-xl whitespace-nowrap pointer-events-none"
        style={{ zIndex: 9999 }}
      >
        {label}
      </div>
    )}
  </div>
);

// ─── Framer Motion Orbit Ring ───────────────────────────────────────────────
const OrbitRing = ({
  nodes, diameter, duration = 50, ccw = false, opacity = 1,
  onNodeClick, explodeOut = false
}: {
  nodes: ONode[];
  diameter: number;
  duration?: number;
  ccw?: boolean;
  opacity?: number;
  onNodeClick?: (id: string) => void;
  explodeOut?: boolean;
}) => {
  return (
    <div
      className="mv-orbit-container"
      style={{
        width: diameter,
        height: diameter,
        opacity,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 10,          // beats GrupoCore (z-5) — all nodes & tooltips render above the nucleus
      }}
    >
      <svg
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none",
        }}
      >
        <motion.g
          animate={{ rotate: ccw ? -360 : 360 }}
          transition={{ ease: "linear", duration: duration, repeat: Infinity }}
          style={{ originX: "50%", originY: "50%" }}
        >
          <circle
            cx="50%"
            cy="50%"
            r={diameter / 2}
            fill="none"
            stroke="rgba(255, 255, 255, 0.95)"
            strokeWidth="3"
            strokeDasharray="20 15"
          />
        </motion.g>
      </svg>

      {nodes.map((n, i) => {
        const rad = (n.angle * Math.PI) / 180;
        const x = Math.cos(rad) * n.dist;
        const y = Math.sin(rad) * n.dist;

        return (
          <motion.div
            key={i}
            onClick={(e) => {
              if (n.id && onNodeClick) {
                e.stopPropagation();
                onNodeClick(n.id);
              }
            }}
            initial={explodeOut
              ? { left: diameter / 2, top: diameter / 2, x: "-50%", y: "-50%", scale: 0, opacity: 0 }
              : { left: diameter / 2 + x, top: diameter / 2 + y, x: "-50%", y: "-50%" }
            }
            animate={{ left: diameter / 2 + x, top: diameter / 2 + y, x: "-50%", y: "-50%", scale: 1, opacity: 1 }}
            whileHover={{ zIndex: 200 }}
            transition={explodeOut ? {
              type: "spring", stiffness: 60, damping: 10,
              delay: 1.2 + i * 0.08
            } : { duration: 0 }}
            style={{
              position: "absolute",
              cursor: n.id ? "pointer" : "default",
              pointerEvents: "auto",
              zIndex: 6,
            }}
          >
            {n.content}
          </motion.div>
        );
      })}
    </div>
  );
};

// ─── Cell core components ───────────────────────────────────────────────────
const GrupoCore = ({ radius, nucleusRef, onClick }: { radius: number; nucleusRef: React.Ref<HTMLDivElement>; onClick?: () => void }) => {
  const s = radius * 0.92;
  const { t } = useTranslation();
  return (
    <div
      ref={nucleusRef}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black rounded-full flex items-center justify-center border-4 border-lemon shadow-2xl shadow-lemon/50 z-20 cursor-pointer hover:scale-105 transition-transform pointer-events-auto"
      style={{ width: s, height: s }}
      onClick={onClick}
    >
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        <div className="text-center rounded-full relative w-full h-full flex items-center justify-center">
          <div className="w-[55%] h-[55%] lg:w-[60%] lg:h-[60%] mx-auto text-black flex items-center justify-center">
            <img
              src="assets/g184.png"
              alt="Logo do grupo imagem"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="absolute bottom-[18%] lg:bottom-[20%] left-1/2 transform -translate-x-1/2 w-[90%] text-center text-white/90 text-sm md:text-base lg:text-lg font-semibold tracking-wide uppercase">
            {t("company.common.subtitle")}
          </span>
        </div>
      </div>
    </div>
  );
};

const CareCore = ({ radius, onClick }: { radius: number; onClick?: () => void }) => {
  const { t } = useTranslation();
  const s = radius * 0.92;
  return (
    <button
      type="button"
      className="mv-care-core absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto hover:scale-110 transition-transform"
      style={{ width: s, height: s }}
      onClick={onClick}
    >
      <div className="mv-care-core__inner">
        <img
          src="/assets/careimagem-logo.svg"
          alt="CareImagem"
          className="mv-care-core__logo"
        />
        <span className="mv-care-core__tagline">{t("care.institutional.tagline")}</span>
      </div>
    </button>
  );
};

// ─── Toggle Button ────────────────────────────────────────────────────────────
const MitosisToggleFAB = ({
  targetView,
  onToggle,
  stage
}: {
  targetView: "grupo" | "care";
  onToggle: () => void;
  stage: number;
}) => {
  // Only show the fixed FAB when in Care view AND the animation has finished (stage 6)
  if (targetView === "grupo" || stage < 6) return null;

  return (
    <div
      onClick={onToggle}
      className="mv-toggle-fab mv-toggle-fab--care"
      style={{
        position: "fixed",
        bottom: "40px",
        right: "40px",
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        backgroundColor: "#000000",
        boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        zIndex: 50,
        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
      }}
    >
      <img
        src="/assets/g184.png"
        alt="Toggle View"
        style={{
          width: "60%",
          height: "60%",
          objectFit: "contain",
          filter: "brightness(0) invert(1)"
        }}
      />
    </div>
  );
};

function MitosisSimulation({ targetView, onToggleView }: { targetView: "grupo" | "care"; onToggleView: () => void }) {
  const { t } = useTranslation();
  const { w, h } = useViewport() as { w: number; h: number };
  const stageH = h * 0.78;

  // State management for animation stages and UI
  const [stage, setStage] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const activeModal = searchParams.get("modal");
  const nucleusRef = useRef<HTMLDivElement>(null);

  const isPortrait = h > w;
  const isMobile = w < 600;

  // Calculate maxR based on viewport - the maximum radius for the cell
  // For notebooks/monitors (landscape), we need a more compact view to avoid overlaps
  // For small mobile phones, we also scale down significantly
  let baseMaxR = isPortrait
    ? Math.min(w, h * 0.78) * 0.40
    : Math.min(w, h) * 0.40;

  if (isMobile) {
    baseMaxR = w * 0.32; // More compact on small phones
  }

  const maxR = baseMaxR;
  const careTargetR = maxR * 0.82;

  // Stages positioning multipliers
  const distMult = isMobile ? 0.75 : 1;

  const stages = [
    // Stage 0: Grupo resting at center
    { lx: 0, rx: 0, lr: maxR, rr: 1, bx: 0, br: 0, scale: 1 },

    // Stage 1: Prophase - Care nucleates, membrane starts to swell on the right
    { lx: -maxR * 0.05, rx: maxR * 0.15, lr: maxR * 1.02, rr: maxR * 0.75, bx: maxR * 0.05, br: maxR * 0.9, scale: 0.96 },

    // Stage 2: Metaphase - Elongation becomes visible, cytoplasm stretches
    { lx: -maxR * 0.1, rx: maxR * 0.55 * distMult, lr: maxR, rr: maxR * 0.82, bx: maxR * 0.22, br: maxR * 0.85, scale: 0.9 },

    // Stage 3: Anaphase - Nuclei pull apart, bridge forms (Classic Metaball look)
    { lx: -maxR * 0.22, rx: maxR * 1.15 * distMult, lr: maxR * 0.96, rr: maxR * 0.88, bx: maxR * 0.45, br: maxR * 0.65, scale: 0.82 },

    // Stage 4: Telophase - Constriction Apex, the "snapping point"
    { lx: -maxR * 0.42, rx: maxR * 1.85, lr: maxR * 0.92, rr: maxR * 0.95, bx: maxR * 0.75, br: maxR * 0.35, scale: 0.7 },

    // Stage 5: Cytokinesis (Scission) - Bridge snaps, cells oscillate
    { lx: -maxR * 1.5, rx: maxR * 1.5, lr: maxR, rr: maxR, bx: 0, br: 0, scale: 0.65 },

    // Stage 6: Care centralizing while Grupo exits stage left
    { lx: -maxR * 4, rx: 0, lr: maxR, rr: maxR, bx: 0, br: 0, scale: 1 },
  ];

  const cur = stages[stage] || stages[0];
  const SVG_W = w;
  const SVG_H = stageH;
  const CX = SVG_W / 2;
  const CY = SVG_H / 2;

  const handleNodeClick = (id: string) => {
    setSearchParams(prev => {
      const next = new URLSearchParams(prev);
      next.set("modal", id);
      return next;
    });
  };

  const handleCloseModal = () => {
    setSearchParams(prev => {
      const next = new URLSearchParams(prev);
      next.delete("modal");
      return next;
    });
  };

  const isCareModal = activeModal ? isCarePresentationModalId(activeModal) : false;

  // Biological spring: moderate tension with high mass gives viscous cytoplasm feel
  // Lower friction lets a little wobble through — like real membrane elasticity
  const springOpts = { tension: 42, friction: 13, mass: 2.2 };

  const stageRef = useRef(stage);
  useEffect(() => {
    stageRef.current = stage;
  }, [stage]);

  const { lx, lr, rx, rr, bx, br, scaleMV } = useSpring({
    lx: CX + cur.lx,
    lr: cur.lr,
    rx: CX + cur.rx,
    rr: cur.rr,
    bx: CX + (cur.bx || 0),
    br: cur.br || 0,
    scaleMV: cur.scale,
    config: stage === 5 ? { tension: 170, friction: 12, mass: 1 } : springOpts
  });

  // Sequencer — paces each phase so the viewer can appreciate every moment
  useEffect(() => {
    let active = true;

    const runSequence = async () => {
      const isCare = targetView === "care";

      if (isCare) {
        if (stageRef.current === 6) return;

        // S1 — Care nucleus appears inside Grupo (they look like one deforming cell)
        setStage(1);
        await new Promise(r => setTimeout(r, 520));
        if (!active) return;

        // S2 — Blob elongates
        setStage(2);
        await new Promise(r => setTimeout(r, 620));
        if (!active) return;

        // S3 — Waist forms — constriction begins
        setStage(3);
        await new Promise(r => setTimeout(r, 750));
        if (!active) return;

        // S4 — Bridge at thinnest — most dramatic moment, hold here
        setStage(4);
        await new Promise(r => setTimeout(r, 950));
        if (!active) return;

        // S5 — Scission! Bridge snaps
        setStage(5);
        await new Promise(r => setTimeout(r, 700));
        if (!active) return;

        // S6 — Care zooms in
        setStage(6);
      } else {
        if (stageRef.current === 0) return;
        setStage(0);
      }
    };

    runSequence();
    return () => { active = false; };
  }, [targetView]);


  const r_o = (cur.lr * 1.90) / 2;
  const r_i = (cur.lr * 1.40) / 2;

  const grupoOuter: ONode[] = [
    { id: "consultoria", angle: -90, dist: r_o, content: <AppBox icon={<Brain size={48} color="#00524D" />} label={t("company.menu.hr.team")} /> },
    { id: "gi-engenharia", angle: -45, dist: r_o, content: <div className="scale-110 lg:scale-125"><AppBox img="/assets/gi-engenharia-logo.png" /></div> },
    // Only show toggle if we are in stage 0 (resting Grupo)
    ...(stage === 0 ? [{
      id: "toggle-care", angle: 0, dist: r_o * 1.15, content: (
        <div
          onClick={(e) => { e.stopPropagation(); onToggleView(); }}
          className="mv-toggle-orbit-wrap cursor-pointer hover:scale-110 transition-transform relative flex items-center justify-center"
        >
          <div className="absolute inset-[-8px] rounded-full bg-white/20 animate-pulse"></div>
          <div className="absolute inset-[-16px] rounded-full bg-white/10 animate-pulse" style={{ animationDuration: '3s' }}></div>
          <div className="w-28 h-28 lg:w-36 lg:h-36 bg-white rounded-full p-5 flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.5)] border-2 border-[#c5e24a]/50 relative z-10">
            <img src="/assets/careimagem-logo.svg" className="w-full h-full object-contain" alt="Alternar para Care Imagem" />
          </div>
          <NewBadge className="-top-2 left-1/2 -translate-x-1/2" />
        </div>
      )
    }] : []),
    { id: "telerad", angle: 45, dist: r_o, content: <AppBox img="/assets/telerad-logo.png" /> },
    { id: "logistica", angle: 90, dist: r_o, content: <AppBox img="/assets/logistica-logo.png" label={t("company.common.location")} /> },
    { id: "the-imagem", angle: 145, dist: r_o, content: <AppBox img="/assets/theimagem-logo.png" /> },
    {
      id: "galaxy", angle: 195, dist: r_o, content: (
        <div className="mv-appbox-wrap relative">
          <div className="mv-appbox-pulse--slow"></div>
          <div className="mv-appbox-pulse"></div>
          <div className="mv-appbox !py-4">
            <div className="mv-appbox-inner">
              <img src="/assets/galaxy/logo_galaxy_azul.png" className="mv-appbox-img" alt="Galaxy" />
            </div>
          </div>
          <NewBadge className="-top-2 -left-2" />
        </div>
      )
    },
  ];

  const grupoInner: ONode[] = [
    // Consultoria (Parent: -90°)
    { id: "consultoria-diferenciais", angle: -90, dist: r_i, content: <AppCircle icon={<img src="icons/hands.png" className="mv-appcircle-img" />} label={t("pages.difrencials")} /> },

    // GI Engenharia (Parent: -45°)
    { id: "gi-engenharia-cases", angle: -45, dist: r_i, content: <AppCircle icon={<img src="icons/VETORES-5.png" className="mv-appcircle-img" />} label={t("pages.difrencials")} /> },

    // Telerad (Parent: 45° / 3 items: 30°, 45°, 60°)
    { id: "telerad-comparative", angle: 30, dist: r_i, content: <AppCircle icon={<img src="icons/telerad/VETORES-13.png" className="mv-appcircle-img" />} label={t("pages.marketComparison")} /> },
    { id: "telerad-private", angle: 45, dist: r_i, content: <AppCircle icon={<img src="icons/telerad/VETORES-16.png" className="mv-appcircle-img" />} label={t("pages.privatePartnership")} /> },
    { id: "telerad-unidades-moveis", angle: 60, dist: r_i, content: (
      <div className="relative">
        <AppCircle icon={<img src="/assets/CARRETA AGSUS.svg" className="mv-appcircle-img scale-125" />} label={t("contentPage.unidadesMoveis.navTitle")} />
        <NewBadge className="-top-2 left-1/2 -translate-x-1/2" />
      </div>
    )},

    // Logística (Parent: 90° / 1 item: 90°)
    { id: "logistica-diferenciais", angle: 90, dist: r_i, content: <AppCircle icon={<img src="icons/VETORES-9.png" className="mv-appcircle-img" />} label={t("pages.difrencials")} /> },

    // The Imagem (Parent: 145° / Sub-item offset to 160° to avoid overlap)
    { id: "the-imagem-differentials", angle: 160, dist: r_i, content: <AppCircle icon={<img src="icons/VETORES-21.png" className="mv-appcircle-img" />} label={t("pages.difrencials")} /> },

    // Galaxy (Parent: 195° / Viewer node offset to 210° to separate from parent logo)
    { id: "galaxy-viewer", angle: 210, dist: r_i, content: <AppCircle icon={<img src="/assets/galaxy/eye_viewer.png" className="mv-appcircle-img object-contain scale-125" />} label={t("contentPage.galaxy.viewer.title")} /> },

    // New sub-solution (in the gap between Galaxy and Consultoria)
    {
      id: "info-subsolution", angle: 245, dist: r_i, content: (
        <AppCircle
          icon={<div className="mv-question-mark text-[#00524D] font-bold">?</div>}
        />
      )
    },
  ];

  // Note: careTargetR was moved to the top level for useTransform hooks

  const careNodes: ONode[] = CARE_NODE_DEFINITIONS.map((node, index) => {
    const angle = -90 + index * (360 / CARE_NODE_DEFINITIONS.length);
    const Icon = node.Icon;

    return {
      id: node.id,
      angle,
      dist: (careTargetR * 1.82) / 2,
      content: (
        <CareNodeBubble
          accent={node.accent}
          label={t(node.labelKey)}
          icon={<Icon size={24} strokeWidth={2.2} />}
        />
      ),
    };
  });

  // The Goo component generates an SVG filter definition + wraps children in a div with that filter.
  // For the best metaball/mitosis effect, we put our SVG circles inside the Goo wrapper so the
  // feGaussianBlur + feColorMatrix create the organic "bridge" between the two cells as they separate.
  return (
    <div className={`mv-root ${targetView === "care" ? "mv-root--care" : ""}`}>
      <div className="mv-stage" style={{ height: stageH }}>
        <animated.div style={{ scale: scaleMV, width: "100%", height: "100%", position: "absolute", top: 0, left: 0, transformOrigin: "50% 50%" }}>
          {/* Layer 1: The Gooey Cytoplasm (Biological scission effect) */}
          <Goo intensity="strong" id="mitosis-goo">
            <svg
              width={SVG_W} height={SVG_H}
              style={{ position: "absolute", top: 0, left: 0, zIndex: 1, pointerEvents: "none", overflow: "visible" }}
            >
              <defs>
                <radialGradient id="grad-grupo" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                  <stop offset="55%" stopColor="#e8f4b0" stopOpacity="1" />
                  <stop offset="75%" stopColor="#c5e24a" stopOpacity="1" />
                  <stop offset="90%" stopColor="#b8dc40" stopOpacity="1" />
                  <stop offset="100%" stopColor="#a1ce28" stopOpacity="1" />
                </radialGradient>
                <radialGradient id="grad-care" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                  <stop offset="55%" stopColor="#d4f5f2" stopOpacity="1" />
                  <stop offset="75%" stopColor="#6ed9d0" stopOpacity="1" />
                  <stop offset="90%" stopColor="#4eccc3" stopOpacity="1" />
                  <stop offset="100%" stopColor="#2aada4" stopOpacity="1" />
                </radialGradient>
              </defs>
              <g>
                {/* Main Cytoplasm Blobs - These merge via the Goo filter */}
                <animated.circle cx={lx} cy={CY} r={lr} fill="url(#grad-grupo)" />
                <animated.circle cx={bx} cy={CY} r={br} fill="url(#grad-grupo)" />
                <animated.circle cx={rx} cy={CY} r={rr} fill="url(#grad-care)" style={{ opacity: rr.to(val => (val > 1 ? 1 : 0)) }} />
              </g>
            </svg>
          </Goo>

          {/* Layer 2: The Biological Membrane (Sharp, Rotating, Selective Barrier) */}
          <svg
            width={SVG_W} height={SVG_H}
            style={{ position: "absolute", top: 0, left: 0, zIndex: 2, pointerEvents: "none", overflow: "visible" }}
          >
            <g>
              {/* Outer Ion-Exchange Membrane (Dashed/Rotating) */}
              <animated.circle cx={lx} cy={CY} r={lr.to(r => r + 12)} fill="none" stroke="#c5e24a" className="mv-membrane-outer" />

              {/* Internal Bilayer Glow */}
              <animated.circle cx={lx} cy={CY} r={lr.to(r => r + 4)} fill="none" stroke="white" strokeWidth={1.5} opacity={0.3} />
              {/* Core Pulse Border */}
              <animated.circle cx={lx} cy={CY} r={lr} fill="none" stroke="#c5e24a" strokeWidth={2} className="mv-membrane-pulse" />

              {/* Bridge Membrane - Follows the scission point */}
              <animated.circle cx={bx} cy={CY} r={br.to(r => r > 0 ? r + 6 : 0)} fill="none" stroke="#c5e24a" className="mv-membrane-outer" />

              {/* Scission particles - only rendered at the moment of snapping (Stage 5) */}
              {stage === 5 && Array.from({ length: 12 }).map((_, i) => {
                const angle = (i / 12) * Math.PI * 2;
                const dist = 40 + Math.random() * 80;
                return (
                  <ScissionParticle
                    key={i}
                    x={CX + cur.bx}
                    y={CY}
                    dx={Math.cos(angle) * dist}
                    dy={Math.sin(angle) * dist}
                    delay={i * 0.01}
                  />
                );
              })}
            </g>
          </svg>

          {/* Care toggle ring — small dashed circle that wraps around the Care Imagem button */}
          {stage === 0 && (
            <svg
              width={SVG_W} height={SVG_H}
              style={{ position: "absolute", top: 0, left: 0, zIndex: 20, pointerEvents: "none", overflow: "visible" }}
            >
              <animated.circle
                cx={lx.to(lxV => lxV + cur.lr * 0.95 * 1.15)}
                cy={CY}
                r={75}
                fill="none"
                stroke="#c5e24a"
                strokeWidth={3}
                strokeDasharray="6 14"
                opacity={0.85}
                className="mv-membrane-outer"
              />
            </svg>
          )}

          <animated.div
            className="mv-cell-overlay"
            style={{
              position: "absolute",
              top: "50%", left: "50%",
              zIndex: 3,
              x: lx.to(v => v - CX - maxR),
              y: -maxR,
              width: maxR * 2,
              height: maxR * 2,
              scale: lr.to(v => (maxR > 0 ? v / maxR : 0)),
            }}
          >
            <OrbitRing
              nodes={grupoOuter}
              diameter={maxR * 1.84}
              duration={50}
              onNodeClick={handleNodeClick}
            />
            <OrbitRing
              nodes={grupoInner}
              diameter={maxR * 1.32}
              duration={70}
              ccw
              onNodeClick={handleNodeClick}
            />
            <GrupoCore radius={maxR} nucleusRef={nucleusRef} onClick={() => handleNodeClick("mapa-grupo")} />
          </animated.div>

          {stage > 0 && (
            <animated.div
              className="mv-cell-overlay"
              style={{
                position: "absolute",
                top: "50%", left: "50%",
                zIndex: 3,
                x: rx.to(v => v - CX - careTargetR),
                y: -careTargetR,
                width: careTargetR * 2,
                height: careTargetR * 2,
                scale: rr.to(v => (careTargetR > 0 ? Math.max(0.001, v / careTargetR) : 0.001)),
                opacity: rr.to(v => (v > 5 ? 1 : 0)),
              }}
            >
              {/* Only show orbit nodes & logo after the bridge snaps (stage 4+) */}
              {stage >= 4 && (
                <>
                  <OrbitRing
                    nodes={careNodes}
                    diameter={careTargetR * 1.84}
                    duration={54}
                    opacity={1}
                    explodeOut={true}
                    onNodeClick={handleNodeClick}
                  />
                  <CareCore radius={careTargetR} onClick={() => handleNodeClick(CARE_INSTITUTIONAL_ID)} />
                </>
              )}
            </animated.div>
          )}
        </animated.div>
      </div>

      <MitosisToggleFAB
        targetView={targetView}
        onToggle={onToggleView}
        stage={stage}
      />

      <AnimatePresence>
        {activeModal && isCareModal && (
          <CarePresentationModal modalId={activeModal} onClose={handleCloseModal} />
        )}

        {activeModal && !isCareModal && (
          <motion.div
            className="mv-page-modal"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40, transition: { duration: 0.2 } }}
            transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.3 }}
            style={{
              position: "fixed",
              top: 0, left: 0, right: 0, bottom: 0,
              zIndex: 1000,
              background: "white",
              overflowY: "auto",
              overflowX: "hidden",
              overscrollBehaviorY: "contain",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {/* Modal close button removed as per request */}

            <div style={{ paddingBottom: "140px" }}>
              <ErrorBoundary>
                {activeModal === "consultoria" && <ConsultoriaPage />}
                {activeModal === "consultoria-diferenciais" && <DiferenciaisConsultoriaPages />}
                {activeModal === "gi-engenharia" && <GIEngenhariaPage />}
                {activeModal === "gi-engenharia-cases" && <DiferenciaisGiEngenharia />}
                {activeModal === "telerad" && <TeleradPage />}
                {activeModal === "telerad-comparative" && <ComparativeTelerad />}
                {activeModal === "telerad-private" && <PrivateFriendsTelerad />}
                {activeModal === "telerad-unidades-moveis" && <UnidadesMoveisPage />}
                {activeModal === "logistica" && <LogisticaPage />}
                {activeModal === "logistica-diferenciais" && <LogisticaDifferentials />}
                {activeModal === "the-imagem" && <TheImagemPage />}
                {activeModal === "the-imagem-differentials" && <DifferentialsTheImagem />}
                {activeModal === "mapa-grupo" && <BrazilMapAll />}
                {activeModal === "galaxy" && <GalaxyMainPage />}
                {activeModal === "galaxy-ecosystem" && <GalaxyEcosystemPage />}
                {activeModal === "galaxy-viewer" && <GalaxyViewerPage />}
                {activeModal === "info-subsolution" && <GroupInfoPage />}
              </ErrorBoundary>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function MitosisVisualization() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [targetView, setTargetView] = useState<"grupo" | "care">(
    (searchParams.get("view") as "grupo" | "care") || "grupo"
  );

  useEffect(() => {
    setSearchParams(prev => {
      prev.set("view", targetView);
      return prev;
    }, { replace: true });
  }, [targetView, setSearchParams]);
  const [rev, setRev] = useState(0);

  const handleToggle = () => {
    if (targetView === "care") {
      setTargetView("grupo");
      setRev(r => r + 1);
    } else {
      setTargetView("care");
    }
  };

  return <MitosisSimulation key={rev} targetView={targetView} onToggleView={handleToggle} />;
}
