import React, { Fragment, useState, useRef } from "react";
import Error from "../../components/Error";

// imagenes
import ecuacion from "../../assets/img/ecuacion.png";

//css
import styles from "../../paginas/Paginas.module.css";

const RaicesReales = () => {
  const [setActivo, guardarActivo] = useState("");
  const [setAlto, guardarAlto] = useState("0px");
  const [mensaje, guardarMensaje] = useState(false);
  const [mensajeErrA, guardarMensajeErrA] = useState(false);
  const [mensajeV, guardarMensajeV] = useState(false);

  const contenedor = useRef(null);
  const focusA = useRef(null);
  const focusB = useRef(null);
  const focusC = useRef(null);

  // efecto desplegable
  const accordion = () => {
    guardarActivo(setActivo === "" ? "active" : "");
    guardarAlto(
      setActivo === "active" ? "0px" : `${contenedor.current.scrollHeight}px`
    );
  };

  //capturar valores de los imput
  const [a, guardarA] = useState("");
  const [b, guardarB] = useState("");
  const [c, guardarC] = useState("");

  // Resultado
  const [primeraRaiz, guardarPrimeraRaiz] = useState("");
  const [segundaaRaiz, guardarSegundaRaiz] = useState("");
  const [discriminante, guardarDiscriminante] = useState("");

  // Cuando el usuario da click en calcular
  const calculoRaices = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (
      (a === 0 || a === "") &&
      (b === 0 || b === "") &&
      (c === 0 || c === "")
    ) {
      guardarMensaje(false);
      guardarMensajeErrA(false);
      guardarPrimeraRaiz(0);
      guardarSegundaRaiz(0);
      guardarDiscriminante(0);
      focusA.current.focus();
      guardarMensajeV(true);
      return;
    }

    raices();
  };

  const raices = () => {
    guardarMensajeV(false);
    guardarMensaje(false);
    guardarMensajeErrA(false);
    /* Calculamos el descriminante */
    let disc = b * b - 4 * a * c;

    guardarDiscriminante(disc);

    if (disc < 0) guardarMensaje(true);
    else if (parseInt(a) === 0 || a === "") {
      guardarMensajeErrA(true);
    } else {
      guardarMensaje(false);
      /* AHORA calculamos las raices */
      let x1 = (-b - Math.sqrt(disc)) / (2 * a);
      let x2 = (-b + Math.sqrt(disc)) / (2 * a);

      /* Mostramos */
      guardarPrimeraRaiz(x1);
      guardarSegundaRaiz(x2);
    }
  };

  const limpiarForm = (e) => {
    e.preventDefault();
    e.stopPropagation();
    guardarPrimeraRaiz("");
    guardarSegundaRaiz("");
    guardarDiscriminante("");
    guardarA("");
    guardarB("");
    guardarC("");
    guardarMensaje(false);
    guardarMensajeErrA(false);
    guardarMensajeV(false);
    focusA.current.focus();
  };

  return (
    <Fragment>
      <button
        className={`${styles.card} ${styles.accordion} ${setActivo}`}
        onClick={accordion}
      >
        <div className={styles.contenedor_img}>
          <img src={ecuacion} alt="" />
        </div>

        <div className={styles.card_info}>
          <p>
            2. Confeccione un programa para calcular las raíces reales de una
            ecuación de la forma ax2 + bx +c
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
                  placeholder="Ingrese el termino 'a'  *"
                  ref={focusA}
                  value={a}
                  className={styles.input}
                  onChange={(e) => guardarA(e.target.value)}
                  onInput={(e) => guardarA(e.target.value)}
                />

                <input
                  type="number"
                  placeholder="Ingrese el termino 'b'  *"
                  ref={focusB}
                  value={b}
                  className={styles.input}
                  onChange={(e) => guardarB(e.target.value)}
                  onInput={(e) => guardarB(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Ingrese el termino 'c'  *"
                  ref={focusC}
                  value={c}
                  className={styles.input}
                  onChange={(e) => guardarC(e.target.value)}
                  onInput={(e) => guardarC(e.target.value)}
                />
                <br />
              </div>

              <div className={styles.from_right}>
                <div className={styles.content_resultado}>
                  <div className={styles.resultado}>
                    <label>Discriminante: </label>
                    <span>{discriminante}</span>
                  </div>

                  <div className={styles.resultado}>
                    <label>Primera raíz: </label>
                    <span>{primeraRaiz}</span>
                  </div>

                  <div className={styles.resultado}>
                    <label>Segunda raíz: </label>
                    <span>{segundaaRaiz}</span>
                  </div>
                  {mensaje ? <Error mensaje="No hay solución real!" /> : null}
                  {mensajeErrA ? (
                    <Error mensaje="El campo de entrada de “a” no puede ser cero ni estar vacío !" />
                  ) : null}
                  {mensajeV ? <Error mensaje="Verdadero para todo x!" /> : null}
                </div>
              </div>
              <button className={styles.btn} onClick={(e) => calculoRaices(e)}>
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

export default RaicesReales;
