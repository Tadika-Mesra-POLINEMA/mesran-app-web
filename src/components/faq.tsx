function Faq() {
  return (
    <section
      id="faq"
      className="md:px-[60px] md:py-[60px] bg-[#FFFFFF] px-5 py-5"
    >
      <div className="flex flex-col gap-[60px] items-center">
        {/* Judul */}
        <div className="flex flex-col gap-4 items-center">
          <div className="px-4 py-2 bg-[#FFEDEA] rounded-full font-semibold text-base text-[#FE4F34]">
            FAQ
          </div>
          <p className="text-[40px] text-center leading-[120%] font-medium text-[#1B1B1B]">
            Beberapa pertanyaan yang <br />
            mungkin buat anda bingung.
          </p>
          <div className="text-base text-center text-[#7F7F7F]">
            Beberapa pertanyaan yang sering muncul dan mungkin bisa membantu{" "}
            <br />
            menjawab kebingungan Anda seputar penggunaan aplikasi ini.
          </div>
        </div>

        {/* Container */}
        <div className="grid grid-cols-2 gap-6 w-full">
          {/* Card 1 */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-3 bg-[#FFFFFF] border-[1px] border-[#E8E8E8] rounded-xl px-6 py-6 w-fill">
            <p className="font-medium text-2xl text-[#1B1B1B]">
              Apa itu Mesran?
            </p>
            <p className="text-base text-[#7F7F7F]">
              Mesran adalah aplikasi mobile untuk membuat acara eksklusif.
              Dibekali AI canggih, Mesran memudahkan Anda merencanakan,
              mengelola, dan mengundang tamu dengan hasil yang berkesan.
            </p>
          </div>

          {/* Card 2 */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-3 bg-[#FFFFFF] border-[1px] border-[#E8E8E8] rounded-xl px-6 py-6 w-fill">
            <p className="font-medium text-2xl text-[#1B1B1B]">
              Apakah penggunaannya gampang?
            </p>
            <p className="text-base text-[#7F7F7F]">
              Tentu! Aplikasi ini dirancang dengan antarmuka yang sederhana,
              intuitif, dan user-friendly, sehingga mudah digunakan oleh siapa
              saja, bahkan untuk pemula sekalipun.
            </p>
          </div>

          {/* Card 3 */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-3 bg-[#FFFFFF] border-[1px] border-[#E8E8E8] rounded-xl px-6 py-6 w-fill">
            <p className="font-medium text-2xl text-[#1B1B1B]">
              Apakah aplikasinya aman?
            </p>
            <p className="text-base text-[#7F7F7F]">
              Ya, aplikasi kami dirancang dengan keamanan tinggi. Data pengguna
              dilindungi menggunakan enkripsi canggih, dan kami terus memantau
              serta memperbarui sistem untuk memastikan keamanan maksimal.
            </p>
          </div>

          {/* Card 4 */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-3 bg-[#FFFFFF] border-[1px] border-[#E8E8E8] rounded-xl px-6 py-6 w-fill">
            <p className="font-medium text-2xl text-[#1B1B1B]">
              Apakah acaranya bersifat eksklusif?
            </p>
            <p className="text-base text-[#7F7F7F]">
              Ya, acara yang dibuat melalui aplikasi ini bersifat eksklusif.
              Anda dapat mengatur akses undangan dan memastikan hanya tamu yang
              diundang yang bisa bergabung.
            </p>
          </div>

          {/* Card 5 */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-3 bg-[#FFFFFF] border-[1px] border-[#E8E8E8] rounded-xl px-6 py-6 w-fill">
            <p className="font-medium text-2xl text-[#1B1B1B]">
              Bisa dipakai acara apa saja?
            </p>
            <p className="text-base text-[#7F7F7F]">
              Aplikasi ini bisa digunakan untuk berbagai jenis acara, seperti
              ulang tahun, pernikahan, reuni, seminar, atau acara eksklusif
              lainnya. Fleksibel untuk kebutuhan acara besar maupun kecil!
            </p>
          </div>

          {/* Card 6 */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-3 bg-[#FFFFFF] border-[1px] border-[#E8E8E8] rounded-xl px-6 py-6 w-fill">
            <p className="font-medium text-2xl text-[#1B1B1B]">
              Apakah aplikasi ini mendukung acara dengan banyak tamu?
            </p>
            <p className="text-base text-[#7F7F7F]">
              Ya, aplikasi ini mendukung acara dengan banyak tamu. Anda bisa
              mengundang dan mengelola tamu dengan mudah.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
