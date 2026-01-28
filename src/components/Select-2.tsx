import { UseFormRegisterReturn } from "react-hook-form";
import { Forward } from "@/lib/icons";

interface Input {
  register: UseFormRegisterReturn;
  title: string;
}

const Select = ({ register, title }: Input) => {
  return (
    <div>
      <label className="block mb-4">
        <span className="text-secondary font-bold px-4">{title}</span>
      </label>
      <div className="relative">
        <select
          className="appearance-none not-visited:border text-black/50 border-black/50 w-full h-18 rounded-full bg-transparent px-8 cursor-pointer focus:outline-none hover:text-black focus:border-secondary"
          {...register}
        >
          <option value="19">Caka</option>
          <option value="20">Santa Fe</option>
          <option value="21">Santiago del Estero</option>
          <option value="22">Tierra del Fuego</option>
          <option value="23">Tucumán</option>
        </select>
        <div className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 border border-secondary rounded-full flex items-center justify-center text-secondary">
          <span className="rotate-90 block">
            <Forward />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Select;
