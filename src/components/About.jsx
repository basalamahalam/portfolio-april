import React, { useState, useEffect, useCallback } from "react";

// Import gambar Anda
import gambar1 from "../assets/foto.png";
import gambar2 from "../assets/foto-1.png";
import gambar3 from "../assets/foto-2.jpg";
import gambar4 from "../assets/foto-3.jpg";
import gambar5 from "../assets/foto-4.jpg";

import { ChevronLeft, ChevronRight } from "lucide-react";

const About = () => {
  const slideImages = [gambar3, gambar4, gambar5];

  // LOGIKA SLIDER (Tetap sama persis seperti sebelumnya)
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const prevSlide = React.useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slideImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slideImages.length]);

  const nextSlide = React.useCallback(() => {
    const isLastSlide = currentIndex === slideImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slideImages.length]);

  React.useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F9CB99] p-4 px-32">
      <div className="container flex flex-col items-center mx-auto overflow-hidden bg-white rounded-lg shadow-2xl md:flex-row">
        {/* === KOLOM KIRI (SLIDER) === */}
        <div className="w-full md:w-1/2 h-[500px]">
          {/* PERUBAHAN ADA DI BARIS DI BAWAH INI */}
          <div className="relative w-full h-full overflow-hidden">
            {" "}
            {/* <-- TAMBAHKAN overflow-hidden DI SINI */}
            <div
              className="flex w-full h-full transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {slideImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="flex-shrink-0 object-cover w-full h-full"
                />
              ))}
            </div>
            <div className="absolute flex justify-between w-full px-4 -translate-y-1/2 top-1/2">
              <button
                onClick={prevSlide}
                className="p-2 text-white transition rounded-full bg-black/30 hover:bg-black/50"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 text-white transition rounded-full bg-black/30 hover:bg-black/50"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* === KOLOM KANAN (DESKRIPSI) === */}
        <div className="flex flex-col justify-center w-full p-8 md:w-1/2 md:p-12">
          <h1 className="text-4xl font-bold font-lato text-[#c75d2c] font-poppins mb-4">
            Halo! Aku Afrilla.
          </h1>
          <p className="text-base leading-relaxed text-justify text-[#443826] font-poppins">
            Seorang analis kimia berdomisili di Bandung yang suka banget sama
            dunia skincare, beauty, dan lifestyle. Aku aktif di media sosial
            sebagai Content Creator Beauty atau Key Opinion Leader (KOL). Aku
            sangat terbuka untuk mengikut kerja sama ataupun campaign!
          </p>
          <hr className="my-6 text-zinc-400" />
          <p className="text-sm font-normal tracking-wider text-black font-monserrat">
            Konten Kreator | 22 YO | Neural to Cool | Oily Skin
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
