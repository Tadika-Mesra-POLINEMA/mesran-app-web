import React from "react";

const Footer: React.FC = () => {
  return (
    // <footer className="footer bg-base-200 text-base-content p-10">
    //   <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    //     {/* Left Section: Logo and Description */}
    //     <div className="flex flex-col items-start">
    //       <div className="flex items-center space-x-3">
    //         <img
    //           src="/logo.png" // Path to your logo image
    //           alt="Mesran Logo"
    //           width="50"
    //           height="50"
    //           className="object-contain"
    //         />
    //         <span className="text-2xl font-medium font-sans" style={{ color: "#FE4F34" }}>
    //           Mesran
    //         </span>
    //       </div>
    //       <p className="text-sm text-gray-600 mt-2">
    //         Aplikasi untuk membuat acara fleksibel dengan teknologi AI
    //       </p>
    //     </div>

    //     {/* Empty Column for Spacing */}
    //     <div></div>

    //     {/* Right Section: Company */}
    //     <div className="flex flex-col">
    //       <h6 className="text-l font-semibold mb-3">Company</h6>
    //       <a href="#advantage" className="text-sm text-gray-600">Keunggulan</a>
    //       <a href="#how-we-work" className="text-sm text-gray-600">Bagaimana kami bekerja</a>
    //       <a href="#faq" className="text-sm text-gray-600">FAQ</a>
    //     </div>

    //     {/* Right Section: Contributors */}
    //     <div className="flex flex-col">
    //       <h6 className="text-l font-semibold mb-3">Kontributor</h6>
    //       <a href="https://github.com/Danni4421" className="text-sm text-gray-600">Aji Hamdani Ahmad</a>
    //       <a href="https://github.com/MaulanaAryaPutraN" className="text-sm text-gray-600">Maulana Arya Putra Nugraha</a>
    //       <a href="https://github.com/RayyanAlFirdausi" className="text-sm text-gray-600">Rayyan Al Firdausi</a>
    //       <a href="https://github.com/sherinaayu" className="text-sm text-gray-600">Sherina Ayu Wanda Pramesti</a>
    //     </div>
    //   </div>

    //   {/* Copyright Section */}
    //   <div className="text-center mt-8 text-sm text-gray-600">
    //     <p>&copy; 2024 Mesran. All rights reserved.</p>
    //   </div>
    // </footer>

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
                <a href="" className="hover:text-[#1B1B1B]">
                  Aji Hamdani Ahmad
                </a>
                <a href="" className="hover:text-[#1B1B1B]">
                  Maulana Arya Putra Nugraha
                </a>
                <a href="linkedin.com/in/rayyanalfirdausi" className="hover:text-[#1B1B1B]">
                  Rayyan Al Firdausi
                </a>
                <a href="" className="hover:text-[#1B1B1B]">
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
