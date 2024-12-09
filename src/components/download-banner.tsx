function DownloadBanner() {
  return (
    <section id="DownloadBanner"className="bg-[#F6F6F6] w-full h-[848px]" style={{ backgroundImage: 'url("/images/awan.jpg" w-[2270px])' }}>
      <div className="relative overflow-hidden flex flex-col gap-6 items-center pt-10">
        <p className="text-[40px] text-center leading-[120%] font-medium text-[#FFFFFF]">
        Mari buat semua <br />
        acara di sini.
        </p>
        <button className="font-semibold text-base text-[#1B1B1B] px-5 py-3 bg-[#FFFFFF] rounded-full">
          Download App
        </button>
      </div>
    </section>
  );
}

export default DownloadBanner;
