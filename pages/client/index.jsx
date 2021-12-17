import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Link from "next/link";
const index = () => {
  return (
    <>
      <Navbar />
      <h1>Información del cliente</h1>
      <h1>¿Es Persona física o Persona Moral?</h1>

      <Link href="/client/fisica">
        <a>Persona Fisica</a>
      </Link>

      <Link href="/client/moral">
        <a>Persona Moral</a>
      </Link>
    </>
  );
};

export default index;
