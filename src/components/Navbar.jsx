import React from "react";

function Navbar({ searchText, setSearchText }) {
  const links = (
    <>
      <li><a className="hover:text-yellow-400">Home</a></li>
      <li><a className="hover:text-yellow-400">TV Show</a></li>
      <li><a className="hover:text-yellow-400">Movie</a></li>
      <li><a className="hover:text-yellow-400">New</a></li>
    </>
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md text-white">
      <div className="w-11/12 mx-auto flex items-center justify-between py-2">

        {/* LEFT */}
        <div className="flex items-center gap-2">
          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-3 p-3 shadow bg-black/80 backdrop-blur-md rounded-box w-52"
            >
              {links}
            </ul>
          </div>

          {/* Logo */}
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400 font-grif">
            DRAMATIC
          </h1>
        </div>

        {/* CENTER (Desktop Menu) */}
        <ul className="hidden lg:flex gap-6 text-lg">
          {links}
        </ul>

        {/* RIGHT */}
        <div className="flex items-center gap-2 sm:gap-4">

          {/* Search (Always Visible, Responsive Width) */}
          <label className="
            flex items-center gap-2
            bg-white/10 rounded-full
            px-2 py-1
            border border-transparent
            focus-within:border-yellow-400
            transition
          ">
            <svg
              className="h-4 opacity-70"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="m21 21-4.3-4.3" stroke="currentColor" strokeWidth="2" />
            </svg>

            <input
              type="search"
              placeholder="Search"
              className="
                bg-transparent outline-none text-sm
                w-14 sm:w-24 md:w-40
                placeholder-white/60
              "
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </label>

          {/* Avatar */}
          <div className="w-8 sm:w-9 rounded-full ring ring-yellow-400 ring-offset-black/40 ring-offset-2 overflow-hidden">
            <img
              src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
              alt="profile"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Navbar;