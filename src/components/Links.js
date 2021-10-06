import React from 'react';
import styles from './Links.module.css';

// importamos imagenes
import inicio from '../assets/img/inicio.svg';
import lineal from '../assets/img/lineal.svg';
import alternativo from '../assets/img/alternativo.svg';
import repetitivo from '../assets/img/repetitivo.svg';
import otros from '../assets/img/otros.svg';

import { Link, NavLink } from 'react-router-dom';

const Links = () => {
    return (
        <div className={styles.links}>
            <NavLink to={'/inicio'} className={`${styles.customBtn} ${styles.boton}`} activeClassName={`${styles.activo}`}>
                <div className={styles.link}>
                    <img src={inicio} alt="" />
                    <h2>Inicio</h2>
                </div>
            </NavLink>
            <Link to={'/liniales'} className={`${styles.customBtn} ${styles.boton}`}>
                <div className={styles.link}>
                    <img src={lineal} alt="" />
                    <h2>Lineales</h2>
                </div>
            </Link>
            <Link to={'/alternativos'} className={`${styles.customBtn} ${styles.boton}`}>
                <div className={styles.link}>
                    <img src={alternativo} alt="" />
                    <h2>Alternativos</h2>
                </div>
            </Link>
            <Link to={'/repeticion'} className={`${styles.customBtn} ${styles.boton}`}>
                <div className={styles.link}>
                    <img src={repetitivo} alt="" />
                    <h2>Repetición</h2>
                </div>
            </Link>
            <Link to={'/otros'} className={`${styles.customBtn} ${styles.boton}`}>
                <div className={styles.link}>
                    <img src={otros} alt="" />
                    <h2>Otros</h2>
                </div>
            </Link>
        </div>
    );
}

export default Links;