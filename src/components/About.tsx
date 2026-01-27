"use client";
import { useState } from "react";
import Button from "./Button";

const About = () => {
  const [section, setSection] = useState(0);

  const handleSection = (num: number) => {
    setSection(num);
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      className="bg-primary text-white px-4 py-20 scroll-m-26"
      id="about"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-center gap-8">
        <div className="lg:w-2/5">
          <h1 className="flex flex-col text-4xl lg:text-5xl">
            <span className="font-medium">Quienes</span>
            <span className="font-extrabold">Somos?</span>
          </h1>
        </div>
        <div className="lg:w-3/5 flex flex-col gap-y-8 font-medium">
          {section === 0 && (
            <p>
              Somos una empresa familiar de transporte, logística y
              distribución, ubicada en el Norte de Argentina, dedicada al
              traslado de todo tipo de mercadería para empresas, pymes y
              particulares de distintos rubros. Trabajamos de forma cercana y
              personalizada, adaptándonos a las necesidades reales de cada
              cliente, con un enfoque claro en:
              <br />
              <br />
              - La seguridad de cada carga. <br />
              - El cumplimiento de los plazos acordados. <br />
              - La construcción de relaciones directas y duraderas. <br />
              <br />
              La seriedad y el compromiso en cada servicio.
              <br />
              Combinamos la experiencia de dos generaciones en el transporte con
              una gestión moderna y profesional, para ofrecer un servicio ágil,
              confiable y humano.
            </p>
          )}
          {section === 1 && (
            <div>
              <h3 className="font-bold text-lg mb-4">Nuestra Historia</h3>
              <p>
                La historia de SORIA JMI es la historia de una familia y de una
                pasión por la ruta que se transmite de generación en generación.
                <br />
                <br />
                Nacimos en el Norte de Argentina, en una familia marcada por el
                trabajo, los kilómetros recorridos y el compromiso con cada
                cliente.
                <br />
                <br />
                Lo que comenzó con un primer camión y muchas horas de
                aprendizaje fue creciendo con el tiempo, hasta convertirse en un
                proyecto construido a lo largo de dos generaciones dedicadas al
                transporte.
                <br />
                <br />
                Con los años, esa experiencia se transformó en una empresa.
                SORIA JMI decidió profesionalizar ese legado familiar y llevarlo
                un paso más allá, combinando lo mejor de ambos mundos: la
                cercanía y el compromiso de una empresa familiar con la
                organización y la seriedad de una compañía de logística moderna.
                <br />
                <br />
                Hoy seguimos creciendo, ampliando rutas y servicios, pero
                mantenemos intacta nuestra esencia: entender que detrás de cada
                carga hay un negocio, una historia y una persona que confía en
                nosotros.
                <br />
                <br />
                Por eso, en SORIA JMI creemos que cada viaje es una promesa
                cumplida. Estamos a tu servicio.
              </p>
            </div>
          )}
          {section === 2 && (
            <div>
              <h3 className="font-bold text-lg mb-4">Misión</h3>
              <p>
                Acompañar a empresas y pymes en sus necesidades de transporte y
                logística, ofreciendo un servicio confiable, ágil y seguro, que
                les permita operar con tranquilidad y enfocarse en hacer crecer
                su negocio.
                <br />
                <br />
                Creemos en el trato cercano y en el trabajo en equipo. Por eso,
                buscamos conocer a cada cliente, construir relaciones de
                confianza y brindar un servicio serio, responsable y
                transparente, adaptado a cada necesidad.
                <br />
                <br />
                Queremos conocerte y trabajar con vos, para que tu logística
                deje de ser una preocupación.
              </p>
            </div>
          )}
          {section === 3 && (
            <div>
              <h3 className="font-bold text-lg mb-4">Visión</h3>
              <p>
                Ser una empresa de transporte y logística referente a nivel
                nacional, elegida por empresas y pymes por nuestra
                confiabilidad, compromiso y trato cercano, y reconocida por
                brindar soluciones de traslado modernas y eficientes.
                <br />
                <br />
                Buscamos crecer junto a nuestros clientes, ampliar nuestras
                rutas y servicios, y seguir mejorando cada día, sin perder lo
                más importante: la cercanía, la transparencia y la confianza en
                cada relación.
              </p>
            </div>
          )}

          <div className="flex items-center gap-4 flex-wrap">
            <Button active={section === 1} onClick={() => handleSection(1)}>
              Nuestra Historia
            </Button>
            <Button active={section === 2} onClick={() => handleSection(2)}>
              Misión
            </Button>
            <Button active={section === 3} onClick={() => handleSection(3)}>
              Visión
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
