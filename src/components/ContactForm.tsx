"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios, { AxiosError } from "axios";
import Input from "@/components/Input";
import Button from "@/components/Button2";
import Loader from "@/components/Loader";
import { FieldError } from "react-hook-form";
import { Contact } from "@/types";

type ErrorProps = {
  error?: FieldError;
};

const Error = ({ error }: ErrorProps) => {
  if (!error) return null;

  return <div className="mt-2 text-secondary text-sm">{error.message}</div>;
};

const Page = () => {
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [sended, setSended] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Contact>();

  const onSubmit: SubmitHandler<Contact> = async (data) => {
    setSending(true);
    const sender = {
      to: "soriajmilog@soriajmi.com",
      from: "no-reply@soriajmilogydistribuciones.com",
      from_name: "SoriaJ MI",
      subject: "Contacto",
    };

    try {
      const response = await axios.post(
        "https://backend.soriajmilogydistribuciones.com/send-email.php",
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
      <div>
        <div className="flex flex-col gap-y-4">
          <h1 className="font-extrabold text-2xl lg:text-4xl">
            ¡Gracias por contactarnos!
          </h1>
          <p className="leading-tight font-medium">
            Le escribiremos en breve con usted para poder ponerse en contacto
            con nosotros.
          </p>
        </div>
      </div>
    );

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
        <div className="grid lg:grid-cols-2 gap-x-4">
          <div className="form-control">
            <Input
              type="text"
              placeholder="Nombre"
              register={register("name", { required: errorMessage })}
            />
            <Error error={errors.name} />
          </div>
          <div className="form-control">
            <Input
              type="text"
              placeholder="Apellido"
              register={register("lastname", {
                required: errorMessage,
                maxLength: 20,
              })}
            />
            <Error error={errors.lastname} />
          </div>
          <div className="form-control">
            <Input
              type="text"
              placeholder="Empresa"
              register={register("company")}
            />
          </div>
          <div className="form-control">
            <Input
              type="text"
              placeholder="Provincia"
              register={register("location")}
            />
          </div>
          <div className="form-control">
            <Input
              type="text"
              placeholder="Celular"
              register={register("phone", { maxLength: 20 })}
            />
            <Error error={errors.phone} />
          </div>
          <div className="form-control">
            <Input
              type="email"
              placeholder="Email"
              register={register("email", {
                required: errorMessage,
                maxLength: 50,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Dirección de correo electrónico inválida",
                },
              })}
            />
            <Error error={errors.email} />
          </div>
        </div>
        <div>
          <textarea
            className="w-full border-2 border-primary rounded-3xl bg-transparent p-4 focus:outline-none focus:ring-0 placeholder:text-primary"
            {...register("message", { required: errorMessage })}
            placeholder="Mensaje"
            rows={5}
          />
          <Error error={errors.message} />
        </div>
        <div className="form-control flex justify-end">
          {sending ? <Loader /> : <Button>Enviar</Button>}
        </div>
      </form>
    </div>
  );
};

export default Page;
