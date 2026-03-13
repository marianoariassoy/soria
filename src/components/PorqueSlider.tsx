"use client";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import PorqueElegirnosItem from "./PorqueElegirnosItem";

interface data {
  title: string;
  text: string;
  title2: string;
  text2: string;
  icon1: string;
  icon2: string;
  image: string;
}

const PorqueSlider = ({ data }: { data: data[] }) => {
  const properties = {
    prevArrow: (
      <button className="-translate-x-16 text-secondary hover:text-primary text-xl cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
    ),
    nextArrow: (
      <button className="translate-x-16 text-secondary hover:text-primary text-xl cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    ),
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <Slide
        {...properties}
        autoplay={false}
        infinite={true}
        pauseOnHover={false}
        arrows={true}
        transitionDuration={400}
      >
        {data.map((item, index) => (
          <PorqueElegirnosItem key={index} data={item} />
        ))}
      </Slide>
    </div>
  );
};

export default PorqueSlider;
