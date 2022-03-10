import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
const Map = () => {
  return (
    <MapContainer center={[-34.72438884967695, -58.24963061289171]} zoom={18}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[-34.72437884967695, -58.24970061289171]}>
        <Popup>
          Brandzen 434 <br /> Horario de Atención: <br />
          Lu a Vi: 08 a 18hs <br />
          Sab: 09 a 12:30 hs
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
