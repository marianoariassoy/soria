import FaqButton from "@/components/FaqButton2";

interface FaqsInterface {
  id: number;
  title: string;
  text: string;
}

const Faqs = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/faqs", {
    cache: "no-store",
  });
  const data = (await response.json()) as FaqsInterface[];
  if (!data) return;

  return (
    <section className="px-4 lg:px-8 py-12 lg:py-20 mt-30 max-w-7xl mx-auto">
      <div className="flex flex-col gap-y-8">
        <h1 className="text-3xl pr-12 lg:text-5xl font-extrabold">
          Preguntas Frecuentes
        </h1>
        <p className="font-medium text-lg text-black/60">
          Queremos ayudarte a resolver tu consulta.
        </p>
        <div className="flex flex-col gap-4">
          {data.map((item, index) => (
            <FaqButton item={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
