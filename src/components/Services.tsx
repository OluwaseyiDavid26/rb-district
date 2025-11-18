import Image from "next/image";

export default function Services() {
  return (
    <div
      id="services"
      className="flex flex-col items-center justify-center w-full bg-[#F4F4F4] py-20"
    >
      <div className="max-w-[470px] px-4 sm:px-6 lg:px-12 mb-[40px]">
        <h1 className="font-medium text-[24px] sm:text-[32px] leading-[100%] text-center text-[#111111]">
          More Than Properties, We Offer Peace of Mind
        </h1>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-2 gap-[20px] px-[20px] max-w-[947.2px] w-full">
        {/* First Column */}
        <div className="flex flex-col gap-[10px]">
          <div className="relative w-[453.6px] h-[277.09px] group">
            <Image
              src="/sales.jpg"
              alt="Sales & Leasing"
              fill
              className="object-cover rounded-[20px]"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-[20px]" />
            <div className="absolute bottom-[30px] left-[30px] max-w-[280px]">
              <h3 className="text-[20px] font-[600] text-[#EEEEEE]">
                Sales & Leasing
              </h3>
              <p className="text-[14px] font-[500] text-white">
                We help you buy, sell, or rent homes & business spaces with
                ease.
              </p>
            </div>
          </div>
          <div className="relative w-[453.6px] h-[410.5px] group">
            <Image
              src="/real-estate.jpg"
              alt="Real Estate Advisory"
              fill
              className="object-cover rounded-[20px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-[20px]" />
            <div className="absolute bottom-[30px] left-[30px] max-w-[280px]">
              <h3 className="text-[20px] font-[600] text-[#EEEEEE]">
                Real Estate Advisory
              </h3>
              <p className="text-[14px] font-[500] text-white">
                Want to invest wisely? Our team provides smart insights based on
                local knowledge.
              </p>
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div className="flex flex-col gap-[10px]">
          <div className="relative w-[453.6px] h-[410.5px] group">
            <Image
              src="/rentals.jpg"
              alt="Short Stays & Rentals"
              fill
              className="object-cover rounded-[20px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-[20px]" />
            <div className="absolute bottom-[30px] left-[30px] max-w-[280px]">
              <h3 className="text-[20px] font-[600] text-[#EEEEEE]">
                Short Stays & Rentals
              </h3>
              <p className="text-[14px] font-[500] text-white">
                Need a temporary place? We&#39;ve got stylish options ready for
                you.
              </p>
            </div>
          </div>
          <div className="relative w-[453.6px] h-[277.09px] group">
            <Image
              src="/property.jpg"
              alt="Property Management"
              fill
              className="object-cover rounded-[20px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-[20px]" />
            <div className="absolute bottom-[30px] left-[30px] max-w-[280px]">
              <h3 className="text-[20px] font-[600] text-[#EEEEEE]">
                Property Management
              </h3>
              <p className="text-[14px] font-[500] text-white">
                We manage your properties like they&#39;re ours, clean, secure,
                and well-maintained.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden px-4 sm:px-6 space-y-4 w-full max-w-[500px]">
        {/* Sales & Leasing */}
        <div className="relative w-full aspect-[16/10]">
          <Image
            src="/sales.jpg"
            alt="Sales & Leasing"
            fill
            className="object-cover rounded-[20px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-[20px]" />
          <div className="absolute bottom-[20px] left-[20px] max-w-[280px]">
            <h3 className="text-[18px] font-[600] text-[#EEEEEE]">
              Sales & Leasing
            </h3>
            <p className="text-[14px] font-[500] text-white">
              We help you buy, sell, or rent homes & business spaces with ease.
            </p>
          </div>
        </div>
        {/* Real Estate Advisory */}
        <div className="relative w-full aspect-[16/10]">
          <Image
            src="/real-estate.jpg"
            alt="Real Estate Advisory"
            fill
            className="object-cover rounded-[20px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-[20px]" />
          <div className="absolute bottom-[20px] left-[20px] max-w-[280px]">
            <h3 className="text-[18px] font-[600] text-[#EEEEEE]">
              Real Estate Advisory
            </h3>
            <p className="text-[14px] font-[500] text-white">
              Want to invest wisely? Our team provides smart insights based on
              local knowledge.
            </p>
          </div>
        </div>
        {/* Short Stays & Rentals */}
        <div className="relative w-full aspect-[16/10]">
          <Image
            src="/rentals.jpg"
            alt="Short Stays & Rentals"
            fill
            className="object-cover rounded-[20px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-[20px]" />
          <div className="absolute bottom-[20px] left-[20px] max-w-[280px]">
            <h3 className="text-[18px] font-[600] text-[#EEEEEE]">
              Short Stays & Rentals
            </h3>
            <p className="text-[14px] font-[500] text-white">
              Need a temporary place? We&#39;ve got stylish options ready for
              you.
            </p>
          </div>
        </div>
        {/* Property Management */}
        <div className="relative w-full aspect-[16/10]">
          <Image
            src="/property.jpg"
            alt="Property Management"
            fill
            className="object-cover rounded-[20px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-[20px]" />
          <div className="absolute bottom-[20px] left-[20px] max-w-[280px]">
            <h3 className="text-[18px] font-[600] text-[#EEEEEE]">
              Property Management
            </h3>
            <p className="text-[14px] font-[500] text-white">
              We manage your properties like they&#39;re ours, clean, secure,
              and well-maintained.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
