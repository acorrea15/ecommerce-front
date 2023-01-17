import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Carrusel from "../carrusel/Carrusel";
import Navegacion from "../navegacion/Navegacion";
import Tarjetas from "../tarjetas/Tarjetas";
/* import Tabla from "../tabla/Tabla"; */

const Home = () => {
  

  useEffect(() => {
    console.log(
      "Se ejecuto el useEffect cuando se renderizo el componente por primera vez"
    );
  }, []);

  useEffect(() => {
    console.log("Se ejecuto el useEffect cuando se renderizo el componente");
  });

  useEffect(() => {
    console.log("se ejecuto el useEffect cuando se modifica nuestra variable");
  });

  return (
    <>
      <Navegacion />

      
      {/* <Carrusel /> */}
      <Tarjetas />
      {/* <Tabla /> */}
      {/* <h1>Titulo Original</h1>
      <Button> Cambiar el titulo</Button> */}
    </>
  );
};

export default Home;
