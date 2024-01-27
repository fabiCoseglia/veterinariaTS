import { FormValues } from "./formulario"
export const ListadoPacientes = ({pacientes}: {pacientes:FormValues[]}) => {
  return (
    <div className="lg:w-1/2" >
      <h2 className="font-bold text-3xl mb-10 text-center">Listado de <span className="text-indigo-700">pacientes</span></h2>
      
      {pacientes.map((pacientes,index)=>(
       <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg bg-white mx-auto mt-4 componente">
       <div className="px-6 py-4">
         <div className="mb-2">
           <h3 className="text-center font-semibold">{pacientes.mascota}</h3>
         </div>
         <div className="mb-2">
           <span className="text-indigo-700 font-semibold">Raza:</span> {pacientes.raza}
         </div>
         <div className="mb-2">
           <span className="text-indigo-700 font-semibold">Dueño:</span> {pacientes.duenio}
         </div>
         <div>
           <span className="text-indigo-700 font-semibold">Contacto:</span> {pacientes.email}
         </div>
       </div>
     </div>
      ))}
    </div>
  )
}