const Button = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: any;
}) => {
  return (
    <button
      className="border border-primary bg-primary text-white rounded-full w-42 h-12 flex items-center justify-center font-bold hover:border-black hover:bg-black cursor-pointer"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
