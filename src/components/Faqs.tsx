import Link from "next/link";
import FaqButton from "./FaqButton";
import Button from "./Button";

const Faqs = () => {
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
    <section className="scroll-m-26 px-4 bg-primary text-white py-20" id="faqs">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-y-12">
        <h1 className="text-4xl lg:text-5xl text-center font-extrabold">
          Preguntas Frecuentes
        </h1>
        <div className="grid lg:grid-cols-3 items-start gap-8">
          {data.slice(0, 3).map((item, index) => (
            <FaqButton item={item} key={index} />
          ))}
        </div>
        <div className="flex justify-center gap-x-4">
          <Link href="/faqs">
            <Button>+ Ver Más</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
