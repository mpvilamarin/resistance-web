import React from "react";
import styles from './nuestros-servicios.module.css';

export default function Servicios() {

    return (
        <div>
            <div className={styles.contHero}>
                <h1 className={styles.title}>Nuestros Servicios</h1>
            </div>
            <div className={styles.contSec}>
                <div className={styles.textHero}>
                    <h4 className={styles.text}>Existen personas u organizaciones que buscan obtener tus datos ﬁnancieros, personales e incluso tu información privada. Podemos enseñarte a protegerte, tú decides cuando quieres aprender</h4>
                </div>
                <div className={styles.contButtons}>
                    <button type="submit" className={styles.button}>Para Empresas</button>
                    <button type="submit" className={styles.button}>Para Familias</button>
                </div>
            </div>
            <div className={styles.cont}>
                <h2>Resistance te acompaña, te enseña y te da las herramientas para estar seguro</h2>
                <p>Existen personas u organizaciones que buscan obtener tus datos ﬁnancieros, personales e incluso tu información privada. Podemos enseñarte a protegerte, tú decides cuando quieres aprender</p>
            </div>
        </div>
    )
}