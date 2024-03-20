import React from "react";
import Hero from "@/components/Hero";
import styles from './recursos.module.css'

export default function Recursos() {
    return (
        <div>
            <Hero
                imagePath="/images/HeroRecursos.jpg"
                title="Nuestros Recursos"
                button1Text="Recursos audiovisuales"
                button2Text="Blog"
                button1Url="#preguntas"
                button2Url="#nosotros"
            />
            <div className={styles.cont}>
                <div>
                    <h2>Infografías</h2>
                    <p>Conoce nuestras infografías que te servirán como guía rápida para aclarar procesos y conceptos de seguridad de la información</p>
                </div>
                <div>
                    <h2>Videos</h2>
                    <p>Accede a todos los videos publicados también en nuestros canales de Youtube con los cuales generamos conciencia acerca de la seguridad en el entorno familiar y empresarial dentro del ciber espacio</p>
                </div>
            </div>
        </div>
    )
}