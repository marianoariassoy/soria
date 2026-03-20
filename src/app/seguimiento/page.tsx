import Whatsapp from "@/components/Whatsapp";
import Seguimiento from "@/components/Seguimiento";

const page = () => {
  const numRandom = Math.floor(Math.random() * 100);

  return (
    <section className="w-screen h-screen relative fade-in">
      <Whatsapp />
      <Seguimiento description={true} />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-full z-20"></div>
      <div
        className="h-full w-full bg-center bg-cover z-10"
        style={{
          backgroundImage:
            "url(https://backend.soriajmilogydistribuciones.com/images-static/seguimiento.jpg?v=" +
            numRandom +
            ")",
        }}
      ></div>
    </section>
  );
};

export default page;
