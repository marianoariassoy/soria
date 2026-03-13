"use client";
import { useState } from "react";
import Select1 from "./Select-1";
import Select3 from "./Select-3";
import { useInView } from "react-intersection-observer";

const Routes = () => {
  const [selected, setSelected] = useState<string>("Jujuy");

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const cities = [
    {
      title: "Jujuy",
      cities: [
        "San Salvador de Jujuy",
        "Perico",
        "Pálpala",
        "San Pedro",
        "otras",
      ],
    },
    {
      title: "Salta",
      cities: [
        "Salta Capital",
        "General Güemes",
        "Orán",
        "Tartagal",
        "Joaquín V González",
        "Las Lajitas",
        "San José de Metan",
        "Rosario de la Frontera",
      ],
    },
    {
      title: "Tucumán",
      cities: [
        "San Miguel de Tucumán",
        "Tafí Viejo",
        "Trancas",
        "Aguilares",
        "Alberdi",
        "Concepción",
        "La Cocha",
        "Banda del Río Salí",
        "otras",
      ],
    },
    {
      title: "Santiago del Estero",
      cities: [
        "Santiago del Estero",
        "La Banda",
        "Frías (vía RN 157)",
        "Termas de Río Hondo y Selva",
        "Pintos",
        "Fernandez",
        "Colonia Dora",
        "Pozo Hondo",
      ],
    },
    {
      title: "Córdoba",
      cities: ["Córdoba Capital", "Villa María", "Río Segundo", "Río Ceballos"],
    },
    {
      title: "Santa Fe (Región Rosario)",
      cities: [
        "Rosario",
        "San Lorenzo (Puerto)",
        "Rafaela y Sunchales (vía RN 34).",
      ],
    },
    {
      title: "Buenos Aires",
      cities: [
        "AMBA (Zona Norte)",
        "Campana y Zárate (Clave para el sector automotor/industrial)",
      ],
    },
  ];

  return (
    <section
      className="px-4 py-20 scroll-m-26 bg-secondary text-white"
      id="routes"
      ref={ref}
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-y-12">
        <header>
          <h1 className="text-3xl lg:text-5xl text-center font-extrabold mb-8">
            Rutas y Coberturas
          </h1>
          <p className="text-center leading-tight font-medium">
            Conectamos las principales regiones del país, con un foco especial
            en el transporte de mercadería entre el Norte, el Centro y el Sur de
            Argentina. Acompañamos a empresas que necesitan mover su carga desde
            el Norte hacia el Centro o el Sur, y desde el Centro hacia el Norte,
            ofreciendo un servicio confiable y planificado en ambos sentidos.
          </p>
        </header>
        <div className="flex flex-col lg:flex-row gap-y-8 gap-x-12">
          <div
            className={`lg:w-1/2 flex flex-col gap-y-8 opacity-0 ${inView ? "animate-fade-right" : ""}`}
          >
            <Select1
              title="Seleccione la Provincia"
              cities={cities}
              selected={selected}
              setSelected={setSelected}
            />
            <Select3
              title="Seleccione la Localidad"
              cities={cities}
              selected={selected}
            />
            <div>
              <h3 className="font-bold mb-4"> Otras rutas</h3>
              <p className="leading-tight font-medium">
                Según el tipo de mercadería y las necesidades de cada operación,
                también evaluamos y cubrimos otros destinos dentro del país,
                buscando siempre la alternativa más eficiente.
                <br /> <br />
                Decinos de dónde sale tu carga y a dónde tiene que llegar.
                Nosotros lo hacemos posible.
              </p>
            </div>
          </div>
          <div
            className={`lg:w-1/2 rounded-3xl overflow-hidden opacity-0 ${inView ? "animate-fade-left" : ""}`}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115894.10915618342!2d-65.51303134390008!3d-24.806035296751087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc3a35151b7f9%3A0xa5cd992cd587f206!2sSalta!5e0!3m2!1ses-419!2sar!4v1769450524534!5m2!1ses-419!2sar"
              width="100%"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Routes;
