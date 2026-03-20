"use client";
import { useInView } from "react-intersection-observer";

const Banner = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const numRandom = Math.floor(Math.random() * 100);

  return (
    <div
      className={`aspect-10/5 lg:aspect-16/5 opacity-0 ${inView ? "fade-in" : ""}`}
      ref={ref}
    >
      <img
        src={`https://backend.soriajmilogydistribuciones.com/images-static/banner.jpg?v=${numRandom}`}
        alt="Foto"
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
};

export default Banner;
