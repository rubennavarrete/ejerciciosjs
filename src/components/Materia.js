import React from 'react';
import styles from './Materia.module.css';

import espoch from '../assets/img/espoch.svg';

const Materia = () => {
    return (
        <div className={styles.apli}>
            <h2>APLICACIONES INFORMÁTICAS I</h2>
            <img src={espoch} alt="" />
        </div>
    );
}

export default Materia;