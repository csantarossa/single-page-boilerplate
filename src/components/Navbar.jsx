import React, { useState } from "react";
import ContactUs from "./ContactUs";
import { Menu, X } from "@geist-ui/icons";

const Navbar = () => {
  const [menu, setOpenMenu] = useState(false);

  const logo = "LOGO";

  const handleMenu = () => {
    setOpenMenu(!menu);
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">{logo}</a>
      </div>
      {/* Desktop Nav */}
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Link</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <ContactUs />
          </li>
        </ul>
      </div>

      {/* Mobile Nav */}
      <div
        onClick={handleMenu}
        className="w-fit h-fit fixed z-[100] block lg:hidden top-5 right-5"
      >
        {menu ? <X /> : <Menu />}
      </div>
      <div
        className={`fixed h-screen w-full bg-slate-200 top-0 justify-center duration-200 items-center lg:hidden flex z-50 ${
          menu ? "left-0" : "left-[100vw]"
        }`}
      >
        <h1 className="fixed top-32 font-bold text-3xl">{logo}</h1>
        <div className="">
          <ul className="menu menu-vertical gap-5 px-1">
            <li>
              <a className="text-xl" onClick={handleMenu}>
                Link
              </a>
            </li>
            <li>
              <details>
                <summary className="text-xl">Parent</summary>
                <ul className="p-2 rounded-t-none">
                  <li>
                    <a className="text-lg py-3" onClick={handleMenu}>
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a className="text-lg py-3" onClick={handleMenu}>
                      Link 2
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <ContactUs className="text-xl" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
