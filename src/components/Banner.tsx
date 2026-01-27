"use client";
import { useInView } from "react-intersection-observer";

const Banner = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <div
      className={`aspect-16/5 opacity-0 ${inView ? "fade-in" : ""}`}
      ref={ref}
    >
      <img
        src="https://images.pexels.com/photos/1255149/pexels-photo-1255149.jpeg"
        alt="Foto"
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
};

export default Banner;
