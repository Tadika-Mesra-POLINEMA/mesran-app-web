function DownloadBanner() {
  return (
    <section id="download" className="bg-orange-600 text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Download App</h2>
        <p className="text-lg mb-8">
          Unduh aplikasi kami sekarang dan mulai buat acara dengan mudah!
        </p>
        <a
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
        </a>
      </div>
    </section>
  );
}

export default DownloadBanner;
