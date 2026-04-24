import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { StateLayer } from './StateLayer';
import { MarkerLayer } from './MarkerLayer';
import { DataPanel } from './DataPanel';
import { brazilGeoData } from '../data/brazilGeoData';
import { markers } from '../data/markers';
import { MapState, SelectedData } from '../types';

// Fix for Leaflet marker icons
import L from 'leaflet';

// Fix the icon issue in Leaflet
const fixLeafletIcon = () => {
  delete (L.Icon.Default.prototype as any)._getIconUrl;
  
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  });
};

const BrazilMap: React.FC = () => {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [selectedMarker, setSelectedMarker] = useState<number | null>(null);
  const [mapState, setMapState] = useState<MapState>({
    center: [-15.77972, -47.92972], // Brasília coordinates (center of Brazil)
    zoom: 4,
  });

  // Selected data for display in the panel
  const [selectedData, setSelectedData] = useState<SelectedData | null>(null);

  useEffect(() => {
    fixLeafletIcon();
  }, []);

  const handleStateClick = (stateId: string, properties: any) => {
    setSelectedState(stateId);
    setSelectedMarker(null);
    setSelectedData({
      type: 'state',
      name: properties.name,
      data: {
        population: properties.population,
        capital: properties.capital,
        area: properties.area,
        id: stateId,
        abbreviation: properties.abbreviation
      }
    });
  };

  const handleMarkerClick = (markerId: number, markerData: any) => {
    setSelectedMarker(markerId);
    setSelectedState(null);
    setSelectedData({
      type: 'marker',
      name: markerData.name,
      data: markerData
    });
  };

  const handleClearSelection = () => {
    setSelectedState(null);
    setSelectedMarker(null);
    setSelectedData(null);
  };

  

  return (
    <div className="relative w-full h-full">
      <MapContainer
        center={mapState.center}
        zoom={mapState.zoom}
        scrollWheelZoom={true}
        className="h-full w-full z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <StateLayer 
          geoData={brazilGeoData} 
          selectedState={selectedState}
          onStateClick={handleStateClick}
        />
        <MarkerLayer 
          markers={markers} 
          selectedMarker={selectedMarker}
          onMarkerClick={handleMarkerClick}
        />
      </MapContainer>
      
      {selectedData && (
        <DataPanel 
          data={selectedData} 
          onClose={handleClearSelection}
        />
      )}
    </div>
  );
};

export default BrazilMap;