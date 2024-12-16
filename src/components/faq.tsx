"use client";

import { SectionLabel } from "./section-label";

interface FaqCardProps {
  title: string;
  content: string;
}

const faqContent: FaqCardProps[] = [
  {
    title: "Apa itu Mesran?",
    content:
      "Mesran adalah aplikasi mobile untuk membuat acara eksklusif. Dibekali AI canggih, Mesran memudahkan Anda merencanakan, mengelola, dan mengundang tamu dengan hasil yang berkesan.",
  },
  {
    title: "Apakah penggunaannya gampang?",
    content:
      "Tentu! Aplikasi ini dirancang dengan antarmuka yang sederhana, intuitif, dan user-friendly, sehingga mudah digunakan oleh siapa saja, bahkan untuk pemula sekalipun.",
  },
  {
    title: "Apakah aplikasinya aman?",
    content:
      "Ya, aplikasi kami dirancang dengan keamanan tinggi. Data pengguna dilindungi menggunakan enkripsi canggih, dan kami terus memantau serta memperbarui sistem untuk memastikan keamanan maksimal.",
  },
  {
    title: "Apakah acaranya bersifat eksklusif?",
    content:
      "Ya, acara yang dibuat melalui aplikasi ini bersifat eksklusif. Anda dapat mengatur akses undangan dan memastikan hanya tamu yang diundang yang bisa bergabung.",
  },
  {
    title: "Bisa dipakai acara apa saja?",
    content:
      "Aplikasi ini bisa digunakan untuk berbagai jenis acara, seperti ulang tahun, pernikahan, reuni, seminar, atau acara eksklusif lainnya. Fleksibel untuk kebutuhan acara besar maupun kecil!",
  },
  {
    title: "Apakah aplikasi ini mendukung acara dengan banyak tamu?",
    content:
      "Ya, aplikasi ini mendukung acara dengan banyak tamu. Anda bisa mengundang dan mengelola tamu dengan mudah.",
  },
];

export default function Faq() {
  return (
    <section
      id="faq"
      className="md:px-[60px] md:py-[60px] bg-[#FFFFFF] px-5 py-8 scroll-m-5"
    >
      <div className="flex flex-col md:gap-[60px] gap-8 items-center">
        <div className="flex flex-col gap-4 items-center">
          <SectionLabel>FAQ</SectionLabel>
          <p className="md:text-[40px] text-[28px] text-center leading-[120%] font-medium text-[#1B1B1B] md:w-[500px] w-full">
            Beberapa pertanyaan yang mungkin buat anda bingung.
          </p>
          <p className="text-base text-center text-[#7F7F7F] md:w-[540px] w-full">
            Beberapa pertanyaan yang sering muncul dan mungkin bisa membantu menjawab kebingungan Anda seputar penggunaan aplikasi ini.
          </p>
        </div>

        <div className="grid grid-cols-2 md:gap-6 gap-3 w-full">
          {faqContent.map((faq, index) => (
            <FaqCard key={index} title={faq.title} content={faq.content} />
          ))}
        </div>
      </div>
    </section>
  );
}

const FaqCard = ({ title, content }: FaqCardProps) => {
  return (
    <div className="col-span-2 md:col-span-1 flex flex-col gap-3 bg-white border-[1px] border-neutral-20 rounded-xl md:p-6 p-3 w-fill">
      <p className="font-medium md:text-2xl text-xl text-[#1B1B1B]">{title}</p>
      <p className="text-base text-neutral-40">{content}</p>
    </div>
  );
};
