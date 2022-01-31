import React, { Fragment, useState, useRef } from "react";
import Error from "../../components/Error";

// imagenes
import ecuacio from "../../assets/img/ecuacio.png";

//css
import styles from "../../paginas/Paginas.module.css";

const Ecuaciones = () => {
  const [setActivo, guardarActivo] = useState("");
  const [setAlto, guardarAlto] = useState("0px");
  const [error, guardarError] = useState(false);
  const [menorCero, guardarMenorCero] = useState(false);
  const [mensaje, guardarMensaje] = useState(false);

  const contenedor = useRef(null);
  const focusValorA = useRef(null);
  const focusValorB = useRef(null);
  const focusValorC = useRef(null);
  const focusValorD = useRef(null);

  // efecto desplegable
  const accordion = () => {
    guardarActivo(setActivo === "" ? "active" : "");
    guardarAlto(
      setActivo === "active" ? "0px" : `${contenedor.current.scrollHeight}px`
    );
  };

  //capturar valores de los imput
  const [valorA, guardarValorA] = useState("");
  const [valorB, guardarValorB] = useState("");
  const [valorC, guardarValorC] = useState("");
  const [valorD, guardarValorD] = useState("");

  // Resultado
  const [tipoEcuacion, guardarTipoEcuacion] = useState("");

  // Cuando el usuario da click en calcular
  const calcEcuaciones = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Validar si los campos estan llenos y si son numeros mayores a cero
    if (valorA === "" || valorB === "" || valorC === "" || valorC === "") {
      guardarError(true);
      guardarMenorCero(false);
      return;
    } else {
      // calcular las ecuaciones
      calc();
    }
  };

  const calc = () => {
    if (valorA === valorC && valorB === valorD) {
      guardarTipoEcuacion("Las ecuaciones son:  Coincidentes");
    } else if (valorA === valorC && valorB !== valorD) {
      guardarTipoEcuacion("Las ecuaciones son:  Paralelas");
    } else {
      const c = valorC * -1;
      const b = valorB * -1;

      const aux1 = parseInt(b) + parseInt(valorD);
      const aux2 = parseInt(c) + parseInt(valorA);

      const x = aux1 / aux2;
      const y = x * parseInt(valorA) + parseInt(valorB);

      guardarTipoEcuacion(
        "Las ecuaciones se Intersecan y su punto de intersección (x , y) es: ( " +
          x +
          " , " +
          y +
          ")"
      );
    }
  };

  const validarInputA = () => {
    if (valorA === "") {
      guardarError(true);
      focusValorA.current.focus();
      return;
    } else {
      guardarError(false);
      focusValorB.current.focus();
    }
  };

  const validarInputB = () => {
    if (valorB === "") {
      guardarError(true);
      focusValorB.current.focus();
      return;
    } else {
      guardarError(false);
      focusValorC.current.focus();
    }
  };

  const validarInputC = () => {
    if (valorC === "") {
      guardarError(true);
      focusValorC.current.focus();
      return;
    } else {
      guardarError(false);
      focusValorD.current.focus();
    }
  };

  const validarInputD = () => {
    if (valorD === "") {
      guardarError(true);
      focusValorD.current.focus();
      return;
    } else {
      guardarError(false);
    }
  };

  const limpiarForm = (e) => {
    e.preventDefault();
    e.stopPropagation();
    guardarMenorCero(false);
    guardarError(false);
    document.getElementById("form").reset();
    guardarTipoEcuacion("");
    guardarMensaje(false);
    guardarValorA("");
    guardarValorB("");
    guardarValorC("");
    guardarValorD("");
    focusValorA.current.focus();
  };

  return (
    <Fragment>
      <button
        className={`${styles.card} ${styles.accordion} ${setActivo}`}
        onClick={accordion}
      >
        <div className={styles.contenedor_img}>
          <img src={ecuacio} alt="" />
        </div>
        <div className={styles.card_info}>
          <p>
            4. Se conocen las ecuaciones de dos rectas
            <br />
            Y1= AX + B, Y2=CX+D
            <br />
            Confeccione un programa para determinar si son paralelas o
            coincidentes En cualquier otro caso determine e imprima las
            coordenadas del punto de intersección
          </p>
        </div>
      </button>
      <div className={styles.panel}>
        <div
          className={styles.container}
          ref={contenedor}
          style={{ maxHeight: `${setAlto}` }}
        >
          <div className={styles.container__form}>
            <form
              name="Contenedor"
              action="#"
              className={styles.form}
              id="form"
            >
              <div className={styles.from_left}>
                <h2 className={styles.form__title}>
                  <br />
                  Y1 = AX + B,
                  <br />
                  Y2 = CX+D
                </h2>
                <input
                  type="number"
                  placeholder="Valor de A"
                  ref={focusValorA}
                  value={valorA}
                  className={styles.input}
                  onChange={(e) => guardarValorA(e.target.value)}
                  onInput={(e) => guardarValorA(e.target.value)}
                  onBlur={validarInputA}
                />
                <input
                  type="number"
                  placeholder="Valor de B"
                  ref={focusValorB}
                  value={valorB}
                  className={styles.input}
                  onChange={(e) => guardarValorB(e.target.value)}
                  onInput={(e) => guardarValorB(e.target.value)}
                  onBlur={validarInputB}
                />
                <input
                  type="number"
                  placeholder="Valor de C"
                  ref={focusValorC}
                  value={valorC}
                  className={styles.input}
                  onChange={(e) => guardarValorC(e.target.value)}
                  onInput={(e) => guardarValorC(e.target.value)}
                  onBlur={validarInputC}
                />

                <input
                  type="number"
                  placeholder="Valor de D"
                  ref={focusValorD}
                  value={valorD}
                  className={styles.input}
                  onChange={(e) => guardarValorD(e.target.value)}
                  onInput={(e) => guardarValorD(e.target.value)}
                  onBlur={validarInputD}
                />
                <br />
              </div>

              <div className={styles.from_right}>
                <h2 className={styles.form__title}>
                  <br />
                  {valorA < 0 && valorB < 0
                    ? `${"Y1 =  " + valorA + " X " + valorB}`
                    : valorA < 0 && valorB > 0
                    ? `${"Y1 =  " + valorA + " X + " + valorB}`
                    : valorA > 0 && valorB < 0
                    ? `${"Y1 =  " + valorA + " X " + valorB}`
                    : `${"Y1 =  " + valorA + " X + " + valorB}`}

                  <br />
                  {valorC < 0 && valorD < 0
                    ? `${"Y2 =  " + valorC + " X " + valorD}`
                    : valorC < 0 && valorD > 0
                    ? `${"Y2 =  " + valorC + " X + " + valorD}`
                    : valorC > 0 && valorD < 0
                    ? `${"Y2 =  " + valorC + " X " + valorD}`
                    : `${"Y2 =  " + valorC + " X + " + valorD}`}
                </h2>
                <div className={styles.content_resultado}>
                  <div className={styles.resultado_ecuacion}>
                    <span>{tipoEcuacion}</span>
                  </div>
                  {mensaje ? (
                    <Error mensaje="No es un Triángulo cuando un lado es más grande que la suma de los otros dos!" />
                  ) : null}

                  {error ? (
                    <Error mensaje="Todos los campos deben estar llenos!" />
                  ) : null}

                  {menorCero ? (
                    <Error mensaje="No se permiten valores menores que 1" />
                  ) : null}
                </div>
              </div>
              <button className={styles.btn} onClick={(e) => calcEcuaciones(e)}>
                Calcular
              </button>

              <button className={styles.btn} onClick={(e) => limpiarForm(e)}>
                Limpiar
              </button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Ecuaciones;
