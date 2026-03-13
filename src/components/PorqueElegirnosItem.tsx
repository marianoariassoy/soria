"use client";
import { useInView } from "react-intersection-observer";

interface Data {
  title: string;
  text: string;
  title2: string;
  text2: string;
  icon1: string;
  icon2: string;
  image: string;
}

const PorqueElegirnosItem = ({ data }: { data: Data }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <article className="grid grid-cols-1 lg:grid-cols-2 gap-y-8" ref={ref}>
      <div
        className={`lg:pr-12 opacity-0 ${inView ? "animate-fade-right" : ""}`}
      >
        <img
          src={data.image}
          className="w-full h-full object-cover aspect-square"
          alt={data.title}
        />
      </div>
      <div
        className={`text-secondary opacity-0 flex flex-col gap-y-8 ${inView ? "animate-fade-left" : ""}`}
      >
        <div className="flex flex-col gap-y-2 items-start">
          {data.icon1 && (
            <img src={data.icon1} alt={data.title} className="h-18 mb-2" />
          )}
          <h2 className="text-xl font-bold">{data.title}</h2>
          <p>{data.text}</p>
        </div>
        {data.title2 && data.text2 && (
          <div className="flex flex-col gap-y-2 items-start">
            {data.icon2 && (
              <img src={data.icon2} alt={data.title2} className="h-18 mb-2" />
            )}
            <h2 className="text-xl font-bold">{data.title2}</h2>
            <p>{data.text2}</p>
          </div>
        )}
      </div>
    </article>
  );
};

export default PorqueElegirnosItem;
