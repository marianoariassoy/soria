import { UseFormRegisterReturn } from "react-hook-form";

interface Input {
  type: string;
  placeholder: string;
  register: UseFormRegisterReturn;
}

const Input = ({ type, placeholder, register }: Input) => {
  return (
    <div>
      <input
        type={type}
        className="w-full h-12 border-2 border-primary rounded-full bg-transparent px-4 focus:outline-none focus:ring-0 placeholder:text-primary mb-2"
        placeholder={placeholder}
        {...register}
      />
    </div>
  );
};

export default Input;
