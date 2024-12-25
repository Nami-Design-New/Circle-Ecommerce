// MapComponent.js

import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow
} from "@react-google-maps/api";

const MapComponent = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const locations = [
    { id: 1, lat: 30.0444, lon: 31.2357, title: " فرع شارع الجمهوريه1 " },
    { id: 2, lat: 29.9792, lon: 31.1342, title: "فرع شارع النصر 2" }
  ];

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "500px" }}
        center={{ lat: 30.0444, lng: 31.2357 }}
        zoom={10}
      >
        {locations.map(location =>
          <Marker
            key={location.id}
            position={{ lat: location.lat, lng: location.lon }}
            onClick={() => setSelectedPlace(location)}
          />
        )}

        {selectedPlace &&
          <InfoWindow
            position={{
              lat: selectedPlace.lat,
              lng: selectedPlace.lon
            }}
            onCloseClick={() => setSelectedPlace(null)}
          >
            <div>
              {selectedPlace.title}
            </div>
          </InfoWindow>}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
