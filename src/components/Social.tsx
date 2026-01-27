import { social } from "@/lib/data";

const Social = () => {
  return (
    <nav>
      <ul className="flex items-center gap-x-4">
        {social.slice(0, 2).map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              target="_blank"
              className="hover:text-secondary"
            >
              <item.icon />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Social;
