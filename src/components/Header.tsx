"use client";
import { useEffect, useState } from "react";
import Nav from "./Nav";
import Social from "./Social";
import Submenu from "./Submenu";
import NavMobile from "./NavMobile";
import Link from "next/link";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);

  return (
    <header
      className={`fixed w-screen transition-transform duration-500 ease-in-out top-0 z-50 flex flex-col shadow-2xl bg-white  ${mounted ? "translate-y-0" : "-translate-y-full"}`}
      id="top"
    >
      <div className="bg-black/10 py-2 text-sm flex px-4 lg:justify-end lg:pr-38">
        <Submenu />
      </div>
      <div className="px-4 lg:px-8  flex justify-between items-center">
        <div>
          <Link href="/">
            <img
              src="/assets/logo-main.svg"
              className={`transition-all hover:opacity-80 ${scrolled ? "h-18" : "h-28"}`}
              alt="Logo"
            />
          </Link>
        </div>
        <div className="flex items-center gap-x-4 lg:gap-x-8">
          <Nav />
          <div className="bg-primary h-10 border-r border-primary"></div>
          <Social />
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
