"use client";
import { nav, submenu } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
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
                      className="hover:text-secondary cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  )
                ) : (
                  <Link
                    href={item.href}
                    className={`hover:text-secondary cursor-pointer ${
                      pathname === item.href ? "text-secondary font-medium" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
            {submenu.map((item) => (
              <li key={item.name}>
                {pathname === "/" ? (
                  <button
                    onClick={() => handleScroll(item.target)}
                    className="hover:text-secondary cursor-pointer"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    href={"/#" + item.target}
                    className="hover:text-secondary cursor-pointer"
                  >
                    {item.name}
                  </Link>
                )}
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
