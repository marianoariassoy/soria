"use client";
import { submenu } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Submenu = () => {
  const pathname = usePathname();
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
      </ul>
    </nav>
  );
};

export default Submenu;
