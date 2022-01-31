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

  const bloquear = document.getElementById("genera");
  // Resultado
  let [numero, guardarNumero] = useState("");
  let [pascal, guardarPascal] = useState("");
  let [aux, guardarAux] = useState("");

  // Cuando el usuario da click en calcular
  const generar = (e) => {
    e.preventDefault();
    e.stopPropagation();
    guardarAux(setInterval(makeTableHTML(numero), 500));
  };

  //creamos la matriz bidimensional A(n,n)
  let A = new Array(numero);
  for (let i = 1; i <= numero; i++) {
    A[i] = new Array(numero);
  }
  //alimentamos la matriz
  for (let i = 1; i <= numero; i++) {
    for (let j = 1; j <= i; j++) {
      A[i][j] = combina(i - 1, j - 1);
    }
  }
  //función que calcula el número combinatorio p sobre q
  function combina(p, q) {
    return Math.round(fact(p) / (fact(q) * fact(p - q)));
  }
  //función que calcula el factorial
  function fact(h) {
    let f = 1;
    if (h !== 0) {
      for (let k = 1; k <= h; k++) {
        f *= k;
      }
    }
    return f;
  }

  //creamos la tabla en HTML con etiquetas de tabla
  function makeTableHTML(myArray) {
    var result = "<table border=1>";
    for (var i = 1; i <= numero; i++) {
      result += "<tr>";
      for (var j = 1; j <= i; j++) {
        result += "<td width='90' align='center'>" + A[i][j] + "</td>";
      }
      result += "</tr>";
    }
    result += "</table>";
    return result;
  }

  const limpiarForm = (e) => {
    e.preventDefault();
    e.stopPropagation();
    focusA.current.focus();
    parar();
  };

  const parar = () => {
    clearInterval(aux);
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
                  ref={focusA}
                  className={styles.input}
                  onChange={(e) => guardarNumero(e.target.value)}
                  onInput={(e) => guardarNumero(e.target.value)}
                />
                <textarea
                  type="text"
                  name="numeros"
                  onChange={(e) => guardarPascal(e.target.value)}
                  rows="20"
                  cols="85"
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

export default Pascal;
