import React, { Fragment, useState, useRef } from 'react';

// imagenes 
import sol from '../assets/img/sol.jpg';

//css
import styles from './Paginas.module.css';


const Lineales = () => {

    const [setActivo, guardarActivo] = useState("");
    const [setAlto, guardarAlto] = useState("0px");

    const contenedor = useRef(null);


    // efecto desplegable
    const accordion = () => {
        guardarActivo(setActivo === "" ? "active" : "");
        guardarAlto(
            setActivo === "active" ? "0px" : `${contenedor.current.scrollHeight}px`
        );
    }



    return (
        <Fragment>
            <button
                className={`${styles.card} ${styles.accordion} ${setActivo}`}
                onClick={accordion}
            >
                <img src={sol} alt="" />
                <div className={styles.card_info}>
                    <p>
                        1. Conocida la altura(h) de un poste y el largo de la sombra
                        de este proyectada sobre la acera(s), a una hora determinada
                        del día, haga un programa que calcule e imprima (grados,
                        minutos y segundos), el ángulo de incidencia del sol en ese
                        momento.
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
                        <form name="Contenedor" action="#" className={styles.form} id="form">
                            <div className={styles.from_left}>
                                <h2 className={styles.form__title}>Ingreso de datos</h2>
                                <input
                                    type="text"
                                    placeholder="Altura del poste  *"
                                    id="dp"
                                    className={styles.input}
                                    required=""
                                />
                                <input
                                    type="text"
                                    placeholder="Ingrese el largo de la sombra proyectada *"
                                    className={styles.input}
                                    id="ds"
                                    required=""
                                />
                                <input
                                    type="text"
                                    placeholder="Ingrese la Hora*"
                                    className={styles.input}
                                    id="dh"
                                    required=""
                                />

                                <button className={styles.btn} onClick="datos_sol()">
                                    Calcular
                                </button>
                            </div>

                            <div className={styles.from_right}>
                                <p>
                                    <label>Grados: </label>
                                    <input
                                        type="text"
                                        name="datoR"
                                        id="res"
                                        className={styles.input}
                                    />
                                </p>

                                <p>
                                    <label>Minutos: </label>
                                    <input
                                        type="text"
                                        name="datoRmin"
                                        id="resmin"
                                        className={styles.input}
                                    />
                                </p>

                                <p>
                                    <label>Segundos: </label>
                                    <input
                                        type="text"
                                        name="datoRmin"
                                        id="reseg"
                                        className={styles.input}
                                    />
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <button
                className={`${styles.card} ${styles.accordion} ${setActivo}`}
                onClick={accordion}
            >
                <img src={sol} alt="" />
                <div className={styles.card_info}>
                    <p>
                        1. Conocida la altura(h) de un poste y el largo de la sombra
                        de este proyectada sobre la acera(s), a una hora determinada
                        del día, haga un programa que calcule e imprima (grados,
                        minutos y segundos), el ángulo de incidencia del sol en ese
                        momento.
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
                        <form name="Contenedor" action="#" className={styles.form} id="form">
                            <div className={styles.from_left}>
                                <h2 className={styles.form__title}>Ingreso de datos</h2>
                                <input
                                    type="text"
                                    placeholder="Altura del poste  *"
                                    id="dp"
                                    className={styles.input}
                                    required=""
                                />
                                <input
                                    type="text"
                                    placeholder="Ingrese el largo de la sombra proyectada *"
                                    className={styles.input}
                                    id="ds"
                                    required=""
                                />
                                <input
                                    type="text"
                                    placeholder="Ingrese la Hora*"
                                    className={styles.input}
                                    id="dh"
                                    required=""
                                />

                                <button className={styles.btn} onClick="datos_sol()">
                                    Calcular
                                </button>
                            </div>

                            <div className={styles.from_right}>
                                <p>
                                    <label>Grados: </label>
                                    <input
                                        type="text"
                                        name="datoR"
                                        id="res"
                                        className={styles.input}
                                    />
                                </p>

                                <p>
                                    <label>Minutos: </label>
                                    <input
                                        type="text"
                                        name="datoRmin"
                                        id="resmin"
                                        className={styles.input}
                                    />
                                </p>

                                <p>
                                    <label>Segundos: </label>
                                    <input
                                        type="text"
                                        name="datoRmin"
                                        id="reseg"
                                        className={styles.input}
                                    />
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <button
                className={`${styles.card} ${styles.accordion} ${setActivo}`}
                onClick={accordion}
            >
                <img src={sol} alt="" />
                <div className={styles.card_info}>
                    <p>
                        1. Conocida la altura(h) de un poste y el largo de la sombra
                        de este proyectada sobre la acera(s), a una hora determinada
                        del día, haga un programa que calcule e imprima (grados,
                        minutos y segundos), el ángulo de incidencia del sol en ese
                        momento.
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
                        <form name="Contenedor" action="#" className={styles.form} id="form">
                            <div className={styles.from_left}>
                                <h2 className={styles.form__title}>Ingreso de datos</h2>
                                <input
                                    type="text"
                                    placeholder="Altura del poste  *"
                                    id="dp"
                                    className={styles.input}
                                    required=""
                                />
                                <input
                                    type="text"
                                    placeholder="Ingrese el largo de la sombra proyectada *"
                                    className={styles.input}
                                    id="ds"
                                    required=""
                                />
                                <input
                                    type="text"
                                    placeholder="Ingrese la Hora*"
                                    className={styles.input}
                                    id="dh"
                                    required=""
                                />

                                <button className={styles.btn} onClick="datos_sol()">
                                    Calcular
                                </button>
                            </div>

                            <div className={styles.from_right}>
                                <p>
                                    <label>Grados: </label>
                                    <input
                                        type="text"
                                        name="datoR"
                                        id="res"
                                        className={styles.input}
                                    />
                                </p>

                                <p>
                                    <label>Minutos: </label>
                                    <input
                                        type="text"
                                        name="datoRmin"
                                        id="resmin"
                                        className={styles.input}
                                    />
                                </p>

                                <p>
                                    <label>Segundos: </label>
                                    <input
                                        type="text"
                                        name="datoRmin"
                                        id="reseg"
                                        className={styles.input}
                                    />
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <button
                className={`${styles.card} ${styles.accordion} ${setActivo}`}
                onClick={accordion}
            >
                <img src={sol} alt="" />
                <div className={styles.card_info}>
                    <p>
                        1. Conocida la altura(h) de un poste y el largo de la sombra
                        de este proyectada sobre la acera(s), a una hora determinada
                        del día, haga un programa que calcule e imprima (grados,
                        minutos y segundos), el ángulo de incidencia del sol en ese
                        momento.
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
                        <form name="Contenedor" action="#" className={styles.form} id="form">
                            <div className={styles.from_left}>
                                <h2 className={styles.form__title}>Ingreso de datos</h2>
                                <input
                                    type="text"
                                    placeholder="Altura del poste  *"
                                    id="dp"
                                    className={styles.input}
                                    required=""
                                />
                                <input
                                    type="text"
                                    placeholder="Ingrese el largo de la sombra proyectada *"
                                    className={styles.input}
                                    id="ds"
                                    required=""
                                />
                                <input
                                    type="text"
                                    placeholder="Ingrese la Hora*"
                                    className={styles.input}
                                    id="dh"
                                    required=""
                                />

                                <button className={styles.btn} onClick="datos_sol()">
                                    Calcular
                                </button>
                            </div>

                            <div className={styles.from_right}>
                                <p>
                                    <label>Grados: </label>
                                    <input
                                        type="text"
                                        name="datoR"
                                        id="res"
                                        className={styles.input}
                                    />
                                </p>

                                <p>
                                    <label>Minutos: </label>
                                    <input
                                        type="text"
                                        name="datoRmin"
                                        id="resmin"
                                        className={styles.input}
                                    />
                                </p>

                                <p>
                                    <label>Segundos: </label>
                                    <input
                                        type="text"
                                        name="datoRmin"
                                        id="reseg"
                                        className={styles.input}
                                    />
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Lineales;