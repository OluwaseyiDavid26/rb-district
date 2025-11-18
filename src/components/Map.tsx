"use client";
import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";

interface MapProps {
  coordinates: {
    lat: number;
    lng: number;
  };
  className?: string;
}

export default function Map({ coordinates, className = "w-full" }: MapProps) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  if (!isLoaded) {
    return (
      <div className={`${className} h-[600px] rounded-[20px] bg-gray-100 animate-pulse flex items-center justify-center`}>
        <p className="text-gray-500">Loading map...</p>
      </div>
    );
  }

  return (
    <div className={`${className} relative`}>
      <GoogleMap
        mapContainerClassName="w-full h-[600px] rounded-[20px]"
        center={coordinates}
        zoom={15}
        options={{
          mapTypeControl: true,
          zoomControl: true,
          streetViewControl: false,
        }}
      >
        <Marker position={coordinates} />
      </GoogleMap>
      <div className="absolute inset-x-0 bottom-8 flex justify-center pointer-events-none z-[1]">
        <a
          href={`https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#27A031] text-white px-6 py-3 rounded-lg text-sm font-medium shadow-lg hover:bg-[#228829] transition-colors pointer-events-auto"
        >
          View on Google Maps
        </a>
      </div>
    </div>
  );
}
