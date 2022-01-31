import React, { Fragment, useState, useRef } from "react";

// imagenes
import naturales from "../../assets/img/naturales.png";
import flecha from "../../assets/img/arrow-right.svg";
//css
import styles from "../../paginas/Paginas.module.css";

const Naturales = () => {
  const [setActivo, guardarActivo] = useState("");
  const [setAlto, guardarAlto] = useState("0px");

  const contenedor = useRef(null);

  // efecto desplegable
  const accordion = () => {
    guardarActivo(setActivo === "" ? "active" : "");
    guardarAlto(
      setActivo === "active" ? "0px" : `${contenedor.current.scrollHeight}px`
    );
  };
  let i = 1200;
  let j = 2000;
  const bloquear = document.getElementById("genera");
  // Resultado
  let [numero, guardarNumero] = useState("");
  let [propiedad, guardarPropiedad] = useState("");
  let [aux, guardarAux] = useState("");

  // Cuando el usuario da click en calcular
  const generar = (e) => {
    e.preventDefault();
    e.stopPropagation();
    guardarAux(setInterval(aumento, 500));
    bloquear.disabled = true;
  };

  const limpiarForm = (e) => {
    e.preventDefault();
    e.stopPropagation();
    bloquear.disabled = false;
    parar();
  };

  const parar = () => {
    clearInterval(aux);
  };

  const aumento = () => {
    if (i <= j) {
      numero += i;
      guardarNumero(numero);
      numero += ", ";
      guardarNumero(numero);
      if (i % 5 === 0) {
        if (comprobar(i)) {
          if (i % 1 === 0) {
            if (i % i === 0) {
              propiedad += i;
              guardarPropiedad(propiedad);
              propiedad += ", ";
              guardarPropiedad(propiedad);
            }
          }
        }
      }
      i++;
    }
  };

  const esPrimo = (primo) => {
    // Casos especiales
    if (primo === 0 || primo === 1 || primo === 4 || primo === 5) return false;
    for (let x = 2; x < primo / 2; x++) {
      if (primo % x === 0) return false;
    }
    // Si no se pudo dividir por ninguno de los de arriba, sí es primo
    return true;
  };

  const comprobar = (i) => {
    for (let n = 0; n < 2000; n++) {
      if (esPrimo(n)) {
        if (i % n === 0) {
          console.log(i + " % " + n + " = " + (i % n));
          return true;
        }
      }
    }
  };

  return (
    <Fragment>
      <button
        className={`${styles.card} ${styles.accordion} ${setActivo}`}
        onClick={accordion}
      >
        <div className={styles.contenedor_img}>
          <img src={naturales} alt="" />
        </div>
        <div className={styles.card_info}>
          <p>
            3. Confeccione un programa para hallar e imprimir los números
            naturales que cumplan simultáneamente las condiciones siguientes:
            <br />
            • Se encuentren entre 1200 y 2000.
            <br />• Tengan exactamente 4 divisores enteros positivos que son
            1,5, otro número primo y el propio número.
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
            <form name="Contenedor" className={styles.form} id="form">
              <div className="conntainer-random">
                <h2 className="titulo-numeros">
                  Numeros naturales entre 1200 y 2000
                </h2>
                <textarea
                  type="text"
                  name="numeros"
                  value={numero}
                  onChange={(e) => guardarNumero(e.target.value)}
                  rows="20"
                  cols="35"
                  id="numeros"
                ></textarea>
              </div>
              <img className={styles.flecha} src={flecha} alt="" />
              <div className="container-impares">
                <h2 className="titulo-impares">
                  Numeros que cumplen las condiciones
                </h2>
                <textarea
                  type="text"
                  name="primos"
                  value={propiedad}
                  onChange={(e) => guardarPropiedad(e.target.value)}
                  rows="20"
                  cols="35"
                  id="numeros"
                ></textarea>
              </div>
              <button
                id="genera"
                className={styles.btn}
                onClick={(e) => generar(e)}
              >
                Calcular
              </button>

              <button className={styles.btn} onClick={(e) => limpiarForm(e)}>
                Parar
              </button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Naturales;
