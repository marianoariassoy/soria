import Link from "next/link";
import Button from "@/components/Button3";

const page = () => {
  const data = [
    {
      name: "Origen",
      field: "origin",
    },
    {
      name: "Destino",
      field: "destination",
    },
    {
      name: "Tipo de carga",
      field: "type_cargo",
    },
    {
      name: "Cantidad",
      field: "quantity",
    },
    {
      name: "Peso",
      field: "weight",
    },
    {
      name: "Altura",
      field: "height",
    },
    {
      name: "Valor Declarado",
      field: "value",
    },
  ];
  return (
    <section className="px-4 lg:px-8 py-12 lg:py-20 mt-30 max-w-7xl mx-auto flex flex-col gap-y-8">
      <div className="grid grid-cols-3 lg:grid-cols-7 gap-4 mb-4 flex-wrap">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col gap-y-2 lg:gap-y-4">
            <p className="font-bold text-secondary text-sm lg:text-lg">
              {item.name}
            </p>
            <p className="font-bold text-lg lg:text-2xl text-black/40">0</p>
          </div>
        ))}
      </div>
      <article className="flex flex-col gap-y-4 rounded-3xl bg-secondary text-white p-8">
        <div className="flex justify-between font-bold border-b border-white pb-4">
          <div>Producto</div>
          <div className="text-right hidden lg:block">Valor</div>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 justify-between">
          <div>
            <h3 className="font-bold">
              Soria JMI - Despacho Agencia - Entrega a Domicilio
            </h3>
            <p className="text-sm">
              Enviá tu paquete desde una agencia y lo entregamos en la puerta
              del destinatario. Hasta 50kg.
            </p>
          </div>
          <div className="lg:text-right font-extrabold text-3xl lg:text-4xl border-t border-white pt-4 lg:pt-0 lg:border-0">
            $35.066
          </div>
        </div>
      </article>

      <div>
        <p className="text-black/50 text-sm text-center">
          Los valores de cotización son únicamente informativos y están sujetos
          a variaciones según cargo por manejo, peso y/o medidas reales
          registradas en el momento de la venta. El valor del servicio
          contraentrega tiene un costo adicional que no está contemplado en esta
          cotización. El valor del envío puede variar en el momento de la
          entrega en el punto de venta.
        </p>
      </div>
      <div className="flex justify-center">
        <Link href="/cotizacion">
          <Button>Cotiza Nuevamente</Button>
        </Link>
      </div>
    </section>
  );
};

export default page;
