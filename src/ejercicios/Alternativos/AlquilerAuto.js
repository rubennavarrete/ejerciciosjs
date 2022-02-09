import React, { Fragment, useState, useRef } from "react";
import Error from "../../components/Error";

// imagenes
import car from "../../assets/img/Car.jpg";

//css
import styles from "../../paginas/Paginas.module.css";

const AlquilerAuto = () => {
  const [setActivo, guardarActivo] = useState("");
  const [setAlto, guardarAlto] = useState("0px");

  const contenedor = useRef(null);
  const focusK = useRef(null);

  // efecto desplegable
  const accordion = () => {
    guardarActivo(setActivo === "" ? "active" : "");
    guardarAlto(
      setActivo === "active" ? "0px" : `${contenedor.current.scrollHeight}px`
    );
  };

  //capturar valores de los imput
  const [kilometros, guardarKilometros] = useState("");

  // Resultado
  const [monto, guardarMonto] = useState("");
  const [impuesto, guardarImpuesto] = useState("");
  const [mensaje, guardarMensaje] = useState(false);
  const [menorCero, guardarMenorCero] = useState(false);

  // Cuando el usuario da click en calcular
  const calculoRaices = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (kilometros === "") {
      guardarMensaje(true);
      focusK.current.focus();
      return;
    } else if (kilometros < 0) {
      guardarMensaje(false);
      guardarMenorCero(true);
      guardarKilometros("");
      focusK.current.focus();
      return;
    }

    montoApagar();
  };

  const montoApagar = () => {
    let monto = 300000;

    if ((kilometros > 300) & (kilometros <= 1000)) {
      monto += (kilometros - 300) * 15000;
    }

    if (kilometros > 1000) {
      monto += (kilometros - 1000) * 10000;
    }

    guardarImpuesto(monto * 0.2);
    guardarMonto(monto);
  };

  const limpiarForm = (e) => {
    e.preventDefault();
    e.stopPropagation();
    guardarMonto("");
    guardarImpuesto("");
    guardarKilometros("");
    guardarMensaje(false);
    guardarMenorCero(false);
    focusK.current.focus();
  };

  return (
    <Fragment>
      <button
        className={`${styles.card} ${styles.accordion} ${setActivo}`}
        onClick={accordion}
      >
        <div className={styles.contenedor_img}>
          <img src={car} alt="" />
        </div>

        <div className={styles.card_info}>
          <p>
            3. Una compañía dedicada al alquiler de automóviles cobra un monto
            fijo de $300000 para los primeros 300 km de recorrido. Para más de
            300 km y hasta 1000 km, cobra un monto adicional de $ 15.000 por
            cada kilómetro en exceso sobre 300. Para más de 1000 km cobra un
            monto adicional de $ 10.000 por cada kilómetro en exceso sobre 1000.
            Los precios ya incluyen el 20% del impuesto general a las ventas,
            IVA. Diseñe un programa que determine el monto a pagar por el
            alquiler de un vehículo y el monto incluido del impuesto.
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
                  placeholder="Ingrese los kilometros recorridos"
                  ref={focusK}
                  value={kilometros}
                  className={styles.input}
                  onChange={(e) => guardarKilometros(e.target.value)}
                  onInput={(e) => guardarKilometros(e.target.value)}
                />
                <br />
              </div>

              <div className={styles.from_right}>
                <div className={styles.content_resultado}>
                  <div className={styles.resultado}>
                    <label>Recorrido: </label>
                    <span>{kilometros} km</span>
                  </div>
                  <div className={styles.resultado}>
                    <label>Monto: </label>
                    <span> $ {monto}</span>
                  </div>

                  <div className={styles.resultado}>
                    <label>Impuesto: </label>
                    <span>$ {impuesto}</span>
                  </div>
                  {mensaje ? (
                    <Error mensaje="El campo es obligatorio!" />
                  ) : null}

                  {menorCero ? (
                    <Error mensaje="No existe kilometros negativos!" />
                  ) : null}
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

export default AlquilerAuto;
