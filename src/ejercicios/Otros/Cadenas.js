import React, { Fragment, useState, useRef } from "react";

// imagenes
import string from "../../assets/img/string.jpg";

//css
import styles from "../../paginas/Paginas.module.css";

const Cadena = () => {
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

  var abecedario = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "Ñ",
    "O",
    "P",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const [oracion, guardarOracion] = useState("");
  let [contar, guardarContar] = useState("");
  let [indice, guardarIndice] = useState(0);

  const comprobar = (e) => {
    e.preventDefault();
    e.stopPropagation();
    contarO();
  };

  const limpiar = (e) => {
    e.preventDefault();
    e.stopPropagation();

    guardarOracion("");
    guardarContar("");
    guardarIndice(0);
  };

  const contarO = () => {
    for (var i = 0; i < abecedario.length; i++) {
      for (var j = 0; j < oracion.length; j++) {
        console.log(`${abecedario[i]} === ${oracion[j].toUpperCase()}`);
        if (abecedario[i] === oracion[j].toUpperCase()) {
          indice++;

          console.log("indice: ", indice);
          console.log(`${abecedario[i]} === ${oracion[j].toUpperCase()}`);
        }
      }

      contar += `${oracion[i]} -> ${indice}`;
      guardarContar(contar);
      contar += "                               ";
      guardarContar(contar);
      indice = 0;
      guardarIndice(indice);
      abecedario.slice(i);
      oracion.slice(i);
    }
  };

  return (
    <Fragment>
      <button
        className={`${styles.card} ${styles.accordion} ${setActivo}`}
        onClick={accordion}
      >
        <div className={styles.contenedor_img}>
          <img src={string} alt="" />
        </div>
        <div className={styles.card_info}>
          <p>
            2. Cadenas: Confeccione un programa que lea una oración e imprima
            cada una de las letras que aparecen en ella, con la cantidad de
            veces que aparecen escrito a su dereha. Ejemplo: “ESE ES EL ERROR ”
            <br />
            E -- 5
            <br />
            S -- 2
            <br />
            L -- 1
            <br />
            R -- 3
            <br />
            O -- 1
            <br />
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
              <div className={styles.from_left}>
                <h2 className={styles.form__title}>Ingrese la oración</h2>
                <input
                  type="text"
                  placeholder="Oración..."
                  value={oracion}
                  className={styles.input}
                  onChange={(e) => guardarOracion(e.target.value)}
                />
              </div>

              <div className={styles.from_right}>
                <div className={styles.content_resultado}>
                  <h2 className="titulo-numeros">La oración tiene!</h2>
                  <textarea
                    type="text"
                    className={styles.centar}
                    name="numeros"
                    value={contar}
                    onChange={(e) => guardarContar(e.target.value)}
                    rows="20"
                    cols="35"
                  ></textarea>
                </div>
              </div>

              <button
                id="genera"
                className={styles.btn}
                onClick={(e) => comprobar(e)}
              >
                Contar
              </button>

              <button className={styles.btn} onClick={(e) => limpiar(e)}>
                Limpiar
              </button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Cadena;
