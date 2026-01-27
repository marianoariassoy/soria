"use client";
import { nav } from "@/lib/data";

const Nav = () => {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="hidden lg:block">
      <ul className="flex gap-x-6 items-center font-light">
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
  );
};

export default Nav;
