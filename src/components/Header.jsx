import React, { useState } from "react";
import Gambar from "../assets/foto-1.png";

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
    <div className="flex items-center justify-between h-screen bg-[#F9CB99]">
      <div className="w-2/5 h-screen pl-32 pt-26">
        <img
          src={Gambar}
          className="top-0 left-0 w-[200px] lg:w-[350px]"
          alt="Gambar"
        />
      </div>

      <div className="flex flex-col items-center justify-center w-3/5 h-screen bg-white pr-18">
        <div>
          <h1 className="text-8xl font-bold text-[#c75d2c] font-poppins mb-6 tracking-wide text-left">
            PORTFOLIO
          </h1>
          <div className="py-3 px-6 bg-[#F9CB99] rounded-2xl max-w-fit mx-auto">
            <h1 className="text-lg font-semibold tracking-wide text-[#443826] font-poppins text-center">
              Afrilla Muthi Arizona / 2025 / Konten Kreator
            </h1>
          </div>
        </div>
        {/* <p className="pt-20 text-sm font-medium tracking-wider text-gray-800">
          Konten Kreator | 22 YO | Neural to Cool | Oily Skin
        </p> */}
      </div>
    </div>
  );
};

export default Header;
