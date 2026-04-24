import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { MarkerData } from '../types';
import { MapPin } from 'lucide-react';

interface MarkerLayerProps {
  markers: MarkerData[];
  selectedMarker: number | null;
  onMarkerClick: (markerId: number, markerData: MarkerData) => void;
}

export const MarkerLayer: React.FC<MarkerLayerProps> = ({
  markers,
  selectedMarker,
  onMarkerClick
}) => {
  // Create a custom icon using Lucide React
  const createCustomIcon = (marker: MarkerData) => {
    const isSelected = marker.id === selectedMarker;
    
    // Create a DOM element for the custom icon
    const customMarkerElement = document.createElement('div');
    customMarkerElement.className = 'custom-marker';
    customMarkerElement.style.backgroundColor = isSelected ? '#1b5e20' : '#4caf50';
    customMarkerElement.style.width = isSelected ? '36px' : '30px';
    customMarkerElement.style.height = isSelected ? '36px' : '30px';
    customMarkerElement.style.boxShadow = '0 2px 5px rgba(0,0,0,0.3)';
    
    // Create a custom icon
    return L.divIcon({
      html: customMarkerElement,
      className: '',
      iconSize: [30, 30],
      iconAnchor: [15, 15]
    });
  };

  return (
    <>
      {markers.map(marker => (
        <Marker
          key={marker.id}
          position={[marker.latitude, marker.longitude]}
          icon={createCustomIcon(marker)}
          eventHandlers={{
            click: () => onMarkerClick(marker.id, marker)
          }}
        >
          <Popup>
            <div className="text-center">
              <h3 className="font-bold text-lg">{marker.name}</h3>
              <p className="text-sm">{marker.description}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </>
  );
};