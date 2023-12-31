/* use Client */
import React from "react";
import styles from './contacto.module.css';
import Form from '../../components/Form'

export default function Contacto() {

    return (
        <div className={styles.container}>
            <div className={styles.contHero}>
                <h1 className={styles.title}>Comunícate con nosotros</h1>
            </div>
            <div className={styles.contData}>
                <div className={styles.miniCont}>
                    <img src='/icons/iconCall.png' alt="call" className={styles.icon} />
                    <h3>Llámanos</h3>
                </div>
                <div className={styles.miniCont}>
                    <img src="/icons/iconMessage.png" alt="Message" className={styles.icon} />
                    <h3>Nuestros horarios</h3>
                </div>
                <div className={styles.miniCont}>
                    <img src='/icons/iconMail.png' alt="Email" className={styles.icon} />
                    <h3>Escríbenos</h3>
                </div>
            </div>
            <div className={styles.contForm}>
                <div className={styles.form}>
                    <Form />
                </div>
                <div className={styles.contText}>
                    <h2 className={styles.sub}>Consultas</h2>
                    <p className={styles.text}>Para todas las consultas sobre nuestros servicios, diligencia el formulario y nos comunicaremos contigo lo antes posible.
                        Responderemos a todas sus preguntas y nos aseguraremos que tengas una experiencia satisfactoria con nuestros servicios.</p>
                </div>

            </div>
        </div>
    )
}