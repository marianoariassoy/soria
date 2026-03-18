import { Forward } from "@/lib/icons";

interface City {
  title: string;
  cities: string[];
}

interface Props {
  title: string;
  cities: City[];
  selected: string;
  setSelectedCity: (city: string) => void;
}

const Select3 = ({ title, cities, selected, setSelectedCity }: Props) => {
  const selectedProvince = cities.find((item) => item.title === selected);

  return (
    <div className="border-2 border-white rounded-2xl p-4">
      <h3 className="font-extrabold mb-2">{title}</h3>

      <div className="relative">
        <select
          className="appearance-none border-t-2 border-white w-full h-14 justify-center px-0 cursor-pointer focus:outline-none text-black"
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          {selectedProvince?.cities.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>

        <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-black text-lg">
          <span className="rotate-90 block">
            <Forward />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Select3;
