"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Map from "./Map";

const locationData = [
  {
    location: "The Governor's Office",
    text: "Just minutes from RBD Estate, this is the administrative heartbeat of Ondo State. Ideal for professionals working in government or seeking proximity to the state's decision-making center.",
    coordinates: { lat: 7.2399811, lng: 5.2113914 },
  },
  {
    location: "The Dome Event Centre",
    text: "Host to concerts, weddings, exhibitions, and major social events. Whether it's entertainment or networking, The Dome puts you at the center of Akure's most exciting gatherings.",
    coordinates: { lat: 7.2361088, lng: 5.217606 },
  },
  {
    location: "ShopRite Mall",
    text: "Host to concerts, weddings, exhibitions, and major social events. Whether it's entertainment or networking, The Dome puts you at the center of Akure's most exciting gatherings.",
    coordinates: { lat: 7.23667, lng: 5.2116151 },
  },
  {
    location: "Arcade Arena",
    text: "This spacious public arena is great for family outings, open-air events, and community fun. A perfect weekend escape just down the road.",
    coordinates: { lat: 7.2366699, lng: 5.2038902 },
  },
];

export default function Location() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedLocation, setSelectedLocation] = useState(locationData[0]);

  const toggleLocation = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
    setSelectedLocation(locationData[index]);
  };

  return (
    <div id="location" className="w-full bg-[#EFCF12] py-30">
      <div className="max-w-[1440px] mx-auto px-[80px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Locations List */}
          <div className="flex flex-col w-full lg:w-[551px]">
            {locationData.map((item, index) => (
              <div key={index} className="border-b border-[#11111133]">
                <div
                  className="min-h-[115px] flex items-center justify-between cursor-pointer pr-4"
                  onClick={() => toggleLocation(index)}
                >
                  <h3 className="text-[30px] font-[500] leading-[100%] text-[#111111]">
                    {item.location}
                  </h3>
                  <span className="text-[#111111]">
                    <FontAwesomeIcon
                      icon={openIndex === index ? faChevronUp : faChevronDown}
                      className="w-4 h-4"
                    />
                  </span>
                </div>
                {openIndex === index && (
                  <p className="text-[17px] font-[400] leading-[27px] text-[#111111] pb-6">
                    {item.text}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Map Section */}
          <Map coordinates={selectedLocation.coordinates} className="flex-1" />
        </div>
      </div>
    </div>
  );
}
