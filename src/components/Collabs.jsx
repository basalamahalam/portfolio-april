import React from "react";

import Marquee from "react-fast-marquee";

import logo1 from "../assets/logo/1.png";
import logo2 from "../assets/logo/2.png";
import logo3 from "../assets/logo/3.png";
import logo4 from "../assets/logo/4.png";
import logo5 from "../assets/logo/5.png";
import logo6 from "../assets/logo/6.png";
import logo7 from "../assets/logo/7.png";
import logo8 from "../assets/logo/8.png";
import logo9 from "../assets/logo/9.png";
import logo10 from "../assets/logo/10.png";
import logo11 from "../assets/logo/11.png";
import logo12 from "../assets/logo/12.png";

const Collabs = () => {
  // Masukkan semua logo yang sudah diimpor ke dalam array
  const logos = [
    { src: logo1, alt: "Brand 1" },
    { src: logo2, alt: "Brand 2" },
    { src: logo3, alt: "Brand 3" },
    { src: logo4, alt: "Brand 4" },
    { src: logo5, alt: "Brand 5" },
    { src: logo6, alt: "Brand 6" },
    { src: logo7, alt: "Brand 7" },
    { src: logo8, alt: "Brand 8" },
    { src: logo9, alt: "Brand 9" },
    { src: logo10, alt: "Brand 10" },
    { src: logo11, alt: "Brand 11" },
    { src: logo12, alt: "Brand 12" },
  ];

  return (
    <div className="py-16 bg-white sm:py-24">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold font-poppins text-[#c75d2c]">
          PREVIOUS COLLABS
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          My Previous Collaborations with Different Organizations
        </p>
      </div>

      <div className="mt-12">
        <Marquee
          speed={50}
          pauseOnHover={true}
          gradient={true}
          gradientColor="#FFFFFF"
          gradientWidth={100}
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-10"
              style={{ width: "200px" }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="object-contain w-full max-h-[150px]"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Collabs;
