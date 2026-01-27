const Services = () => {
  const data = [
    {
      title: "Transporte de carga general",
      description: `Trasladamos distintos tipos de mercadería según las necesidades de tu negocio. 
      
      Nos ocupamos de que cada envío viaje de forma segura, controlada y puntual, cuidando tu mercadería como si fuera propia.`,
      image: "/assets/icon1.svg",
    },
    {
      title: "Transporte de granos",
      description: `Contamos con amplia experiencia en el traslado de granos
desde las principales zonas productivas del NOA hacia distintos puntos del país.

Trabajamos con planificación, control y cuidado de la carga, entendiendo las exigencias del sector agroindustrial y la importancia de cumplir con tiempos,
volúmenes y condiciones específicas.`,
      image: "/assets/icon2.svg",
    },
    {
      title: "Servicio paletizado y paquetería",
      description: `Ofrecemos un servicio de carga paletizada y paquetería ideal para empresas que necesitan mover mercadería entre el Noroeste, el Centro (especialmente Buenos Aires y zona de influencia) y el Sur del país.

Es una solución intermedia entre la carga completa y el envío de
pequeñas cantidades, con trazabilidad y seguimiento.`,
      image: "/assets/icon3.svg",
    },
    {
      title: "Logística y distribución a medida",
      description: `Diseñamos soluciones logísticas adaptadas a cada operación: frecuencias de envío, tipos de mercadería, puntos de
carga y descarga, y coordinación con depósitos y plantas.

Nuestro objetivo es integrarnos a tu cadena logística como un socio estratégico, aportando orden, eficiencia y tranquilidad en cada etapa del proceso.`,
      image: "/assets/icon4.svg",
    },
  ];
  return (
    <section className="px-4 py-20 scroll-m-26" id="services">
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
              className="flex flex-col gap-y-4 border-2 border-primary px-4 py-8 rounded-3xl"
            >
              <div className="text-center pb-4 border-b-2 border-primary lg:px-4">
                <div className="h-20 flex justify-center pb-4">
                  <img src={item.image} className="h-full" alt="Icon" />
                </div>
                <h2 className="text-xl font-bold">{item.title}</h2>
              </div>
              <p className="text-sm lg:px-4 leading-tight">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
