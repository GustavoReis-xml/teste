import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const App: React.FC = () => {
  const [map, setMap] = useState<google.maps.Map | null>(null);

  // Configurações do mapa
  const mapContainerStyle = {
    width: '100%',
    height: '100vh',
  };

  const center = {
    lat: -23.55052,  // Latitude de São Paulo
    lng: -46.633308, // Longitude de São Paulo
  };

  const handleLoad = (map: google.maps.Map) => {
    setMap(map);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyA34Dhu6E-o8jY3NEjgG7poqCAk7hb5VzM">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={12}
        onLoad={handleLoad}
      >
        {/* Exemplo de marcador */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default App;
