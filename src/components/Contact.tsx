"use client";
import { useInView } from "react-intersection-observer";
import ContactForm from "./ContactForm";
import { Linkedin, Instagram, Whatsapp } from "@/lib/icons";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <section className="px-4 py-20 lg:pt-40 scroll-m-26" id="contact" ref={ref}>
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-x-12 gap-y-8">
        <div
          className={`lg:w-1/2 flex flex-col gap-4 opacity-0 ${inView ? "animate-fade-right" : ""}`}
        >
          <div>
            <h2 className="font-extrabold text-3xl lg:text-6xl mb-8">
              Contacto
            </h2>
            <p className="leading-tight font-medium mb-4">
              Si su organización requiere una cotización formal, el análisis de
              una ruta logística específica o asesoramiento sobre nuestros
              servicios de distribución, nuestro equipo de atención está a su
              disposición para brindar soluciones a medida.
            </p>
            <div className="flex flex-col gap-y-4">
              <p className="font-bold">
                Establezca contacto con nosotros a través de nuestros canales
                oficiales:
              </p>
              <ul className="font-medium flex flex-col gap-y-1">
                <li className="flex gap-x-1 items-center">
                  Atención Comercial Inmediata:
                  <a
                    href="http://wa.me/543876405531"
                    target="_blank"
                    className="hover:text-secondary text-lg"
                  >
                    <Whatsapp />
                  </a>
                </li>
                <li className="flex gap-x-1 items-center">
                  Gestión Administrativa y Presupuestos:
                  <a
                    href="mailto:soriajmilog@soriajmi.com"
                    className="hover:underline"
                  >
                    soriajmilog@soriajmi.com
                  </a>
                </li>
                <li className="flex gap-x-1 items-center">
                  Ecosistema Digital y Actualizaciones:
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    className="hover:text-secondary text-lg"
                  >
                    <Linkedin />
                  </a>
                  <a
                    href="https://www.instagram.com/soriajmilog"
                    target="_blank"
                    className="hover:text-secondary text-lg ml-1"
                  >
                    <Instagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className={`lg:w-1/2 opacity-0 ${inView ? "animate-fade-left" : ""}`}
        >
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
