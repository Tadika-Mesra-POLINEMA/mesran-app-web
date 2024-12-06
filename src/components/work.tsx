import Image from "next/image";

function HowWeWork() {
  return (
    <section id="how-we-work" className="py-16">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold mb-8">
          Bagaimana kami bekerja? 
        </p>
        <h2 className="text-3xl font-semibold mb-8">Membuat acara dengan <br />
        sangat mudah</h2>
        <p className="text-lg text-gray-600 mb-8">
          Membuat acara jadi mudah dengan langkah sederhana dan cepat.
        </p>
        <div className="flex justify-center space-x-8">
          <div className="w-64 text-center">
            <Image
              src="/image1.jpg"
              alt="Icon 1"
              width={50}
              height={50}
              className="w-full max-w-md rounded-lg shadow-lg"
            />
            <h3 className="text-xl font-semibold text-left">Daftarkan Akun</h3>
            <p className="text-gray-600 text-left">
            Daftarkan Akun memudahkan Anda untuk <br />
            membuat profil pribadi, sehingga Anda bisa mulai <br />
            membuat dan mengelola acara dengan cepat.
            </p>
          </div>
          <div className="w-64 text-center">
            <Image
              src="/path-to-icon-2.svg"
              alt="Icon 2"
              width={50}
              height={50}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-left">Isi Formulir Acara</h3>
            <p className="text-gray-600 text-left">
            Isi Formulir Acara untuk menambahkan detail <br />
            seperti tanggal, lokasi, dan tema, sehingga acara <br />
            Anda siap diatur dengan mudah.
            </p>
          </div>
          <div className="w-64 text-center">
            <Image
              src="/path-to-icon-3.svg"
              alt="Icon 3"
              width={50}
              height={50}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-left">Kirim Undangan Anda!</h3>
            <p className="text-gray-600 text-left">
              Kirim Undangan Anda memungkinkan Anda <br />
              mengundang tamu dengan cepat dan mudah, <br />
              sehingga acara lebih terorganisir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowWeWork;
