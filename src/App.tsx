import { Formulario } from "./components/formulario"
import { Header } from "./components/header"
import { ListadoPacientes } from "./components/listado-pacientes"
import { PacientesProvider } from "./context/PacientesProvider"


function App() {
  return (
    <PacientesProvider>
      <div className="container mx-auto mt-10">
        <Header/>
        <div className="mt-12 p-3 lg:flex md:justify-between">
          <Formulario />
          <ListadoPacientes/>
        </div>
      </div>
    </PacientesProvider>
  )
}

export default App
