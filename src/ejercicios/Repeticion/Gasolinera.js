import React, { Fragment, useState, useRef } from "react";
import Error from "../../components/Error";

// imagenes
import gasolinera from "../../assets/img/gasolinera.png";

//css
import styles from "../../paginas/Paginas.module.css";

const Gasolinera = () => {
  const [setActivo, guardarActivo] = useState("");
  const [setAlto, guardarAlto] = useState("0px");
  const [error, guardarError] = useState(false);
  const [menorCero, guardarMenorCero] = useState(false);
  const [mensaje, guardarMensaje] = useState(false);

  const contenedor = useRef(null);
  const focusNl = useRef(null);

  // efecto desplegable
  const accordion = () => {
    guardarActivo(setActivo === "" ? "active" : "");
    guardarAlto(
      setActivo === "active" ? "0px" : `${contenedor.current.scrollHeight}px`
    );
  };

  //capturar valores de los imput
  const [nLitros, guardarNlitros] = useState("");

  // Resultado
  const [litrosRes, guardarLitrosRes] = useState(150);
  const [vehiculo, guardarVehiculo] = useState(0);
  const [dinero, guardarDinero] = useState(0);
  const [mayorConsumo, guardarMayorConsumo] = useState(0);

  // Cuando el usuario da click en calcular
  const areaTriangulo = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Validar si los campos estan llenos y si son numeros mayores a cero
    if (nLitros < 1) {
      guardarMenorCero(true);
      guardarError(false);
      focusNl.current.focus();
      return;
    } else {
      // calculo
      calculo();
    }
  };

  const calculo = () => {
    if (nLitros > litrosRes) {
      guardarMensaje("Lo sentimos, quedan " + litrosRes + " litros");
    } else {
      guardarLitrosRes(litrosRes - nLitros);

      guardarVehiculo(parseInt(vehiculo) + 1);

      //guardarnRecaudacion(parseInt(dinero) + nLitros * 1.25);
      guardarDinero(parseInt(dinero) + nLitros * 1.25);

      if (parseInt(nLitros) > parseInt(mayorConsumo)) {
        guardarMayorConsumo(nLitros);
      } else {
        console.log("no se que putas pasa");
        console.log("en n-litros hay: ", nLitros);
        console.log("y en mayor consumo hay: ", mayorConsumo);
      }
    }
  };

  const validarInputN = () => {
    if (nLitros === "") {
      guardarError(true);
      focusNl.current.focus();
      return;
    }
  };

  const limpiarForm = (e) => {
    e.preventDefault();
    e.stopPropagation();
    guardarMenorCero(false);
    guardarError(false);
    guardarNlitros("");
    guardarMensaje(false);
    focusNl.current.focus();
  };

  return (
    <Fragment>
      <button
        className={`${styles.card} ${styles.accordion} ${setActivo}`}
        onClick={accordion}
      >
        <div className={styles.contenedor_img}>
          <img src={gasolinera} alt="" />
        </div>
        <div className={styles.card_info}>
          <p>
            1. En una gasolinera se instala un detector para controlar la
            cantidad de litros de gasolina que va despachando el pistero. Se
            conoce que al comenzar el turo de trabajo en el tanque de gasolina
            hay N litros. Confeccione un programa para conocer constantemente.
            <br />
            📍La cantidad de vehículos atendidos.
            <br />
            📍La cantidad de dinero recaudado si cada litro de gasolina especial
            cuesta $1,25 ctvos. de dólar.
            <br />
            📍Cuál es la mayor cantidad de gasolina despachada a un vehículo
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
                  placeholder="Listros a despachar..."
                  ref={focusNl}
                  value={nLitros}
                  className={styles.input}
                  onChange={(e) => guardarNlitros(e.target.value)}
                  onInput={(e) => guardarNlitros(e.target.value)}
                  onBlur={validarInputN}
                />
                <br />

                {mensaje ? (
                  <Error
                    mensaje={`${
                      "Lo sentimos, solo quedan " +
                      litrosRes +
                      " litros y su compra exede esa cantidad!"
                    }`}
                  />
                ) : null}

                {error ? (
                  <Error mensaje="Todos los campos deben estar llenos!" />
                ) : null}

                {menorCero ? (
                  <Error mensaje="Solo se permiten compras mayores a 1 Litro" />
                ) : null}
              </div>

              <div className={styles.from_right}>
                <div className={styles.content_resultado}>
                  <div className={styles.resultado}>
                    <label>Litros restantes: </label>
                    <span>{litrosRes}</span>
                  </div>

                  <div className={styles.resultado}>
                    <label>Vehículos atendidos: </label>
                    <span>{vehiculo}</span>
                  </div>

                  <div className={styles.resultado}>
                    <label>Dinero recaudado : </label>
                    <span>$ {dinero}</span>
                  </div>

                  <div className={styles.resultado}>
                    <label>Mayor consumo: </label>
                    <span>{mayorConsumo} litros</span>
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

export default Gasolinera;
