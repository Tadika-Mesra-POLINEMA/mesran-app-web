"use client";

import { SectionLabel } from "./section-label";

function HowWeWork() {
  return (
    <section
      id="how-we-work"
      className="md:px-[60px] md:py-[60px] bg-[#FFFFFF] px-5 py-5 scroll-m-5"
    >
      <div className="flex flex-col gap-[60px] items-center">
        {/* Judul */}
        <div className="flex flex-col gap-4 items-center">
          <SectionLabel>Bagaimana kami bekerja</SectionLabel>
          <p className="text-[40px] text-center leading-[120%] font-medium text-[#1B1B1B]">
            Membuat acara dengan <br />
            sangat mudah.
          </p>
          <div className="text-base text-center text-[#7F7F7F]">
            Membuat acara jadi mudah dengan langkah sederhana dan cepat.
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
          {/* Container 1 */}
          <div className="relative overflow-hidden flex flex-col w-full h-[600px] bg-[#F6F6F6] rounded-xl items-center">
            <div className="relative overflow-hidden w-full flex flex-grow">
              <img
                src="/images/mockup2.png"
                alt="Logo"
                className="w-10/12 object-contain absolute top-[40px] left-1/2 -translate-x-1/2"
              />
            </div>
            <div className="pb-6 pt-[78px] px-6 gap-3 align-bottom h-fit absolute bottom-0 bg-gradient-to-b from-transparent to-[#F6F6F6] to-20%">
              <p className="font-medium text-[28px] text-[#1B1B1B]">
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
              <img
                src="/images/mockup3.png"
                alt="Logo"
                className="w-10/12 object-contain absolute top-[40px] left-1/2 -translate-x-1/2"
              />
            </div>
            <div className="pb-6 pt-[78px] px-6 gap-3 align-bottom h-fit absolute bottom-0 bg-gradient-to-b from-transparent to-[#F6F6F6] to-20%">
              <p className="font-medium text-[28px] text-[#1B1B1B]">
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
              <img
                src="/images/mockup4.png"
                alt="Logo"
                className="w-10/12 object-contain absolute top-[40px] left-1/2 -translate-x-1/2"
              />
            </div>
            <div className="pb-6 pt-[78px] px-6 gap-3 align-bottom h-fit absolute bottom-0 bg-gradient-to-b from-transparent to-[#F6F6F6] to-20%">
              <p className="font-medium text-[28px] text-[#1B1B1B]">
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
