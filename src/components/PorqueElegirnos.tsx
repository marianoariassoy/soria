import PorqueSlider from "./PorqueSlider";

interface Data {
  title: string;
  text: string;
  title2: string;
  text2: string;
  icon1: string;
  icon2: string;
  image: string;
}

const PorqueElegirnos = async () => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/porque-elegirnos",
    {
      cache: "no-store",
    },
  );
  const data = (await response.json()) as Data[];
  if (!data) return;
  return (
    <section
      className="py-20 px-4 flex flex-col gap-y-20"
      id="porque-elegirnos"
    >
      <h1 className="text-2xl lg:text-5xl text-center font-extrabold text-secondary">
        ¿Por qué elegirnos?
      </h1>

      <PorqueSlider data={data} />
    </section>
  );
};

export default PorqueElegirnos;
