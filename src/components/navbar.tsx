function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo dan judul di kiri */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo.png" // Ganti dengan path logo Anda
            alt="Logo"
            className="w-8 h-8" // Sesuaikan ukuran logo
          />
          <span className="text-2xl font-medium font-sans" style={{ color: "#FE4F34" }}>
            Mesran
          </span>
        </div>

        {/* Menu navigasi di tengah */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#advantage" className="text-l font-semibold mb-3 text-gray-700 hover:text-orange-600">
            Keunggulan
          </a>
          <a href="#how-we-work" className="text-l font-semibold mb-3 text-gray-700 hover:text-orange-600">
            Bagaimana kami bekerja
          </a>
          <a href="#faq" className="text-l font-semibold mb-3 text-gray-700 hover:text-orange-600">
            FAQ
          </a>
        </div>

        {/* Tombol di kanan */}
        <div>
          <a
            href="#download"
            className="text-l font-semibold mb-3 px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-orange-600"
          >
            Download App
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
