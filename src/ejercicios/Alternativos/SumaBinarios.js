import React, { Fragment, useState, useRef } from "react";
import Error from "../../components/Error";

// imagenes
import sumaBina from "../../assets/img/sumaB.jpg";

//css
import styles from "../../paginas/Paginas.module.css";

const SumaBinarios = () => {
  const [setActivo, guardarActivo] = useState("");
  const [setAlto, guardarAlto] = useState("0px");
  const [mensaje, guardarMensaje] = useState(false);
  const [errorVacio, guardarErrorVacio] = useState(false);
  const [errorBinario, guardarErrorBinario] = useState(false);

  const contenedor = useRef(null);
  const focusSa = useRef(null);
  const focusSb = useRef(null);

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

  // Resultado
  const [sumaB, guardarSumaB] = useState("");

  // Cuando el usuario da click en calcular
  const sumaBinaria = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // validacion
    let patron = /[01]+/;
    let verificarBinario = new RegExp(patron);
    console.log(verificarBinario.test(a));
    console.log(verificarBinario.test(b));

    if ((a === 0 || a === "") && (b === 0 || b === "")) {
      guardarMensaje(false);
      guardarErrorVacio(true);
      focusSa.current.focus();
      return;
    } else if (verificarBinario.test(a) || verificarBinario.test(b)) {
      guardarMensaje(false);
      guardarErrorVacio(false);
      guardarSumaB(suma(a, b));
    } else {
      guardarErrorBinario(true);
    }
  };

  const suma = (a, b) => {
    var result = "",
      carry = 0;

    while (a || b || carry) {
      let sum = +a.slice(-1) + +b.slice(-1) + carry; // get last digit from each number and sum

      if (sum > 1) {
        result = (sum % 2) + result;
        carry = 1;
      } else {
        result = sum + result;
        carry = 0;
      }

      // trim last digit (110 -> 11)
      a = a.slice(0, -1);
      b = b.slice(0, -1);
    }

    return result;
  };

  const limpiarForm = (e) => {
    e.preventDefault();
    e.stopPropagation();
    guardarSumaB("");
    guardarA("");
    guardarB("");
    guardarMensaje(false);
    focusSa.current.focus();
  };

  return (
    <Fragment>
      <button
        className={`${styles.card} ${styles.accordion} ${setActivo}`}
        onClick={accordion}
      >
        <div className={styles.contenedor_img}>
          <img src={sumaBina} alt="" />
        </div>

        <div className={styles.card_info}>
          <p>
            4. Confeccione un programa para sumar dos números expresados en
            sistema binario teniendo en cuenta las reglas para efectuar la
            operación.
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
                  Ingreso de números binarios
                </h2>
                <input
                  type="number"
                  placeholder="Ingrese el termino 'a'  *"
                  ref={focusSa}
                  value={a}
                  className={styles.input}
                  onChange={(e) => guardarA(e.target.value)}
                  onInput={(e) => guardarA(e.target.value)}
                />

                <input
                  type="number"
                  placeholder="Ingrese el termino 'b'  *"
                  ref={focusSb}
                  value={b}
                  className={styles.input}
                  onChange={(e) => guardarB(e.target.value)}
                  onInput={(e) => guardarB(e.target.value)}
                />

                <br />
              </div>

              <div className={styles.from_right}>
                <div className={styles.content_resultado}>
                  <div className={styles.resultado}>
                    <label>Número A: </label>
                    <span>{a}</span>
                  </div>

                  <div className={styles.resultado}>
                    <label>Número B: </label>
                    <span>{b}</span>
                  </div>

                  <div className={styles.resultado}>
                    <label>Suma: </label>
                    <span>{sumaB}</span>
                  </div>
                  {mensaje ? <Error mensaje="No hay solución real!" /> : null}
                  {errorVacio ? (
                    <Error mensaje="Todos los campos deben estar llenos!!" />
                  ) : null}
                  {errorBinario ? (
                    <Error mensaje="Ingrese solo valores binarios!" />
                  ) : null}
                </div>
              </div>
              <button className={styles.btn} onClick={(e) => sumaBinaria(e)}>
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

export default SumaBinarios;
