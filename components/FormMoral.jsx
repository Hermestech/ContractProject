import React, { useState } from "react";
import Link from "next/link";

const FormMoral = () => {
  const [data, setData] = useState({
    denominacionSocial: "",
    entidadFederativa: "",
    municipio: "",
    colonia: "",
    calle: "",
    numExt: 0,
    numInt: 0,
    codigoPostal: 0,
  });

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const sendData = (event) => {
    event.preventDefault();
    console.log(data);
  };

  return (
    <>
      <Link href={"/"}>
        <button>Volver</button>
      </Link>
      <h1>Persona Moral</h1>
      <section className="Empresa-data">
        <form action="" onSubmit={sendData}>
          <h1>Datos de la Empresa</h1>
          <label htmlFor="">Denominación o Razón Social</label>
          <input
            type="text"
            className="form-control"
            name="denominacionSocial"
            onChange={handleInputChange}
            placeholder="Patito S.A. DE C.V."
          />
          <h1>Domicilio de la Empresa</h1>
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
          <button type="submit">Enviar</button>
        </form>
      </section>
    </>
  );
};

export default FormMoral;
