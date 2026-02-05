"use client";
import { useState } from "react";
import { Forward } from "@/lib/icons";

const FaqButton = ({ item }: { item: any }) => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <article className="flex flex-col gap-y-4 border-2 border-primary rounded-3xl p-4 transition-all">
      <div className="flex items-center gap-4 justify-between lg:px-4">
        <h2
          className="lg:text-2xl flex-1 font-bold cursor-pointer hover:text-black"
          onClick={toggleShow}
        >
          {item.title}
        </h2>
        <button
          className={`border border-primary h-12 w-12 rounded-full flex items-center justify-center cursor-pointer ${show ? "bg-white" : "bg-primary text-white hover:bg-white hover:text-primary"}`}
          onClick={toggleShow}
        >
          <span className={`${show ? "-rotate-90" : "rotate-90"}`}>
            <Forward />
          </span>
        </button>
      </div>
      {show && (
        <p className="border-t-2 border-primary lg:px-4 py-4 leading-tight text-black/60">
          {item.text}
        </p>
      )}
    </article>
  );
};

export default FaqButton;
