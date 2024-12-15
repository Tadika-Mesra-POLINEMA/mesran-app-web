"use client";

import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  const handleClickNavigation = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      id="faq"
      className="md:px-[60px] md:py-[60px] bg-[#FFFFFF] px-5 py-5"
    >
      <div className="flex flex-col gap-[120px] items-center">
        {/* Container */}
        <div className="flex flex-col lg:flex-row gap-8 justify-between w-full">
          {/* Logo & Tagline */}
          <div className="flex flex-col gap-4 w-full">
            <div className="flex gap-[6px] items-center">
              <Image
                src="/logo.png"
                alt="Mesran Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <p className="font-medium text-2xl text-primary-base">Mesran</p>
            </div>
            <p className="text-base text-neutral-40">
              Buat semua acara dengan satu Aplikasi.
            </p>
          </div>
          {/* Navigation */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            {/* Company */}
            <div className="flex flex-col gap-6">
              <p className="font-medium text-xl text-neutral-90">Company</p>
              <div className="flex flex-col gap-4 text-base text-neutral-40">
                <a
                  onClick={() => handleClickNavigation("advantages")}
                  className="hover:text-primary-base cursor-pointer"
                >
                  Keunggulan
                </a>
                <a
                  onClick={() => handleClickNavigation("how-we-work")}
                  className="hover:text-primary-base cursor-pointer"
                >
                  Bagaimana kami bekerja
                </a>
                <a
                  onClick={() => handleClickNavigation("faq")}
                  className="hover:text-primary-base cursor-pointer"
                >
                  FAQ
                </a>
              </div>
            </div>
            {/* Kontributor */}
            <div className="flex flex-col gap-6">
              <p className="font-medium text-xl text-neutral-90">Kontributor</p>
              <div className="flex flex-col gap-4 text-base text-neutral-40">
                <a
                  href="https://www.linkedin.com/in/ajihamdaniahmad/"
                  className="hover:text-primary-base"
                >
                  Aji Hamdani Ahmad
                </a>
                <a
                  href="https://www.linkedin.com/in/maulana-arya-80296625a/"
                  className="hover:text-primary-base"
                >
                  Maulana Arya Putra Nugraha
                </a>
                <a
                  href="https://www.linkedin.com/in/rayyanalfirdausi/"
                  className="hover:text-primary-base"
                >
                  Rayyan Al Firdausi
                </a>
                <a href="" className="hover:text-primary-base">
                  Sherina Ayu Wanda Pramesti
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col gap-8 w-full">
          <div className="border-t-[1px] border-[#EBEBEB]"></div>
          <p className="font-medium text-base text-neutral-40">
            © Copyright 2024 Mesran. All right reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
