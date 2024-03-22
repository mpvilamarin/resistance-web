'use client'
import React from 'react';
import styles from './empresas.module.css';
import Consultorias from '../Toggles/Consultorias';
import Seguridad from '../Toggles/Seguridad';
import Form from '@/components/Form';
import Hero from '@/components/Hero';
import YouTube from 'react-youtube';

const Empresas = () => {

    const options = {
        width: 540,
        height: 260,
        autoplay: 1,
        controls: 1,
    };

    return (
        <div>
            <Hero
                imagePath="/images/HeroEmpresas.jpg"
                title="Servicios Empresas"
                button1Text="Consultorias"
                button2Text="Seguridad Administrada"
                button1Url="#consultorias"
                button2Url="#seguridad"
            />
            <section id="consultorias">
                <div className={styles.contToggle}>
                    <Consultorias />
                    <div className={styles.cont1}>
                        <p className={styles.sub1}>
                            SERVICIOS EMPRESARIALES
                        </p>
                        <h2 className={styles.sub}>
                            Consultorías
                        </h2>
                        <p>
                            Prestamos servicios de consultorías de seguridad de la información y auditorías a empresas de cualquier tamaño y sector apoyando el cumplimiento de los objetivos de negocio a través de nuestros conocimientos y experiencia, logrando identificar e implementar procesos de mejora contínua que beneficiarán los procesos de negocio, haciéndolos resilientes a fallas e incidentes.
                        </p>
                        <div className={styles.video}>
                            <YouTube videoId={"Y0YuOg6Ix7M"}
                                opts={options} >
                            </YouTube>
                        </div>
                    </div>
                </div>
            </section>
            <section id='seguridad'>
                <div className={styles.contToggle}>
                    <div className={styles.cont1}>
                        <p className={styles.sub1}>
                            SERVICIOS EMPRESARIALES
                        </p>
                        <h2 className={styles.sub}>
                            Seguridad Administrada
                        </h2>
                        <p>
                            Prestamos servicios de consultorías de seguridad de la información y auditorías a empresas de cualquier tamaño y sector apoyando el cumplimiento de los objetivos de negocio a través de nuestros conocimientos y experiencia, logrando identificar e implementar procesos de mejora contínua que beneficiarán los procesos de negocio, haciéndolos resilientes a fallas e incidentes.
                        </p>
                        <div className={styles.video}>
                        <YouTube videoId={"Eifco4pSYj0"}
                                opts={options} >
                            </YouTube>
                        </div>
                    </div>
                    <Seguridad />
                </div>
            </section >
            <div className={styles.contForm}>
                <Form />
            </div>
        </div >
    );
};

export default Empresas;