import Select1 from "./Select-1";

const Routes = () => {
  return (
    <section
      className="px-4 py-20 scroll-m-26 bg-secondary text-white"
      id="routes"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-y-12">
        <header>
          <h1 className="text-4xl lg:text-5xl text-center font-extrabold mb-8">
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
          <div className="lg:w-1/2 flex flex-col gap-y-8">
            <Select1 title="Seleccione la Provincia" />
            <Select1 title="Seleccione la Localidad" />
            <div>
              <h3 className="font-bold mb-4"> Otras rutas</h3>
              <p className="leading-tight text-sm font-medium">
                Según el tipo de mercadería y las necesidades de cada operación,
                también evaluamos y cubrimos otros destinos dentro del país,
                buscando siempre la alternativa más eficiente.
                <br /> <br />
                Decinos de dónde sale tu carga y a dónde tiene que llegar.
                Nosotros lo hacemos posible.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 rounded-3xl overflow-hidden">
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
