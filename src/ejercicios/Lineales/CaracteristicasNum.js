import React, { Fragment, useState, useRef } from "react";
import Error from "../../components/Error";

//css
import styles from "../../paginas/Paginas.module.css";

// imagenes
import area from "../../assets/img/digitos.jpg";

const CaracteristicasNum = () => {
  const [setActivo, guardarActivo] = useState("");
  const [setAlto, guardarAlto] = useState("0px");
  const [error, guardarError] = useState(false);
  const [errorRaiz, guardarErrorRaiz] = useState(false);

  const contenedor = useRef(null);
  const focusNunA = useRef(null);

  // efecto desplegable
  const accordion = () => {
    guardarActivo(setActivo === "" ? "active" : "");
    guardarAlto(
      setActivo === "active" ? "0px" : `${contenedor.current.scrollHeight}px`
    );
  };

  //capturar valores de los imput
  const [numeroA, guardarNumeroA] = useState("");

  // Resultado
  const [antecesor, guardarAntecesor] = useState("");
  const [sucesor, guardarSucesor] = useState("");
  const [raiz, guardarRaiz] = useState();
  const [cifras, guardarCifraz] = useState("");

  // Cuando el usuario da click en calcular
  const caracteristicasNum = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Validar si el campo esta lleno y si el numero es mayore a cero
    if (isNaN(numeroA)) {
      guardarError(true);
    }

    if (numeroA === "") {
      guardarError(true);
      focusNunA.current.focus();
      return;
    } else {
      guardarError(false);
    }

    // calcular las caracteristicas del numero
    antecesorN(numeroA);
    sucesorN(numeroA);
    cifrasN(numeroA);
    raizN(numeroA);
  };

  const antecesorN = (n) => {
    guardarAntecesor(n - 1);
  };

  const sucesorN = (n) => {
    guardarSucesor(parseInt(n) + 1);
  };

  const raizN = (n) => {
    if (raiz !== "") {
      document.getElementById("raiz").innerHTML = "";
      if (parseInt(n) < 0) {
        guardarErrorRaiz(true);
      } else {
        guardarErrorRaiz(false);
        guardarRaiz(Math.sqrt(n).toFixed(0));
      }
    }
  };

  const cifrasN = (n) => {
    if (parseInt(n) < 0) {
      guardarCifraz(n.toString().length - 1);
    } else {
      guardarCifraz(n.toString().length);
    }
  };

  const limpiarForm = (e) => {
    e.preventDefault();
    e.stopPropagation();
    document.getElementById("antecesor").innerHTML = "";
    document.getElementById("sucesor").innerHTML = "";

    document.getElementById("cifras").innerHTML = "";
    document.getElementById("raiz").innerHTML = "";
    guardarError(false);
    guardarErrorRaiz(false);
    //Reiniciar el form
    guardarNumeroA("");
    focusNunA.current.focus();
  };

  return (
    <Fragment>
      <button
        className={`${styles.card} ${styles.accordion} ${setActivo}`}
        onClick={accordion}
      >
        <div className={styles.contenedor_img}>
          <img src={area} alt="" />
        </div>
        <div className={styles.card_info}>
          <p>
            2. Confeccione un programa para leer un número e imprimir:
            características
            <br />
            • El antecesor
            <br />
            • El sucesor
            <br />
            • La parte entera de su raíz cuadrada
            <br />• La cantidad de cifras que tiene.
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
                  placeholder="Ingrese el número"
                  id="num"
                  ref={focusNunA}
                  value={numeroA}
                  className={styles.input}
                  onChange={(e) => guardarNumeroA(e.target.value)}
                  onInput={(e) => guardarNumeroA(e.target.value)}
                />

                {error ? (
                  <Error mensaje="Todos los campos deben estar llenos!" />
                ) : null}

                {errorRaiz ? (
                  <Error mensaje="No existe la raíz de un número negativo.!" />
                ) : null}
                <br />
              </div>

              <div className={styles.from_right}>
                <div className={styles.content_resultado}>
                  <div className={styles.resultado}>
                    <label>Antecesor: </label>
                    <span id="antecesor">{antecesor}</span>
                  </div>
                </div>

                <div className={styles.content_resultado}>
                  <div className={styles.resultado}>
                    <label>Sucesor: </label>
                    <span id="sucesor">{sucesor}</span>
                  </div>
                </div>

                <div className={styles.content_resultado}>
                  <div className={styles.resultado}>
                    <label>raíz: </label>
                    <span id="raiz">{raiz}</span>
                  </div>
                </div>

                <div className={styles.content_resultado}>
                  <div className={styles.resultado}>
                    <label>n-cifras: </label>
                    <span id="cifras">{cifras}</span>
                  </div>
                </div>
              </div>
              <button
                className={styles.btn}
                onClick={(e) => caracteristicasNum(e)}
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

export default CaracteristicasNum;
