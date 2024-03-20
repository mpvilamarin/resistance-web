import React from "react";
import styles from './nuestros-servicios.module.css';
import Link from "next/link";
import Hero from "@/components/Hero";

export default function Servicios() {

    return (
        <div>
            <Hero
                imagePath="/images/HeroServicios.jpg"
                title="Nuestros Servicios"
                button1Text="Para Empresas"
                button2Text="Para Familias"
                button1Url="/nuestros-servicios/servicios-empresas"
                button2Url="/nuestros-servicios/servicios-familias-y-colegios"
            />
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