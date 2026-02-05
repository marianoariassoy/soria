import Faqs from "./Faqs";

interface FaqsInterface {
  id: number;
  title: string;
  text: string;
}

const FaqsContainer = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/faqs", {
    cache: "no-store",
  });
  const data = (await response.json()) as FaqsInterface[];
  if (!data) return;

  return <Faqs data={data} />;
};

export default FaqsContainer;
