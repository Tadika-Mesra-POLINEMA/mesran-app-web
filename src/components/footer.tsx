import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      id="faq"
      className="md:px-[60px] md:py-[60px] bg-[#FFFFFF] px-5 py-5"
    >
      <div className="flex flex-col gap-[120px] items-center">
        {/* Container */}
        <div className="flex justify-between w-full">
          {/* Logo & Tagline */}
          <div className="flex flex-col gap-4 w-full">
            <div className="flex gap-[6px] items-center">
              <img
                src="/images/logo.svg" // Path to your logo image
                alt="Logo"
                className="w-[40px] h-[40px] object-contain"
              />
              <p className="font-medium text-2xl text-[#FE4F34]">Mesran</p>
            </div>
            <p className="text-base text-[#7F7F7F]">
              Buat semua acara dengan satu Aplikasi.
            </p>
          </div>
          {/* Navigation */}
          <div className="flex gap-[60px]">
            {/* Company */}
            <div className="flex flex-col gap-6">
              <p className="font-medium text-xl text-[#1B1B1B]">Company</p>
              <div className="flex flex-col gap-4 text-base text-[#7F7F7F]">
                <a href="" className="hover:text-[#1B1B1B]">
                  Keunggulan
                </a>
                <a href="" className="hover:text-[#1B1B1B]">
                  Bagaimana kami bekerja
                </a>
                <a href="" className="hover:text-[#1B1B1B]">
                  FAQ
                </a>
              </div>
            </div>
            {/* Kontributor */}
            <div className="flex flex-col gap-6">
              <p className="font-medium text-xl text-[#1B1B1B]">Kontributor</p>
              <div className="flex flex-col gap-4 text-base text-[#7F7F7F]">
                <a
                  href="https://www.linkedin.com/in/ajihamdaniahmad/"
                  className="hover:text-[#1B1B1B]"
                >
                  Aji Hamdani Ahmad
                </a>
                <a href="#" className="hover:text-[#1B1B1B]">
                  Maulana Arya Putra Nugraha
                </a>
                <a
                  href="https://linkedin.com/in/rayyanalfirdausi"
                  className="hover:text-[#1B1B1B]"
                >
                  Rayyan Al Firdausi
                </a>
                <a
                  href="https://www.linkedin.com/in/sc-sherina-ayu-7967ab314/"
                  className="hover:text-[#1B1B1B]"
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
          <p className="font-medium text-base text-[#7F7F7F]">
            © Copyright 2024 Mesran. All right reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
