import React from "react";
import Navbar from "../components/Navbar/Navbar.js";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>¿Es Persona física o Persona Moral?</h1>

      <Link href="/contracts/p-fisica">
        <a>Persona Fisica</a>
      </Link>

      <Link href="/contracts/p-moral">
        <a>Persona Moral</a>
      </Link>
    </div>
  );
};
export default Home;
