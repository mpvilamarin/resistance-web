'use client'

import React, { useState } from 'react'
import styles from './toggle.module.css'

export default function consultorias() {

    const [toggleStates, setToggleStates] = useState({
        pregunta1: false,
        pregunta2: false,
        pregunta3: false,
        pregunta4: false,
        pregunta5: false,
        pregunta6: false,
    });

    const handleToggle = (pregunta) => {
        setToggleStates((prevState) => ({
            ...prevState,
            [pregunta]: !prevState[pregunta],
        }));
    };
  return (
    <div className={styles.cont}>
                    <div className={styles.contPregunta}>
                        <button
                            onClick={() => handleToggle('pregunta1')}
                            className={`${styles.toggleTitle} ${toggleStates.pregunta1 ? styles.active : ''}`}
                        >
                            Gestión de riesgos
                            <img
                                src='/Flecha.svg'
                                className={`${styles.icon} ${toggleStates.pregunta1 ? styles.active : ''}`}
                            />
                        </button>
                        {toggleStates.pregunta1 && (
                            <div>
                                <p className={styles.parrafo}>
                                    Brindamos a nuestros clientes gran experiencia en los procesos de identificación, análisis, evaluación y tratamiento de riesgos usando metodologías ampliamente reconocidas y comprobadas en cualquier sector entre las cuales podemos mencionar ISO 31000, Octave, NIST 800-30, ISO 27005 entre otras.
                                </p>
                                <p className={styles.parrafo}>
                                    Apoyamos a nuestros clientes a definir el contexto de su organización y los criterios de impacto al negocio con el fin de apoyar en la implementación de la metodología de riesgos que aporte al negocio y que apoye en la toma de decisiones.
                                </p>
                            </div>
                        )}
                    </div>

                    <div className={styles.contPregunta}>
                        <button
                            onClick={() => handleToggle('pregunta2')}
                            className={`${styles.toggleTitle} ${toggleStates.pregunta2 ? styles.active : ''}`}
                        >
                            Documentación de procesos misionales y de apoyo
                            <img
                                src='/Flecha.svg'
                                className={`${styles.icon} ${toggleStates.pregunta2 ? styles.active : ''}`}
                            />
                        </button>
                        {toggleStates.pregunta2 && (
                            <div>
                                <p className={styles.parrafo}>
                                    Realizamos el entendimiento, evaluación y documentación de los procesos de compañías de cualquier tamaño usando metodologías BPMN (Business Process Management Notation) o cualquier metodología aplicada por el cliente e implementando herramientas que facilitan el entendimiento, adopción y automatización de los procesos por parte de los colaboradores.
                                </p>
                                <p className={styles.parrafo}>
                                    Por otra parte para cada proceso analizado, evaluado y documentado estamos en la capacidad de definir controles, indicadores e implementar métricas con controles estadísticos lo cual le permitirá a nuestros clientes analizar la eficacia y eficiencia de los procesos e implementar ciclos de mejora continua no solo al final de cada proceso sino en la medida que cada actividad es ejecutada.
                                </p>
                            </div>
                        )}
                    </div>
                    <div className={styles.contPregunta}>
                        <button
                            onClick={() => handleToggle('pregunta3')}
                            className={`${styles.toggleTitle} ${toggleStates.pregunta3 ? styles.active : ''}`}
                        >
                            Análisis de brechas sobre normas y estándares de seguridad
                            <img
                                src='/Flecha.svg'
                                className={`${styles.icon} ${toggleStates.pregunta3 ? styles.active : ''}`}
                            />
                        </button>
                        {toggleStates.pregunta3 && (
                            <div>
                                <p className={styles.parrafo}>
                                    Utilizamos estándares de seguridad de la información y ciberseguridad como ISO 27001 /02 ,ISO 27032, NIST 800-53, para realizar análisis de brechas que permitirán a compañías y organizaciones de cualquier sector y tamaño identificar los niveles de madurez en la gestión de seguridad de la información y los planes de acción a corto mediano y largo plazo, siempre alineados al contexto y objetivos de la Compañía.
                                </p>
                                <p className={styles.parrafo}>
                                    Basados en este tipo de análisis realizamos para nuestros clientes el plan estratégico de seguridad de la información que será la hoja de ruta para lograr paso a paso el nivel de madurez de seguridad de la información deseable en la compañía para contribuir eficientemente a los logros y metas propuestas por la alta dirección.
                                </p>
                            </div>
                        )}
                    </div>

                    <div className={styles.contPregunta}>
                        <button
                            onClick={() => handleToggle('pregunta4')}
                            className={`${styles.toggleTitle} ${toggleStates.pregunta4 ? styles.active : ''}`}
                        >
                            Análisis de vulnerabilidades en la tecnología
                            <img
                                src='/Flecha.svg'
                                className={`${styles.icon} ${toggleStates.pregunta4 ? styles.active : ''}`}
                            />
                        </button>
                        {toggleStates.pregunta4 && (
                            <div>
                                <p className={styles.parrafo}>
                                    En la actualidad, este es uno de los servicios de mayor demanda debido a la cantidad exponencial de personas que buscan aprovechar, por beneficio económico, las vulnerabilidades del software y en general de las plataformas tecnológicas. A lo anterior, se suma la creciente tendencia a realizar negocios, transacciones comerciales y financieras a través de internet y aplicaciones móviles sin que a veces nos detengamos a pensar si realmente los datos de la Compañía están siendo protegidos contra las amenazas de atacantes.
                                </p>
                                <p className={styles.parrafo}>
                                    Contamos con personal ampliamente especializado y certificado para realizar análisis de vulnerabilidades técnicas, pruebas de Ethical Hacking y pentesting que le permitirán tener una idea del nivel de riesgo al que está expuesto su organización. Nuestros informes no se limitan a un simple reporte técnico, van más allá y analizan cómo en caso que un atacante logre la explotación de una o varias vulnerabilidades, se afectará el sistema y el proceso de negocio que éste soporta.
                                </p>
                            </div>
                        )}
                    </div>
                    <div className={styles.contPregunta}>
                        <button
                            onClick={() => handleToggle('pregunta5')}
                            className={`${styles.toggleTitle} ${toggleStates.pregunta5 ? styles.active : ''}`}
                        >
                            Arquitectura empresarial
                            <img
                                src='/Flecha.svg'
                                className={`${styles.icon} ${toggleStates.pregunta5 ? styles.active : ''}`}
                            />
                        </button>
                        {toggleStates.pregunta5 && (
                            <p className={styles.parrafo}>
                                A través del uso de metodologías como TOGAF(The Open Group Architectural Framework) u otras similares tenemos la capacidad de apoyar a nuestros clientes con la definición de las metas y objetivos empresariales y a su vez arquitectar como el software y hardware se integren de manera efectiva para lograr la consecución de las metas definidas, siempre pensando en la eficiencia en costos y la agilidad en los procesos para la toma de decisiones oportuna.
                            </p>
                        )}
                    </div>
                    <div className={styles.contPregunta}>
                        <button
                            onClick={() => handleToggle('pregunta6')}
                            className={`${styles.toggleTitle} ${toggleStates.pregunta6 ? styles.active : ''}`}
                        >
                            Definición e implementación de políticas, estándares y procedimientos de seguriad de la información
                            <img
                                src='/Flecha.svg'
                                className={`${styles.icon} ${toggleStates.pregunta6 ? styles.active : ''}`}
                            />
                        </button>
                        {toggleStates.pregunta6 && (
                            <div>
                                <p className={styles.parrafo}>
                                    Documentamos las políticas y estándares de seguridad informática y de la información, previo conocimiento del contexto financiero, humano, de mercado, regulatorio y contractual y apoyados en metodologías y estándares de controles sin dejar de lado el conocimiento de los procesos y arquitectura de los sistemas de información y tecnología utilizada por la compañía.
                                    <p className={styles.parrafo}>
                                    </p>
                                    Nuestras labor no queda en solo documentación, se extiende a lograr la adopción de los controles, definición y seguimiento a indicadores de cumplimiento.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
  )
}