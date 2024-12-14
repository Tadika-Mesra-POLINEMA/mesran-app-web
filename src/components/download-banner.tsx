"use client";

function DownloadBanner() {
  return (
    <section
      id="DownloadBanner"
      className="relative overflow-hidden flex flex-col items-center w-full h-[848px] bg-cover bg-center bg-[url('/images/awan.jpg')]"
    >
      <div className="relative overflow-hidden flex flex-col gap-6 items-center pt-10 w-full h-fit">
        <p className="text-[40px] text-center leading-[120%] font-medium text-[#FFFFFF]">
          Mari buat semua <br />
          acara di sini.
        </p>
        <button className="font-semibold text-base text-[#1B1B1B] px-5 py-3 bg-[#FFFFFF] rounded-full">
          Download App
        </button>
      </div>
      <img
        src="/images/mockup5.png"
        alt="Logo"
        className="w-[438px] object-contain absolute -bottom-64 mx-auto -mr-16"
      />
    </section>
  );
}

export default DownloadBanner;
