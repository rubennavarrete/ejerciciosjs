import React, { Fragment } from "react";

import Gasolinera from "../ejercicios/Repeticion/Gasolinera";
import Producto from "../ejercicios/Repeticion/Producto";
import Naturales from "../ejercicios/Repeticion/Naturales";
import Pascal from "../ejercicios/Repeticion/Pascal";

const Repeticion = () => {
  return (
    <Fragment>
      <Gasolinera />
      <Producto />
      <Naturales />
      <Pascal />
    </Fragment>
  );
};

export default Repeticion;
