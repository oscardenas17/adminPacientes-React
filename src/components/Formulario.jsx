import { useState, useEffect } from "react";
import Error from "./Error";

//setPaciente prop viene desde app es para editar y limpar el dato editado
function Formulario({ pacientes, setPacientes, paciente, setPaciente }) {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  //Para editar
  useEffect(() => {
    // if (Object.keys(paciente).length > 0 ) {
    //   console.log('algo')
    // }else{
    //   console.log('no hay nada')
    // }

    if ( Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true);
    } else {
      setError(false);
    }

    //Objeto de paciente - en memoria de lo que se lee del formulario
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
      //id: generarId(),
    };

    if (paciente.id) {
      //edit registro
      objetoPaciente.id = paciente.id
      //dato editado
      //console.log(objetoPaciente)
      //dato antiguo
      //console.log(paciente)
      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
      setPacientes(pacientesActualizados)

      //se regresa a objeto vacio lo editado
      setPaciente({})
    }else{
      //nuevo registro
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    //console.log(objetoPaciente);
    // if (objetoPaciente.nombre != "") {
    //   setPacientes([...pacientes, objetoPaciente]);
    // }

    //Reiniciar el form
    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y{" "}
        <span className="text-indigo-600 font-bold ">Administralos</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        onSubmit={handleSubmit}
      >
        {/* //ternario validando error en campo vacio */}
        {error && (
          <Error>
            {" "}
            <p>Todos los campos son obligatorios </p>{" "}
          </Error>
        )}

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
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value= { paciente.id ? 'Editar Datos Paciente': 'Agregar Paciente'}
        />
      </form>
    </div>
  );
}

export default Formulario;
