function DownloadBanner() {
  return (
    <section id="download" className="bg-orange-600 text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Mari buat semua <br />
        acara di sini.</h2>
        <a>
          <br />
        </a>
        <a
          href="#download"
          className="text-lg font-semibold mb-8 px-6 py-3 bg-white text-black border border-gray-300 rounded-full hover:bg-gray-200 hover:text-black transition">
          Download App
        </a>


        {/* <a
          href="https://play.google.com"
          className="bg-white text-orange-600 px-6 py-3 rounded-lg mr-4"
        >
          Google Play
        </a>
        <a
          href="https://www.apple.com/app-store/"
          className="bg-white text-orange-600 px-6 py-3 rounded-lg"
        >
          App Store
        </a> */}
      </div>
    </section>
  );
}

export default DownloadBanner;
