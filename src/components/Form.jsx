'use client'

import React, {useRef} from "react";
import styles from '../styles/Form.module.css';
import emailjs from '@emailjs/browser';
import Image from "next/image";

export default function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Enviando email...");
    emailjs.sendForm('service_828hjkk', 'template_mn8d2bo', form.current, 'CUwTzwvg87PaE4hA5')
      .then((result) => {
          console.log("este es el ok", result.text);
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className={styles.cont}>
      <h3 className={styles.title}>Contáctate con Nosotros</h3>
      <p>Si eres nuevo cliente y estás interesado en nuestro servicios, solicita ya tu diagnóstico de seguridad de tu portal o aplicación web y charlas de formación sobre conciencia en seguridad digital</p>
      <div className={styles.contForm}>
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <div className={styles.contDatos}>
            <input
              type="text"
              name="user_name"
              id="nombre"
              placeholder="Nombre"
              className={styles.input}
            />
            <input
              type="email"
              name="user_email"
              id="email"
              placeholder="Email"
              className={styles.input}
            />
          </div>

          <div className={styles.contDatos}>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              className={styles.input}
              placeholder="Teléfono"
            />
            <input
              type="text"
              id="empresa"
              name="empresa"
              placeholder="Empresa"
              className={styles.input}
            />
          </div>
          <div>
            <textarea
              id="mensaje"
              name="message"
              placeholder="Mensaje"
              className={styles.input}
            ></textarea>
          </div>
          <div className={styles.contButton}>
            <button type="submit" className={styles.button}>Enviar</button>
          </div>
        </form>

        <div className={styles.contAzul}>
          <Image
            src="/Llamada.svg"
            width={40}
            height={40}
            alt="Llamada"
            className={styles.icon}
          />
          <p className={styles.parrafo}>+57 302 705 8970</p>
          <Image
            src="/images/Resistance.png"
            width={40}
            height={40}
            alt="Resistance"
            className={styles.icon1}
          />
          <p className={styles.parrafo1}>marketing@resistance.com.co</p>

        </div>
      </div>
    </div>
  );
};