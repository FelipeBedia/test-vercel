import styles from './Productos.module.css';
import React from 'react';
import { Link } from "react-scroll";

export function TablaProductos () {
  return (
    <div name='Productos' className={styles.list}>
      <p>
      <h1>Productos disponibles!!!</h1>
      <h1><Link
            
            to={"espada"}
            smooth
            duration={500}
            className={styles.contactLink}
          >
            Espada
          </Link></h1>
      <h1><Link
            
            to={"escudo"}
            smooth
            duration={500}
            className={styles.contactLink}
          >
            Escudo
          </Link></h1>
      <h1><Link
            
            to={"libro"}
            smooth
            duration={500}
            className={styles.contactLink}
          >
            Libro de hechizos
          </Link></h1>
      </p>
    </div>
);
}
