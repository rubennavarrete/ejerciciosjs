import React, { Fragment, useState, useRef } from 'react';
import Error from '../components/Error';

// imagenes 
import sol from '../assets/img/sol.jpg';

//css
import styles from '../paginas/Paginas.module.css';


const Sol = () => {
    const [setActivo, guardarActivo] = useState("");
    const [setAlto, guardarAlto] = useState("0px");
    const [error, guardarError] = useState(false);
    const [menorCero, guardarMenorCero] = useState(false);

    //capturar valores de los imput
    const [altura, guardarAltura] = useState('');
    const [sombra, guardarSombra] = useState('');
    const [hora, guardarHora] = useState('');

    // Resultados
    const [valorGrado, guardarValorGrado] = useState();
    const [valorMinuto, guardarValorMinuto] = useState();
    const [valorSegundo, guardarValorSegundo] = useState();

    const contenedor = useRef(null);


    // efecto desplegable
    const accordion = () => {
        guardarActivo(setActivo === "" ? "active" : "");
        guardarAlto(
            setActivo === "active" ? "0px" : `${contenedor.current.scrollHeight}px`
        );
    }

    // Cuando el usuario hace submit
    const datos_sol = e => {
        e.preventDefault();
        e.stopPropagation();

        // Validar si los campos estan llenos y si son numeros mayores a cero
        if (altura === '' || sombra === '' || hora === '') {
            guardarError(true);
            guardarMenorCero(false);
            return;
        } else if (altura < 0 || sombra < 0 || hora < 0) {
            guardarMenorCero(true);
            guardarError(false);
            return;
        }


        guardarMenorCero(false);
        guardarError(false);

        // calcular grados 
        gradosSol(altura, sombra);
    }

    const gradosSol = (altura, sombra) => {
        let grados;

        grados = altura / sombra;
        grados = Math.atan(grados);
        grados = grados * (180 / Math.PI);
        gradMinSeg(grados);
        grados = Math.trunc(grados);

        guardarValorGrado(grados);
    }


    const gradMinSeg = (grados) => {
        let min;
        let seg;
        if (esEntero(grados) === true) {
            //en min poner no hay y en segun lo mismo
            guardarValorMinuto("No tiene minutos");
            guardarValorSegundo("No tiene segundos");
        } else {
            min = grados % 1;
            min = min * 60;
            seg = min;
            min = Math.trunc(min);

            //segundos
            seg = seg % 1;
            seg = seg * 60;
            seg = seg.toFixed(2);

            guardarValorMinuto(min);
            guardarValorSegundo(seg);
        }
    }

    const esEntero = (grados) => {
        if (grados % 1 === 0) {
            return true;
        } else {
            return false;
        }
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
                                    type="number"
                                    placeholder="Altura del poste  *"
                                    className={styles.input}
                                    onChange={e => guardarAltura(e.target.value)}
                                />
                                <input
                                    type="number"
                                    placeholder="Ingrese el largo de la sombra proyectada *"
                                    className={styles.input}
                                    onChange={e => guardarSombra(e.target.value)}
                                />
                                <input
                                    type="number"
                                    placeholder="Ingrese la Hora*"
                                    className={styles.input}
                                    onChange={e => guardarHora(e.target.value)}
                                />

                                {error ? <Error mensaje="Todos los campos deben estar llenos!" /> : null}

                                {menorCero ? <Error mensaje="No se permiten valores negativos" /> : null}
                                <br />
                                <button className={styles.btn} onClick={datos_sol}>
                                    Calcular
                                </button>
                            </div>

                            <div className={styles.from_right}>
                                <div className={styles.content_resultado}>
                                    <div className={styles.resultado}>
                                        <label>Grados: </label>
                                        <span>{valorGrado} &#176;</span>
                                    </div>

                                    <div className={styles.resultado}>
                                        <label>Minutos: </label>
                                        <span>{valorMinuto} &#39;</span>
                                    </div>

                                    <div className={styles.resultado}>
                                        <label>Segundos: </label>
                                        <span>{valorSegundo} &#34;</span>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Sol;