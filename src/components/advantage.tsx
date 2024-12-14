"use client";

import Image from "next/image";
import { SectionLabel } from "./section-label";

function Advantage() {
  return (
    <section
      id="advantages"
      className="md:px-[60px] md:py-[60px] bg-[#FFFFFF] px-5 py-5 scroll-m-5"
    >
      <div className="flex flex-col gap-[60px] items-center">
        {/* Judul */}
        <div className="flex flex-col gap-4 items-center">
          <SectionLabel>Keunggulan</SectionLabel>
          <p className="text-[40px] text-center leading-[120%] font-medium text-[#1B1B1B]">
            Apa yang membuat kami <br />
            berbeda dengan yang lain?
          </p>
          <p className="text-base text-center text-[#7F7F7F]">
            Kami menawarkan fitur eksklusif, mudah digunakan, dan teknologi{" "}
            <br />
            canggih untuk membuat acara Anda lebih spesial.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
          {/* Container 1 */}
          <div className="flex flex-col gap-6 w-full">
            {/* Pertama */}
            <div className="flex flex-col justify-between w-full h-full gap-[68px] bg-[#E8FFD3] rounded-xl px-6 py-6">
              <Image
                src="/images/petir.png"
                alt="Lightning Icon"
                width={60}
                height={60}
                className="object-contain"
              />
              <div className="flex flex-col gap-3">
                <p className="font-medium text-[28px] text-[#1B1B1B]">
                  Real-Time Notifikasi
                </p>
                <p className="text-base text-[#7F7F7F]">
                  Real-Time Notifikasi memberi Anda pembaruan langsung tentang
                  acara, seperti undangan, atau perubahan jadwal.
                </p>
              </div>
            </div>
            {/* Kedua */}
            <div className="flex flex-col justify-between w-full h-full gap-[68px] bg-[#FDE0F5] rounded-xl px-6 py-6">
              <Image
                src="/images/flex.png"
                alt="Lightning Icon"
                width={60}
                height={60}
                className="object-contain"
              />
              <div className="flex flex-col gap-3">
                <p className="font-medium text-[28px] text-[#1B1B1B]">
                  Flexible Semua Acara
                </p>
                <p className="text-base text-[#7F7F7F]">
                  Flexible Semua Acara memungkinkan Anda menyesuaikan acara
                  sesuai kebutuhan, seperti tamu, waktu, dan tema.
                </p>
              </div>
            </div>
          </div>

          {/* Container 2 */}
          <div className="relative overflow-hidden flex items-end justify-center w-full h-[500px] md:h-full bg-cover bg-center rounded-xl bg-[url('/images/bgCard.jpg')] border-[1px] border-[#E8E8E8]">
            <img
              src="/images/mockup1.png"
              alt="mockup1"
              className="absolute top-20 w-11/12 h-fit object-contain"
            />
          </div>

          {/* Container 3 */}
          <div className="flex flex-col gap-6 w-full">
            {/* Pertama */}
            <div className="flex flex-col justify-between w-full h-full gap-[68px] bg-[#E8E5FF] rounded-xl px-6 py-6">
              <div className="flex justify-between items-center w-full">
                <Image
                  src="/images/pesan.png"
                  alt="Lightning Icon"
                  width={60}
                  height={60}
                  className="object-contain"
                />
                <div className="px-[10px] py-[6px] bg-[#1B1B1B] rounded-full font-semibold text-base text-[#FFFFFF]">
                  SOON!
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-medium text-[28px] text-[#1B1B1B]">
                  Kirim Pesan ke Teman
                </p>
                <p className="text-base text-[#7F7F7F]">
                  Kirim Pesan ke Teman memudahkan Anda berkomunikasi langsung
                  dengan tamu atau teman acara.
                </p>
              </div>
            </div>
            {/* Kedua */}
            <div className="flex flex-col justify-between w-full h-full gap-[68px] bg-[#DFF2FF] rounded-xl px-6 py-6">
              <Image
                src="/images/kunci.png"
                alt="Lightning Icon"
                width={60}
                height={60}
                className="object-contain"
              />
              <div className="flex flex-col gap-3">
                <p className="font-medium text-[28px] text-[#1B1B1B]">
                  Kirim Undangan ke Semua
                </p>
                <p className="text-base text-[#7F7F7F]">
                  Kirim Undangan ke Semua memungkinkan Anda mengundang semua
                  tamu sekaligus dengan mudah.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Advantage;
