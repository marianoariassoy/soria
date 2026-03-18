"use client";
import { useState } from "react";
import Select1 from "./Select-1";
import Select3 from "./Select-3";
import { useInView } from "react-intersection-observer";

const Routes = () => {
  const [selected, setSelected] = useState<string>("Jujuy");
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
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
        "Otras",
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

  // 🔥 Generador de URL del mapa
  const getMapUrl = (city: string, province: string) =>
    `https://www.google.com/maps?q=${encodeURIComponent(
      city + ", " + province + ", Argentina",
    )}&output=embed`;

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
            en el transporte de mercadería entre el norte y el centro de
            Argentina.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-y-8 gap-x-12">
          <div
            className={`lg:w-1/2 flex flex-col gap-y-8 opacity-0 ${
              inView ? "animate-fade-right" : ""
            }`}
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
              setSelectedCity={setSelectedCity} // 👈 importante
            />

            <div>
              <h3 className="font-bold mb-4">Rutas Claves</h3>
              <p className="leading-tight font-medium">
                RN 9 y RN 34. Eje Norte (Jujuy, Salta y Tucumán) Autopista
                Rosario-Bs. As. (RN 9).
              </p>
            </div>
          </div>

          <div
            className={`lg:w-1/2 rounded-3xl overflow-hidden opacity-0 ${
              inView ? "animate-fade-left" : ""
            }`}
          >
            <iframe
              src={
                selectedCity
                  ? getMapUrl(selectedCity, selected)
                  : "https://www.google.com/maps?q=Argentina&output=embed"
              }
              width="100%"
              height="450"
              loading="lazy"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Routes;
