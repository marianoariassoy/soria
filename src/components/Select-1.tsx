import { Forward } from "@/lib/icons";
import React from "react";

interface City {
  title: string;
  cities: string[];
}

interface Props {
  title: string;
  cities: City[];
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const Select1 = ({ title, cities, selected, setSelected }: Props) => {
  return (
    <div className="border-2 border-white rounded-2xl p-4">
      <h3 className="font-extrabold mb-2">{title}</h3>
      <div className="relative">
        <select
          className="appearance-none border-t-2 border-white w-full h-14 justify-center px-0 cursor-pointer focus:outline-none"
          onChange={(e) => setSelected(e.target.value)}
        >
          {cities.map((item, index) => (
            <option
              key={index}
              className={`${
                selected === item.title ? "text-black" : "text-white"
              } font-medium`}
            >
              {item.title}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-white text-lg">
          <span className="rotate-90 block">
            <Forward />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Select1;
