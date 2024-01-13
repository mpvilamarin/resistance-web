'use client'

import React, { useState } from "react";
import styles from '../styles/Form.module.css';

export default function Form() {


  return (
    <div className={styles.cont}>
      <h3 className={styles.title}>Contáctate con Nosotros</h3>
      <p>Si eres nuevo cliente y estás interesado en nuestro servicios, solicita ya tu diagnóstico de seguridad de tu portal o aplicación web y charlas de formación sobre conciencia en seguridad digital</p>
      <div className={styles.contForm}>
        <form className={styles.form}>
          <div className={styles.contDatos}>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Nombre"
              className={styles.input}
            />
            <input
              type="email"
              id="email"
              name="email"
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
              placeholder="mpresa"
              className={styles.input}
            />
          </div>
          <div>
            <textarea
              id="mensaje"
              name="mensaje"
              placeholder="Mensaje"
              className={styles.input}
            ></textarea>
          </div>
          <div className={styles.contButton}>
            <button type="submit" className={styles.button}>Enviar</button>
          </div>
        </form>

        <div className={styles.contAzul}>
          <img
            src="/Llamada.svg"
            alt="Llamada"
            className={styles.icon}
          />
          <p className={styles.parrafo}>+57 302 705 8970</p>
          <img
            src="/images/Resistance.png"
            alt="Resistance"
            className={styles.icon1}
          />
          <p className={styles.parrafo1}>marketing@resistance.com.co</p>

        </div>
      </div>
    </div>
  );
};
