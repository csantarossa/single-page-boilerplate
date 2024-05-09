import React, { useState } from "react";
import ContactUs from "./ContactUs";
import { Menu, X } from "@geist-ui/icons";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [menu, setOpenMenu] = useState(false);

  const logo = "create.";
  const link1 = "Portfolio";
  const link2 = "About Us";

  const handleMenu = () => {
    setOpenMenu(!menu);
  };

  return (
    <div className="navbar absolute top-0">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">{logo}</a>
      </div>
      {/* Desktop Nav */}
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link className="font-medium" smooth to="#portfolio">
              {link1}
            </Link>
          </li>
          <li>
            <Link smooth to="#process" className="font-medium">
              {" "}
              Process
            </Link>
          </li>
          <li>
            <Link className="font-medium" smooth to="#reviews">
              Reviews
            </Link>
          </li>

          <li>
            <ContactUs className={"font-medium"} />
          </li>
        </ul>
      </div>

      {/* Mobile Nav */}
      <div
        onClick={handleMenu}
        className="w-fit h-fit absolute z-[100] block lg:hidden top-5 right-5"
      >
        {menu ? <X /> : <Menu />}
      </div>
      <div
        className={`fixed h-full w-full bg-slate-200 top-0 justify-center duration-200 items-center lg:hidden flex z-50 ${
          menu ? "left-0" : "left-[100vw]"
        }`}
      >
        <h1 className="fixed top-32 font-bold text-3xl">{logo}</h1>
        <div className="">
          <ul className="menu menu-vertical gap-5 px-1">
            <li>
              <Link
                smooth
                to="#portfolio"
                className="text-xl"
                onClick={handleMenu}
              >
                {link1}
              </Link>
            </li>

            <li>
              <Link
                smooth
                to="#process"
                className="text-xl"
                onClick={handleMenu}
              >
                Process
              </Link>
            </li>
            <li>
              <Link
                smooth
                to="#reviews"
                className="text-xl"
                onClick={handleMenu}
              >
                Reviews
              </Link>
            </li>

            <li>
              <a className="text-xl" onClick={handleMenu} href="#contact_form">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
