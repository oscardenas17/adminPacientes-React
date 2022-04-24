const Paciente = () => {
  return (
    <div>
      <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre: <span className="font-normal normal-case">dog</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Propietario: <span className="font-normal normal-case">Yesid</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email:{" "}
          <span className="font-normal normal-case">email@correo.com</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Fecha Alta:{" "}
          <span className="font-normal normal-case">10-12-2020</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre: <span className="font-normal normal-case">dog</span>
        </p>
      </div>
    </div>
  );
};

export default Paciente;
