import { social } from "@/lib/data";

const Whatsapp = () => {
  return (
    <div className="absolute right-4 lg:right-8 bottom-12 z-40 text-white text-3xl bg-[#25D366] rounded-full flex items-center justify-center p-2 shadow-xl opacity-0 animate-jump-in delay-400 hover:bg-black">
      {social.slice(2, 3).map((item, index) => (
        <a href={item.href} key={index} target="_blank" className="">
          <item.icon />
        </a>
      ))}
    </div>
  );
};

export default Whatsapp;
