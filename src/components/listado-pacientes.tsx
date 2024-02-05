import { useContext } from "react"
import { ListadoCard } from "./listado-card"
import { PacientesContext } from "../context/PacientesContext"

export const ListadoPacientes = () => {
  const {pacientes} = useContext(PacientesContext)
  return (
    <div className="lg:w-1/2" >
      <h2 className="font-bold text-3xl mb-10 text-center">Listado de <span className="text-indigo-700">pacientes</span></h2>
      
      {pacientes.map(({mascota,raza,duenio,email},index)=>(
      <ListadoCard
      key={index}
      mascota={mascota}
      raza={raza}
      duenio={duenio}
      email={email}
      />
      ))}
    </div>
  )
}