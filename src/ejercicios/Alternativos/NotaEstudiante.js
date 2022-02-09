import React, { Fragment, useState, useRef } from "react";
import Error from "../../components/Error";

// imagenes
import tipoEstu from "../../assets/img/estudiante.jpg";
import exelente from "../../assets/img/excelentealumno.jpg";
import muyBueno from "../../assets/img/muybuenalumno.jpg";
import bueno from "../../assets/img/buenalumno.jpg";
import regular from "../../assets/img/regularalumno.jpg";
import insuficiente from "../../assets/img/insuficientelumno.jpg";

//css
import styles from "../../paginas/Paginas.module.css";

const NotaEstudiante = () => {
  const [setActivo, guardarActivo] = useState("");
  const [setAlto, guardarAlto] = useState("0px");
  const [error, guardarError] = useState(false);
  const [menorCero, guardarMenorCero] = useState(false);
  const [mayorCien, guardarMayorCien] = useState(false);
  const [mensaje, guardarMensaje] = useState(false);

  const contenedor = useRef(null);
  const focusNotaE = useRef(null);

  // efecto desplegable
  const accordion = () => {
    guardarActivo(setActivo === "" ? "active" : "");
    guardarAlto(
      setActivo === "active" ? "0px" : `${contenedor.current.scrollHeight}px`
    );
  };

  //capturar valores de los imput
  const [notaE, guardarNotaE] = useState("");

  // Resultado
  const [categoriaE, guardarCategoriaE] = useState("");

  // Cuando el usuario da click en calcular
  const areaTriangulo = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Validar si los campos estan llenos y si son numeros mayores a cero
    if (notaE === "") {
      guardarError(true);
      guardarMenorCero(false);
      return;
    } else if (notaE < 0) {
      guardarMenorCero(true);
      guardarError(false);
      return;
    } else {
      // calcular el tipo de estudiante
    }

    calculoCategoria();
  };

  const calculoCategoria = () => {
    switch (true) {
      case notaE >= 95 && notaE <= 100:
        guardarCategoriaE("excelente");
        break;
      case notaE >= 90 && notaE <= 94:
        guardarCategoriaE("muybueno");
        break;
      case notaE >= 80 && notaE <= 89:
        guardarCategoriaE("bueno");
        break;
      case notaE >= 60 && notaE <= 79:
        guardarCategoriaE("regular");
        break;
      case notaE >= 0 && notaE <= 59:
        guardarCategoriaE("insuficiente");
        break;
      default:
        guardarMayorCien(true);
    }
  };

  const validarInputE = () => {
    if (notaE === "") {
      guardarError(true);
      focusNotaE.current.focus();
      return;
    }
  };

  const limpiarForm = (e) => {
    e.preventDefault();
    e.stopPropagation();
    guardarMenorCero(false);
    guardarError(false);
    guardarNotaE("");
    guardarCategoriaE("");
    guardarMensaje(false);
    focusNotaE.current.focus();
  };

  return (
    <Fragment>
      <button
        className={`${styles.card} ${styles.accordion} ${setActivo}`}
        onClick={accordion}
      >
        <div className={styles.contenedor_img}>
          <img src={tipoEstu} alt="" />
        </div>

        <div className={styles.card_info}>
          <p>
            1. Confeccione un programa para clasificar la nota de un estudiante
            de acuerdo a la siguiente escala:
          </p>
          <div className={styles.table_responsive}>
            <table className={styles.tabla}>
              <thead>
                <tr>
                  <th className={styles.hide_on_mobile}>#</th>
                  <th>Notas</th>
                  <th>categoría</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.hide_on_mobile}>1</td>
                  <td>100-95</td>
                  <td>Excelente</td>
                </tr>
                <tr>
                  <td className={styles.hide_on_mobile}>2</td>
                  <td>94 - 90</td>
                  <td>Muy Bien</td>
                </tr>
                <tr>
                  <td className={styles.hide_on_mobile}>3</td>
                  <td>89 - 80</td>
                  <td>Bien</td>
                </tr>
                <tr>
                  <td className={styles.hide_on_mobile}>4</td>
                  <td>79 - 60</td>
                  <td>Regular</td>
                </tr>
                <tr>
                  <td className={styles.hide_on_mobile}>5</td>
                  <td>59 - 0</td>
                  <td>Insuficiente</td>
                </tr>
              </tbody>
            </table>
          </div>
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
                  placeholder="Nota del estudiante..."
                  ref={focusNotaE}
                  value={notaE}
                  className={styles.input}
                  onChange={(e) => guardarNotaE(e.target.value)}
                  onInput={(e) => guardarNotaE(e.target.value)}
                  onBlur={validarInputE}
                />
                <br />
              </div>

              <div className={styles.contenedor_img_nota}>
                {categoriaE === "excelente" ? (
                  <img src={exelente} alt="" />
                ) : categoriaE === "muybueno" ? (
                  <img src={muyBueno} alt="" />
                ) : categoriaE === "bueno" ? (
                  <img src={bueno} alt="" />
                ) : categoriaE === "regular" ? (
                  <img src={regular} alt="" />
                ) : categoriaE === "insuficiente" ? (
                  <img src={insuficiente} alt="" />
                ) : null}

                <div className={styles.from_right}>
                  <div className={styles.content_resultado}>
                    <div className={styles.resultado}>
                      <label>Categoría: </label>
                      <span>{categoriaE}</span>
                    </div>
                    {mensaje ? (
                      <Error mensaje="No es un Triángulo cuando un lado es más grande que la suma de los otros dos!" />
                    ) : null}

                    {error ? (
                      <Error mensaje="Todos los campos deben estar llenos!" />
                    ) : null}

                    {menorCero ? (
                      <Error mensaje="No se permiten valores menores que 0" />
                    ) : null}

                    {mayorCien ? (
                      <Error mensaje="Ingrese una nota valida" />
                    ) : null}
                  </div>
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

export default NotaEstudiante;
