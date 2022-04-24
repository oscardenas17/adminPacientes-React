import { useState, useEffect } from "react";

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ( [nombre, propietario, email, fecha, sintomas].includes('') ) {
      setError(true);
    }else{
      setError(false);
    }

  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y{" "}
        <span className="text-indigo-600 font-bold ">Administralos</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5"
        onSubmit={handleSubmit}
      >
        {/* //ternario validando error en campo vacio */}
        {error &&  (<div className="bg-red-800 text-white text-centerp-3 uppercase font-bold mb-3 rounded-md"> <p>Todos los campos son obligatorios</p> </div>) }

        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase bold"
          >
            {" "}
            Nombre Mascota
          </label>
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase bold"
          >
            {" "}
            Nombre Propietario
          </label>
          <input
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase bold">
            {" "}
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            type="email"
            placeholder=" Email Contacto"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase bold">
            {" "}
            Alta
          </label>
          <input
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            id="alta"
            type="date"
            placeholder=" Fecha Alta"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase bold"
          >
            {" "}
            Sintomas
          </label>
          <textarea
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
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
  );
}

export default Formulario;
