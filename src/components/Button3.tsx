const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="bg-secondary text-white rounded-full w-50 h-18 flex items-center justify-center font-bold hover:bg-primary cursor-pointer">
      {children}
    </button>
  );
};

export default Button;
