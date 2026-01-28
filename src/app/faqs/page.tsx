import FaqButton from "@/components/FaqButton2";

const page = () => {
  const data = [
    {
      question: "¿Qué tipo de mercadería pueden transportar?",
      answer: `El transporte de mercadería es el proceso de transportar mercadería desde un punto a otro, con el fin de cumplir con las necesidades de cada operación.

El transporte de mercadería puede ser de grano, de mercadería, de productos, o de cualquier otro tipo de mercadería. 

El transporte de mercadería se realiza en el norte, en el centro y en el sur de Argentina, con una amplia variedad de empresas y operaciones.`,
    },
    {
      question: "¿Qué tipo de operaciones pueden realizar?",
      answer: `El transporte de mercadería se puede realizar en una amplia variedad de operaciones, desde la entrega de mercadería a la compra de mercadería, hasta la entrega de productos y servicios.

Algunas de las operaciones más comunes son: 

- Entrega de mercadería
- Entrega de productos
- Entrega de servicios
- Entrega de granos
- Entrega de productos y servicios
- Entrega de mercadería y productos
- Entrega de mercadería y servicios
- Entrega de productos y servicios`,
    },
    {
      question: "¿Qué tipo de empresas pueden operar?",
      answer: `El transporte de mercadería puede operar en una amplia variedad de empresas, desde las más pequeñas hasta las más grandes.

Algunas de las empresas más comunes son: 

- Empresas de ventas al por menor
- Empresas de ventas a la tienda
- Empresas de ventas a domicilio
- Empresas de ventas en tiendas
- Empresas de ventas en punto
- Empresas de ventas en tiendas de venta al por menor
- Empresas de ventas en tiendas de venta a la tienda
- Empresas de ventas en tiendas de venta a domicilio
- Empresas de ventas en tiendas de venta en punto
- Empresas de ventas de productos
- Empresas de ventas de servicios
- Empresas de ventas de granos
- Empresas de ventas de productos y servicios
- Empresas de ventas de mercadería
- Empresas de ventas de mercadería y productos 
- Empresas de ventas de mercadería y servicios
- Empresas de ventas de productos y servicios`,
    },
    {
      question: "¿Qué tipo de mercadería pueden transportar?",
      answer: `El transporte de mercadería es el proceso de transportar mercadería desde un punto a otro, con el fin de cumplir con las necesidades de cada operación.

El transporte de mercadería puede ser de grano, de mercadería, de productos, o de cualquier otro tipo de mercadería. 

El transporte de mercadería se realiza en el norte, en el centro y en el sur de Argentina, con una amplia variedad de empresas y operaciones.`,
    },
    {
      question: "¿Qué tipo de operaciones pueden realizar?",
      answer: `El transporte de mercadería se puede realizar en una amplia variedad de operaciones, desde la entrega de mercadería a la compra de mercadería, hasta la entrega de productos y servicios.

Algunas de las operaciones más comunes son: 

- Entrega de mercadería
- Entrega de productos
- Entrega de servicios
- Entrega de granos
- Entrega de productos y servicios
- Entrega de mercadería y productos
- Entrega de mercadería y servicios
- Entrega de productos y servicios`,
    },
    {
      question: "¿Qué tipo de empresas pueden operar?",
      answer: `El transporte de mercadería puede operar en una amplia variedad de empresas, desde las más pequeñas hasta las más grandes.

Algunas de las empresas más comunes son: 

- Empresas de ventas al por menor
- Empresas de ventas a la tienda
- Empresas de ventas a domicilio
- Empresas de ventas en tiendas
- Empresas de ventas en punto
- Empresas de ventas en tiendas de venta al por menor
- Empresas de ventas en tiendas de venta a la tienda
- Empresas de ventas en tiendas de venta a domicilio
- Empresas de ventas en tiendas de venta en punto
- Empresas de ventas de productos
- Empresas de ventas de servicios                        
- Empresas de ventas de granos
- Empresas de ventas de productos y servicios
- Empresas de ventas de mercadería
- Empresas de ventas de mercadería y productos 
- Empresas de ventas de mercadería y servicios
- Empresas de ventas de productos y servicios`,
    },
  ];

  return (
    <section className="px-4 lg:px-8 py-12 lg:py-20 mt-30 max-w-7xl mx-auto">
      <div className="flex flex-col gap-y-8">
        <h1 className="text-3xl pr-12 lg:text-5xl font-extrabold">
          Preguntas Frecuentes
        </h1>
        <p className="font-medium text-lg text-black/60">
          Queremos ayudarte a resolver tu consulta.
        </p>
        <div className="flex flex-col gap-4">
          {data.map((item, index) => (
            <FaqButton item={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
