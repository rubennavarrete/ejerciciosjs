import React, { Fragment, useState, useRef } from "react";
import Error from "../../components/Error";

//css
import styles from "../../paginas/Paginas.module.css";

// imagenes
import cinconum from "../../assets/img/numeros2.jpg";

const NumCincoCifras = () => {
  const [setActivo, guardarActivo] = useState("");
  const [setAlto, guardarAlto] = useState("0px");
  const [error, guardarError] = useState(false);
  const [noValido, guardarNoValido] = useState(false);
  const [noEntero, guardarNoEntero] = useState(false);
  const [mensaje, guardarMensaje] = useState(false);

  const contenedor = useRef(null);

  const focusInput = useRef(null);
  const focusInputB = useRef(null);
  const focusInputC = useRef(null);
  const focusInputD = useRef(null);
  const focusInputE = useRef(null);

  // efecto desplegable
  const accordion = () => {
    guardarActivo(setActivo === "" ? "active" : "");
    guardarAlto(
      setActivo === "active" ? "0px" : `${contenedor.current.scrollHeight}px`
    );
  };

  //capturar valores de los imput
  const [cifraA, guardarCifraA] = useState("");
  const [cifraB, guardarCifraB] = useState("");
  const [cifraC, guardarCifraC] = useState("");
  const [cifraD, guardarCifraD] = useState("");
  const [cifraE, guardarCifraE] = useState("");

  // Resultado
  const [sextoNumC, guardarSextoNumC] = useState("");

  // Cuando se pierde el focus en un imput

  const validarInputA = () => {
    // Validar si el campo esta lleno y si el numero es mayore a cero
    if (cifraA === "") {
      guardarNoEntero(false);
      guardarNoValido(false);
      guardarError(true);

      //coloco otra vez el foco
      focusInput.current.focus();
    } else {
      guardarError(false);
      //primero validamos si es entero
      let enteroValidado = validarEntero(cifraA);

      // si es entero entonces validamos que tenga 5 cifras
      let numCifras = validarCifras(cifraA);

      if (enteroValidado) {
        if (numCifras) {
          guardarNoEntero(false);
          guardarNoValido(true);
          //coloco otra vez el foco
          focusInput.current.focus();
        } else {
          guardarNoEntero(false);
          guardarNoValido(false);
          guardarError(false);
          focusInputB.current.focus();
        }
      } else {
        guardarNoEntero(true);
        guardarNoValido(false);
        guardarError(false);

        //coloco otra vez el foco
        focusInput.current.focus();
      }
    }
  };

  const validarInputB = () => {
    // Validar si el campo esta lleno y si el numero es mayore a cero
    if (cifraB === "") {
      guardarNoEntero(false);
      guardarNoValido(false);
      guardarError(true);

      //coloco otra vez el foco
      focusInputB.current.focus();
    } else {
      guardarError(false);
      //primero validamos si es entero
      let enteroValidado = validarEntero(cifraB);

      // si es entero entonces validamos que tenga 5 cifras
      let numCifras = validarCifras(cifraB);

      if (enteroValidado) {
        if (numCifras) {
          guardarNoEntero(false);
          guardarNoValido(true);
          //coloco otra vez el foco
          focusInputB.current.focus();
        } else {
          guardarNoEntero(false);
          guardarNoValido(false);
          guardarError(false);
          focusInputC.current.focus();
        }
      } else {
        guardarNoEntero(true);
        guardarNoValido(false);
        guardarError(false);
        //coloco otra vez el foco
        focusInputB.current.focus();
      }
    }
  };

  const validarInputC = () => {
    // Validar si el campo esta lleno y si el numero es mayore a cero
    if (cifraC === "") {
      guardarNoEntero(false);
      guardarNoValido(false);
      guardarError(true);

      //coloco otra vez el foco
      focusInputC.current.focus();
    } else {
      guardarError(false);
      //primero validamos si es entero
      let enteroValidado = validarEntero(cifraC);

      // si es entero entonces validamos que tenga 5 cifras
      let numCifras = validarCifras(cifraC);

      if (enteroValidado) {
        if (numCifras) {
          guardarNoEntero(false);
          guardarNoValido(true);
          //coloco otra vez el foco
          focusInputC.current.focus();
        } else {
          guardarNoEntero(false);
          guardarNoValido(false);
          guardarError(false);
          focusInputD.current.focus();
        }
      } else {
        guardarNoEntero(true);
        guardarNoValido(false);
        guardarError(false);
        //coloco otra vez el foco
        focusInputC.current.focus();
      }
    }
  };

  const validarInputD = () => {
    // Validar si el campo esta lleno y si el numero es mayore a cero
    if (cifraD === "") {
      guardarNoEntero(false);
      guardarNoValido(false);
      guardarError(true);

      //coloco otra vez el foco
      focusInputD.current.focus();
    } else {
      guardarError(false);
      //primero validamos si es entero
      let enteroValidado = validarEntero(cifraD);

      // si es entero entonces validamos que tenga 5 cifras
      let numCifras = validarCifras(cifraD);

      if (enteroValidado) {
        if (numCifras) {
          guardarNoEntero(false);
          guardarNoValido(true);
          //coloco otra vez el foco
          focusInputD.current.focus();
        } else {
          guardarNoEntero(false);
          guardarNoValido(false);
          guardarError(false);
          focusInputE.current.focus();
        }
      } else {
        guardarNoEntero(true);
        guardarNoValido(false);
        guardarError(false);
        //coloco otra vez el foco
        focusInputD.current.focus();
      }
    }
  };

  const validarInputE = () => {
    // Validar si el campo esta lleno y si el numero es mayore a cero
    if (cifraE === "") {
      guardarNoEntero(false);
      guardarNoValido(false);
      guardarError(true);

      //coloco otra vez el foco
      focusInputE.current.focus();
    } else {
      guardarError(false);
      //primero validamos si es entero
      let enteroValidado = validarEntero(cifraE);

      // si es entero entonces validamos que tenga 5 cifras
      let numCifras = validarCifras(cifraE);

      if (enteroValidado) {
        if (numCifras) {
          guardarNoEntero(false);
          guardarNoValido(true);
          //coloco otra vez el foco
          focusInputE.current.focus();
        } else {
          guardarNoEntero(false);
          guardarNoValido(false);
          guardarError(false);
        }
      } else {
        guardarNoEntero(true);
        guardarNoValido(false);
        guardarError(false);
        //coloco otra vez el foco
        focusInputE.current.focus();
      }
    }
  };

  const validarEntero = (numero) => {
    if (numero % 1 === 0) {
      return true;
    } else {
      return false;
    }
  };

  const validarCifras = (n) => {
    const nCifras = n.toString().length;

    if (nCifras !== 5) {
      return true;
    } else {
      return false;
    }
  };

  // Cuando el usuario da click en calcular
  const sextoNum = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (
      cifraA === "" ||
      cifraB === "" ||
      cifraC === "" ||
      cifraD === "" ||
      cifraE === ""
    ) {
      focusInput.current.focus();

      guardarError(true);
      return;
    } else {
      if (
        validarCifras(cifraA) === true ||
        validarCifras(cifraB) === true ||
        validarCifras(cifraC) === true ||
        validarCifras(cifraD) === true ||
        validarCifras(cifraE)
      ) {
        guardarMensaje(true);
        guardarNoEntero(false);
        guardarNoValido(false);
        guardarError(false);

        guardarSextoNumC("");
        return;
      } else {
        guardarNoEntero(false);
        guardarNoValido(false);
        guardarError(false);
        guardarMensaje(false);
        // calcular las caracteristicas del numero
        siguiebteN();
      }
    }
  };

  const siguiebteN = () => {
    let nf = "";

    nf += cifraA.substring(0, 1);
    nf += cifraB.substring(1, 2);
    nf += cifraC.substring(2, 3);
    nf += cifraD.substring(3, 4);
    nf += cifraE.substring(4, 5);

    guardarSextoNumC(nf);
  };

  const limpiarForm = (e) => {
    e.preventDefault();
    e.stopPropagation();
    guardarNoEntero(false);
    guardarNoValido(false);
    guardarError(false);
    guardarMensaje(false);
    //Reiniciar el form
    guardarCifraA("");
    guardarCifraB("");
    guardarCifraC("");
    guardarCifraD("");
    guardarCifraE("");
    guardarSextoNumC("");
    focusInput.current.focus();
  };
  return (
    <Fragment>
      <button
        className={`${styles.card} ${styles.accordion} ${setActivo}`}
        onClick={accordion}
      >
        <div className={styles.contenedor_img}>
          <img src={cinconum} alt="" />
        </div>
        <div className={styles.card_info}>
          <p>
            3. Dados 5 números de 5 cifras encontrar el 6 número de 5 cifras
            también de la forma siguiente:
            <br />
            94567
            <br />
            28954
            <br />
            36532
            <br />
            45668
            <br />
            65788
            <br />
            Número de 5 cifras: 98568
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
                <h2 className={styles.form__title}>Ingreso de datos</h2>
                <input
                  type="number"
                  placeholder="Ingrese la primera cifra..."
                  ref={focusInput}
                  value={cifraA}
                  className={styles.input}
                  onChange={(e) => guardarCifraA(e.target.value)}
                  onInput={(e) => guardarCifraA(e.target.value)}
                  onBlur={validarInputA}
                />

                <input
                  type="number"
                  placeholder="Ingrese la segunda cifra..."
                  ref={focusInputB}
                  value={cifraB}
                  className={styles.input}
                  onChange={(e) => guardarCifraB(e.target.value)}
                  onInput={(e) => guardarCifraB(e.target.value)}
                  onBlur={validarInputB}
                />
                <input
                  type="number"
                  placeholder="Ingrese la tercera cifra..."
                  ref={focusInputC}
                  value={cifraC}
                  className={styles.input}
                  onChange={(e) => guardarCifraC(e.target.value)}
                  onInput={(e) => guardarCifraC(e.target.value)}
                  onBlur={validarInputC}
                />
                <input
                  type="number"
                  placeholder="Ingrese la cuarta cifra..."
                  ref={focusInputD}
                  value={cifraD}
                  className={styles.input}
                  onChange={(e) => guardarCifraD(e.target.value)}
                  onInput={(e) => guardarCifraD(e.target.value)}
                  onBlur={validarInputD}
                />

                <input
                  type="number"
                  placeholder="Ingrese la quinta cifra..."
                  ref={focusInputE}
                  value={cifraE}
                  className={styles.input}
                  onChange={(e) => guardarCifraE(e.target.value)}
                  onInput={(e) => guardarCifraE(e.target.value)}
                  onBlur={validarInputE}
                />
                <br />
              </div>

              <div className={styles.from_right}>
                <div className={styles.content_resultado}>
                  <div className={styles.resultado}>
                    <label>6-Número: </label>
                    <span id="antecesor">{sextoNumC}</span>
                  </div>

                  {noValido ? (
                    <Error mensaje="Ingrese un número de 5 cifras!" />
                  ) : null}

                  {noEntero ? (
                    <Error mensaje="Solo se permiten números enteros!" />
                  ) : null}

                  {error ? (
                    <Error mensaje="Todos los campos deben estar llenos!" />
                  ) : null}

                  {mensaje ? (
                    <Error mensaje="Todos los campos deben ser de 5 cifras!" />
                  ) : null}
                </div>
              </div>

              <button className={styles.btn} onClick={(e) => sextoNum(e)}>
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

export default NumCincoCifras;
