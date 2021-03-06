import { useState, useEffect } from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'
import ListadoPacientes from './components/ListadoPacientes'


function App() {

  const storage = JSON.parse( localStorage.getItem('pacientes')) ?? [];
  const [pacientes,setPacientes] = useState(storage);

  //para editar
  const [paciente, setPaciente] = useState({});


  //para localEstorage
  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse( localStorage.getItem('pacientes') ) ?? [];
      //console.log( pacientesLS)
      setPacientes(pacientesLS)
    }
    obtenerLS()
  }, []);
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes]);
  //para localEstorage


  //para eliminar
  const eliminarPaciente = (id) =>{
   //console.log("eliminando", id);
   const pacientesActualizados = pacientes.filter( paciente=> paciente.id !== id);
   //console.log(pacientesActualizados);
   setPacientes(pacientesActualizados)
  }

  return (
    <div className='container mx-auto mt-20'>
      <Header />

      <div className="mt-12 md:flex">
        <Formulario 
          pacientes={pacientes}
          setPacientes={setPacientes} 
          //para editar
          paciente={paciente}
          setPaciente={setPaciente}
        />


        <ListadoPacientes         
          pacientes={pacientes}
          //para editar
          setPaciente={setPaciente} 

          //1.para eliminar
          eliminarPaciente={eliminarPaciente}
        />
      </div>

    </div>
  )
}

export default App
