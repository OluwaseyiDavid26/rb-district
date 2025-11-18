"use client";
import { useState } from "react";

// FAQ data array
const faqData = [
  {
    title: "What types of properties are available at RBD Estate?",
    text: "We offer a wide range from luxury duplexes to studio apartments. You can choose from fully detached duplexes, semi-detached duplexes, 1-bedroom apartments, studio flats, and commercial spaces like offices and retail shops.",
  },
  {
    title: "Can I pay in installments?",
    text: "Yes. We offer flexible payment plans. You can make a 50% down payment and spread the balance over 12 months.",
  },
  {
    title: "Where is RBD Estate located?",
    text: "RBD Estate is located in Alagbaka, Akure, directly opposite The Dome along Igbatoro Road. It's close to key government offices, entertainment hubs, and commercial centers.",
  },
  {
    title: "Is the estate secure and well-planned?",
    text: "Absolutely. RBD is a gated community with modern infrastructure, 24/7 security, and properly planned residential and commercial zones. It's designed for comfort, safety, and long-term value.",
  },
  {
    title: "Who can I talk to for more information or inspection?",
    text: "You can reach out to us via: 📞 07081361898 / 07062783359 📧 info@rbdistrict.com Or visit our office at RBD Estate, Opp. The Dome, Alagbaka, Akure.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full py-20 flex flex-col items-center bg-[#F4F4F4]">
      <div className="max-w-[1440px] w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-[32px] font-[500] text-[#111111]">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="flex flex-col items-center gap-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="w-full max-w-[660px] bg-white rounded-[24px] overflow-hidden"
            >
              <div
                className="min-h-[80px] px-6 flex items-center justify-between cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="font-[500] text-[18px] text-[#111111]">
                  {faq.title}
                </h3>
                <div className="w-[24px] h-[24px] rounded-full bg-[#5A5A5A] flex items-center justify-center flex-shrink-0 ml-4">
                  <span className="text-white text-[18px] font-bold leading-none mb-[1px]">
                    {openIndex === index ? "-" : "+"}
                  </span>
                </div>
              </div>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-[16px] text-[#525252] leading-[1.6]">
                    {faq.text}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
