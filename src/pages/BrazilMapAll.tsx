import React, { useEffect, useRef, useState, useCallback } from 'react';
import styled from 'styled-components';
import chroma from 'chroma-js';
import useMarkersFromCSVTelerad from '../hooks/useMarkersFromCSVTelerad';
import { useTranslation } from "react-i18next";

import {useChartStateMap} from "../store/useChartStateMap";
import ToggleButton from '../components/ToggleButton';
import CompanyPage from './CompanyPage';



const BrazilMapAll = () => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all')

  
  const [abbleStates, setAbbleStates] = useState(["AP", "PA", "MA", "CE", "PI", "RO", "MT", "GO", "MG", "SP", "DF", "TO"]);
  const [selectedStates, setSelectedStates] = useState(abbleStates);
  
  const statesDistribuicao = ["SP","AP","MG","MA","DF"];
  const statesTelerad = ["AP", "PA", "MA", "CE", "PI", "RO", "MT", "GO", "MG", "SP", "TO"];
  // const statesNegociation = [""]
  const [selectedMakers, setSelectedMakers] = useState([]);
  const setStateSelectedTelerad = useChartStateMap((state) => state.setStateSelectedTelerad);


  const getStateStyle = useCallback((feature: { properties: { UF_05: any; }; }) => {
    return {
      fillColor: selectedStates.includes(feature.properties.UF_05) ? '#A1CE28' : '#DDD',
      weight: 1,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
    };
    
  }, [selectedStates]);


  const onEachState = useCallback((feature: { properties: { name: any; sigla: any; }; }, layer: { on: (arg0: { click: () => void; }) => void; bindTooltip: (arg0: any) => void; }) => {
    const stateName = feature.properties.NOME_UF;
    const stateCode = feature.properties.UF_05;
    if (!abbleStates.includes(stateCode)) return;
    layer.on({
      click: () => {  
        setSelectedStates(prev => 
          prev.includes(stateCode) 
            ? prev.filter(s => s !== stateCode)
            : [...prev, stateCode]
        );
        
      }
    });

    layer.bindTooltip(`<b>${stateName}</b>`);
  }, []);
    const markers = useMarkersFromCSVTelerad();
    const markersAll = markers;
  useEffect(() => {
    const scriptLeaflet = document.createElement('script');
    scriptLeaflet.src = '/assets/leaflet.js';
    scriptLeaflet.async = true;

    const linkLeaflet = document.createElement('link');
    linkLeaflet.rel = 'stylesheet';
    linkLeaflet.href = '/assets/leaflet.css';

    document.head.appendChild(scriptLeaflet);
    document.head.appendChild(linkLeaflet);

    scriptLeaflet.onload =  () => {
      initMap();
      addMarkers(map);
      
    };
    
    

    return () => {
      document.head.removeChild(scriptLeaflet);
      document.head.removeChild(linkLeaflet);
    };
  }, []);

  

  useEffect(() => {
    if (map && markers.length > 0) {
      map.eachLayer((layer: { feature: any; setStyle: (arg0: { fillColor: string; weight: number; opacity: number; color: string; dashArray: string; fillOpacity: number; }) => void; }) => {
        if (layer.feature) {
          layer.setStyle(getStateStyle(layer.feature));
        }
        
      });
      // console.log("Markers:", markers); // Agora deve aparecer
      addMarkers(map);
    }
    
  }, [selectedStates]);

  useEffect(() => {
    const handleResize = () => {
      if (map) map.invalidateSize();
    };
  
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [map]);

  const initMap = async () => {
    const L = window.L;
    if (L.DomUtil.get(mapRef.current.id) !== null) {
      L.DomUtil.get(mapRef.current.id)._leaflet_id = null;
    }
    if (!mapRef.current) return;
    const bounds = L.latLngBounds(
      L.latLng(-33.751748, -73.985535), // Sudoeste
      L.latLng(5.271786, -34.793091)    // Nordeste
    );
 

    const newMap = L.map(mapRef.current,{
      zoomControl: false, // exibe o controle de zoom
      scrollWheelZoom: true, // ativa zoom com o scroll
      doubleClickZoom: true, // ativa zoom com duplo clique
    }).setView([-14.2350, -51.9253], 4.2);
    newMap.setMaxBounds(bounds);
    newMap.on('drag', function() {
      newMap.panInsideBounds(bounds, { animate: false });
    });
    setMap(newMap);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      // attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(newMap);

    // L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    //   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(newMap);

    

    try {
      const response = await fetch('/brazil-states.json');
      const brazilStates = await response.json();

      L.geoJSON(brazilStates, {
        style: getStateStyle,
        onEachFeature: onEachState
      }).addTo(newMap);
      
      // addExamMarkers(newMap, brazilStates);
    } catch (error) {
      console.error('Erro ao carregar o GeoJSON:', error);
    }
  };

  
  const addMarkers = (map) => {
    if (!Array.isArray(markersAll)) return;
    if (!map) return;
    
    const L = window.L;
    markersAll.forEach(markerData => {
      // const marker = L.marker([markerData.lat, markerData.lng]).addTo(map);
      // marker.bindPopup(`<b>${markerData.name}</b>`); // Popup com nome
      L.circleMarker([markerData.lat, markerData.lng], {
        radius: 3,          // Tamanho do marcador
        color: 'white',        // Cor da borda
        weight: 2,           // Espessura da borda
        fillColor: '#00524D', // Cor de preenchimento
        fillOpacity: 0.8     // Opacidade do preenchimento
    }).addTo(map).bindTooltip(`<b>${markerData.name}</b>`);
    
    });
  
  };
  const { t } = useTranslation();


  return (
    <CompanyPage
      title=""
      prev="/"
      next="/consult/"
    >
    <div className="w-full min-h-screen bg-white">
      {/* Navbar */}
      <nav className="w-full px-6 py-8 flex items-center justify-between shadow-md bg-white sticky top-0 z-50">
        <h1 className="font-clash text-2xl font-bold text-[#091f4a]">Abrangência</h1>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-24 bg-gray-50 text-center">
        <h2 className="font-clash text-5xl md:text-7xl font-black text-gray-900 leading-[1.1]">
          Abrangência do Grupo Imagem
        </h2>
      </section>

      <div className="flex flex-col items-center justify-center p-8">
      <div id="map" ref={mapRef} className="w-screen min-h-[800px] z-0">
        
      <div className="relative z-10 bottom-2 left-2 border-2 border-gray-300 bg-white p-4 inline-block rounded-lg shadow-md">
  <span className="text-xs font-medium">Selecionado:</span>
  {selectedStates.length === 0 ? (
    <span className="ml-1">Todos</span>
  ) : (
    <div className="flex flex-wrap gap-x-2 text-sm ml-1">
      {selectedStates.map((stateCode) => (
        <span key={stateCode} className="px-2 py-0.5 bg-gray-100 rounded">
          {stateCode}
        </span>
      ))}
    </div>
    
  )}
  
</div>
  
      </div>
<div className='flex gap-4 flex-row items-center justify-center w-full h-full gap-4'>
      <ToggleButton
        onClick={() => {
          setSelectedStates(abbleStates);
          setActiveCategory('all')
        }}
        active={activeCategory === 'all'}
        label={t('company.common.all')}     
        />
        <ToggleButton
        onClick={() => {
          setSelectedStates(statesTelerad);
          setActiveCategory('telerad')
        }}
        label={t('company.common.location')} 
        active={activeCategory === 'telerad'}
        alias="telerad"    
        />
        <ToggleButton
        onClick={() => {
          setSelectedStates(statesDistribuicao);
          setActiveCategory('distribuicao')
        }}
        label={t('company.common.distribution')} 
        active={activeCategory === 'distribuicao'}
        alias="distribuicao"    
        />
    </div>
    </div>
    
    </div>
    </CompanyPage>
  );
};

export default BrazilMapAll;