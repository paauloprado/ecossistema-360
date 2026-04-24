// ConsultoriaPage.tsx
import { useTranslation } from 'react-i18next';
import React from 'react';
import CompanyPage from './CompanyPage';
import SectionItemGroup from '../components/SectionItemGroup';
import SectionImage from '../components/SectionImage';
import SectionWithImage from '../components/SectionWithImage';
import TextBlock from '../components/TextBlock';
import ArrowButton from '../components/ArrowButton';
import HomeButton from '../components/HomeButton';
import ImageBrand from '../components/ImageBrand';
import Banner from '../components/Banner';
import SectionWithImageOrProject from '../components/cardTopics';





// const ConsultoriaPage: React.FC = () => {
//     const { t } = useTranslation();
//     return (
//         <>         
//             <CompanyPage title="Consultoria" next="/gi-engenharia/" prev="/higia/">
//             <h4>{t('company.consultoria.subtitle')}</h4> 
//             <section className="max-w-5xl mx-auto px-4 py-12">

//                 <SectionImage 
//                     src="/assets/consultoria.jpeg" 
//                     alt="Consultoria técnica" 
//                     caption="Exemplo de implantação técnica estruturada"
//                 />
//                 <SectionItemGroup
//                         title="Mapeamento e Diagnóstico da Realidade do Cliente"
//                         items={[
//                         "Análise da capacidade instalada e identificação de gargalos técnicos e estruturais",
//                         "Avaliação de conformidade com normas (RDC 330, CNEN, CFM)",
//                         "Estudo de demanda, concorrência e comportamento do mercado local"
//                         ]}
//                 />

//                 <SectionItemGroup
//                         title="Viabilidade Financeira e Estratégica"
//                         items={[
//                         "Análise de ROI, payback e otimização de custos operacionais",
//                         "Estruturação de precificação para maximizar a rentabilidade",
//                         "Modelagem financeira para expansão ou implantação"
//                         ]}
//                     />

//                     <SectionItemGroup
//                         title="Planejamento de Implantação 360°"
//                         items={[
//                         "Projeto técnico especializado em diagnóstico por imagem",
//                         "Suporte para licenciamento e certificações junto à ANVISA e órgãos reguladores",
//                         "Dimensionamento da equipe e fluxos operacionais"
//                         ]}
//                     />

//                     <SectionItemGroup
//                         title="Portfólio de Equipamentos e Infraestrutura"
//                         items={[
//                         "Indicação técnica e locação de equipamentos modernos e compatíveis com a necessidade clínica",
//                         "Redução de CAPEX com modelo de locação inteligente",
//                         "Cobertura completa: tomógrafo, ressonância, mamografia, RX, ultrassom, densitometria"
//                         ]}
//                     />

//                     <SectionItemGroup
//                         title="Soluções Digitais e Tecnologia Aplicada"
//                         items={[
//                         "Implementação de PACS com integração a sistemas hospitalares",
//                         "Implantação de Telemedicina e Telerradiologia",
//                         "Integração com prontuário eletrônico e workflow digital completo"
//                         ]}
//                     />

//                     <SectionItemGroup
//                         title="Gestão Inteligente e Otimização Operacional"
//                         items={[
//                         "Estratégias para aumentar taxa de ocupação e rentabilidade",
//                         "Automação de processos e gestão de insumos",
//                         "Estruturação de contratos, metas e performance assistencial"
//                         ]}
//                     />
//               </section>                 
//             </CompanyPage>
//         </>
//     );
// };

// const ConsultoriaPage: React.FC = () => {
//     const { t } = useTranslation();
  
//     const sections = [
//       {
//         title: "Mapeamento e Diagnóstico da Realidade do Cliente",
//         items: [
//           "Análise da capacidade instalada e identificação de gargalos técnicos e estruturais",
//           "Avaliação de conformidade com normas (RDC 330, CNEN, CFM)",
//           "Estudo de demanda, concorrência e comportamento do mercado local"
//         ]
//       },
//       {
//         title: "Viabilidade Financeira e Estratégica",
//         items: [
//           "Análise de ROI, payback e otimização de custos operacionais",
//           "Estruturação de precificação para maximizar a rentabilidade",
//           "Modelagem financeira para expansão ou implantação"
//         ]
//       },
//       {
//         title: "Planejamento de Implantação 360°",
//         items: [
//           "Projeto técnico especializado em diagnóstico por imagem",
//           "Suporte para licenciamento e certificações junto à ANVISA e órgãos reguladores",
//           "Dimensionamento da equipe e fluxos operacionais"
//         ]
//       },
//       {
//         title: "Portfólio de Equipamentos e Infraestrutura",
//         items: [
//           "Indicação técnica e locação de equipamentos modernos e compatíveis com a necessidade clínica",
//           "Redução de CAPEX com modelo de locação inteligente",
//           "Cobertura completa: tomógrafo, ressonância, mamografia, RX, ultrassom, densitometria"
//         ]
//       },
//       {
//         title: "Soluções Digitais e Tecnologia Aplicada",
//         items: [
//           "Implementação de PACS com integração a sistemas hospitalares",
//           "Implantação de Telemedicina e Telerradiologia",
//           "Integração com prontuário eletrônico e workflow digital completo"
//         ]
//       },
//       {
//         title: "Gestão Inteligente e Otimização Operacional",
//         items: [
//           "Estratégias para aumentar taxa de ocupação e rentabilidade",
//           "Automação de processos e gestão de insumos",
//           "Estruturação de contratos, metas e performance assistencial"
//         ]
//       }
//     ];
  
//     const leftSections = sections.slice(0, 3);
//     const rightSections = sections.slice(3);
  
//     return (
//       <CompanyPage title="Consultoria" next="/gi-engenharia/" prev="/higia/">
//         <h4>{t('company.consultoria.subtitle')}</h4>
  
//         <div className="flex flex-col lg:flex-row items-start justify-center gap-8 w-full max-w-7xl mx-auto px-4 py-12">
  
//           {/* Seções à esquerda */}
//           <div className="w-full lg:w-1/3 flex flex-col gap-6">
//             {leftSections.map((section, index) => (
//               <SectionItemGroup key={index} title={section.title} items={section.items} />
//             ))}
//           </div>
  
//           {/* Imagem ao centro */}
//           <div className="w-full lg:w-1/3 flex justify-center">
//             <SectionImage
//               src="/assets/consultoria.jpeg"
//               alt="Consultoria técnica"              
//             />
//           </div>
  
//           {/* Seções à direita */}
//           <div className="w-full lg:w-1/3 flex flex-col gap-6">
//             {rightSections.map((section, index) => (
//               <SectionItemGroup key={index} title={section.title} items={section.items} />
//             ))}
//           </div>
  
//         </div>
//       </CompanyPage>
//     );
//   };


// const ConsultoriaPage: React.FC = () => {
//     const { t } = useTranslation();
  
//     const sections = [
//       {
//         title: "Mapeamento e Diagnóstico da Realidade do Cliente",
//         items: [
//           "Análise da capacidade instalada e identificação de gargalos técnicos e estruturais",
//           "Avaliação de conformidade com normas (RDC 330, CNEN, CFM)",
//           "Estudo de demanda, concorrência e comportamento do mercado local"
//         ],
//         img: "/assets/consultoria.jpeg"
//       },
//       {
//         title: "Viabilidade Financeira e Estratégica",
//         items: [
//           "Análise de ROI, payback e otimização de custos operacionais",
//           "Estruturação de precificação para maximizar a rentabilidade",
//           "Modelagem financeira para expansão ou implantação"
//         ],
//         img: "/assets/consultoria.jpeg"
//       },
//       {
//         title: "Planejamento de Implantação 360°",
//         items: [
//           "Projeto técnico especializado em diagnóstico por imagem",
//           "Suporte para licenciamento e certificações junto à ANVISA e órgãos reguladores",
//           "Dimensionamento da equipe e fluxos operacionais"
//         ],
//         img: "/assets/consultoria.jpeg"
//       },
//       {
//         title: "Portfólio de Equipamentos e Infraestrutura",
//         items: [
//           "Indicação técnica e locação de equipamentos modernos e compatíveis com a necessidade clínica",
//           "Redução de CAPEX com modelo de locação inteligente",
//           "Cobertura completa: tomógrafo, ressonância, mamografia, RX, ultrassom, densitometria"
//         ],
//         img: "/assets/consultoria.jpeg"
//       },
//       {
//         title: "Soluções Digitais e Tecnologia Aplicada",
//         items: [
//           "Implementação de PACS com integração a sistemas hospitalares",
//           "Implantação de Telemedicina e Telerradiologia",
//           "Integração com prontuário eletrônico e workflow digital completo"
//         ],
//         img: "/assets/consultoria.jpeg"
//       },
//       {
//         title: "Gestão Inteligente e Otimização Operacional",
//         items: [
//           "Estratégias para aumentar taxa de ocupação e rentabilidade",
//           "Automação de processos e gestão de insumos",
//           "Estruturação de contratos, metas e performance assistencial"
//         ],
//         img: "/assets/consultoria.jpeg"
//       }
//     ];
  
//     return (
//       <CompanyPage title="Consultoria" next="/gi-engenharia/" prev="/higia/">
//         <h4 className="text-center">{t('company.consultoria.subtitle')}</h4>
  
//         <div className="max-w-7xl mx-auto px-4">
//           {sections.map((section, index) => (
//             <SectionWithImage
//               key={index}
//               title={section.title}
//               items={section.items}
//               imgSrc={section.img}
//               imgAlt={section.title}
//               reverse={index % 2 === 1}
//             />
//           ))}
//         </div>
//       </CompanyPage>
//     );
//   };
  


const SuccessCaseConsultoriaPage: React.FC = () => {
  const { t } = useTranslation();
  // Lista de seções com tópicos, imagens e alternância de posição
  const sections = [
    {
      title: "Especialistas em Implantação de Serviços de Saúde...",
      items: [
        "Montagem de serviços completos em hospitais do Norte e Nordeste",
        "Estruturação de clínicas com portfólio completo de exames",
        "Adequação técnica e ampliação de unidades já existentes",
        "Projetos com ROI validado, alta eficiência e rápido crescimento",   
      ],
      imgSrc: "/assets/consultoria/diferencial.png",
      imgAlt: "Mapeamento do cenário",
      reverse: true, // Imagem à esquerda
    }

  ];
  return (
    <>
      <div className="w-full min-h-screen">  
        {/* Navbar */}
        <nav className="w-full px-6 py-4 flex items-center justify-between shadow-md bg-white">
          <ImageBrand
          src="/assets/consultoria.png"
          width={160}
          height={50}
          />
        </nav>  
        <section className="px-6 pt-16 bg-gray-50 text-center">
          <h2 className="text-3xl font-bold mb-4">Cases de Sucesso</h2>
        </section>   
        <section className="max-w-5xl mx-auto px-4">                 
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
        </section>
        <section className="px-6 py-16 text-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
                {sections.map((section, index) => (
                // Verifica se imgSrc está definido e não é uma string vazia
                section.imgSrc ? null: (
                    <SectionWithImageOrProject
                    key={index}
                    title={section.title}
                    items={section.items}
                    imgSrc={section.imgSrc}
                    imgAlt={section.imgAlt}
                    reverse={section.reverse}
                    />
                ) 
                ))}
            </div>
        </section>        
      </div> 
      <ArrowButton to="/gi-engenharia/" direction="right" label="Avançar" />
      <HomeButton label="Página Inicial"/>
      <ArrowButton to="/consult/diferencial/" direction="left" label="Voltar" />
      <footer className="bg-gray-800 text-white py-6 mt-12 text-center">
        <p className="text-sm">© {new Date().getFullYear()}. Todos os direitos reservados.</p>
      </footer>
    </>
  );
};


export default SuccessCaseConsultoriaPage;