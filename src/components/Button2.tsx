const Button = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: any;
}) => {
  return (
    <button
      className="border border-primary bg-primary text-white rounded-full w-42 h-14 flex items-center justify-center font-bold hover:bg-secondary hover:border-secondary cursor-pointer"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
