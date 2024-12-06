function Faq() {
  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold mb-8">FAQ</p>
        <h2 className="text-3xl font-semibold mb-8">
          Beberapa pertanyaan yang <br />
          mungkin buat anda bingung.
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Beberapa pertanyaan yang sering muncul dan mungkin bisa membantu <br />
          menjawab kebingungan Anda seputar penggunaan aplikasi ini.
        </p>

        {/* Grid dengan dua kolom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg text-left">
            <h3 className="text-xl font-semibold mb-2">Apa itu Mesran?</h3>
            <p className="text-gray-600">
            Mesran adalah aplikasi mobile untuk membuat acara eksklusif. Dibekali AI <br />
            canggih, Mesran memudahkan Anda merencanakan, mengelola, dan <br />
            mengundang tamu dengan hasil yang berkesan.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-left">
            <h3 className="text-xl font-semibold mb-2">
            Apakah penggunaannya mudah?
            </h3>
            <p className="text-gray-600">
            Tentu! Aplikasi ini dirancang dengan antarmuka yang sederhana, intuitif, dan <br />
            user-friendly, sehingga mudah digunakan oleh siapa saja, bahkan untuk pemula <br />
            sekalipun.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-left">
            <h3 className="text-xl font-semibold mb-2">
            Apakah aplikasinya aman?
            </h3>
            <p className="text-gray-600">
            Ya, aplikasi kami dirancang dengan keamanan tinggi. Data pengguna dilindungi <br />
            menggunakan enkripsi canggih, dan kami terus memantau serta memperbarui <br />
            sistem untuk memastikan keamanan maksimal.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-left">
            <h3 className="text-xl font-semibold mb-2">
            Apakah acaranya bersifat eksklusif?
            </h3>
            <p className="text-gray-600">
            Ya, acara yang dibuat melalui aplikasi ini bersifat eksklusif. Anda dapat mengatur <br />
            akses undangan dan memastikan hanya tamu yang diundang yang bisa <br />
            bergabung.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-left">
            <h3 className="text-xl font-semibold mb-3">
            Bisa dipakai acara apa saja?
            </h3>
            <p className="text-gray-600">
            Aplikasi ini bisa digunakan untuk berbagai jenis acara, seperti ulang tahun, <br />
            pernikahan, reuni, seminar, atau acara eksklusif lainnya. Fleksibel untuk <br />
            kebutuhan acara besar maupun kecil!
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-left">
            <h3 className="text-xl font-semibold mb-3">
              Apakah aplikasi ini mendukung acara dengan banyak tamu?
            </h3>
            <p className="text-gray-600">
            Ya, aplikasi ini mendukung acara dengan banyak tamu. Anda bisa mengundang <br />
            dan mengelola tamu dengan mudah.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
