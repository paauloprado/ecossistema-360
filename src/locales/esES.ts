import {TeleradPage} from "../locales/es-ES/teleradPage"
import {teleradComparativePage} from "../locales/es-ES/teleradComparativePage"
import {teleradPrivatyFriendsPage} from "../locales/es-ES/teleradPrivateFriendsPage"
import {teleradSucessCasePage} from "../locales/es-ES/teleradSucessCase"
import { HigiaPage } from "./es-ES/higiaPage";
import { consultoriaDiffES } from './ConsultoriaTranslations';
import { engDiffEs } from './es-ES/engDiferencialTranslationsEs.ts';
import {produtosHigiaES} from './es-ES/higiaSolutionsEs.ts'
import { careEsEs } from './es-es/care';

export const esES = {
	translation: {
		company:{
			higia:{
				subtitle: 'Un ejemplo de descripción',
				dashboard:{
					clear: 'Clear',
					apply: 'Apply',
					selectCentral: 'Select Central',
					selectUnit: 'Select Unit'
				}

			},
			common: {
				subtitle: 'Ecosistema 360º',
				pacs: 'PACS/Informes médicos',
				location: 'Alquiler de Equipos',
				distribution: 'Centro de Distribución',
				all: 'Todos',
        home: 'Inicio'
			  },

		  },
	  common: {
		subtitle: 'Ecosistema 360º',
		pacs: 'PACS/Informes médicos',
		location: 'Alquiler de Equipos',
		distribution: 'Centro de Distribución',
		all: 'Todos'
	  },
	  menu: {
		marketing: {
		  title: 'Marketing',
		  strategy: 'Estrategia',
		  analytics: 'Análisis',
		},
		sales: {
		  title: 'Ventas',
		  products: 'Productos',
		  reports: 'Informes Médicos',
		},
		operations: {
		  title: 'Operaciones',
		  workflow: 'Flujo de trabajo',
		  resources: 'Recursos',
		},
		hr: {
		  title: 'RRHH',
		  team: 'Equipo',
		  benefits: 'Beneficios',
		},
		tech: {
		  title: 'Tecnología',
		  development: 'Desarrollo',
		  infrastructure: 'Infraestructura',
		},
		cs: {
		  title: 'CS',
		  support: 'Soporte',
		  training: 'Capacitación',
		},
	  },
	  ai: {
		title: 'IA Avanzada',
		subtitle: 'Asistente de Nueva Generación',
	  },
	  pages: {
		marketingStrategy: 'Estrategia de Marketing',
		marketingAnalytics: 'Análisis de Marketing',
		products: 'Nuestros Productos',
		salesReports: 'Informes de Ventas',
		workflow: 'Flujo de Trabajo',
		resources: 'Nuestros Recursos',
		team: 'Nuestro Equipo',
		benefits: 'Beneficios para Empleados',
		development: 'Proceso de Desarrollo',
		infrastructure: 'Infraestructura Tecnológica',
		support: 'Soporte al Cliente',
		training: 'Recursos de Capacitación',
		difrencials:'Diferenciales',
		successCase:'Casos de Éxito',
		privatePartnership:'Alianza Privada',
		marketComparison:'Comparativa con el Mercado',
		higiaSolutions:'Soluciones Higia',
		difrencialsAndsuccessCase:'Diferenciales y Casos de Éxito'
	  },

	  calculator: {
		title: 'Calculadora',
		report: 'Informe Médico',
		exam: 'Examen',
		coin: 'Moneda',
		high: 'Alta',
		medium: 'Media',
		normal: 'Normal',
		clear: 'Limpiar',
		reset: 'Restablecer',
		save: 'Guardar',
		emptyError: 'Complete todos los campos',
	  },

	  
	  contentPage: {
		consultoria: {
		  aboutConsultoria: "Sobre la Consultoría",
          consultoriaSolutions: "Soluciones Activadas por la Consultoría",
		  subtitle:
			"La consultoría del Grupo Imagem abarca desde el análisis de viabilidad hasta la entrega operativa de la unidad de imagen. Es la fase inicial que estructura todo el proyecto, identifica las necesidades reales y transforma ideas en soluciones viables y completas.",
		  sections: {
			mapeamento: {
			  title: "Mapeo y Diagnóstico de la Realidad del Cliente",
			  items: [
				"Análisis de la capacidad instalada e identificación de cuellos de botella técnicos y estructurales",
				"Evaluación de conformidad con las normas (RDC 611, CNEN, CFM)",
				"Estudio de la demanda, competencia y comportamiento del mercado local"
			  ]
			},
			viabilidade: {
			  title: "Viabilidad Financiera y Estratégica",
			  items: [
				"Análisis de ROI, payback y optimización de costos operativos",
				"Estructuración de precios para maximizar la rentabilidad",
				"Modelado financiero para expansión o implementación"
			  ]
			},
			implantacao: {
			  title: "Planificación de Implementación 360°",
			  items: [
				"Proyecto técnico especializado en diagnóstico por imagen",
				"Apoyo para licencias y certificaciones ante ANVISA y organismos reguladores",
				"Dimensionamiento del equipo y flujos operativos"
			  ]
			},
			equipamentos: {
			  title: "Portafolio de Equipos e Infraestructura",
			  items: [
				"Recomendación técnica y alquiler de equipos modernos adecuados a las necesidades clínicas",
				"Reducción de CAPEX con modelo de alquiler inteligente",
				"Cobertura completa: tomógrafo, resonancia, mamografía, rayos X, ultrasonido, densitometría"
			  ]
			},
			tecnologia: {
			  title: "Soluciones Digitales y Tecnología Aplicada",
			  items: [
				"Implementación de PACS con integración a sistemas hospitalarios",
				"Implementación de Telemedicina y Telerradiología",
				"Integración con historias clínicas electrónicas y flujo de trabajo digital completo"
			  ]
			},
			gestao: {
			  title: "Gestión Inteligente y Optimización Operacional",
			  items: [
				"Estrategias para aumentar la tasa de ocupación y la rentabilidad",
				"Automatización de procesos y gestión de insumos",
				"Estructuración de contratos, metas y desempeño asistencial"
			  ]
			}
		  }
		},		
		engenharia: {
			aboutEngenharia: "Sobre Gi Engenharia",
			engenhariaSolutions: "Soluciones que Ofrecemos",
			subtitle: "GI Engenharia es responsable de garantizar que toda la infraestructura física esté 100% adecuada para la instalación de equipos médicos de imagen. Desde el levantamiento hasta la ejecución de la obra, todo se realiza con precisión técnica y enfoque en la protección radiológica.",
			sections: {
			  levantamento: {
				title: "Levantamiento In Situ",
				items: [
				  "Visita técnica al lugar para analizar la viabilidad de la instalación.",
				  "Evaluación estructural, eléctrica y normativa."
				]
			  },
			  projeto: {
				title: "Elaboración del Proyecto Técnico",
				items: [
				  "Proyecto arquitectónico y de ingeniería conforme a:",
				  "RDC 50 / RDC 611 de Anvisa",
				  "Normas de CNEN y Vigilancia Sanitaria",
				  "Requisitos de los fabricantes de los equipos"
				]
			  },
			  execucao: {
				title: "Ejecución de la Obra",
				items: [
				  "Mano de obra especializada en la construcción y adecuaciones de la sala.",
				  "Blindaje radiológico, instalación de puertas de plomo, visores plomados, baritas y ajustes estructurales."
				]
			  },
			  acompanhamento: {
				title: "Acompañamiento Técnico",
				items: [
				  "Acompañamiento continuo del proyecto cuando es ejecutado por terceros, asegurando que se cumplan todas las normas y especificaciones."
				]
			  },
			  relatorios: {
				title: "Informes y Documentación",
				items: [
				  "Emisión de ARTs (Anotación de Responsabilidad Técnica)"
				]
			  }
			}
		},
		telerad: TeleradPage,
		teleradComparative: teleradComparativePage,
		teleradPrivaty: teleradPrivatyFriendsPage,
		teleradSucessCase: teleradSucessCasePage,
		  logistica: {
			title: "Soluciones Logísticas",
			aboutLogistica: "Sobre GI Transporte",
			logisticaSolutions: "Soluciones Especializadas",
			subtitle: "GI Transporte es responsable de toda la logística técnica y estratégica del Grupo Imagem. Garantiza que los equipos de diagnóstico por imagen se transporten con la máxima seguridad, cumpliendo con normativas específicas y exigencias de los fabricantes.",
			sections: {
			  transporte: {
				title: "Transporte de Equipos",
				items: [
				  "Manipulación y entrega de tomógrafos, rayos X, ultrasonidos e impresoras.",
				  "Equipo calificado y capacitado en transporte hospitalario."
				]
			  },
			  flota: {
				title: "Flota de Alta Tecnología",
				items: [
				  "Vehículos con suspensión neumática para mayor estabilidad.",
				  "Sistema de rastreo en tiempo real integrado."
				]
			  },
			  logisticaIntegrada: {
				title: "Logística Integrada",
				items: [
				  "Coordinación con obras y cronogramas de instalación.",
				  "Seguimiento del proyecto desde la preparación hasta la entrega final."
				]
			  },
			  almacenamiento: {
				title: "Almacenamiento Técnico",
				items: [
				  "Infraestructura propia para almacenamiento temporal de equipos.",
				  "Control de inventario y acceso monitoreado."
				]
			  },
			  equipo: {
				title: "Equipo Especializado",
				items: [
				  "Profesionales capacitados en logística de equipos médicos.",
				  "Soporte técnico bajo demanda."
				]
			  },
			  gestion: {
				title: "Gestión Estratégica",
				items: [
				  "Planificación logística alineada con los objetivos operativos del cliente.",
				  "Informes y seguimiento de rendimiento."
				]
			  }
			}
		  },

		  logisticaDifferentials: {
			title: "Diferenciales de GI Transporte",
			sucesseCases: "Casos de Éxito",
			sections: {
			  differentials: {
				title: "Diferenciales",
				items: [
				  "Suspensión neumática en todos los vehículos – ideal para transporte médico.",
				  "Seguimiento en tiempo real.",
				  "Entregas programadas e integradas con la instalación técnica.",
				  "Equipo propio, capacitado para entornos hospitalarios.",
				  "Almacenamiento y manipulación con integridad y control.",
				  "Logística sincronizada con las demás etapas de la Solución 360°.",
				]
			  },
			  success: {
				title: "Especialistas en el transporte de equipos médicos",
				items: [
				  "Instalación simultánea de equipos en unidades de diferentes estados.",
				  "Entregas en áreas críticas con planificación logística personalizada.",
				  "Historial de cero daños en decenas de equipos transportados.",
				  "Logística adaptada a situaciones complejas y cronogramas ajustados.",
				]
			  },
			}
		  },
		  
		  theimagem:{
			title: "Soluciones Técnicas",
			aboutTheImagem: "Sobre THE IMAGEM Services",
			theImagemSolutions: "Soluciones Activadas por THE IMAGEM",
			subtitle: "THE IMAGEM es la encargada de la instalación, mantenimiento y soporte técnico especializado de los equipos médicos alquilados por el Grupo Imagem. Representante oficial de Konica y Canon, con un equipo técnico certificado, sistema de gestión integrado e infraestructura propia, garantizamos alto rendimiento, disponibilidad y una vida útil prolongada de los activos.",
			sections: {
			  installation: {
				title: "Instalación y Puesta en Marcha de Equipos",
				items: [
				  "Instalación técnica completa con validación operativa."
				]
			  },
			  maintenance: {
				title: "Mantenimiento Preventivo y Correctivo",
				items: [
				  "Atención programada y bajo demanda.",
				  "Calibración, ajustes y pruebas según los protocolos de los fabricantes."
				]
			  },
			  assetManagement: {
				title: "Gestión de Activos e Ingeniería Clínica",
				items: [
				  "Control del parque tecnológico con trazabilidad completa.",
				  "Historial de intervenciones, solicitudes de servicio, piezas reemplazadas y rendimiento de cada equipo.",
				  "Monitoreo con datos estratégicos (MTTR, FCR, disponibilidad, utilización)."
				]
			  },
			  operationsSystem: {
				title: "Sistema de Gestión Operativo",
				items: [
				  "Plataforma digital con solicitudes de servicio, órdenes de trabajo, informes médicos y análisis con IA aplicada.",
				  "Monitoreo en tiempo real e indicadores técnicos integrados en la gestión."
				]
			  },
			  team: {
				title: "Equipo Técnico Multirregional",
				items: [
				  "Técnicos e ingenieros trabajando en varios estados.",
				  "Profesionales certificados y capacitados por los fabricantes (Konica Minolta y Canon)."
				]
			  },
			  lab: {
				title: "Laboratorio Técnico y Centro de Capacitación",
				items: [
				  "Espacio dedicado para formación técnica y simulaciones.",
				  "Capacidad para reparaciones electrónicas, calibración, pruebas, etc.",
				  "Infraestructura de estandarización técnica y desarrollo continuo del equipo."
				]
			  }
			}
		  },
		  galaxy: {
			main: {
			  title: "Plataforma de Informes Inteligente",
			  heroSubtitle: "Prepárate para o Salto",
			  overview: {
				tag: "Visão Geral",
				title1: "Escalabilidad y",
				title2: "Rendimiento",
				integration: { title: "Integración", points: ["PACS e Telerradiología", "Gestión Clínica-Hospitalaria"] },
				cloud: { title: "Nube", points: ["Tecnología 100% Cloud", "Independencia de Servidores"] },
				strategy: { title: "Estrategia", points: ["Foco en el Rendimiento", "Resultados Acelerados"] },
				ris: { title: "RIS", points: ["Integración de Informes e Imágenes", "Estándar DICOM Nativo", "Acceso Seguro en la Nube"] }
			  },
			  features: {
				title: "Funcionalidades Clave",
				reports: { title: "Emisión de Informes", points: ["Acceso Ubicuo", "Modelos Inteligentes", "Estandarización de Calidad"] },
				signature: { title: "Firma Digital", points: ["Estándar ICP-Brasil", "Seguridad Total", "Sin Necesidad de Impresión"] },
				pacs: { title: "Integración PACS", points: ["Imágenes e Informes Médicos", "Estándar DICOM Nativo", "Ambiente Unificado"] },
				remote: { title: "Acceso Remoto", points: ["Operação de Telerad", "SaaS Escalable", "Oficina Médica en Casa"] }
			  },
			  impact: {
				title: "Impacto Directo",
				reduction: "Reducción en el tiempo de entrega de los informes técnicos.",
				roi: "Aumento de la facturación y escala operativa inmediata.",
				saas: {
				  title: "Modelo SaaS",
				  monthly: "Suscripción Mensual",
				  volume: "Facturación por Volumen",
				  focus: "Enfoque Total en el Paciente"
				}
			  }
			},
			ecosystem: {
			  title: "Galaxy RIS/PACS",
			  subtitle: "Integración Nativa de Informe e Imagen",
			  dicom: { title: "DICOM", desc: "Compatibilidad universal." },
			  cloud: { title: "CLOUD", desc: "Acceso seguro total." }
			},
			viewer: {
			  title: "Galaxy Viewer",
			  subtitle: "Rendimiento Web de Élite",
			  lead: "Visualización diagnóstica web con acceso rápido, seguro e integrado al flujo clínico, reduciendo barreras técnicas para radiólogos, unidades y equipos asistenciales.",
			  streaming: { title: "Streaming", desc: "Imágenes 4K instantáneas." },
			  zeroWeb: { title: "Zero Web", desc: "Sin instalaciones ni VPN." },
			  details: {
				tag: "Subsolución",
				title: "Más profundidad para el viewer",
				mobility: {
				  title: "Acceso Inmediato",
				  points: [
					"Apertura directa en el navegador con despliegue simple para sucursales, socios y equipos remotos.",
					"Menor dependencia de estaciones dedicadas para acceder a imágenes y series."
				  ]
				},
				diagnostic: {
				  title: "Lectura Clínica",
				  points: [
					"Navegación fluida por series, zoom, contraste y apoyo a la interpretación diagnóstica.",
					"Experiencia preparada para acelerar segundas opiniones, revisión técnica y rutina asistencial."
				  ]
				},
				continuity: {
				  title: "Continuidad Operativa",
				  points: [
					"Integración natural con Galaxy RIS/PACS para acortar el camino entre imagen, análisis e informe.",
					"Más agilidad para teleinformes, contingencia operativa y expansión de la operación."
				  ]
				}
			  }
			}
		  },
		  unidadesMoveis: {
			navTitle: "Unidades Móviles",
			hero: {
			  tag: "Diagnóstico en Movimiento",
			  title: "Salud de Alta Calidad en cualquier lugar.",
			  description: "Liderazgo en diagnóstico móvil con unidades listas para satisfacer las demandas más exigentes de la salud pública y privada.",
			  benefit1: "Expansión Inmediata",
			  benefit2: "Excelencia Clínica"
			},
			solutions: {
			  title: "Soluciones Especializadas",
			  subtitle: "Tecnología de punta e infraestructura modular para un diagnóstico preciso.",
			  items: [
				{
				  title: "Movilidad Asistencial",
				  points: ["Atención en regiones sin infraestrutura", "Implantación rápida (días, no meses)", "Flexibilidad de operação por demanda"]
				},
				{
				  title: "Estructura Completa",
				  points: ["Salas blindadas y adecuadas a la legislación", "Climatización y estabilización elétrica", "Diseño optimizado para el flujo de pacientes"]
				},
				{
				  title: "Alta Tecnología",
				  points: ["Tomografía, Rayos X, Mamografía y Ultrasonido", "Equipos nuevos de última generación", "Calidad de clínica fija en unidad móvil"]
				},
				{
				  title: "Operación Asistida",
				  points: ["Técnicos especializados y formados", "Protocolos clínicos estandarizados", "Soporte operativo y técnico continuo"]
				},
				{
				  title: "Integración Digital",
				  points: ["PACS y teleinforme integrados nativamente", "Conectividad 4G/5G y Satélite", "Entrega digital de resultados"]
				},
				{
				  title: "Gestión y ROI",
				  points: ["Monitoreo de produção en tiempo real", "Informes de impacto asistencial", "Optimización de costos hospitalares"]
				}
			  ]
			},
			models: {
			  title: "Modelos Operativos",
			  tag: "VERSATILIDAD Y CONFIANZA",
			  rental: { title: "Alquiler Tradicional", desc: "Enfoque en la previsibilidad. Equipos y soporte de punta con inversión fixa mensual." },
			  public: { title: "Salud Pública (SUS)", desc: "Máxima agilidad para mutirões y campañas preventivas en cualquier municipio." }
			},
			roi: {
			  title: "Maximización del Retorno (ROI)",
			  description: "Infraestructura de alta tecnología con costo operativo inferior a construcciones fixas, permitiendo faturamento imediato.",
			  scalability: { title: "Escalabilidad", desc: "Listo para crecer con su demanda." },
			  connection: { title: "Conexión Total", desc: "Ecosistema RIS/PACS integrado." },
			  button: "Hable con um Especialista"
			}
		  },
		  higia: HigiaPage,
		  theImagemDifferentials: {
			title: "Diferenciales de THE IMAGEM",
			sucessCases: "Casos de Éxito",
			arkmedes: "Sistema Arkmedes",
			sections: {
			  differentials: {
				title: "Acceso Directo a los Fabricantes",
				items: [
				  "Soporte técnico certificado con atención estandarizada.",
				  "Ingeniería clínica con indicadores de desempeño en tiempo real.",
				  "Sistema de gestión completo con historial digital.",
				  "Laboratorio propio con capacidad de electrónica, reparación y calibración.",
				  "Equipo propio distribuido estratégicamente por región.",
				]
			  },
			  numbers: {
				title: "Números y Estructura Técnica",
				items: [
				  "Actuación en varios estados con equipo técnico local.",
				  "Laboratorio propio en expansión con centro de formación.",
				  "Datos en tiempo real para decisiones estratégicas.",
				  "Historial técnico digital de cada equipo con trazabilidad total.",
				  "SLA promedio de 23 horas.",
				]
			  },
			  success: {
				title: "Monitoreo Técnico Proactivo",
				items: [
				  "Reducción del tiempo medio de reparación con monitoreo técnico proactivo.",
				  "Implementación técnica simultánea en unidades públicas de alta complejidad.",
				  "Planificación técnica alineada con ingeniería clínica.",
				]
			  },
			}
		  },
	  },
	  subpages:{
		consultoriaDiff:consultoriaDiffES,
		engenhariaDiff:engDiffEs,
		higiaSolutions:produtosHigiaES,
		higiaDashboard: {
			loading: "Cargando datos...",
			lastupdate: "Almacenamiento disponible",
		    storage: "Última actualización",
			intro: "HigIA está presente en 112 unidades, recibiendo un promedio de 2.742 exámenes al día, atendiendo clínicas, centros de diagnóstico por imagen y hospitales, tanto del sector público como privado.",
			startDate: "Fecha de Inicio",
			endDate: "Fecha Final",
			mapPopulationInfo: "Población",
			mapPopulationInfoCenso: "Censo",
			mapSelectedTitle: "Seleccionado",
			mapSelectedTitleALL: "Todo",
			examsTotalTitle: "Total",
			examsFaturamentoTitle: "Facturación",
			reportsTotalTitle: "Total",
			reportsFaturamentoTitle: "Facturación",
			filterTitle: "Filtrar",
			unit: "Unidad",
			exam: "Exámenes",
			report: "Informes médicos",
			modaByExam: "Modalidades por Examen",
			modaByReport: "Modalidades por Informe médico",
			examsByMonth: "Exámenes e Informes Médicos por Mes",
			high: "ALTA",
			middle: "MEDIA",
			normal: "NORMAL",
			lastExams: "Últimos Exámenes",
			lastReports: "Últimos Informes médicos",
			statusLocal: "Estado Local",
			textStorage: "Almacenamiento disponible",
			textLastUpdate: "Última actualización",
			textUpdateComplement: "atrás",
			textActiveService: "servicios están activos",
			state: "Estado",
			priority: "Prioridad",
			signatureDate: "Fecha de Firma",
			doctor: "Médico",
			SLA: "SLA",
			time: "Tiempo",
			procedure: "Procedimiento",
			arrived: "Llegada"
		  },
		},
		care: careEsEs.care,
	},
  };
