import React, { useState } from "react";
import Gambar from "../assets/foto.png";

const Header = () => {
  //   const handleDownload = () => {
  //     const pdfUrl = "/CV_Muhammad Alam Basalamah.pdf";
  //     const link = document.createElement("a");
  //     link.href = pdfUrl;
  //     link.download = "CV_Muhammad Alam Basalamah.pdf"; // specify the filename
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //   };

  return (
    <div className="items-start justify-center hidden h-screen pt-24 md:flex">
      <div className="flex items-center justify-between w-full px-32">
        <div>
          <img
            src={Gambar}
            className="top-0 left-0 w-[200px] lg:w-[350px]"
            alt="Gambar"
          />
        </div>
        <div>
          <h1 className="text-8xl font-bold text-[#c75d2c] font-poppins mb-2 tracking-wide pr-10">
            PORTFOLIO.
          </h1>
          <h1 className="pl-2 text-2xl font-semibold tracking-wider text-black font-poppins">
            Afrilla Muthi Arizona
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
