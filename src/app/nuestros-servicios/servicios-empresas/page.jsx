'use client'

import styles from '../empresas.module.css';
import Consultorias from '../Toggles/Consultorias';
import Seguridad from '../Toggles/Seguridad';
import Form from '@/components/Form';
import Hero from '@/components/Hero';

const Empresas = () => {

    // const scrollToSection = (sectionId) => {
    //     const section = document.getElementById(sectionId);
    //     if (section) {
    //         section.scrollIntoView({ behavior: "smooth" });
    //     }
    // };


    return (
        <div>
            <Hero
                imagePath="/images/contact.jpg"
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
                        <video width="540" height="260" controls>
                            <source src="ruta_del_video.mp4" type="video/mp4" />
                        </video>
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
                    <video width="540" height="260" controls>
                        <source src="ruta_del_video.mp4" type="video/mp4" />
                    </video>
                </div>
                <Seguridad />
            </div>
            </section>
            <div className={styles.contForm}>
                <Form />
            </div>
        </div>
    );
};

export default Empresas;






