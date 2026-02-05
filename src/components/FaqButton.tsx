"use client";
import { useState } from "react";

const FaqButton = ({ item, style }: { item: any; style: string }) => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <article
      className={`flex flex-col gap-y-4 border-2 border-white rounded-3xl p-4 lg:p-8 opacity-0 ${style}`}
    >
      <h2 className="lg:text-xl font-bold my-8">{item.title}</h2>
      <button
        className="font-bold border-t-2 border-white py-4 lg:text-xl text-left hover:underline cursor-pointer"
        onClick={toggleShow}
      >
        {show ? "Ocultar respuesta" : "Ver respuesta"}
      </button>
      {show && <p className="text-sm leading-tight">{item.text}</p>}
    </article>
  );
};

export default FaqButton;
