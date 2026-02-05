import Whatsapp from "./Whatsapp";
import Seguimiento from "./Seguimiento";
import Slider from "./Slider";

interface Home {
  id: number;
  image: string;
}

const Hero = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/home", {
    cache: "no-store",
  });
  const data = (await response.json()) as Home[];
  if (!data) return;

  return (
    <section className="w-screen h-screen relative fade-in" id="home">
      <Whatsapp />
      <Seguimiento description={false} />

      <Slider data={data} />
    </section>
  );
};

export default Hero;
