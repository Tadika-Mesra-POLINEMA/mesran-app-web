import React from "react";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: 'url("/image1.jpg")' }} // Perbaikan pada sintaks backgroundImage
    >
      {/* Overlay untuk efek gelap */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Konten di pojok kiri bawah */}
      <div className="absolute bottom-10 left-10 text-white z-10">
        <h1 className="text-4xl font-semibold mb-4">
          Buat semua acara <br />
          dengan satu Aplikasi.
        </h1>
        <p className="text-lg mb-8">
          Buat semua acara dengan satu aplikasi yang memudahkan <br />
          Anda mengatur berbagai jenis acara, mulai dari perencanaan <br />
          hingga undangan, dengan praktis dan efisien.
        </p>
        
        {/* Tombol atau CTA */}
        {/* <a
          href="#download"
          className="bg-orange-600 text-white px-6 py-3 rounded-lg"
        >
          Download App
        </a> */}
      </div>
    </section>
  );
};

export default Hero;
