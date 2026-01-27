"use client";
import { useState } from "react";

const FaqButton = ({ item }: { item: any }) => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <article className="flex flex-col gap-y-4 border-2 border-white rounded-3xl p-4 lg:p-8 fade-in">
      <h2 className="lg:text-xl font-bold my-8">{item.question}</h2>
      <button
        className="font-bold border-t-2 border-white py-4 lg:text-xl text-left hover:underline cursor-pointer"
        onClick={toggleShow}
      >
        {show ? "Ocultar respuesta" : "Ver respuesta"}
      </button>
      {show && <p className="text-sm leading-tight">{item.answer}</p>}
    </article>
  );
};

export default FaqButton;
