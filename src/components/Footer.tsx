// import Image from "next/image";

// export default function Footer() {
//   return (
//     <div className="w-full py-[60px] overflow-hidden">
//       <div className="flex flex-col lg:flex-row max-w-[1440px] mx-auto">
//         {/* Left Column - Form Section */}
//         <div
//           id="footer"
//           className="w-full lg:max-w-[470px] px-6 sm:px-8 lg:px-12 flex flex-col justify-between gap-8 lg:gap-4 lg:pr-[100px]"
//         >
//           {/* Top content */}
//           <div className="flex flex-col gap-4">
//             <div>
//               <p className="font-[500] text-[18px] leading-[100%] text-[#111111] max-w-[323px]">
//                 Reach out today to stay updated on our latest properties,
//                 offers, and developments.
//               </p>
//             </div>
//             <div className="flex flex-col gap-4 w-full sm:w-[323px]">
//               <input
//                 type="text"
//                 placeholder="Your First Name"
//                 className="w-full h-[57px] px-4 bg-[#F0F0F0] rounded-[50px] placeholder-[#C2C2C2]"
//               />
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 className="w-full h-[57px] px-4 bg-[#F0F0F0] rounded-[50px] placeholder-[#C2C2C2]"
//               />
//               <input
//                 type="text"
//                 placeholder="Your Message"
//                 className="w-full h-[57px] px-4 bg-[#F0F0F0] rounded-[50px] placeholder-[#C2C2C2]"
//               />
//               <button className="w-full h-[57px] bg-[#27A031] text-white rounded-[50px] text-[18px] font-[600] leading-[100%]">
//                 Submit
//               </button>
//             </div>
//           </div>

//           {/* Bottom content - copyright and logo */}
//           <div className="flex flex-col items-start gap-4">
//             <p className="text-[14px] text-[#8C8C8C]">
//               &copy; {new Date().getFullYear()} RBD Estate. All rights reserved.
//             </p>
//             <Image
//               src="/logo.png"
//               alt="logo"
//               width={220}
//               height={100}
//               className="w-[150px] lg:w-[220px]"
//             />
//           </div>
//         </div>

//         {/* Right Column */}
//         <div className="hidden lg:flex pl-[120px] flex-1">
//           <div className="w-full">
//             <div className="flex justify-between pr-[60px]">
//               {/* Navigation Links */}
//               <div>
//                 <ul>
//                   <li className="font-[500] text-[26px] leading-[26px] text-[#8C8C8C] pb-6">
//                     Home
//                   </li>
//                   <li className="font-[500] text-[26px] leading-[26px] text-[#8C8C8C] pb-6">
//                     About us
//                   </li>
//                   <li className="font-[500] text-[26px] leading-[26px] text-[#8C8C8C] pb-6">
//                     Available Properties
//                   </li>
//                   <li className="font-[500] text-[26px] leading-[26px] text-[#8C8C8C] pb-6">
//                     Services
//                   </li>
//                   <li className="font-[500] text-[26px] leading-[26px] text-[#8C8C8C] pb-6">
//                     Neighbourhood Guide
//                   </li>
//                 </ul>
//               </div>
//               {/* Contact Info */}
//               <div className="max-w-[300px] flex flex-col">
//                 <p className="font-[500] text-[17px] leading-[26px] text-[#3B3B3B]">
//                   RBD Estate, Opp. The Dome, Igbatoro Road, Alagbaka, Akure,
//                   Ondo State 07081361898 / 07062783359
//                 </p>
//                 <p className="font-[500] text-[17px] leading-[26px] text-[#3B3B3B]">
//                   info@rbdistrict
//                 </p>
//               </div>
//             </div>

//             {/* Updated Large Image container */}
//             {/* Updated Large Video container */}

//             {/* Updated Large Video container */}
//             <div className="relative w-full max-w-[800px] h-[500px] mt-8">
//               <div className="absolute inset-0">
//                 <video
//                   src="/properties/rbd-video.mp4"
//                   autoPlay
//                   loop
//                   muted
//                   playsInline
//                   className="w-full h-full object-cover object-center rounded-lg"
//                 />
//               </div>
//             </div>
//             {/* <div className="relative w-full max-w-[1000px] h-[600px] mt-8">
//               <div className="absolute right-[-60px] left-[100px] h-full">
//                 <Image
//                   src="/house-2.png"
//                   fill
//                   alt="house"
//                   className="object-cover object-center"
//                   sizes="(min-width: 1440px) 1000px, 100vw"
//                 />
//               </div>
//             </div> */}

//             {/* Built with text */}
//             <div className="flex justify-end pr-[60px] mt-4">
//               <p className="text-[#525252] text-[18px] font-[600] leading-[30px]">
//                 Built with 💛 in Akure.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Navigation and Contact - Only shown on mobile */}
//         <div className="lg:hidden mt-8 px-6 sm:px-8">
//           <div className="flex flex-col gap-6">
//             <ul className="space-y-4">
//               <li className="font-[500] text-[20px] leading-[26px] text-[#8C8C8C]">
//                 Home
//               </li>
//               <li className="font-[500] text-[20px] leading-[26px] text-[#8C8C8C]">
//                 About us
//               </li>
//               <li className="font-[500] text-[20px] leading-[26px] text-[#8C8C8C]">
//                 Available Properties
//               </li>
//               <li className="font-[500] text-[20px] leading-[26px] text-[#8C8C8C]">
//                 Services
//               </li>
//               <li className="font-[500] text-[20px] leading-[26px] text-[#8C8C8C]">
//                 Neighbourhood Guide
//               </li>
//             </ul>
//             <div className="mt-6">
//               <p className="font-[500] text-[15px] leading-[24px] text-[#3B3B3B]">
//                 RBD Estate, Opp. The Dome, Igbatoro Road, Alagbaka, Akure, Ondo
//                 State 07081361898 / 07062783359
//               </p>
//               <p className="font-[500] text-[15px] leading-[24px] text-[#3B3B3B] mt-2">
//                 info@rbdistrict
//               </p>
//             </div>
//             <p className="text-[#525252] text-[16px] font-[600] leading-[24px] mt-4">
//               Built with 💛 in Akure.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-full bg-white">
      {/* Video Hero Section */}
      <div className="relative w-full h-[500px] lg:h-[600px] overflow-hidden">
        <video
          src="https://drive.google.com/uc?export=download&id=1a4Pu2fTRbKC_T5dvGyz_5yGVnvby502V"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Text overlay */}
        <div className="absolute bottom-12 left-6 lg:left-16 max-w-[600px]">
          <h2 className="text-white text-[32px] lg:text-[48px] font-[700] leading-[110%] mb-4">
            Your Dream Home Awaits
          </h2>
          <p className="text-white/90 text-[16px] lg:text-[18px] font-[400] leading-[150%]">
            Discover premium properties in the heart of Akure
          </p>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column - Contact Form */}
          <div id="footer" className="lg:col-span-5">
            <h3 className="font-[600] text-[24px] leading-[120%] text-[#111111] mb-2">
              Get in Touch
            </h3>
            <p className="font-[400] text-[16px] leading-[150%] text-[#666666] mb-6">
              Reach out today to stay updated on our latest properties, offers,
              and developments.
            </p>

            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your First Name"
                className="w-full h-[54px] px-5 bg-[#F8F8F8] border border-[#E5E5E5] rounded-[12px] placeholder-[#999999] focus:outline-none focus:border-[#27A031] transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full h-[54px] px-5 bg-[#F8F8F8] border border-[#E5E5E5] rounded-[12px] placeholder-[#999999] focus:outline-none focus:border-[#27A031] transition-colors"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-5 py-4 bg-[#F8F8F8] border border-[#E5E5E5] rounded-[12px] placeholder-[#999999] focus:outline-none focus:border-[#27A031] transition-colors resize-none"
              />
              <button className="w-full h-[54px] bg-[#27A031] hover:bg-[#229029] text-white rounded-[12px] text-[16px] font-[600] transition-colors">
                Send Message
              </button>
            </div>
          </div>

          {/* Right Column - Navigation & Contact */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Quick Links */}
            <div>
              <h4 className="font-[600] text-[18px] leading-[120%] text-[#111111] mb-6">
                Quick Links
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="font-[400] text-[16px] text-[#666666] hover:text-[#27A031] transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-[400] text-[16px] text-[#666666] hover:text-[#27A031] transition-colors"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-[400] text-[16px] text-[#666666] hover:text-[#27A031] transition-colors"
                  >
                    Available Properties
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-[400] text-[16px] text-[#666666] hover:text-[#27A031] transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-[400] text-[16px] text-[#666666] hover:text-[#27A031] transition-colors"
                  >
                    Neighbourhood Guide
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-[600] text-[18px] leading-[120%] text-[#111111] mb-6">
                Contact Us
              </h4>
              <div className="space-y-4">
                <div>
                  <p className="font-[400] text-[14px] text-[#999999] mb-1">
                    Address
                  </p>
                  <p className="font-[400] text-[15px] leading-[150%] text-[#333333]">
                    RBD Estate, Opp. The Dome,
                    <br />
                    Igbatoro Road, Alagbaka,
                    <br />
                    Akure, Ondo State
                  </p>
                </div>
                <div>
                  <p className="font-[400] text-[14px] text-[#999999] mb-1">
                    Phone
                  </p>
                  <p className="font-[400] text-[15px] text-[#333333]">
                    07081361898
                    <br />
                    07062783359
                  </p>
                </div>
                <div>
                  <p className="font-[400] text-[14px] text-[#999999] mb-1">
                    Email
                  </p>
                  <p className="font-[400] text-[15px] text-[#333333]">
                    info@rbdistrict
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#E5E5E5] flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-8">
            <Image
              src="/logo.png"
              alt="RBD Estate Logo"
              width={180}
              height={80}
              className="w-[140px] lg:w-[180px]"
            />
            <p className="text-[14px] text-[#999999]">
              © {new Date().getFullYear()} RBD Estate. All rights reserved.
            </p>
          </div>
          <p className="text-[#666666] text-[15px] font-[500]">
            Built with 💛 in Akure.
          </p>
        </div>
      </div>
    </div>
  );
}
