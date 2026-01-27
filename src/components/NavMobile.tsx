"use client";
import { useState } from "react";
import { nav } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavMobile = () => {
  const pathname = usePathname();
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
        className={`fixed left-0 w-full h-screen top-26 bg-white transition-transform duration-200 ease-in-out z-50
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <ul className="flex flex-col gap-y-4 font-extrabold py-12 px-4">
          {nav.map((item) => (
            <li key={item.name}>
              {item.target ? (
                pathname === "/" ? (
                  <button
                    className="hover:text-secondary cursor-pointer"
                    onClick={() => handleScroll(item.target)}
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    href={"/#" + item.target}
                    className="hover:text-secondary"
                    onClick={() => handleScroll("top")}
                  >
                    {item.name}
                  </Link>
                )
              ) : (
                <Link
                  href={item.href}
                  className={`hover:text-secondary cursor-pointer ${
                    pathname === item.href ? "text-secondary" : ""
                  }`}
                  onClick={() => handleScroll("top")}
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavMobile;
