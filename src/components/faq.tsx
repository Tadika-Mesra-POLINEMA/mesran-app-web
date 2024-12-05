function Faq() {
  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Apa itu Mesran?</h3>
            <p className="text-gray-600">
              Mesran adalah aplikasi untuk membuat acara secara fleksibel dengan
              bantuan teknologi AI.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              Apakah aplikasi ini aman?
            </h3>
            <p className="text-gray-600">
              Ya, aplikasi ini dirancang dengan keamanan tinggi dan data
              pengguna dilindungi dengan sistem enkripsi yang kuat.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              Apakah aplikasi mendukung acara dengan banyak tamu?
            </h3>
            <p className="text-gray-600">
              Ya, aplikasi ini mendukung acara dengan banyak tamu dan membantu
              mengelola tamu dengan mudah.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
