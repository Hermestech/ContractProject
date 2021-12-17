import React, { useState } from "react";
import Link from "next/link";
import FormMoral from "../../components/FormMoral";

const pMoral = () => {
  return (
    <>
      <FormMoral />
      <Link href={"/client"}>
        <button>Continuar</button>
      </Link>
    </>
  );
};

export default pMoral;
