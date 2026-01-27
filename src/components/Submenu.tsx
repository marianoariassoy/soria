"use client";
import { submenu } from "@/lib/data";

const Submenu = () => {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav>
      <ul className="flex gap-x-4 lg:gap-x-6 items-center font-light">
        {submenu.map((item) => (
          <li key={item.name}>
            <button
              className="hover:underline cursor-pointer"
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

export default Submenu;
