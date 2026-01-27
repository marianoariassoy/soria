const Seguimiento = () => {
  return (
    <div className="absolute px-2 lg:px-0 left-1/2 lg:left-8 top-1/2 -translate-y-1/2 -translate-x-1/2 lg:translate-0 flex flex-col gap-y-4 lg:gap-y-6 z-40">
      <h3 className="flex flex-col text-3xl lg:text-4xl text-white leading-7  lg:leading-9 px-4">
        <span className="font-light">Seguimiento</span>
        <span className="font-medium">On-Line</span>
      </h3>
      <div className="bg-white rounded-2xl lg:rounded-full p-3 flex flex-col lg:flex-row gap-x-4 shadow-xl">
        <input
          className="border-white bg-transparent w-70 px-4 focus:outline-none focus:ring-0 placeholder:text-primary/50 h-12 font-medium"
          type="text"
          placeholder="Ingresá tu número de seguimiento "
        />
        <button className="border border-primary bg-primary text-white rounded-full h-12 px-4 flex items-center justify-center font-extrabold hover:border-black hover:bg-black cursor-pointer text-nowrap">
          Seguí tu envio
        </button>
      </div>
    </div>
  );
};

export default Seguimiento;
