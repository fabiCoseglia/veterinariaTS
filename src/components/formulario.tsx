import { Dispatch, FormEvent, SetStateAction } from "react";
import { useForm } from "../hooks/useForm";
import { InputForm } from "./input-form";

export interface Paciente {
  id: string;
  mascota: string;
  duenio: string;
  email: string;
  raza: string;
}

type FormValues = Omit<Paciente, "id">;

export const Formulario = ({
  setPacientes,
}: {
  setPacientes: Dispatch<SetStateAction<Paciente[]>>;
}) => {
  const { formValues, handleChange } = useForm<FormValues>({
    mascota: "",
    duenio: "",
    email: "",
    raza: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newPaciente = {
      id: crypto.randomUUID(),
      ...formValues,
    };

    setPacientes((prev:Paciente[])=>{
      return [...prev,newPaciente]
    });
  };

  return (
    <div className=" lg:w-2/5">
      <h2 className="font-bold text-3xl mb-10 text-center">
        Registrar <span className="text-indigo-700">Nuevo Paciente</span>
      </h2>
      <form
        className="bg-white shadow-lg rounded-lg py-10 px-5 mb-10"
        onSubmit={handleSubmit}
      >
        <InputForm
          label="Mascota"
          name="mascota"
          type="text"
          placeholder="Ingrese el nombre"
          onChange={handleChange}
        />
        <InputForm
          label="Raza"
          name="raza"
          type="text"
          placeholder="Ingrese la raza"
          onChange={handleChange}
        />

        <InputForm
          label="Dueño"
          name="duenio"
          type="text"
          placeholder="Ingrese el nombre del propietario"
          onChange={handleChange}
        />

        <InputForm
          label="Email"
          name="email"
          type="text"
          placeholder="Ingrese el Email del contacto"
          onChange={handleChange}
        />

        <button className="text-white bg-indigo-600 w-full p-3 uppercase font-bold hover:bg-indigo-800 transition-all">
          Agregar paciente
        </button>
      </form>
    </div>
  );
};
