"use client";
import { useInView } from "react-intersection-observer";
import { social } from "@/lib/data";
import ContactForm from "./ContactForm";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <section className="px-4 py-20 lg:pt-40 scroll-m-26" id="contact" ref={ref}>
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        <div
          className={`lg:w-1/2 flex flex-col gap-4 opacity-0 ${inView ? "animate-fade-right" : ""}`}
        >
          <div>
            <h2 className="font-extrabold text-4xl lg:text-6xl mb-8">
              Contacto
            </h2>
            <p className="leading-tight font-medium">
              Si necesitás una cotización, querés evaluar una ruta específica o
              simplemente hacer una consulta, estamos a disposición para
              ayudarte.
            </p>
          </div>
          <div className="flex flex-col gap-y-2 mt-8">
            <h3 className="font-medium">Redes Sociales</h3>
            <hr className="border-t-2 border-primary w-20" />
            <div>
              <nav>
                <ul className="flex items-center gap-x-4 text-xl">
                  {social.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        target="_blank"
                        className="hover:text-secondary"
                      >
                        <item.icon />
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
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
