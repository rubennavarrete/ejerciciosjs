import React, { Fragment, useState, useRef } from "react";

// imagenes
import rando from "../../assets/img/rando.png";
import flecha from "../../assets/img/arrow-right.svg";

//css
import styles from "../../paginas/Paginas.module.css";

const Random = () => {
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

  // Resultado
  let [random, guardarRandom] = useState("");
  let [primo, guardarPrimo] = useState("");
  let [aux, guardarAux] = useState("");

  const generarNum = (e) => {
    e.preventDefault();
    e.stopPropagation();
    guardarAux(setInterval(generar, 1000));
  };

  const pararGenerar = (e) => {
    e.preventDefault();
    e.stopPropagation();
    clearInterval(aux);
  };

  const limpiar = (e) => {
    e.preventDefault();
    e.stopPropagation();
    guardarRandom("");
    guardarPrimo("");
  };

  const generar = () => {
    let aux2 = getRandomInt(0, 1001);
    random += aux2;
    comprobar(aux2);
    random += " , ";
    guardarRandom(random);
  };

  // Retorna un entero aleatorio entre min (incluido) y max (excluido)
  // ¡Usando Math.round() te dará una distribución no-uniforme!
  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  //
  const esPrimo = (numero) => {
    // Casos especiales
    if (numero === 0 || numero === 1 || numero === 4) return false;
    for (let x = 2; x < numero / 2; x++) {
      if (numero % x === 0) return false;
    }
    // Si no se pudo dividir por ninguno de los de arriba, sí es primo
    return true;
  };

  const comprobar = (valor) => {
    if (esPrimo(valor)) {
      primo += valor;
      guardarPrimo(primo);
      primo += " , ";
      guardarPrimo(primo);
    }
  };

  return (
    <Fragment>
      <button
        className={`${styles.card} ${styles.accordion} ${setActivo}`}
        onClick={accordion}
      >
        <div className={styles.contenedor_img}>
          <img src={rando} alt="" />
        </div>
        <div className={styles.card_info}>
          <p>
            3. Realizar un programa que utilice la librería random. (Este
            programa genera Números Random, verifica y separa los primos).
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
              <div className="conntainer-random">
                <h2 className="titulo-numeros">Números Random</h2>
                <textarea
                  type="text"
                  name="numeros"
                  value={random}
                  onChange={(e) => guardarRandom(e.target.value)}
                  rows="20"
                  cols="35"
                  id="primo"
                ></textarea>
              </div>
              <img className={styles.flecha} src={flecha} alt="" />
              <div className="container-impares">
                <h2 className="titulo-impares">Primos encontrados</h2>
                <textarea
                  type="text"
                  name="primos"
                  value={primo}
                  onChange={(e) => guardarPrimo(e.target.value)}
                  rows="20"
                  cols="35"
                  id="impares"
                ></textarea>
              </div>
              <div className={styles.botones}>
                <button
                  id="genera"
                  className={styles.btn}
                  onClick={(e) => generarNum(e)}
                >
                  Generar
                </button>

                <button className={styles.btn} onClick={(e) => pararGenerar(e)}>
                  Parar
                </button>
                <button
                  id="genera"
                  className={styles.btn}
                  onClick={(e) => limpiar(e)}
                >
                  Limpiart
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Random;
