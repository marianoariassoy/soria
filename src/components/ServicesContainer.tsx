import Services from "./Services";

interface Servicios {
  id: number;
  title: string;
  text: string;
  image: string;
}

const ServicesContainer = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/servicios", {
    cache: "no-store",
  });
  const data = (await response.json()) as Servicios[];
  if (!data) return;

  return <Services data={data} />;
};

export default ServicesContainer;
