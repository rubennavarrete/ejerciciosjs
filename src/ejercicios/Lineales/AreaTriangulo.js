import React, { Fragment, useState, useRef } from "react";
import Error from "../../components/Error";

// imagenes
import area from "../../assets/img/area.jpg";

//css
import styles from "../../paginas/Paginas.module.css";

const AreaTriangulo = () => {
  const [setActivo, guardarActivo] = useState("");
  const [setAlto, guardarAlto] = useState("0px");
  const [error, guardarError] = useState(false);
  const [menorCero, guardarMenorCero] = useState(false);
  const [mensaje, guardarMensaje] = useState(false);

  const contenedor = useRef(null);
  const focusLongitudA = useRef(null);
  const focusLongitudB = useRef(null);
  const focusLongitudC = useRef(null);

  // efecto desplegable
  const accordion = () => {
    guardarActivo(setActivo === "" ? "active" : "");
    guardarAlto(
      setActivo === "active" ? "0px" : `${contenedor.current.scrollHeight}px`
    );
  };

  //capturar valores de los imput
  const [longitudA, guardarLongitudA] = useState("");
  const [longitudB, guardarLongitudB] = useState("");
  const [longitudC, guardarLongitudC] = useState("");

  // Resultado
  const [valorArea, guardarValorArea] = useState("");

  // Cuando el usuario da click en calcular
  const areaTriangulo = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Validar si los campos estan llenos y si son numeros mayores a cero
    if (longitudA === "" || longitudB === "" || longitudC === "") {
      guardarError(true);
      guardarMenorCero(false);
      return;
    } else if (longitudA < 0 || longitudB < 0 || longitudC < 0) {
      guardarMenorCero(true);
      guardarError(false);
      return;
    } else {
      // calcular área del triangulo
      AreaTriangulo(longitudA, longitudB, longitudC);
    }
  };

  const validarInputA = () => {
    if (longitudA === "") {
      guardarError(true);
      focusLongitudA.current.focus();
      return;
    } else {
      guardarError(false);
      focusLongitudB.current.focus();
    }
  };

  const validarInputB = () => {
    if (longitudB === "") {
      guardarError(true);
      focusLongitudB.current.focus();
      return;
    } else {
      guardarError(false);
      focusLongitudC.current.focus();
    }
  };

  const validarInputC = () => {
    if (longitudC === "") {
      guardarError(true);
      focusLongitudC.current.focus();
      return;
    } else {
      guardarError(false);
    }
  };

  const AreaTriangulo = (a, b, c) => {
    // calculamos el perimetro P = a + b + c
    let A = parseInt(a, 10);
    let B = parseInt(b, 10);
    let C = parseInt(c, 10);
    let P = A + B + C;

    // calculamos el semiperimetro S = p/2
    const S = P / 2;

    //calculamos el area
    const area = Area(S, A, B, C);

    guardarValorArea(area);
  };

  const Area = (S, a, b, c) => {
    const Sa = S - a;
    const Sb = S - b;
    const Sc = S - c;

    if (Sa < 0 || Sb < 0 || Sc < 0) {
      guardarMensaje(true);
    } else {
      const mult = S * Sa * Sb * Sc;
      return Math.sqrt(mult).toFixed(3);
    }
  };

  const limpiarForm = (e) => {
    e.preventDefault();
    e.stopPropagation();
    guardarMenorCero(false);
    guardarError(false);
    document.getElementById("form").reset();
    guardarValorArea("");
    guardarMensaje(false);
    guardarLongitudA("");
    guardarLongitudB("");
    guardarLongitudC("");
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
            1. Calcular el área de un triángulo conocida la longitud de cada uno
            de sus lados.
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
                  placeholder="Longitud lado A"
                  ref={focusLongitudA}
                  value={longitudA}
                  className={styles.input}
                  onChange={(e) => guardarLongitudA(e.target.value)}
                  onInput={(e) => guardarLongitudA(e.target.value)}
                  onBlur={validarInputA}
                />
                <input
                  type="number"
                  placeholder="Longitud lado B"
                  ref={focusLongitudB}
                  value={longitudB}
                  className={styles.input}
                  onChange={(e) => guardarLongitudB(e.target.value)}
                  onInput={(e) => guardarLongitudB(e.target.value)}
                  onBlur={validarInputB}
                />
                <input
                  type="number"
                  placeholder="Longitud lado C"
                  ref={focusLongitudC}
                  value={longitudC}
                  className={styles.input}
                  onChange={(e) => guardarLongitudC(e.target.value)}
                  onInput={(e) => guardarLongitudC(e.target.value)}
                  onBlur={validarInputC}
                />
                <br />
              </div>

              <div className={styles.from_right}>
                <div className={styles.content_resultado}>
                  <div className={styles.resultado}>
                    <label>El área es: </label>
                    <span id="areaR">
                      {valorArea} m<sup>2</sup>
                    </span>
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
              <button className={styles.btn} onClick={(e) => areaTriangulo(e)}>
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

export default AreaTriangulo;
