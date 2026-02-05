import Whatsapp from "@/components/Whatsapp";
import Seguimiento from "@/components/Seguimiento";

const page = () => {
  return (
    <section className="w-screen h-screen relative fade-in">
      <Whatsapp />
      <Seguimiento description={true} />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-full z-20"></div>
      <div
        className="h-full w-full bg-center bg-cover z-10"
        style={{
          backgroundImage: "url('/assets/seguimiento.jpg')",
        }}
      ></div>
    </section>
  );
};

export default page;
