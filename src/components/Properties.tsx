"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import propertyListings from "@/data/properties";

interface PropertiesProps {
  isHomePage?: boolean;
  itemsPerPage?: number;
}

export default function Properties({
  isHomePage = false,
  itemsPerPage = 6,
}: PropertiesProps) {
  const [currentPage, setCurrentPage] = useState(1);

  // Get displayed items based on page type
  const displayedItems = isHomePage
    ? propertyListings.slice(0, 5)
    : propertyListings.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      );

  const totalPages = Math.ceil(propertyListings.length / itemsPerPage);

  return (
    <div className="w-full bg-[#F4F4F4] px-4 sm:px-6 py-20 flex flex-col items-center justify-center">
      <div className="max-w-[1440px] mx-auto w-full">
        {/* Pagination Controls */}
        {!isHomePage && totalPages > 1 && (
          <div className="flex justify-center gap-2 mb-8">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentPage === page
                    ? "bg-[#27A031] text-white"
                    : "bg-white text-[#111111] hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-[30px]">
          {displayedItems.map((property) => (
            <Link
              href={`/properties/${property.id}`}
              key={property.id}
              className="block group"
            >
              <div className="relative w-full aspect-[2/3] md:max-w-[430.47px] md:h-[646.69px] overflow-hidden rounded-[20px]">
                <Image
                  src={property.mainImage!}
                  alt={property.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                {/* Default View */}
                <div className="absolute bottom-[30px] left-[30px] max-w-[80%] transition-all duration-300 group-hover:-translate-y-full">
                  <h3 className="text-[20px] md:text-[23px] font-[700] leading-[1.3] md:leading-[30.55px] tracking-[-0.04em] text-white mb-2">
                    {property.title}
                  </h3>
                  <p className="text-[16px] md:text-[18px] font-[500] leading-[1.3] md:leading-[30.55px] tracking-[-0.04em] text-white">
                    {property.text}
                  </p>
                </div>

                {/* Hover State */}
                {/* Hover State */}
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out p-[40px] rounded-[20px]">
                  <div className="flex flex-col h-full">
                    {/* Title and subtitle */}
                    <div className="mb-6">
                      <h3 className="text-[20px] md:text-[22px] font-bold text-[#111111] mb-1">
                        {property.title}
                      </h3>
                      <p className="text-[15px] md:text-[16px] font-medium text-[#333333]">
                        {property.text}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div className="my-auto">
                      <h1 className="text-[18px] font-[600] text-[#111111] mb-4">
                        Highlights
                      </h1>
                      <div className="grid grid-cols-3 gap-4">
                        {property.highlights!.map((item, idx) => (
                          <div className="flex items-center gap-2" key={idx}>
                            <div className="relative w-4 h-4">
                              <Image
                                src={item.icon}
                                alt={`${item.label} icon`}
                                fill
                                className="object-contain"
                              />
                            </div>
                            <span className="text-[12px] font-[500] text-[#111111]">
                              {item.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Payment Info */}
                    <div className="mt-auto">
                      <h2 className="text-[#777676] text-[12px] font-[500]">
                        Payment Options
                      </h2>
                      <div className="flex gap-3 items-center">
                        <h1 className="text-[26px] font-[500] text-[#111111]">
                          {property.payment!.price}
                        </h1>
                        <div>
                          <p className="text-[10px] font-[500] text-[#3E3E3E] leading-[100%]">
                            Land size: {property.payment!.landSize}
                          </p>
                          <p className="text-[10px] font-[500] text-[#3E3E3E] leading-[100%]">
                            Built area: {property.payment!.builtArea}
                          </p>
                        </div>
                      </div>
                      <p className="text-[8px] font-[500] text-[#8C8C8C] leading-[100%]">
                        {property.payment!.installment}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
