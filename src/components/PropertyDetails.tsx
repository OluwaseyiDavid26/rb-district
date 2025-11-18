import Image from "next/image";
import Map from "@/components/Map";

export interface Property {
  id: string;
  title: string;
  text: string;
  mainImage?: string; // make mainImage optional
  otherImages?: string[];
  features?: {
    title: string;
    description: string;
  }[];
  highlights?: {
    icon: string;
    label: string;
  }[];
  summary?: {
    heading: string;
    paragraph: string;
  };
  payment?: {
    price: string;
    landSize: string;
    builtArea: string;
    installment: string;
  };
  map?: {
    lat: number;
    lng: number;
  };
  image?: string; // add image property to match the data
}

export default function PropertyDetails({ property }: { property: Property }) {
  return (
    <div className="w-full px-8 sm:px-10 py-20 flex flex-col justify-center">
      <div className="w-full max-w-[1349.46px] h-auto flex flex-col sm:flex-row gap-[10.89px] self-center rounded-[17px] overflow-hidden">
        <div className="relative w-full sm:w-[612.57px] h-[296.6px] flex-shrink-0">
          <Image
            src={property.mainImage!}
            alt="Main property view"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="grid grid-cols-2 gap-[10.89px]">
          {property.otherImages!.map((src, index) => (
            <div key={index} className="relative w-[357.75px] h-[142.69px]">
              <Image
                src={src}
                alt={`Property view ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between flex-col lg:flex-row max-w-[1349.46px] px-4 py-10">
        <div className="lg:w-2/3">
          <div>
            <h1 className="text-[30px] font-[700] text-[#525252]">
              {property.title}
            </h1>
            <p className="text-[20px] font-[500] text-[#111111]">
              {property.text}
            </p>
          </div>

          <hr className="border-[#C3C3C3] my-20" />

          <ul>
            {property.features!.map((feature, idx) => (
              <li key={idx} className="py-4">
                <h3 className="text-[20px] font-bold leading-[29px]">
                  {feature.title}
                </h3>
                <p className="text-[18px] font-[400] leading-[29px]">
                  {feature.description}
                </p>
              </li>
            ))}
          </ul>

          <hr className="border-[#C3C3C3] my-20" />

          <div>
            <h2 className="text-[24px] font-[600] mb-4 text-[#111111]">
              {property.summary!.heading}
            </h2>
            <p className="text-[18px] font-[400] leading-[24px] text-[#111111]">
              {property.summary!.paragraph}
            </p>
          </div>

          <hr className="border-[#C3C3C3] my-20" />

          <div className="mb-20">
            <h1 className="text-[26px] font-[600] text-[#111111] mb-8">
              Highlights
            </h1>
            <div className="grid grid-cols-3 gap-6">
              {property.highlights!.map((item, idx) => (
                <div className="flex items-center gap-3" key={idx}>
                  <div className="relative w-6 h-6">
                    <Image
                      src={item.icon}
                      alt={`${item.label} icon`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-[18px] font-[500] text-[#111111]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-[#777676] text-[18px] font-[500]">
              Payment Options
            </h2>
            <div className="flex gap-4 items-center">
              <h1 className="text-[40px] font-[500] text-[#111111]">
                {property.payment!.price}
              </h1>
              <div>
                <p className="text-[14px] font-[500] text-[#3E3E3E] leading-[100%]">
                  Land size: {property.payment!.landSize}
                </p>
                <p className="text-[14px] font-[500] text-[#3E3E3E] leading-[100%]">
                  Built area: {property.payment!.builtArea}
                </p>
              </div>
            </div>
            <p className="text-[12px] font-[500] text-[#8C8C8C] leading-[100%]">
              {property.payment!.installment}
            </p>
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-4">
            <p className="font-[500] text-[18px] leading-[100%] text-[#111111] text-center max-w-[323px]">
              Make your enquiries here
            </p>
            <div className="flex flex-col gap-4 w-full sm:w-[323px]">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full h-[57px] px-4 bg-[#F0F0F0] rounded-[50px] placeholder-[#C2C2C2]"
              />
              <input
                type="text"
                placeholder="Your Message"
                className="w-full h-[57px] px-4 bg-[#F0F0F0] rounded-[50px] placeholder-[#C2C2C2]"
              />
              <button className="w-full h-[57px] bg-[#27A031] text-white rounded-[50px] text-[18px] font-[600] leading-[100%]">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-[28px] font-[600] text-[#3F3F3F] leading-[100%] py-20">
          🗺 Around the Property
        </h1>
        <Map coordinates={property.map!} />
      </div>
    </div>
  );
}
