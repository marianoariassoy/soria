const Button = ({
  children,
  onClick,
  active,
}: {
  children: React.ReactNode;
  onClick?: any;
  active?: boolean;
}) => {
  return (
    <button
      className={`border  rounded-full w-44 h-12 flex items-center justify-center font-extrabold cursor-pointer ${active ? "bg-secondary border-secondary" : "border-white bg-transparent hover:border-secondary hover:bg-secondary"}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
