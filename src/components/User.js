import React from 'react';
import styles from './User.module.css';

import usuario from '../assets/img/usuario.jpg';


const User = () => {
    return (
        <div className={styles.user}>
            <img src={usuario} alt="imagen de usuario" />
            <h3>Ruben Valencia</h3>
            <p>6795</p>
        </div>
    );
}

export default User;