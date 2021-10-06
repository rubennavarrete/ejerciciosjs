import React, { Fragment } from 'react';


import javaScript from '../assets/img/javascript.jpg';
import chj1 from '../assets/img/chj1.jpg';
import chj2 from '../assets/img/chj2.jpg';
import chj3 from '../assets/img/chj3.jpg';

//css
import styles from './Paginas.module.css';

const Inicio = () => {
    return (
        <Fragment>
            <section className={styles.info}>
                <article className={styles.articulo}>
                    <h2>JavaScript</h2>
                    <img src={javaScript} className={styles.img_js} alt="javascript" />

                    <h3>¿QUÉ ES JAVASCRIPT?</h3>
                    <p>
                        Los lenguajes de programación web se pueden diferenciar entre los que se ejecutan en la parte del cliente (lenguajes frontend) y los que se ejecutan en la parte del servidor (lenguajes backend).

                        Pues bien, JavaScript es el lenguaje de programación web del lado del cliente por excelencia. De hecho, a día de hoy es el séptimo lenguaje de programación más utilizado del mundo, según el Índice Tiobe, referencia en la medición del uso de los lenguajes de programación.

                        Por lo tanto, JavaScript es un lenguaje de programación que se ejecuta en el navegador web del usuario, cuyo objetivo es dotar a los sitios web de interactividad.
                    </p>

                    <img src={chj1} className={styles.img_js} alt="" />
                    <p>HTML sería el contenido de nuestra página web, CSS los estilos que van a definir cómo se va a comportar ese contenido, mientras que JavaScript es el que va a aplicar la lógica.</p>
                    <img src={chj2} className={styles.img_js} alt="" />
                    <p>Aplicando lo anterior a una casa:</p>
                    <ul>
                        <li>
                            <p>HTML sería la estructura de la casa, las paredes, y demás</p>
                        </li>
                        <li>
                            <p>CSS sería el color de la misma y cómo va a estar definida</p>
                        </li>
                        <li>
                            <p>JavaScript, sería la parte de lógica que puede tener una casa, como en encendido y apagado de las luces.</p>
                        </li>
                    </ul>
                    <img src={chj3} className={styles.img_js} alt="" />
                    <p>Llevado este mismo ejemplo a una página web, como la que vemos en la imagen:</p>
                    <ul>
                        <li>
                            <p>HTML es el contenido de esa página</p>
                        </li>
                        <li>
                            <p>CSS son los estilos que vienen definidos, como puede ser que el texto aparezca en blanco dentro de nuestra página o que el menú aparezca de cierta manera cuando pasas el ratón por encima</p>
                        </li>
                        <li>
                            <p>JavaScript será la parte de lógica que viene implícita dentro el buscador, por ejemplo, que al escribir algo te muestre ciertos resultados y cuando pinches en el botón submit haga cierta acción.</p>
                        </li>
                    </ul>
                    <p>Resumiendo todo lo anterior, podemos decir que el HTML y el CSS son lenguajes de marcado que nos ayudan a crear y definir esos elementos, mientras que el JavaScript es un lenguaje de programación que nos va a ayudar a definir la lógica de nuestra página, el comportamiento de la misma.</p>
                </article>
            </section>
        </Fragment>
    );
}

export default Inicio;