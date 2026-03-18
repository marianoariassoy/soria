"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios, { AxiosError } from "axios";
import Input from "@/components/Input";
import Button from "@/components/Button2";
import Loader from "@/components/Loader";
import { Contact } from "@/types";
import Error from "@/components/Error";

// Soriajmilog@soriajmi.com

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

  if (sended) return <div></div>;

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
