import { FormValues } from "./formulario"

export const ListadoCard: React.FC<FormValues> = ({mascota,raza,duenio,email}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mx-auto mt-4 componente">
       <div className="px-6 py-4">
         <div className="mb-2">
           <h3 className="text-center font-semibold">{mascota}</h3>
         </div>
         <div className="mb-2">
           <span className="text-indigo-700 font-semibold">Raza:</span> {raza}
         </div>
         <div className="mb-2">
           <span className="text-indigo-700 font-semibold">Dueño:</span> {duenio}
         </div>
         <div>
           <span className="text-indigo-700 font-semibold">Contacto:</span> {email}
         </div>
       </div>
     </div>
  )
}
