import React, { useEffect, useRef, useState } from "react";
import { Brain } from "lucide-react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import SimplePage from "./pages/SimplePage.tsx";
import TeleradDashboard from "./pages/TeleradDashboard.tsx";
import TeleradPage from "./pages/TeleradPage.tsx";
import ComparativeTelerad from "./pages/ComparativeTelerad.tsx";
import PrivateFriendsTelerad from "./pages/PrivateFriendsTelerad.tsx";
import SlideshowPage from "./pages/SlideshowPage.tsx";
import { useTranslation } from "react-i18next";
import { LanguageSelector } from "./components/LanguageSelector";
import { useLocation } from "react-router-dom";
import BrazilMapAll  from "./pages/BrazilMapAll.tsx";
// Define types for our menu items
import { MenuItem } from "./types/MenuItem";

import { DashboardProvider } from './contexts/DashboardContext.tsx';
import { DashboardProviderTelerad } from './contexts/DashboardContextTelerad.tsx';

import ConsultoriaPage from './pages/ConsultoriaPage.tsx';
import GIEngenhariaPage from './pages/GIEngenhariaPage.tsx';
import LogisticaPage from './pages/LogisticaPage.tsx';
import TheImagemPage from './pages/TheImagemPage.tsx';
import Differentials from './pages/DifferentialsTheImagem.tsx';
import DiferencialConsultoriaPage from './pages/DiferenciaisConsultoriaPages.tsx';
import LogisticaDifferentials from './pages/LogisticaDifferentials.tsx';
import DiferencialGiEngenhariaPage from "./pages/DiferenciaisGiEngenhatia.tsx";
import MitosisVisualization from "./pages/MitosisVisualization.tsx";
import UnidadesMoveisPage from "./pages/UnidadesMoveisPage.tsx";
import { GalaxyMainPage, GalaxyViewerPage } from "./pages/GalaxyPresentationPage.tsx";


// Page components
// const SimplePage = ({ title }: { title: string }) => (
//   <div className="min-h-screen bg-gray-900 flex items-center justify-center">
//     <h1 className="text-4xl font-bold text-white">{title}</h1>
//   </div>
// );

function MainMenu() {
  const { t } = useTranslation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const centralCircleRef = useRef<HTMLDivElement>(null);
  const [careState, setCareState] = useState<
    "idle" | "launch" | "merge" | "modal" | "return"
  >("idle");
  const [careCoords, setCareCoords] = useState<{
    start: { x: number; y: number };
    end: { x: number; y: number };
  } | null>(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (careState === "modal") {
      document.body.style.overflow = "hidden";
      return;
    }
    document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [careState]);

  // Responsive sizes based on screen width
  const getResponsiveSizes = () => {
    if (windowWidth < 640) {
      // Mobile - structured for extra clarity and hierarchy
      return {
        containerSize: Math.min(windowWidth * 0.95, 380),
        centralCircleSize: Math.min(windowWidth * 0.28, 100), /* Smaller brain area */
        imageSize: Math.min(windowWidth * 0.15, 48),         /* Smaller brain icon */
        outerRadius: Math.min(windowWidth * 0.45, 172),      /* Pushed company orbit further */
        middleRadius: Math.min(windowWidth * 0.26, 95),       /* Pulled sub-solutions orbit closer to core */
        iconSize: 12,    /* Smaller icons */
        mainIconSize: 18,
        strokeWidth: 1.2,
        dashArray: "6 3",
      };
    } else if (windowWidth < 1200) {
      // Tablet / Small Laptop
      const scale = Math.min(windowWidth / 1440, 1);
      return {
        containerSize: 850 * scale,
        centralCircleSize: 340 * scale,
        imageSize: 100 * scale,
        outerRadius: 380 * scale,
        middleRadius: 280 * scale,
        iconSize: 32 * scale,
        mainIconSize: 42 * scale,
        strokeWidth: 4,
        dashArray: "18 8",
      };
    } else {
      // Standard Desktop / Large screens
      return {
        containerSize: 900,
        centralCircleSize: 360,
        imageSize: 110,
        outerRadius: 400,
        middleRadius: 290,
        iconSize: 34,
        mainIconSize: 48,
        strokeWidth: 4.5,
        dashArray: "22 12",
      };
    }
  };

  const sizes = getResponsiveSizes();
  const careSize = windowWidth < 640 ? 56 : 64;
  const careOffset = windowWidth < 640 ? 20 : 24;
  const carePairs = Array.from({ length: 12 }, (_, index) => index);
  const isCareActive =
    careState === "launch" || careState === "merge" || careState === "modal";
  const modalContainer = {
    hidden: {
      opacity: 0,
      scale: 1.04,
      y: 24,
      clipPath: "circle(0% at 50% 50%)",
      filter: "blur(6px)",
    },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      clipPath: "circle(140% at 50% 50%)",
      filter: "blur(0px)",
      transition: {
        duration: 0.9,
        ease: [0.16, 0.84, 0.44, 1],
        staggerChildren: 0.12,
        delayChildren: 0.12,
      },
    },
  };
  const modalItem = {
    hidden: { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  const getCentralPoint = () => {
    const targetRect = centralCircleRef.current?.getBoundingClientRect();
    if (targetRect) {
      return {
        x: targetRect.left + targetRect.width / 2,
        y: targetRect.top + targetRect.height / 2,
      };
    }
    return { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  };

  const getBottomRightPoint = () => ({
    x: window.innerWidth - careOffset - careSize / 2,
    y: window.innerHeight - careOffset - careSize / 2,
  });

  const handleCareClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const startRect = event.currentTarget.getBoundingClientRect();
    const start = {
      x: startRect.left + startRect.width / 2,
      y: startRect.top + startRect.height / 2,
    };
    const end = getCentralPoint();
    setCareCoords({ start, end });
    setCareState("launch");
  };

  const handleCareReturn = () => {
    const start = getCentralPoint();
    const end = careCoords?.start ?? getBottomRightPoint();
    setCareCoords({ start, end });
    setCareState("return");
  };

  const handleCareAnimationComplete = () => {
    if (careState === "launch") {
      setCareState("merge");
      return;
    }
    if (careState === "return") {
      setCareState("idle");
    }
  };

  const menuItems: MenuItem[] = [
    {
      icon: <Brain size={sizes.iconSize} color={"#00524D"}/>,
      label: "Consultoria",
      color: "bg-purple-600",
      path: "/consult/",
      pulseColor: "bg-purple-600/30",
      subItems: [
        {
          label: `${t("pages.difrencials")}`,
          icon: <img src="icons/hands.png" />,
          path: "/consult/diferencial",
          hasSlideshow: true,
        },
      ],
    },
    {
      icon: <img src="assets/gi-engenharia-logo.png"  className="max-h-12 object-contain"/>,
      label: "GI Engenharia",
      path: "/gi-engenharia/",
      color: "bg-white",
      pulseColor: "bg-lemon/30",
      subItems: [
        {
          label: `${t("pages.difrencials")}`,
          icon: <img src="icons/VETORES-5.png" />,
          path: "/gi-engenharia/diferencial",
          hasSlideshow: true,
        },
      ],
    },
    {
      icon: (
        <img
          src="assets/telerad-logo.png"
          className="max-h-12 object-contain"
        />
      ),
      label: "TeleRad",
      color: "bg-indigo-600",
      path: "/telerad/",
      pulseColor: "bg-indigo-600/30",
      subItems: [
        
        {
          label: `${t("pages.marketComparison")}`,
          icon: <img src="icons/telerad/VETORES-13.png" />,
          path: "/telerad/comparative",
          hasSlideshow: true,
        },
        {
          label: `${t("pages.privatePartnership")}`,
          icon: <img src="icons/telerad/VETORES-16.png" />,
          path: "/telerad/private-colaboration",
          hasSlideshow: true,
        },
        // {
        //   label: "Dashboard Telerad",
        //   icon: <img src="icons/telerad/VETORES-15.png" />,
        //   path: "/telerad/dashboard",
        // },
      ],
    },
    {
      icon: <img src="assets/logistica-logo.png" />,
      label: "Logística",
      path: "/logistica/",
      color: "bg-white",
      pulseColor: "bg-lemon/30",
      subItems: [
        { 
          label:`${t("pages.difrencials")}`, 
          icon: <img src="icons/VETORES-9.png" />, 
          path: "/hr/differentials" 
        },
      ],
    },
    {
      icon: (
        <img
          src="assets/theimagem-logo.png"
          className="max-h-12 object-contain"
        />
      ),
      label: "The Imagem",
      path: "/theimagem/",
      color: "bg-violet-600",
      pulseColor: "bg-violet-600/30",
      subItems: [
        {
          label: `${t("pages.difrencials")}`,
          icon: <img src="icons/VETORES-21.png" />,
          path: "/theimagem/unique-features",
          hasSlideshow: true,
        },
      ],
    },
    
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center overflow-hidden">
      <div
        className="relative pt-0"
        style={{ width: sizes.containerSize, height: sizes.containerSize }}
      >
        {" "}
        {/* Central Circle */}
        <Link to={"/group/"}>
        <div
          ref={centralCircleRef}
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                      w-32 md:w-80 lg:w-96 h-32 md:h-80 lg:h-96 bg-black rounded-full flex items-center justify-center
                      border-4 border-lemon shadow-2xl shadow-lemon/50 z-20 relative ${
                        isCareActive ? "care-central-active" : ""
                      }`}
        >
          <AnimatePresence>
            {careState === "launch" && (
              <motion.span
                className="care-black-liquid"
                initial={{ opacity: 0, y: 14, scaleX: 0.6 }}
                animate={{ opacity: [0, 0.85, 0], y: [14, 0, -6], scaleX: [0.6, 1.12, 1] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, times: [0, 0.6, 1], ease: "easeOut" }}
              />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {(careState === "merge" || careState === "modal") && (
              <motion.div
                className="care-central-merge"
                initial={{
                  scale: 0.2,
                  opacity: 0,
                  clipPath: "circle(0% at 50% 100%)",
                }}
                animate={{
                  scale: [0.2, 1.05, 1],
                  opacity: 1,
                  clipPath: "circle(75% at 50% 50%)",
                }}
                exit={{ scale: 0.6, opacity: 0 }}
                transition={{
                  duration: 1,
                  ease: [0.16, 0.84, 0.44, 1],
                  times: [0, 0.7, 1],
                }}
                onAnimationComplete={() => {
                  if (careState === "merge") {
                    setCareState("modal");
                  }
                }}
              >
                <span className="care-liquid-surface" aria-hidden="true" />
                <motion.span
                  className="care-central-label"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  CareImage
                </motion.span>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="relative">
            {/* Pulsing circles around central element */}
            {/* <div className="absolute inset-0 rounded-full bg-purple-500/20 animate-pulse-slow"></div> */}
            {/* <div className="absolute inset-[-10px] rounded-full bg-purple-500/10 animate-pulse"></div> */}
            {/* <div className="absolute inset-[-20px] rounded-full bg-purple-500/5 animate-pulse-fast"></div> */}
            <div className="text-center rounded-full relative ">
              <div 
                className="mx-auto text-black flex items-center justify-center"
                style={{
                  width: sizes.centralCircleSize,
                  height: sizes.centralCircleSize
                }}
              >
                <img
                  src="assets/g184.png"
                  alt="Logo do grupo imagem"
                  className="w-full h-full object-contain"
                  style={{ width: '80%', height: '80%' }}
                />
              </div>
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 -translate-y-1/4 lg:-translate-y-1/3 flex items-center justify-center w-28 md:w-40 lg:w-54 h-10 text-gray-100 text-[10px] md:text-md lg:text-lg">
                {t("company.common.subtitle")}
              </span>
            </div>
          </div>
        </div>
        </Link>
        {menuItems.map((item, index) => {
          const angle =
            (index * (360 / menuItems.length) - 90) * (Math.PI / 180);
          // const radius = 300;
          const x = Math.cos(angle) * sizes.outerRadius;
          const y = Math.sin(angle) * sizes.outerRadius;

          return (
            <Link key={item?.path} to={item?.path}>
              <div
                key={item.label}
                className="group bg-white opacity-100 z-10"
                style={{
                  position: "absolute",
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="relative cursor-pointer transition-transform duration-300 hover:scale-110 ">
                  <div
                    className={`absolute  inset-[-9px] md:inset-[-12px] rounded-md md:rounded-xl bg-lemon/30 animate-pulse-slow`}
                  ></div>
                  <div
                    className={`absolute inset-[-4px] md:inset-[-6px]  rounded-md md:rounded-xl bg-lemon/70 animate-pulse`}
                  ></div>
                  <div
                    className={`relative bg-white text-primary rounded-md md:rounded-xl p-2 md:p-4 lg:p-4 shadow-lg 
                              flex items-center justify-center`}
                    style={{
                      minWidth: windowWidth < 640 ? '48px' : 'auto'
                    }}
                  >
                    <div
                      className="flex items-center justify-center gap-2"
                      style={{
                        width: windowWidth < 640 ? '32px' : 'auto'
                      }}
                      title={item.label}
                    >
                      {item.icon}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
        {/* Middle Circle for SubItems */}
        {menuItems.map((item, index) =>
          item.subItems.map((subItem, subIndex) => {
            const subItemsCount = item.subItems.length;
            const baseAngle = index * (360 / menuItems.length) - 90;
            const subAngle =
              baseAngle + (subIndex - (subItemsCount - 1) / 2) * 16;
            const angleRad = subAngle * (Math.PI / 180);
            const x = Math.cos(angleRad) * sizes.middleRadius;
            const y = Math.sin(angleRad) * sizes.middleRadius;

            return (
              <Link
                key={subItem.path}
                to={subItem.path}
                className="group z-10 hover:z-50"
                style={{
                  position: "absolute",
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div
                  className="relative cursor-pointer 
                                transition-transform hover:scale-150 hover:z-50"
                >
                  <div className="absolute inset-[-8px] rounded-full bg-lemon/20 animate-pulse-slow"></div>
                  <div className="absolute inset-[-4px] rounded-full bg-lemon/30 animate-pulse"></div>
                  <div
                    className={`relative flex items-center justify-center rounded-full 
                                w-7 h-7 md:h-10 lg:h-12 md:w-10 lg:w-12 text-white shadow-lg `}
                  >
                    {subItem.icon}
                  </div>
                  <div
                    className="absolute top-full z-50 left-1/2 transform -translate-x-1/2
                                  text-primary text-[10px] opacity-0 group-hover:opacity-100 mt-2 
                                 transition-opacity bg-white pr-2 pl-2 rounded-lg shadow-lg"
                  >
                    {subItem.label}
                  </div>
                </div>
              </Link>
            );
          })
        )}
        {/* Connecting Lines and Circles */}
        <svg className="absolute top-0 left-0 h-full w-full">
          {/* Outer connecting circle with gradient and animation */}
          <defs>
            <linearGradient
              id="circleGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="rgba(161, 206, 40, 0.1)">
                <animate
                  attributeName="stop-color"
                  values="rgba(161, 206, 40, 0.1); rgba(0, 82, 77, 0.3);  rgba(0, 82, 77, 0.3)"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="rgba(0, 82, 77, 0.3)">
                <animate
                  attributeName="stop-color"
                  values="rgba(0, 82, 77, 0.3); rgba(79, 70, 229, 0.3); rgba(0, 82, 77, 0.1)"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>
          </defs>

          {/* Animated rotating circle */}
          <circle
            // cx="50%"
            // cy="50%"
            // r="300"
            // fill="none"
            // stroke="url(#circleGradient)"
            // strokeWidth="4"
            // strokeDasharray="20 10"
            cx="50%"
            cy="50%"
            r={sizes.outerRadius}
            fill="none"
            stroke="url(#circleGradient)"
            strokeWidth={sizes.strokeWidth}
            strokeDasharray={sizes.dashArray}
          >
            <animateTransform
              // attributeName="transform"
              // type="rotate"
              // from="0 300 300"
              // to="360 300 300"
              // dur="20s"
              // repeatCount="indefinite"
              attributeName="transform"
              type="rotate"
              from={`0 ${sizes.containerSize / 2} ${sizes.containerSize / 2}`}
              to={`360 ${sizes.containerSize / 2} ${sizes.containerSize / 2}`}
              dur="20s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Inner circles */}
          <circle
            // cx="50%"
            // cy="50%"
            // r="300"
            // fill="none"
            // // stroke="var(--tw-color-primary)"
            // strokeWidth="2"
            // strokeDasharray="10 10"
            cx="50%"
            cy="50%"
            r={sizes.outerRadius}
            fill="none"
            stroke="rgba(147, 51, 234, 0.2)"
            strokeWidth={sizes.strokeWidth / 2}
            strokeDasharray={sizes.dashArray}
            className="stroke-lemon"
          />
          <circle
            // cx="50%"
            // cy="50%"
            // r="200"
            // fill="none"
            // // stroke="rgba(147, 51, 234, 0.15)"
            // strokeWidth="2"
            // strokeDasharray="8 8"
            cx="50%"
            cy="50%"
            r={sizes.middleRadius}
            fill="none"
            stroke="rgba(147, 51, 234, 0.15)"
            strokeWidth={sizes.strokeWidth / 2}
            strokeDasharray={sizes.dashArray}
            className="stroke-lemon"
          />
        </svg>
      </div>
      <AnimatePresence>
        {careState === "idle" && (
          <motion.button
            type="button"
            className="care-fab"
            style={
              {
                "--care-size": `${careSize}px`,
                "--care-offset": `${careOffset}px`,
              } as React.CSSProperties
            }
            onClick={handleCareClick}
            aria-label="Abrir informações da franquia CareImage"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <span className="care-fab-pulse" />
            <span className="care-fab-pulse care-fab-pulse--delay" />
            <span className="care-fab-core">
              <span className="care-fab-title">CI</span>
              <span className="care-fab-sub">CareImage</span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {(careState === "launch" || careState === "return") && careCoords && (
          <motion.div
            key={careState}
            className="care-orb"
            style={
              {
                "--care-size": `${careSize}px`,
              } as React.CSSProperties
            }
            initial={{
              x: careCoords.start.x - careSize / 2,
              y: careCoords.start.y - careSize / 2,
              scale: careState === "launch" ? 1 : 0.35,
              opacity: 1,
            }}
            animate={
              careState === "launch"
                ? {
                    x: [
                      careCoords.start.x - careSize / 2,
                      careCoords.end.x - careSize / 2,
                      careCoords.end.x - careSize / 2,
                    ],
                    y: [
                      careCoords.start.y - careSize / 2,
                      careCoords.end.y - careSize / 2 - 10,
                      careCoords.end.y - careSize / 2 + 18,
                    ],
                    scale: [1, 0.55, 0.05],
                    opacity: [1, 0.6, 0],
                    filter: ["blur(0px)", "blur(2px)", "blur(6px)"],
                  }
                : {
                    x: careCoords.end.x - careSize / 2,
                    y: careCoords.end.y - careSize / 2,
                    scale: 1,
                    opacity: 1,
                    filter: "blur(0px)",
                  }
            }
            exit={{
              opacity: 0,
              scale: 0.2,
              transition: { duration: 0.4, ease: "easeIn" },
            }}
            transition={
              careState === "launch"
                ? {
                    duration: 1.9,
                    times: [0, 0.7, 1],
                    ease: [0.22, 0.74, 0.22, 1],
                  }
                : { duration: 1.6, ease: [0.2, 0.8, 0.2, 1] }
            }
            onAnimationComplete={handleCareAnimationComplete}
          >
            <span className="care-orb-ring" />
            <span className="care-orb-ring care-orb-ring--delay" />
            <div className="care-meiosis">
              <motion.span
                key={`left-${careState}`}
                className="care-meiosis-core"
                animate={{ x: [0, -14, 0], scale: [1, 0.85, 1] }}
                transition={{
                  duration: 1.6,
                  times: [0, 0.5, 1],
                  ease: "easeInOut",
                }}
              />
              <motion.span
                key={`right-${careState}`}
                className="care-meiosis-core"
                animate={{ x: [0, 14, 0], scale: [1, 0.85, 1] }}
                transition={{
                  duration: 1.6,
                  times: [0, 0.5, 1],
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {careState === "modal" && (
          <motion.div
            className="care-modal-backdrop"
            onClick={handleCareReturn}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="care-modal-panel"
              onClick={(event) => event.stopPropagation()}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              variants={modalContainer}
            >
              <motion.div className="care-modal-header" variants={modalItem}>
                <div>
                  <p className="care-kicker">Franquia ficticia</p>
                  <h2 className="care-title">CareImage</h2>
                  <p className="care-subtitle">
                    Centros de imagem com atendimento humanizado, tecnologia
                    preditiva e laudos integrados.
                  </p>
                </div>
                <div className="care-sigil">CI</div>
              </motion.div>
              <motion.div className="care-modal-body" variants={modalItem}>
                <div className="care-dna-card">
                  <div className="care-dna" aria-hidden="true">
                    {carePairs.map((index) => (
                      <div
                        key={`dna-${index}`}
                        className="care-dna-pair"
                        style={
                          {
                            top: `${index * 20}px`,
                            "--delay": `${index * 0.12}s`,
                            "--dir": index % 2 === 0 ? 1 : -1,
                          } as React.CSSProperties
                        }
                      >
                        <span className="care-dna-dot" />
                        <span className="care-dna-line" />
                        <span className="care-dna-dot" />
                      </div>
                    ))}
                  </div>
                  <p className="care-dna-caption">
                    DNA operacional: acolhimento, precisao e velocidade.
                  </p>
                </div>
                <div className="care-info-card">
                  <div className="care-info-grid">
                    <div>
                      <h3>Modelo</h3>
                      <p>
                        Unidades compactas com telemedicina e integracao
                        hospitalar.
                      </p>
                    </div>
                    <div>
                      <h3>Cobertura</h3>
                      <p>Rede simulada com 28 unidades e 6 hubs regionais.</p>
                    </div>
                    <div>
                      <h3>Diferenciais</h3>
                      <p>
                        Laudos assistidos por IA, agendamento em 2 cliques e
                        prontuario em nuvem.
                      </p>
                    </div>
                  </div>
                  <div className="care-chips">
                    <span className="care-chip">Laudo em 4h</span>
                    <span className="care-chip">IA clinica</span>
                    <span className="care-chip">SLA 99,9%</span>
                    <span className="care-chip">Treinamento continuo</span>
                    <span className="care-chip">Suporte 24/7</span>
                  </div>
                </div>
              </motion.div>
              <motion.div className="care-modal-footer" variants={modalItem}>
                <button
                  type="button"
                  className="care-back"
                  onClick={handleCareReturn}
                >
                  Voltar
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const slideshowImages = {
    marketing: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop",
    ],
    sales: [
      "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
    ],
    operations: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1552664688-cf412ec27db2?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1552581234-26160f608093?w=800&h=500&fit=crop",
    ],
    tech: [
      "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=500&fit=crop",
    ],
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop/>
      <LanguageSelector />
      {/* <button onClick={() => setIsOpen(true)} className="px-4 py-2 bg-blue-500 text-white rounded">
        Abrir Calculadora
      </button>
      <CalculatorModal isOpen={isOpen} onClose={() => setIsOpen(false)} /> */}
      <Routes>
        <Route path="/" element={<MitosisVisualization />} />
        <Route path="/consult/" element={<ConsultoriaPage />} />
        <Route path="/gi-engenharia/" element={<GIEngenhariaPage />} />
        <Route path="/telerad/" element={<TeleradPage />} />
        
        

        <Route path="/hr/differentials" element={<LogisticaDifferentials />} />
        <Route
          path="/telerad/dashboard"
          element={<DashboardProviderTelerad>
            <TeleradDashboard/>
          </DashboardProviderTelerad>}
        />
        <Route
          path="/telerad/comparative"
          element={
            <ComparativeTelerad/>
          }
        />
        <Route
          path="/telerad/private-colaboration"
          element={
            <PrivateFriendsTelerad/>
          }
        />
        <Route path="/telerad/unidades-moveis" element={<UnidadesMoveisPage />} />
        <Route path="/logistica/" element={<LogisticaPage />} />
        <Route path="/theimagem/" element={<TheImagemPage />} />

        <Route path="/galaxy/" element={<GalaxyMainPage />} />
        <Route path="/galaxy/viewer/" element={<GalaxyViewerPage />} />

        <Route path="/theimagem/unique-features/" element={<Differentials />} />


        <Route
          path="/consult/diferencial"
          element={<DiferencialConsultoriaPage />}
        />

        <Route
          path="/gi-engenharia/diferencial"
          element={<DiferencialGiEngenhariaPage />}
        />

        <Route
          path="/sales/products"
          element={
            <SlideshowPage
              title="Our Products"
              images={slideshowImages.sales}
            />
          }
        />
        <Route
          path="/sales/reports"
          element={<SimplePage title="Sales Reports" />}
        />
        <Route
          path="/group"
          element={<BrazilMapAll/>}
        />
        <Route
          path="/tech/development"
          element={
            <SlideshowPage
              title="Development Process"
              images={slideshowImages.tech}
            />
          }
        />
        <Route
          path="/tech/infrastructure"
          element={<SimplePage title="Tech Infrastructure" />}
        />
        <Route
          path="/cs/support"
          element={<SimplePage title="Customer Support" />}
        />
        <Route
          path="/cs/training"
          element={<SimplePage title="Training Resources" />}
        />
        </Routes>
    </Router>
  );
}

export default App;
