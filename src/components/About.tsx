import AboutSections from "./AboutSections";

interface QuienesSomos {
  id: number;
  title: string;
  text: string;
}

const About = async () => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/quienes-somos",
    {
      cache: "no-store",
    },
  );
  const data = (await response.json()) as QuienesSomos[];
  if (!data) return;

  return <AboutSections data={data} />;
};

export default About;
