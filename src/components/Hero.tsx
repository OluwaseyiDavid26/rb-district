// import Image from "next/image";

// export default function Hero() {
//   return (
//     <div className="flex flex-col lg:flex-row max-w-[1440px] mx-auto">
//       <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-[30px]">
//         <Image
//           src="/house.png"
//           alt="Hero Image"
//           width={800}
//           height={600}
//           className="w-full h-auto object-cover rounded-[22px]"
//           priority
//         />
//       </div>
//       <div className="w-full lg:w-1/2 flex flex-col justify-center p-4 sm:p-6 lg:p-[40px] space-y-6 lg:pr-[100px]">
//         <div>
//           <div>
//             <h1 className="text-3xl sm:text-[64px] lg:text-[72px] font-[500] text-[#111111] leading-tight sm:leading-[76px] lg:leading-[88px]">
//               Secure your ideal property in Akure
//             </h1>
//             <p className="text-base sm:text-lg lg:text-[20px] font-[500] leading-relaxed lg:leading-[30px] text-[#525252] mt-4">
//               Find affordable and dependable properties in Akure, perfect for
//               both your business and family needs.
//             </p>
//           </div>
//           <div className="mt-6 sm:mt-8 lg:mt-[40px]">
//             <button className="bg-[#27A031] text-white py-3 sm:py-4 px-6 sm:px-8 rounded-[28px] font-[600] text-sm sm:text-base">
//               Explore Properties
//             </button>
//           </div>
//         </div>
//         <div className="grid sm:grid-cols-2 gap-8 mt-12 sm:mt-16 lg:mt-[100px]">
//           <div className="text-center lg:text-left">
//             <Image
//               src="/secure.png"
//               alt="secure image"
//               width={32}
//               height={32}
//               className="mx-auto lg:mx-0"
//             />
//             <h3 className="font-[600] text-base sm:text-lg py-4">
//               SECURED LIVING
//             </h3>
//             <p className="text-sm sm:text-base text-[#8C8C8C] max-w-sm mx-auto lg:mx-0">
//               Invest in a well-planned community, where every neighborhood
//               ensures peace of mind.
//             </p>
//           </div>
//           <div className="text-center lg:text-left">
//             <Image
//               src="/diamond.png"
//               alt="diamond image"
//               width={32}
//               height={32}
//               className="mx-auto lg:mx-0"
//             />
//             <h3 className="font-[600] text-base sm:text-lg py-4">
//               SUPERIOR QUALITY
//             </h3>
//             <p className="text-sm sm:text-base text-[#8C8C8C] max-w-sm mx-auto lg:mx-0">
//               Experience top-tier real estate solutions with exceptional service
//               tailored to meet your lifestyle needs.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";

// export default function Hero() {
//   const [activeImage, setActiveImage] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);

//   const images = ["/house.png", "/house-2.png", "/house.png"];

//   useEffect(() => {
//     if (!isHovered) {
//       const interval = setInterval(() => {
//         setActiveImage((prev) => (prev + 1) % images.length);
//       }, 4000);
//       return () => clearInterval(interval);
//     }
//   }, [isHovered, images.length]);

//   const stats = [
//     { number: "200+", label: "Properties Sold" },
//     { number: "98%", label: "Client Satisfaction" },
//     { number: "15+", label: "Years Experience" },
//   ];

//   return (
//     <div className="relative w-full min-h-screen bg-gradient-to-br from-gray-50 to-white overflow-hidden">
//       {/* Animated background blobs */}
//       <div className="absolute top-0 left-0 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
//       <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
//       <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />

//       <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 py-12 lg:py-20">
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//           {/* Left Column - Content */}
//           <div className="space-y-8 lg:pr-8">
//             {/* Badge */}
//             <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2">
//               <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
//               <span className="text-sm font-medium text-green-700">
//                 Premium Properties in Akure
//               </span>
//             </div>

//             {/* Main Heading with gradient */}
//             <div>
//               <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
//                 <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
//                   Secure your ideal
//                 </span>
//                 <br />
//                 <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
//                   property in Akure
//                 </span>
//               </h1>
//               <p className="text-lg lg:text-xl text-gray-600 mt-6 leading-relaxed max-w-xl">
//                 Find affordable and dependable properties in Akure, perfect for
//                 both your business and family needs. Start your journey to
//                 homeownership today.
//               </p>
//             </div>

//             {/* CTA Buttons */}
//             <div className="flex flex-wrap gap-4">
//               <button className="group relative bg-gradient-to-r from-green-600 to-emerald-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300 hover:scale-105">
//                 <span className="relative z-10">Explore Properties</span>
//                 <span className="absolute inset-0 rounded-full bg-gradient-to-r from-green-700 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity" />
//               </button>
//               <button className="px-8 py-4 rounded-full font-semibold text-lg border-2 border-gray-300 text-gray-700 hover:border-green-500 hover:text-green-600 transition-all duration-300 hover:scale-105">
//                 Schedule a Tour
//               </button>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
//               {stats.map((stat, index) => (
//                 <div key={index} className="text-center lg:text-left">
//                   <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
//                     {stat.number}
//                   </div>
//                   <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Column - Interactive Image Gallery */}
//           <div
//             className="relative"
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//           >
//             {/* Main Image Container */}
//             <div className="relative h-[500px] lg:h-[650px] rounded-3xl overflow-hidden shadow-2xl">
//               {images.map((img, index) => (
//                 <div
//                   key={index}
//                   className={`absolute inset-0 transition-opacity duration-1000 ${
//                     index === activeImage ? "opacity-100" : "opacity-0"
//                   }`}
//                 >
//                   <img
//                     src={img}
//                     alt={`Property ${index + 1}`}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               ))}

//               {/* Overlay gradient */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

//               {/* Floating feature cards */}
//               <div className="absolute bottom-6 left-6 right-6 flex gap-3">
//                 <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 flex-1 shadow-lg">
//                   <div className="flex items-center gap-3">
//                     <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
//                       <svg
//                         className="w-6 h-6 text-green-600"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
//                         />
//                       </svg>
//                     </div>
//                     <div>
//                       <div className="font-bold text-gray-900">
//                         Secured Living
//                       </div>
//                       <div className="text-xs text-gray-600">24/7 Security</div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 flex-1 shadow-lg">
//                   <div className="flex items-center gap-3">
//                     <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
//                       <svg
//                         className="w-6 h-6 text-emerald-600"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
//                         />
//                       </svg>
//                     </div>
//                     <div>
//                       <div className="font-bold text-gray-900">
//                         Premium Quality
//                       </div>
//                       <div className="text-xs text-gray-600">
//                         Top-tier Service
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Image Navigation Dots */}
//             <div className="flex justify-center gap-2 mt-6">
//               {images.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setActiveImage(index)}
//                   className={`h-2 rounded-full transition-all duration-300 ${
//                     index === activeImage
//                       ? "w-8 bg-green-600"
//                       : "w-2 bg-gray-300 hover:bg-gray-400"
//                   }`}
//                 />
//               ))}
//             </div>

//             {/* Decorative elements */}
//             <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-20 blur-2xl" />
//             <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full opacity-20 blur-2xl" />
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes blob {
//           0%,
//           100% {
//             transform: translate(0px, 0px) scale(1);
//           }
//           33% {
//             transform: translate(30px, -50px) scale(1.1);
//           }
//           66% {
//             transform: translate(-20px, 20px) scale(0.9);
//           }
//         }
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
//       `}</style>
//     </div>
//   );
// }

"use client";

export default function Hero() {
  const stats = [
    { number: "40+", label: "Properties Sold" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "5+ Years", label: "Experience" },
  ];

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">
      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column */}
          <div className="space-y-8 lg:pr-8">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-sm font-medium text-green-700">
                Premium Properties in Akure
              </span>
            </div>

            {/* Heading */}
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
                Secure your ideal <br />
                <span className="text-green-600">property in Akure</span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 mt-6 leading-relaxed max-w-xl">
                Find affordable and dependable properties in Akure, perfect for
                both your business and family needs. Start your journey to
                homeownership today.
              </p>
            </div>

            {/* CTA Button */}
            <div>
              <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors duration-200">
                Explore Properties
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column Image */}
          <div className="relative">
            <div className="relative h-[500px] lg:h-[650px] rounded-2xl overflow-hidden">
              <img
                src="/house.png"
                alt="Property in Akure"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
