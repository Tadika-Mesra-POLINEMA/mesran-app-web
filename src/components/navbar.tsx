"use client";

function Navbar() {
  const handleClickNavigation = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navbar px-5 bg-base-100 fixed top-0 left-0 z-[9999] shadow-sm">
      <div className="navbar-start">
        <div className="flex items-center gap-[6px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="41"
            fill="none"
            viewBox="0 0 40 41"
          >
            <g clipPath="url(#a)">
              <path
                stroke="#FE4F34"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M6.667 8.833H10M8.333 7.167V10.5m10.834-3.333-.834 3.333M30 8.833h3.333m-1.666-1.666V10.5M25 15.5l-1.667 1.667m6.667 5 3.333-.834M30 32.167h3.333M31.667 30.5v3.333m-8.331-5.803L12.473 17.167 5.156 33.133a1.667 1.667 0 0 0 2.215 2.215l15.965-7.318Z"
              />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M0 .5h40v40H0z" />
              </clipPath>
            </defs>
          </svg>

          <a className="text-2xl font-medium text-primary-base">Mesran</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-5 px-1 font-semibold">
          <li className="hover:text-primary-base">
            <a
              className="cursor-pointer"
              onClick={() => handleClickNavigation("advantages")}
            >
              Keunggulan
            </a>
          </li>
          <li className="hover:text-primary-base">
            <a
              className="cursor-pointer"
              onClick={() => handleClickNavigation("how-we-work")}
            >
              Bagaimana kami bekerja
            </a>
          </li>
          <li className="hover:text-primary-base">
            <a
              className="cursor-pointer"
              onClick={() => handleClickNavigation("faq")}
            >
              FAQ
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {/* Tombol download hanya terlihat di desktop */}
        <button className="hidden lg:block font-semibold text-base text-neutral-0 px-5 py-3 bg-primary-base rounded-full">
          Download App
        </button>

        {/* Dropdown untuk mobile */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow -left-36"
          >
            <li className="hover:text-primary-base hover:font-semibold transition-all">
              <a onClick={() => handleClickNavigation("advantages")}>
                Keunggulan
              </a>
            </li>
            <li className="hover:text-primary-base hover:font-semibold transition-all">
              <a onClick={() => handleClickNavigation("how-we-work")}>
                Bagaimana kami bekerja
              </a>
            </li>
            <li className="hover:text-primary-base hover:font-semibold transition-all">
              <a onClick={() => handleClickNavigation("faq")}>FAQ</a>
            </li>
            <li className="mt-4 flex justify-center">
              <button className="flex justify-center text-neutral-0 px-5 py-3 bg-primary-base font-semibold rounded-full">
                <span className="mx-auto">Download App</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
