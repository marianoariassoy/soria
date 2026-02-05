"use client";
import { useInView } from "react-intersection-observer";

interface Servicios {
  id: number;
  title: string;
  text: string;
  image: string;
}

const Services = ({ data }: { data: Servicios[] }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <section className="px-4 py-20 scroll-m-26" id="services" ref={ref}>
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-y-12">
        <header>
          <h1 className="text-4xl lg:text-5xl text-center mb-8">
            <span className="font-medium">Nuestros</span>
            <span className="font-extrabold"> Servicios</span>
          </h1>
          <p className="text-center max-w-4xl mx-auto leading-tight font-medium">
            Ofrecemos soluciones de transporte y logística pensadas para
            adaptarse a distintos tipos de empresas, cargas y operaciones, con
            un enfoque claro:{" "}
            <span className="font-bold">
              que tu mercadería llegue en tiempo y forma, sin complicaciones.
            </span>
          </p>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {data.map((item, index) => (
            <article
              key={index}
              className={`flex flex-col gap-y-4 border-2 border-primary px-4 py-8 rounded-3xl opacity-0 ${index === 0 ? "delay-100" : index === 1 ? "delay-300" : "delay-200"} ${inView ? "animate-fade-up" : ""}`}
            >
              <div className="text-center pb-4 border-b-2 border-primary lg:px-4">
                <div className="h-18 flex justify-center pb-4">
                  <img src={item.image} className="h-full" alt="Icon" />
                </div>
                <h2 className="text-xl font-bold lg:min-h-14">{item.title}</h2>
              </div>
              <p className="text-sm lg:px-4 leading-tight">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
