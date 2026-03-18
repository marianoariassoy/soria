"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios, { AxiosError } from "axios";
import Input from "@/components/Input2";
import Select from "@/components/Select-2";
import Button from "@/components/Button3";
import Loader from "@/components/Loader";
import { Quote } from "@/types";
import { typeCargo } from "@/lib/data";
import { FieldError } from "react-hook-form";

type ErrorProps = {
  error?: FieldError;
};

const Error = ({ error }: ErrorProps) => {
  if (!error) return null;

  return <div className="ml-4 text-secondary text-sm">{error.message}</div>;
};

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
    const sender = {
      to: "soriajmilog@soriajmi.com",
      from: "no-reply@soriajmilogydistribuciones.com",
      from_name: "SoriaJ MI",
      subject: "Pedido de cotización",
    };

    try {
      const response = await axios.post(
        "https://backend.soriajmilogydistribuciones.com/send-cotization.php",
        { ...data, ...sender },
      );
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
      <div className="mb-30">
        <div className="flex flex-col gap-y-4">
          <h1 className="font-extrabold text-2xl lg:text-4xl">
            Su solicitud ha sido enviada.
          </h1>
          <p className="leading-tight font-medium">
            Gracias por su pedido cotización. Le responderemos en breve.
          </p>
        </div>
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
            register={register("origin", {
              required: errorMessage,
              setValueAs: (value) => value.trim(),
            })}
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
              valueAsNumber: true,
              min: {
                value: 1,
                message: "Mínimo 1 unidad",
              },
              max: {
                value: 10000,
                message: "Cantidad demasiado alta",
              },
            })}
          />
          <Error error={errors.quantity} />
        </div>
        <div></div>
        <div className="form-control">
          <Input
            type="number"
            title="Peso (kg)"
            placeholder="Ejemplo: 20"
            register={register("weight", {
              required: errorMessage,
              valueAsNumber: true,
              min: {
                value: 0.1,
                message: "El peso debe ser mayor a 0",
              },
              max: {
                value: 50000,
                message: "Peso demasiado alto",
              },
            })}
          />
          <Error error={errors.weight} />
        </div>
        <div className="form-control">
          <Input
            type="number"
            title="Altura (cm)"
            placeholder="Ejemplo: 20"
            register={register("height", {
              required: errorMessage,
              valueAsNumber: true,
              min: {
                value: 1,
                message: "Altura inválida",
              },
              max: {
                value: 500,
                message: "Altura demasiado grande",
              },
            })}
          />
          <Error error={errors.height} />
        </div>
        <div className="form-control">
          <Input
            type="number"
            title="Valor Declarado"
            placeholder="50000"
            register={register("value", {
              required: errorMessage,
              valueAsNumber: true,
              min: {
                value: 1,
                message: "Debe ser mayor a 0",
              },
            })}
          />
          <Error error={errors.value} />
        </div>
        <div className="form-control">
          <Input
            type="text"
            title="Nombre y Apellido"
            placeholder=""
            register={register("name", { required: errorMessage })}
          />
          <Error error={errors.name} />
        </div>

        <div className="form-control">
          <Input
            type="email"
            title="Email"
            placeholder=""
            register={register("email", {
              required: errorMessage,
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Email inválido",
              },
            })}
          />
          <Error error={errors.email} />
        </div>
        <div className="form-control">
          <Input
            type="text"
            title="Teléfono"
            placeholder=""
            register={register("phone", {
              required: errorMessage,
              pattern: {
                value: /^[0-9+\-\s()]+$/,
                message: "Teléfono inválido",
              },
            })}
          />
          <Error error={errors.phone} />
        </div>
      </div>
      <div className="form-control mt-4 lg:mt-8">
        {sending ? <Loader /> : <Button>Cotizar</Button>}
      </div>
    </form>
  );
};

export default Page;
