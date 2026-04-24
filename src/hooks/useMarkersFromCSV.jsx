import { useEffect, useState } from "react";
import Papa from "papaparse";

export default function useMarkersFromCSV(){
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    // Ajuste aqui o caminho: começa com "/" para indicar raíz do "public"
    fetch("/assets/locations_new.csv")
      .then(res => res.text())
      .then(text => {
        Papa.parse(text, {
          header: true,
          skipEmptyLines: true,
          dynamicTyping: true,
          complete: (result) => {
            const arr = result.data
              .filter(loc => loc.lat && loc.lng)
              .map(loc => ({
                lat: Number(loc.lat),
                lng: Number(loc.lng),
                name: loc.city,
              }));
            // console.log(arr); // Verifique se está vindo no console!
            setMarkers(arr);
            
          }
        });
      });
  }, []);

  return markers;
}



