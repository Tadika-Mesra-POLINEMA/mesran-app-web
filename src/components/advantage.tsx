function Advantage() {
  return (
    <section id="advantage" className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">
          Apa yang membuat kami berbeda dengan yang lain?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Real-Time Notifikasi</h3>
            <p className="text-gray-600">
              Notifikasi langsung mengenai acara, seperti undangan, atau
              perubahan jadwal.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Flexible Semua Acara</h3>
            <p className="text-gray-600">
              Membantu mengelola acara dengan fleksibilitas sesuai kebutuhan
              Anda.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Kirim Pesan ke Teman</h3>
            <p className="text-gray-600">
              Kirim pesan langsung kepada teman untuk mengonfirmasi kehadiran
              atau detail acara.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Advantage;
