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
          <div className="flex flex-col gap-[6px] w-full">
            <div className="flex gap-[6px] items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="41"
                fill="none"
                viewBox="0 0 40 41"
              >
                <g clip-path="url(#a)">
                  <path
                    stroke="#FE4F34"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    d="M6.667 8.833H10M8.333 7.167V10.5m10.834-3.333-.834 3.333M30 8.833h3.333m-1.666-1.666V10.5M25 15.5l-1.667 1.667m6.667 5 3.333-.834M30 32.167h3.333M31.667 30.5v3.333m-8.331-5.803L12.473 17.167 5.156 33.133a1.667 1.667 0 0 0 2.215 2.215l15.965-7.318Z"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 .5h40v40H0z" />
                  </clipPath>
                </defs>
              </svg>

              <p className="font-medium text-2xl text-primary-base">Mesran</p>
            </div>
            <p className="text-base text-neutral-40">
              Buat semua acara dengan satu Aplikasi.
            </p>
          </div>
          {/* Navigation */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            {/* Company */}
            <div className="flex flex-col md:gap-6 gap-4">
              <p className="font-medium md:text-xl text-lg text-neutral-90">Company</p>
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
            <div className="flex flex-col md:gap-6 gap-4">
              <p className="font-medium md:text-xl text-lg text-neutral-90">Kontributor</p>
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
                <a
                  href="https://www.linkedin.com/in/sc-sherina-ayu-7967ab314/"
                  className="hover:text-primary-base"
                >
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
