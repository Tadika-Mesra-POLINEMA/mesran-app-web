function Advantage() {
  return (
    <section id="advantage" className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold mb-8">Keunggulan</p>
        <h2 className="text-3xl font-semibold mb-8">
          Apa yang membuat kami <br />
          berbeda dengan yang lain?
        </h2>
        <p className="text-lg mb-8">
          Kami menawarkan fitur eksklusif, mudah digunakan, dan teknologi <br />
          canggih untuk membuat acara Anda lebih spesial.
        </p>

        {/* Grid dengan dua baris dan tiga kolom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center">
          {/* Baris pertama */}
          <div className="p-6 bg-[#E8FFD3] shadow-lg rounded-lg relative text-left">
            {/* Logo positioned in the top-left corner */}
            <div className="absolute top-0 left-0 p-2">
              <img
                src="/petir.png" // Path to your logo image
                alt="Logo"
                className="w-8 h-8 object-contain"
              />
            </div>

            {/* Title and Content */}
            <h3 className="text-xl font-semibold mb-4 mt-12">Real-Time Notifikasi</h3>
            <p className="text-gray-600">
              Real-Time Notifikasi memberi Anda <br />
              pembaruan langsung tentang acara, seperti <br />
              undangan, atau perubahan jadwal.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center items-center">
            <img
              src="/image1.jpg"
              alt="Gambar Acara"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>

          {/* Kirim Pesan ke Teman */}
          <div className="p-6 bg-[#E8E5FF] shadow-lg rounded-lg relative text-left">
            <div className="absolute top-0 left-0 p-2">
              <img
                src="/pesan.png" // Path to your logo image
                alt="Logo"
                className="w-8 h-8 object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4 mt-12">Kirim Pesan ke Teman</h3>
            <p className="text-gray-600">
              Kirim Pesan ke Teman memudahkan Anda <br />
              berkomunikasi langsung dengan tamu atau <br />
              teman acara.
            </p>
          </div>

          {/* Flexible Semua Acara */}
          <div className="p-6 bg-[#FDE0F5] shadow-lg rounded-lg relative text-left">
            <div className="absolute top-0 left-0 p-2">
              <img
                src="/flex.png" // Path to your logo image
                alt="Logo"
                className="w-8 h-8 object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4 mt-12">Flexible Semua Acara</h3>
            <p className="text-gray-600">
              Flexible Semua Acara memungkinkan Anda <br />
              menyesuaikan acara sesuai kebutuhan, <br />
              seperti tamu, waktu, dan tema.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg relative text-left">
            
            <h3 className="text-xl font-semibold mb-4 mt-12"></h3>
            <p className="text-gray-600">
              <br />
            </p>
          </div>
          {/* Kirim Undangan ke Semua */}
          <div className="p-6 bg-[#DFF2FF] shadow-lg rounded-lg relative text-left">
            <div className="absolute top-0 left-0 p-2">
              <img
                src="/key.png" // Path to your logo image
                alt="Logo"
                className="w-8 h-8 object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4 mt-12">Kirim Undangan ke Semua</h3>
            <p className="text-gray-600">
              Kirim Undangan ke Semua memungkinkan <br />
              Anda mengundang semua tamu sekaligus <br />
              dengan mudah.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Advantage;
