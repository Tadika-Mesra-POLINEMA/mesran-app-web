import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: 'url("/path-to-your-image.jpg")' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="text-center text-white z-10">
        <h1 className="text-4xl font-semibold mb-4">
          Buat semua acara dengan satu Aplikasi.
        </h1>
        <p className="text-lg mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          voluptatibus.
        </p>
        <a
          href="#download"
          className="bg-orange-600 text-white px-6 py-3 rounded-lg"
        >
          Download App
        </a>
      </div>
    </section>
  );
};

export default Hero;
