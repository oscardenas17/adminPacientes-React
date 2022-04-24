import { useState, useEffect } from "react"


function Formulario() {

  const [nombre, setNombre] = useState('');

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y{" "}
        <span className="text-indigo-600 font-bold ">Administralos</span>
      </p>


      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">

        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase bold"> Nombre Mascota</label>
          <input 
            value={nombre}
            onChange={ (e) => setNombre(e.target.value) }
            id="mascota"
            type="text" 
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase bold"> Nombre Propietario</label>
          <input 
            id="propietario"
            type="text" 
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase bold"> Email</label>
          <input 
            id="email"
            type="email" 
            placeholder=" Email Contacto"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase bold"> Alta</label>
          <input 
            id="email"
            type="email" 
            placeholder=" Email Contacto"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase bold"> Sintomas</label>
          <textarea 
              className="border-2 w-full p-2 mt-2"
              id="sintomas"
              placeholder="Describe los sintomas" 
          />
        </div>

        <input 
          type="submit"
          value="Agregar Paciente"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"      
        
        />

      </form>
    </div>
  )
}

export default Formulario
