import React, { Fragment, useState, useRef } from "react";

// imagenes
import mini from "../../assets/img/mini.jpg";
import flecha from "../../assets/img/arrow-right.svg";

//css
import styles from "../../paginas/Paginas.module.css";

const Producto = () => {
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
  let i = 99;
  let j = 9;
  const bloquear = document.getElementById("genera");
  // Resultado
  let [numero, guardarNumero] = useState("");
  let [propiedad, guardarPropiedad] = useState("");
  let [aux, guardarAux] = useState("");

  // Cuando el usuario da click en calcular
  const generar = (e) => {
    e.preventDefault();
    e.stopPropagation();
    guardarAux(setInterval(aumento, 1000));
    console.log("aux en generar: ", aux);
    bloquear.disabled = true;
  };

  const limpiarForm = (e) => {
    e.preventDefault();
    e.stopPropagation();
    bloquear.disabled = false;
    parar();
  };

  const parar = () => {
    console.log("aux en parar 1: ", aux);
    clearInterval(aux);
    console.log("aux en parar 2: ", aux);
  };

  const aumento = () => {
    if (j <= 98) {
      j++;
      let m1 = j * i;
      const inverJ = invertir(j);
      const inverI = invertir(i);
      let m2 = inverJ * inverI;
      numero += `${
        j +
        " x " +
        i +
        " = " +
        m1 +
        " y " +
        inverJ +
        " x " +
        inverI +
        " = " +
        m2
      }`;
      if (m1 === m2) {
        propiedad += `${
          j +
          " x " +
          i +
          " = " +
          m1 +
          " y " +
          inverJ +
          " x " +
          inverI +
          " = " +
          m2
        }`;
        guardarPropiedad(propiedad);
        propiedad += ",                             ";
        guardarPropiedad(propiedad);
      }
      guardarNumero(numero);
      numero += ",                             ";
      guardarNumero(numero);
    } else {
      i--;
      j = 10;

      if (i === 10) return;
    }
  };

  const invertir = (n) => {
    const invertido = n.toString().split("").reverse().join("");
    return Number(invertido);
  };

  return (
    <Fragment>
      <button
        className={`${styles.card} ${styles.accordion} ${setActivo}`}
        onClick={accordion}
      >
        <div className={styles.contenedor_img}>
          <img src={mini} alt="" />
        </div>
        <div className={styles.card_info}>
          <p>
            2. Los números 46 y 96 tienen una curiosa propiedad su producto no
            se altera aunque las cifras que lo integran cambien de lugar:
          </p>
          <table className={styles.tabla}>
            <tbody>
              <tr>
                <td>46 x 96 = 4416</td>
              </tr>
              <tr>
                <td>64 x 69 = 4416</td>
              </tr>
            </tbody>
          </table>
          <p>
            Confeccione un programa para imprimir todos los números de dos
            cifras que cumplen con esta propiedad.
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
                  Multiplicacion de 2 números de 2 cifras
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
                  Numeros que cumplen la propiedad
                </h2>
                <textarea
                  type="text"
                  name="primos"
                  value={propiedad}
                  onChange={(e) => guardarPropiedad(e.target.value)}
                  rows="20"
                  cols="35"
                  id="impares"
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

export default Producto;
