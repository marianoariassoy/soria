"use client";
// import { useInView } from "react-intersection-observer";

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
  // const [ref, inView] = useInView({
  //   triggerOnce: false,
  //   threshold: 0.3,
  // });

  return (
    <article className="grid grid-cols-1 lg:grid-cols-2 gap-y-8">
      <div className="lg:pr-12">
        <img
          src={data.image}
          className="w-full h-full object-cover aspect-square rounded-2xl"
          alt={data.title}
        />
      </div>
      <div className={`text-secondary flex flex-col gap-y-8`}>
        <div className="flex flex-col gap-y-2 text-center items-center justify-center lg:items-start lg:text-left lg:justify-start">
          {data.icon1 && (
            <img src={data.icon1} alt={data.title} className="h-28" />
          )}
          <h2 className="text-xl font-bold">{data.title}</h2>
          <p>{data.text}</p>
        </div>
        {data.title2 && data.text2 && (
          <div className="flex flex-col gap-y-2 text-center items-center justify-center lg:items-start lg:text-left lg:justify-start">
            {data.icon2 && (
              <img src={data.icon2} alt={data.title2} className="h-28" />
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
