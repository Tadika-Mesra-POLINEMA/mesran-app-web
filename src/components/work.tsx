"use client";

import Image from "next/image";
import { SectionLabel } from "./section-label";

function HowWeWork() {
  return (
    <section
      id="how-we-work"
      className="md:px-[60px] md:py-[60px] bg-[#FFFFFF] px-5 py-8 scroll-m-5"
    >
      <div className="flex flex-col md:gap-[60px] gap-8 items-center">
        {/* Judul */}
        <div className="flex flex-col gap-4 items-center">
          <SectionLabel>Bagaimana kami bekerja</SectionLabel>
          <p className="md:text-[40px] text-[28px] text-center leading-[120%] font-medium text-[#1B1B1B] md:w-[480px] w-full">
            Membuat acara dengan sangat mudah.
          </p>
          <p className="text-base text-center text-[#7F7F7F] w-full">
            Membuat acara jadi mudah dengan langkah sederhana dan cepat.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 md:gap-6 gap-3 w-full">
          {/* Container 1 */}
          <div className="relative overflow-hidden flex flex-col w-full h-[600px] bg-[#F6F6F6] rounded-xl items-center">
            <div className="relative overflow-hidden w-full flex flex-grow">
              <Image
                src="/images/mockup2.png"
                alt="Logo"
                width={1000}
                height={1000}
                className="w-10/12 object-contain absolute top-[40px] left-1/2 -translate-x-1/2"
              />
            </div>
            <div className="md:pb-6 pb-3 pt-[78px] md:px-6 px-3 flex flex-col gap-3 align-bottom h-fit absolute bottom-0 bg-gradient-to-b from-transparent to-[#F6F6F6] to-20%">
              <p className="font-medium md:text-[28px] text-xl text-[#1B1B1B]">
                Daftarkan Akun
              </p>
              <p className="text-base text-[#7F7F7F]">
                Daftarkan Akun memudahkan Anda untuk membuat profil pribadi,
                sehingga Anda bisa mulai membuat dan mengelola acara dengan
                cepat.
              </p>
            </div>
          </div>

          {/* Container 2 */}
          <div className="relative overflow-hidden flex flex-col w-full h-[600px] bg-[#F6F6F6] rounded-xl items-center">
            <div className="relative overflow-hidden w-full flex flex-grow">
              <Image
                src="/images/mockup3.png"
                alt="Logo"
                width={1000}
                height={1000}
                className="w-10/12 object-contain absolute top-[40px] left-1/2 -translate-x-1/2"
              />
            </div>
            <div className="md:pb-6 pb-3 pt-[78px] md:px-6 px-3 flex flex-col gap-3 align-bottom h-fit absolute bottom-0 bg-gradient-to-b from-transparent to-[#F6F6F6] to-20%">
              <p className="font-medium md:text-[28px] text-xl text-[#1B1B1B]">
                Isi Formulir Acara
              </p>
              <p className="text-base text-[#7F7F7F]">
                Isi Formulir Acara untuk menambahkan detail seperti tanggal,
                lokasi, dan tema, sehingga acara Anda siap diatur dengan mudah.
              </p>
            </div>
          </div>

          {/* Container 3 */}
          <div className="relative overflow-hidden flex flex-col w-full h-[600px] bg-[#F6F6F6] rounded-xl items-center">
            <div className="relative overflow-hidden w-full flex flex-grow">
              <Image
                src="/images/mockup4.png"
                alt="Logo"
                width={1000}
                height={1000}
                className="w-10/12 object-contain absolute top-[40px] left-1/2 -translate-x-1/2"
              />
            </div>
            <div className="md:pb-6 pb-3 pt-[78px] md:px-6 px-3 flex flex-col gap-3 align-bottom h-fit absolute bottom-0 bg-gradient-to-b from-transparent to-[#F6F6F6] to-20%">
              <p className="font-medium md:text-[28px] text-xl text-[#1B1B1B]">
                Kirim Undangan Anda!
              </p>
              <p className="text-base text-[#7F7F7F]">
                Kirim Undangan Anda memungkinkan Anda mengundang tamu dengan
                cepat dan mudah, sehingga acara lebih terorganisir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowWeWork;
