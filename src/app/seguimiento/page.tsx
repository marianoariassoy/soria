import Whatsapp from "@/components/Whatsapp";
import Seguimiento from "@/components/Seguimiento";

const page = () => {
  return (
    <section className="w-screen h-screen relative fade-in">
      <Whatsapp />
      <Seguimiento description={true} />

      <div
        className="h-full w-full bg-center bg-cover"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/6170463/pexels-photo-6170463.jpeg)`,
        }}
      ></div>
    </section>
  );
};

export default page;
