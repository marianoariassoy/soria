"use client";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import FaqButton from "./FaqButton";
import Button from "./Button";

interface Faqs {
  id: number;
  title: string;
  text: string;
}

const Faqs = ({ data }: { data: Faqs[] }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <section
      className="scroll-m-26 px-4 bg-primary text-white py-20"
      id="faqs"
      ref={ref}
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-y-12">
        <h1 className="text-4xl lg:text-5xl text-center font-extrabold">
          Preguntas Frecuentes
        </h1>
        <div className="grid lg:grid-cols-3 items-start gap-8">
          {data.slice(0, 3).map((item, index) => (
            <FaqButton
              item={item}
              key={index}
              style={
                inView
                  ? index === 1
                    ? "animate-fade-up delay-200"
                    : "animate-fade-up"
                  : "opacity-0"
              }
            />
          ))}
        </div>
        <div className="flex justify-center gap-x-4">
          <Link href="/faqs">
            <Button>+ Ver Más</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
