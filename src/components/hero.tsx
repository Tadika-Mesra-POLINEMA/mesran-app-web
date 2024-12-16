"use client";

import React from "react";

const Hero = () => {
  return (
    <section className="relative w-fill h-[100dvh] bg-cover bg-center bg-[url('/images/hero.jpg')] bg-[#F6F6F6]">
      <div className="w-full p-5 md:p-[60px] flex flex-col gap-4 align-bottom h-fit absolute bottom-0 bg-gradient-to-b from-transparent to-[#000000] to-100% to-opacity">
        <p className="font-medium md:text-[60px] text-[40px] text-[#FFFFFF] leading-[110%] md:w-[580px] w-full">
          Buat semua acara dengan satu Aplikasi.
        </p>
        <p className="md:text-xl text-base text-[#FFFFFF] md:w-[532px] w-full">
          Buat semua acara dengan satu aplikasi yang memudahkan Anda mengatur berbagai jenis acara, mulai dari perencanaan hingga undangan, dengan praktis dan efisien.
        </p>
      </div>
    </section>
  );
};

export default Hero;
