import React from "react";

const Hero = () => {
  return (
    <section className="relative w-fill h-svh bg-cover bg-center bg-[url('/images/hero.jpg')] bg-[#F6F6F6]">
      <div className="w-full py-[60px] px-[60px] flex flex-col gap-4 align-bottom h-fit absolute bottom-0 bg-gradient-to-b from-transparent to-[#000000] to-100% to-opacity">
        <p className="font-medium text-[60px] text-[#FFFFFF] leading-[110%]">
          Buat semua acara <br />
          dengan satu Aplikasi.
        </p>
        <p className="text-[#FFFFFF]">
          Buat semua acara dengan satu aplikasi yang memudahkan <br />
          Anda mengatur berbagai jenis acara, mulai dari perencanaan <br />
          hingga undangan, dengan praktis dan efisien.
        </p>
      </div>
    </section>
  );
};

export default Hero;
