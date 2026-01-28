import CotizacionForm from "@/components/CotizacionForm";

const page = () => {
  return (
    <section className="px-4 lg:px-8 py-12 lg:py-20 mt-30 max-w-7xl mx-auto flex flex-col gap-y-12">
      <h1 className="text-3xl lg:text-5xl flex flex-col">
        <span className="font-light">Cotizá tu</span>
        <span className="font-extrabold">Envio</span>
      </h1>
      <CotizacionForm />
    </section>
  );
};

export default page;
