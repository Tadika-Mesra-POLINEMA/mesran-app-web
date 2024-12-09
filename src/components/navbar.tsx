function Navbar() {
  return (
    <nav id="Navbar" className="md:px-12 md:py-6 bg-[#FFFFFF] px-5 py-5">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex gap-[6px] items-center">
          <img
            src="/images/logo.svg" // Path to your logo image
            alt="Logo"
            className="w-[40px] h-[40px] object-contain"
          />
          <p className="font-medium text-2xl text-[#FE4F34]">Mesran</p>
        </div>

        {/* Menu */}
        <div className="flex gap-8 font-medium text-base text-[#1B1B1B]">
          <a href="" className="hover:text-[#FE4F34]">Keunggulan</a>
          <a href="" className="hover:text-[#FE4F34]">Bagaimana kami bekerja</a>
          <a href="" className="hover:text-[#FE4F34]">FAQ</a>
        </div>

        {/* CTA */}
        <button className="font-semibold text-base text-[#FFFFFF] px-5 py-3 bg-[#FE4F34] rounded-full">
          Download App
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
