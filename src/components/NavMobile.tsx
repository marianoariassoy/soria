"use client";
import { useState } from "react";
import { nav } from "@/lib/data";

const NavMobile = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setOpen(false);
  };

  return (
    <div className="lg:hidden">
      <button
        className={`hamburger ${open ? "active" : ""}`}
        onClick={toggleOpen}
      >
        <span className="bg-primary"></span>
        <span className="bg-primary"></span>
        <span className="bg-primary"></span>
      </button>

      <nav
        className={`fixed left-0 w-full h-full top-26 bg-white transition-transform duration-200 ease-in-out z-50
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <ul className="flex flex-col gap-y-4 font-extrabold py-12 px-4">
          {nav.map((item) => (
            <li key={item.name}>
              <button
                className="hover:text-secondary cursor-pointer"
                onClick={() => handleScroll(item.target)}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavMobile;
