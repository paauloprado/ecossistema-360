import React from 'react';
import { GeoJSON } from 'react-leaflet';
import { Feature, FeatureCollection } from 'geojson';

interface StateLayerProps {
  geoData: FeatureCollection;
  selectedState: string | null;
  onStateClick: (stateId: string, properties: any) => void;
}

export const StateLayer: React.FC<StateLayerProps> = ({ 
  geoData, 
  selectedState, 
  onStateClick 
}) => {
  
  const onEachFeature = (feature: Feature, layer: any) => {
    if (feature.properties) {
      const stateId = feature.properties.id;
      
      layer.on({
        mouseover: () => {
          if (stateId !== selectedState) {
            layer.setStyle({
              className: 'state-hover'
            });
          }
        },
        mouseout: () => {
          if (stateId !== selectedState) {
            layer.setStyle({
              className: 'state-default'
            });
          }
        },
        click: () => {
          onStateClick(stateId, feature.properties);
        }
      });

      // Set initial style
      if (stateId === selectedState) {
        layer.setStyle({
          className: 'state-selected'
        });
      } else {
        layer.setStyle({
          className: 'state-default'
        });
      }
      
      // Add tooltip
      layer.bindTooltip(feature.properties.name, {
        permanent: false,
        direction: 'center',
        className: 'bg-white px-2 py-1 rounded shadow-md'
      });
    }
  };

  const styleFunc = (feature?: Feature) => {
    if (!feature || !feature.properties) return {};

    const stateId = feature.properties.id;
    
    if (stateId === selectedState) {
      return { className: 'state-selected' };
    }
    
    return { className: 'state-default' };
  };

  return (
    <GeoJSON 
      data={geoData}
      style={styleFunc}
      onEachFeature={onEachFeature}
    />
  );
};