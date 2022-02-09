import React, { Fragment, useState, useRef } from "react";
// imagenes
import pascalfoto from "../../assets/img/pascal.gif";
//css
import styles from "../../paginas/Paginas.module.css";

const Pascal = () => {
  const [setActivo, guardarActivo] = useState("");
  const [setAlto, guardarAlto] = useState("0px");

  const contenedor = useRef(null);
  const focusA = useRef(null);

  // efecto desplegable
  const accordion = () => {
    guardarActivo(setActivo === "" ? "active" : "");
    guardarAlto(
      setActivo === "active" ? "0px" : `${contenedor.current.scrollHeight}px`
    );
  };

  // const bloquear = document.getElementById("genera");
  // Resultado
  const [numero, guardarNumero] = useState("");

  const [propiedad, guardarPropiedad] = useState("");

  // Cuando el usuario da click en calcular
  const generarP = (e) => {
    e.preventDefault();
    e.stopPropagation();
    trianguloPascal(numero);
  };

  function trianguloPascal(n) {
    guardarPropiedad("");
    var Vec = new Array(n);
    for (let i = 1; i <= n; i++) {
      Vec[i] = new Array(n);
    }
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= i; j++) {
        Vec[i][j] = generar(i - 1, j - 1);
      }
    }
    var texto = "";
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= i; j++) {
        texto += Vec[i][j];
        texto += " ";
      }
      texto += "\n";
    }
    guardarPropiedad(texto);
  }

  function generar(a, b) {
    return Math.round(fact(a) / (fact(b) * fact(a - b)));
  }

  function fact(h) {
    var f = 1;
    if (h !== 0) {
      for (let k = 1; k <= h; k++) {
        f *= k;
      }
    }
    return f;
  }

  const limpiarForm = (e) => {
    e.preventDefault();
    e.stopPropagation();
    guardarNumero("");
    guardarPropiedad("");
    focusA.current.focus();
  };

  return (
    <Fragment>
      <button
        className={`${styles.card} ${styles.accordion} ${setActivo}`}
        onClick={accordion}
      >
        <div className={styles.contenedor_img}>
          <img src={pascalfoto} alt="" />
        </div>
        <div className={styles.card_info}>
          <p>
            4. Confeccione un programa que imprima las k filas del triángulo de
            Pascal
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
            <form name="Contenedor" className={styles.form_Pascal} id="form">
              <div className="conntainer-random">
                <h2 className={styles.form__title}>Ingreso de datos</h2>
                <input
                  type="number"
                  placeholder="Ingrese el numero de filas a generar *"
                  value={numero}
                  ref={focusA}
                  className={styles.input}
                  onChange={(e) => guardarNumero(e.target.value)}
                  onInput={(e) => guardarNumero(e.target.value)}
                />
                <textarea
                  type="text"
                  name="numeros"
                  className={styles.centrar_pascal}
                  value={propiedad}
                  rows="20"
                  cols="85"
                  id="numeros"
                ></textarea>
              </div>
              <button
                id="genera"
                className={styles.btn}
                onClick={(e) => generarP(e)}
              >
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

export default Pascal;
