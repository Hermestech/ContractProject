import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";

const FormFisica = () => {
  const [data, setData] = useState({
    profesion: "",
    cedula: "",
    rfc: "",
    nombre: "",
    apellido: "",
    segundoApellido: "",
    entidadFederativa: "",
    municipio: "",
    colonia: "",
    calle: "",
    nacionalidad: "",
    numExt: 0,
    numInt: 0,
    codigoPostal: 0,
    identificacion: "",
  });
  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const [select, setSelect] = useState([
    "Enfermera",
    "Abogado",
    "Notario",
    "Marino",
  ]);
  const Add = select.map((Add) => Add);

  const handleSelectTypeChange = (e) => {
    setSelect(select[e.target.value]);
  };
  const sendData = (event) => {
    event.preventDefault();
    axios
      .post("http://127.0.0.1:8000/contract/new", data)
      .then((res) => console.log(res))
      .catch((error) => console.error(error));
    //despues descargar el documento
  };

  return (
    <div>
      <Link href={"/"}>
        <button>Volver</button>
      </Link>
      <h1>Persona Física </h1>
      <section>
        <form method="post" onSubmit={sendData}>
          <label htmlFor="profesion">Elija su profesión:</label>
          <select name="profesion" onChange={(e) => handleSelectTypeChange(e)}>
            {Add.map((address, key) => (
              <option key={key} value={key}>
                {address}
              </option>
            ))}
          </select>
          <label htmlFor="cedula">Número de cédula profesional</label>
          <input
            type="text"
            name="cedula"
            onChange={handleInputChange}
            placeholder="fdsat4325fdsa53"
          />
          <label htmlFor="rfc">RFC</label>
          <input
            type="text"
            name="rfc"
            onChange={handleInputChange}
            placeholder="AKJ12990434FSJLM2"
          />

          <section className="datos_profesionista">
            <h1>Datos del Profesionista</h1>
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              name="nombre"
              onChange={handleInputChange}
              placeholder="Juan"
            />
            <label htmlFor="apellido">Primer apellido:</label>
            <input
              type="text"
              name="apellido"
              onChange={handleInputChange}
              placeholder="Hernandez"
            />
            <label htmlFor="segundoApellido">Segundo apellido:</label>
            <input
              type="text"
              name="segundoApellido"
              onChange={handleInputChange}
              placeholder="Rodriguez"
            />
            <label> Nacionalidad </label>
            <input
              type="text"
              name="nacionalidad"
              onChange={handleInputChange}
              placeholder="mexicana"
            />
          </section>

          <section className="Address">
            <h1>Dirección</h1>
            <label htmlFor="estado">Estado</label>
            <input
              type="text"
              className="form-control"
              name="entidadFederativa"
              onChange={handleInputChange}
              placeholder="CD. México"
            />
            <label htmlFor="municipio">Municipio</label>
            <input
              type="text"
              className="form-control"
              name="municipio"
              onChange={handleInputChange}
              placeholder="Coyoacán"
            />
            <label htmlFor="colonia">Colonia</label>
            <input
              type="text"
              className="form-control"
              name="colonia"
              onChange={handleInputChange}
              placeholder="la que sea"
            />
            <label htmlFor="calle">Calle</label>
            <input
              type="text"
              className="form-control"
              name="calle"
              onChange={handleInputChange}
              placeholder="avenida siempre viva 123"
            />
            <label htmlFor="exterior">Número Exterior</label>
            <input
              type="number"
              className="form-control"
              name="numExt"
              onChange={handleInputChange}
              placeholder="56"
            />
            <label htmlFor="interior">Número Interior</label>
            <input
              type="text"
              className="form-control"
              name="numInt"
              onChange={handleInputChange}
              placeholder="4"
            />
            <label htmlFor="cp">Código Postal</label>
            <input
              type="number"
              name="codigoPostal"
              onChange={handleInputChange}
              placeholder="75689"
            />
            <label htmlFor="">Identificación</label>
            <input
              type="text"
              name="ine"
              onChange={handleInputChange}
              placeholder="Aucmiorew315433543"
            />
          </section>
          <button type="submit">Enviar</button>
        </form>
      </section>
    </div>
  );
};

export default FormFisica;
