function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Mesran</div>
        <div className="space-x-6 hidden md:flex">
          <a href="#advantage" className="text-gray-700 hover:text-orange-600">
            Keunggulan
          </a>
          <a
            href="#how-we-work"
            className="text-gray-700 hover:text-orange-600"
          >
            Bagaimana kami bekerja
          </a>
          <a href="#faq" className="text-gray-700 hover:text-orange-600">
            FAQ
          </a>
          <a href="#download" className="text-gray-700 hover:text-orange-600">
            Download App
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
