/* use Client */
import React from "react";
import styles from './contacto.module.css';
import Form from '../../components/Form';
import Hero from "@/components/Hero";

export default function Contacto() {

    return (
        <div className={styles.container}>
            <Hero
                imagePath="/images/contact.jpg"
                title="Contacto"
                button1Text="Información"
                button2Text="Formulario"
                button1Url="/nuestros-servicios/servicios-empresas"
                button2Url="/nuestros-servicios/servicios-familias-y-colegios"
            />
            <div className={styles.cont}>
                <div className={styles.contContact}>
                    <img
                        src="images/Contacto2.jpg"
                        alt="Imagen Contacto"
                        className={styles.image} />
                    <div className={styles.contInfo}>
                        <h1>Contáctate</h1>
                        <div className={styles.contData}>
                            <h3>¡No dudes en ponerte en contacto con nosotros!</h3>
                            <h4>Estamos aquí para ayudarte a proteger tus datos y mantener tu información segura en el mundo digital.</h4>
                            <p>Nos dedicamos a garantizar la seguridad digital de nuestros clientes. Si tienes preguntas, comentarios o necesitas asistencia relacionada con los servicios que prestamos</p>
                            <h3>Horarios de atención</h3>
                            <p>Nuestro equipo de expertos está disponible para asistirte de
                                <br />
                                lunes a viernes
                                <br />
                                08:00 am - 06:00 pm 
                                <br /> 
                                y sábados 
                                <br />
                                08:00 am - 02:00 pm, hora local (GMT-5)</p>
                        </div>
                    </div>
                </div>
            </div>
            <Form />
        </div>
    )
}