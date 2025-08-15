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
    // <div className="flex items-center justify-between h-screen bg-[#F9CB99]">
    //   <div className="w-2/3 pt-24 pl-32">
    //     <img
    //       src={Gambar}
    //       className="top-0 left-0 w-[200px] lg:w-[350px]"
    //       alt="Gambar"
    //     />
    //   </div>
    //   <div className="w-full h-screen p-2 pt-24 pr-32 text-right bg-white">
    //     <div className="flex-col items-center justify-center">
    //       <h1 className="text-8xl font-bold text-[#c75d2c] font-poppins mb-2 tracking-wide">
    //         PORTFOLIO.
    //       </h1>
    //       <h1 className="pl-2 text-xl font-semibold tracking-wider text-black font-poppins">
    //         Afrilla Muthi Arizona
    //       </h1>
    //     </div>
    //   </div>
    // </div>
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
          <h1 className="text-8xl font-bold text-[#c75d2c] font-poppins mb-2 tracking-wide text-left">
            PORTFOLIO
          </h1>
          <div className="flex items-center justify-between">
            <h1 className="pl-2 text-xl font-semibold tracking-wider text-[#443826] font-lato">
              Afrilla Muthi Arizona
            </h1>
            <p className="pr-2 text-lg tracking-wider text-[#443826] font-lato">
              Bandung, Indonesia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
