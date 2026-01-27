"use client";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Whatsapp from "./Whatsapp";
import Seguimiento from "./Seguimiento";

const Hero = () => {
  const data = [
    {
      id: 1,
      image: "https://picsum.photos/id/10/1920/1080",
    },
    {
      id: 2,
      image: "https://picsum.photos/id/11/1920/1080",
    },
    {
      id: 3,
      image: "https://picsum.photos/id/12/1920/1080",
    },
  ];

  return (
    <section className="w-screen h-screen relative" id="home">
      <Whatsapp />
      <Seguimiento />

      <Fade
        autoplay={true}
        duration={4000}
        infinite={true}
        pauseOnHover={false}
        arrows={false}
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="h-screen w-screen bg-center bg-cover"
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          ></div>
        ))}
      </Fade>
    </section>
  );
};

export default Hero;
