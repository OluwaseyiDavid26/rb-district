import Image from "next/image";

export default function About() {
  return (
    <div
      id="about"
      className="relative w-full h-[600px] sm:h-[800px] lg:h-[1024px] mt-12 max-w-[1440px] mx-auto"
    >
      <Image
        src="/about-us.jpg"
        alt="About Us"
        fill
        className="object-cover"
        priority
      />

      {/* Text Overlay Container */}
      <div className="absolute top-[30px] sm:top-[60px] left-[20px] sm:left-[60px] w-[90%] sm:w-auto max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] bg-white rounded-[20px] px-[30px] sm:px-[60px] py-[50px] sm:py-[100px]">
        <h2 className="text-[18px] sm:text-[20px] lg:text-[22px] text-[#525252] font-[500] leading-[1.4] sm:leading-[32.47px] mb-6 sm:mb-10">
          We are shaping the Future of Living in Akure
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-[#111111] font-[500] leading-[1.6] sm:leading-[30px] mb-6 sm:mb-8">
          At Redeemed Business District (RBD), we&#39;re more than a real estate
          company, we&#39;re building a modern lifestyle right here in Alagbaka,
          Akure.
          <br />
          <br />
          From beautiful homes to thriving business spaces, our goal is to
          create functional, secure, and stylish spaces for families,
          professionals, and investors alike.
        </p>
        <button className="bg-[#27A031] text-white py-2.5 sm:py-3 px-5 sm:px-6 rounded-[28px] font-[600] text-sm sm:text-base">
          Explore Properties
        </button>
      </div>
    </div>
  );
}
