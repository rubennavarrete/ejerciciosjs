import React, { Fragment } from "react";

import Ecuaciones from "../ejercicios/Otros/Ecuaciones";
import Voz from "../ejercicios/Otros/voz";
import Random from "../ejercicios/Otros/Random";
import Cadena from "../ejercicios/Otros/Cadenas";

const Otros = () => {
  return (
    <Fragment>
      <Voz />
      <Cadena />
      <Random />
      <Ecuaciones />
    </Fragment>
  );
};

export default Otros;
