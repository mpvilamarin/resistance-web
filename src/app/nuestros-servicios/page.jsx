import React from "react";
import styles from './nuestros-servicios.module.css';
import Link from "next/link";

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
                <h2 style={{
                    fontSize: "35px",
                    fontStyle: "italic", 
                    fontWeight: "600"
                }}
                >Resistance te acompaña, te enseña y te da las herramientas para estar seguro</h2>
                <p>Existen personas u organizaciones que buscan obtener tus datos ﬁnancieros, personales e incluso tu información privada. Podemos enseñarte a protegerte, tú decides cuando quieres aprender</p>
                <div className={styles.contServices}>
                    <div className={styles.contService}>
                        <img
                            src="images/Empresa.png"
                            alt="Imagen Empresa"
                            className={styles.image} />
                        <h2>Empresas</h2>
                        <p>Contamos con un amplio portafolio para fortalecer la seguridad de empresas de cualquier sector</p>
                        <div className={styles.contLink}>
                            <Link href="/nuestros-servicios/servicios-empresas" className={styles.buttonService}>
                                Ver Más
                            </Link>
                        </div>
                    </div>
                    <div className={styles.contService}>
                        <img
                            src="images/Familia.png"
                            alt="Imagen Empresa"
                            className={styles.image} />
                        <h2>Familias</h2>
                        <p>Acompañamos a ti y tu familia para protegerse de los riesgos en el ciber espacio</p>
                        <div className={styles.contLink}>
                            <Link href="/nuestros-servicios/servicios-familias-y-colegios" className={styles.buttonService}>
                                Ver Más
                            </Link>
                        </div>
                    </div>
                    <div className={styles.contService}>
                        <img
                            src="images/Escuelas.png"
                            alt="Imagen Empresa"
                            className={styles.image} />
                        <h2>Colegios</h2>
                        <p>Cursos interactivos para guiar a profesores y padres de familia en la implementación de controles tecnológicos en el ciber espacio</p>
                        <div className={styles.contLink}>
                            <Link href="/nuestros-servicios/servicios-familias-y-colegios" className={styles.buttonService}>
                                Ver Más
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}