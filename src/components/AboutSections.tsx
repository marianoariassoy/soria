"use client";
import { useState } from "react";
import Button from "./Button";
import { useInView } from "react-intersection-observer";

interface QuienesSomos {
  id: number;
  title: string;
  text: string;
}

const AboutSections = ({ data }: { data: QuienesSomos[] }) => {
  const [section, setSection] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

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
      ref={ref}
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row  gap-8">
        <div
          className={`lg:w-2/5 opacity-0 ${inView ? "animate-fade-right" : ""}`}
        >
          <h1 className="flex flex-col text-4xl lg:text-6xl lg:pt-20">
            <span className="font-medium">Quienes</span>
            <span className="font-extrabold">Somos?</span>
          </h1>
        </div>
        <div
          className={`lg:w-3/5 flex flex-col gap-y-8 font-medium opacity-0 ${inView ? "animate-fade-left" : ""}`}
        >
          <div>
            <h3 className="font-bold text-lg mb-4">{data[section].title}</h3>
            <p className="whitespace-break-spaces">{data[section].text}</p>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            {data.map((item, index) => (
              <Button
                key={index}
                active={section === index}
                onClick={() => handleSection(index)}
              >
                {item.title}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSections;
