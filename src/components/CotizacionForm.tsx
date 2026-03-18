"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios, { AxiosError } from "axios";
import Input from "@/components/Input2";
import Select from "@/components/Select-2";
import Button from "@/components/Button3";
import Loader from "@/components/Loader";
import { Quote } from "@/types";
import Error from "@/components/Error";
import { typeCargo } from "@/lib/data";

const Page = () => {
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [sended, setSended] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Quote>();

  const onSubmit: SubmitHandler<Quote> = async (data) => {
    setSending(true);

    try {
      const response = await axios.post("", data);
      if (response?.data?.error) {
        setError(response.data.message);
        setSending(false);
      } else {
        setSended(true);
      }
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;

      if (axiosError.response) {
        setError(axiosError.response.data?.message || "Error desconocido");
      } else {
        setError("Error de conexión");
      }
      setSending(false);
    }
  };

  const errorMessage = "Este dato es obligatorio";

  if (sended)
    return (
      <div>
        <h2 className="text-3xl font-bold mb-4">
          Su solicitud ha sido enviada.
        </h2>
        <p className="text-xl mb-30 text-secondary ">
          Gracias por su pedido cotización. Le responderemos en breve.
        </p>
      </div>
    );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
      <div className="grid lg:grid-cols-3 gap-x-4 gap-y-2 lg:gap-y-8">
        <div className="form-control">
          <Input
            type="text"
            title="Origen"
            placeholder="Provincia, localidad o CP"
            register={register("origin", { required: errorMessage })}
          />
          <Error error={errors.origin} />
        </div>
        <div className="form-control">
          <Input
            type="text"
            title="Destino"
            placeholder="Provincia, localidad o CP"
            register={register("destination", { required: errorMessage })}
          />
          <Error error={errors.destination} />
        </div>
        <div></div>
        <div className="form-control">
          <Select
            data={typeCargo}
            title="Tipo de carga"
            register={register("type_cargo", { required: errorMessage })}
          />
          <Error error={errors.type_cargo} />
        </div>
        <div className="form-control">
          <Input
            type="number"
            title="Cantidad"
            placeholder="01"
            register={register("quantity", {
              required: errorMessage,
              min: 1,
            })}
          />
          <Error error={errors.quantity} />
        </div>
        <div></div>
        <div className="form-control">
          <Input
            type="text"
            title="Peso (kg)"
            placeholder="Ejemplo: 20"
            register={register("weight", { required: errorMessage })}
          />
          <Error error={errors.weight} />
        </div>
        <div className="form-control">
          <Input
            type="text"
            title="Altura (cm)"
            placeholder="Ejemplo: 20"
            register={register("height", {})}
          />
          <Error error={errors.height} />
        </div>
        <div className="form-control">
          <Input
            type="text"
            title="Valor Declarado"
            placeholder="50000"
            register={register("value", {})}
          />
          <Error error={errors.value} />
        </div>
      </div>
      <div className="form-control mt-4 lg:mt-8">
        {sending ? <Loader /> : <Button>Cotizar</Button>}
      </div>
    </form>
  );
};

export default Page;
