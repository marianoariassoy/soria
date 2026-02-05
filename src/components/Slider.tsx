"use client";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

interface Home {
  id: number;
  image: string;
}

const Hero = ({ data }: { data: Home[] }) => {
  const indicators = () => (
    <div className="indicator bg-white rounded-full mx-2 w-2 h-2 border-0"></div>
  );

  return (
    <Fade
      autoplay={true}
      duration={4000}
      infinite={true}
      pauseOnHover={false}
      arrows={false}
      indicators={indicators}
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
  );
};

export default Hero;
