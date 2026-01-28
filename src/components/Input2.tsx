import { UseFormRegisterReturn } from "react-hook-form";

interface Input {
  type: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  title: string;
}

const Input = ({ type, placeholder, register, title }: Input) => {
  return (
    <div>
      <label className="block mb-2 lg:mb-4">
        <span className="text-secondary font-bold px-4">{title}</span>
      </label>
      <input
        type={type}
        className="w-full h-18 border border-black/50 rounded-full bg-transparent px-8 focus:outline-none focus:ring-0 placeholder:text-black/50 mb-2 focus:border-secondary"
        placeholder={placeholder}
        {...register}
      />
    </div>
  );
};

export default Input;
