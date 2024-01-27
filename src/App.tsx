import { useState } from "react"
import { Formulario } from "./components/formulario"
import { Header } from "./components/header"
import { ListadoPacientes } from "./components/listado-pacientes"
import {FormValues} from './components/formulario'

function App() {
  const [pacientes, setPacientes] = useState<FormValues[]>([])
  return (
    <div className="container mx-auto mt-10">
      <Header/>
      <div className="mt-12 p-3 lg:flex md:justify-between">
        <Formulario setPacientes={setPacientes} />
        <ListadoPacientes pacientes={pacientes} />
      </div>
    </div>
  )
}

export default App
