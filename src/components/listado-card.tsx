export const ListadoCard = ({pacientes}: {pacientes:FormValues[]}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mx-auto">
    <div className="px-6 py-4">
      <div className="mb-2">
        <h3 className="text-center font-semibold">{pacientes.mascota ? pacientes.mascota : 'Nombre de la mascota'}</h3>
      </div>
      <div className="mb-2">
        <span className="text-indigo-700 font-semibold">Raza:</span> RazaDeMascota
      </div>
      <div className="mb-2">
        <span className="text-indigo-700 font-semibold">Dueño:</span> NombreDelDueño
      </div>
      <div>
        <span className="text-indigo-700 font-semibold">Contacto:</span> InformaciónDeContacto
      </div>
    </div>
  </div>
  )
}
