import { FormEvent, useContext, useState } from "react";
import { useForm } from "../hooks/useForm";
import { InputForm } from "./input-form";
import { Paciente, PacientesContext } from "../context/PacientesContext";
import { schemaFormAddPaciente } from "../validations/schema-form-add-paciente";



type FormValues = Omit<Paciente, "id">;

export const Formulario = () => {

  const {agregarPaciente} = useContext(PacientesContext)
  const [errors, setErrors] = useState<FormValues>({} as FormValues)

  const { formValues, handleChange } = useForm<FormValues>({
    mascota: "",
    duenio: "",
    email: "",
    raza: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const result = schemaFormAddPaciente.validate(formValues,{
      abortEarly: false
    });

    if(result.error){
     throw setErrors(result.error.details.reduce((acc,err)=>{
        const inputName = err.context?.key as string;
        const message = err.message;
        return {
          ...acc,
          [inputName]:message
        };
      }, {} as FormValues ))
    }

    const newPaciente = {
      id: crypto.randomUUID(),
      ...formValues,
    };

    agregarPaciente(newPaciente);
    setErrors({} as FormValues )
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
          error = {errors.mascota}
        />
        <InputForm
          label="Raza"
          name="raza"
          type="text"
          placeholder="Ingrese la raza"
          onChange={handleChange}
          error = {errors.raza}
        />

        <InputForm
          label="Dueño"
          name="duenio"
          type="text"
          placeholder="Ingrese el nombre del propietario"
          onChange={handleChange}
          error = {errors.duenio}
        />

        <InputForm
          label="Email"
          name="email"
          type="text"
          placeholder="Ingrese el Email del contacto"
          onChange={handleChange}
          error = {errors.email}
        />

        <button className="text-white bg-indigo-600 w-full p-3 uppercase font-bold hover:bg-indigo-800 transition-all">
          Agregar paciente
        </button>
      </form>
    </div>
  );
};
