"use client";
import { nav, submenu } from "@/lib/data";

const Footer = () => {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-primary text-white px-4 lg:px-12 py-8 pt-12 flex justify-between">
      <div>
        <nav>
          <ul className="font-light">
            {nav.map((item) => (
              <li key={item.name}>
                <button
                  className="hover:underline cursor-pointer"
                  onClick={() => handleScroll(item.target)}
                >
                  {item.name}
                </button>
              </li>
            ))}
            {submenu.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => handleScroll(item.target)}
                  className="hover:text-secondary cursor-pointer"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div>
        <img
          src="/assets/logo-footer.svg"
          className="h-14 hover:opacity-80"
          alt="Logo footer"
        />
      </div>
    </footer>
  );
};

export default Footer;
