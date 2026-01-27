const Seguimiento = ({ description }: { description: boolean }) => {
  return (
    <div className="absolute left-0 px-4 lg:left-8 top-1/2 -translate-y-1/2  flex flex-col items-start gap-y-4 lg:gap-y-6 z-40 opacity-0 animate-fade-right delay-300 w-full">
      <h3 className="flex flex-col text-3xl lg:text-4xl text-white leading-7  lg:leading-9 px-4">
        <span className="font-light">Seguimiento</span>
        <span className="font-medium">On-Line</span>
      </h3>
      {description && (
        <p className="text-white w-full max-w-2xl px-4 leading-tight">
          Seguimiento en tiempo real de tu mercadería. <br />
          En SORIA JMI entendemos que la tranquilidad de saber dónde está tu
          carga es tan importante como que llegue a destino.
          <br />
          <br />
          Podés encontrar el número de envío en tu correo electrónico de
          confirmación, en la nota de envío o en el remito de entrega.
          <br />
          <br />
          Figura como número de guía.
        </p>
      )}
      <div className="bg-white w-full lg:w-auto rounded-2xl lg:rounded-full p-3 flex flex-col lg:flex-row gap-x-4 shadow-xl">
        <input
          className="border-white bg-transparent lg:w-70 px-4 focus:outline-none focus:ring-0 placeholder:text-primary/50 h-12 font-medium"
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
