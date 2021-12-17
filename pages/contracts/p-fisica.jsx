import React, { useState } from "react";
import Link from "next/link";
import FormFisica from "../../components/FormFisica";

const PFisica = () => {
  return (
    <>
      <FormFisica />
      <Link href={"/client"}>
        <a>Continuar</a>
      </Link>
    </>
  );
};

export default PFisica;
