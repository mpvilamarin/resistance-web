'use client'

import React, { useState } from "react";
import styles from '../nuestros-servicios.module.css';

export default function Empresas() {

        const [parrafoVisible, setParrafoVisible] = useState(null);

        const mostrarParrafo = (idParrafo) => {
            setParrafoVisible(idParrafo === parrafoVisible ? null : idParrafo);
        }

    return (
        <div>
            <div className={styles.contHero}>
                <h1>SERVICIOS PARA EMPRESAS</h1>
            </div>
            <div className={styles.cont}>
                <div className={styles.consultorias}>
                    <ul className={styles.list}>
                        <li onClick={() => mostrarParrafo('parrafo1')}>Gestión de riesgos</li>
                        <li onClick={() => mostrarParrafo('parrafo2')}>Documentación de procesos misionales y de apoyo</li>
                        <li onClick={() => mostrarParrafo('parrafo3')}>Análisis de brechas sobre normas y estándares de seguridad</li>
                        <li onClick={() => mostrarParrafo('parrafo4')}>Análisis de vulnerabilidades en la tecnología</li>
                        <li onClick={() => mostrarParrafo('parrafo5')}>Arquitectura empresarial</li>
                        <li onClick={() => mostrarParrafo('parrafo6')}>Definición e implementación de políticas, estándares y procedimientos de seguriad de la información</li>
                    </ul>
                    <div className={styles.paragraphCont}>
                        <div className={`${styles.paragraph} ${parrafoVisible === 'parrafo1' ? styles.visible : ''}`}>
                            <h3 className={styles.contTitle}>Gestión de riesgos</h3>
                            <p>Brindamos a nuestros clientes gran experiencia en los procesos de identificación, análisis, evaluación y tratamiento de riesgos usando metodologías ampliamente reconocidas y comprobadas en cualquier sector entre las cuales podemos mencionar ISO 31000, Octave, NIST 800-30, ISO 27005 entre otras.</p>
                            <p>Apoyamos a nuestros clientes a definir el contexto de su organización y los criterios de impacto al negocio con el fin de apoyar en la implementación de la metodología de riesgos que aporte al negocio y que apoye en la toma de decisiones.</p>
                        </div>
                        <div className={`${styles.paragraph} ${parrafoVisible === 'parrafo2' ? styles.visible : ''}`}>
                            <p>Realizamos el entendimiento, evaluación y documentación de los procesos de compañías de cualquier tamaño usando metodologías BPMN (Business Process Management Notation) o cualquier metodología aplicada por el cliente e implementando herramientas que facilitan el entendimiento, adopción y automatización de los procesos por parte de los colaboradores.</p>
                            <p>Por otra parte para cada proceso analizado, evaluado y documentado estamos en la capacidad de definir controles, indicadores e implementar métricas con controles estadísticos lo cual le permitirá a nuestros clientes analizar la eficacia y eficiencia de los procesos e implementar ciclos de mejora continua no solo al final de cada proceso sino en la medida que cada actividad es ejecutada.</p>
                        </div>
                        <div className={`${styles.paragraph} ${parrafoVisible === 'parrafo3' ? styles.visible : ''}`}>
                            <p>Utilizamos estándares de seguridad de la información y ciberseguridad como ISO 27001 /02 ,ISO 27032, NIST 800-53, para realizar análisis de brechas que permitirán a compañías y organizaciones de cualquier sector y tamaño identificar los niveles de madurez en la gestión de seguridad de la información y los planes de acción a corto mediano y largo plazo, siempre alineados al contexto y objetivos de la Compañía.</p>
                            <p>Basados en este tipo de análisis realizamos para nuestros clientes el plan estratégico de seguridad de la información que será la hoja de ruta para lograr paso a paso el nivel de madurez de seguridad de la información deseable en la compañía para contribuir eficientemente a los logros y metas propuestas por la alta dirección.</p>
                        </div>
                        <div className={`${styles.paragraph} ${parrafoVisible === 'parrafo4' ? styles.visible : ''}`}>
                            <p>En la actualidad, este es uno de los servicios de mayor demanda debido a la cantidad exponencial de personas que buscan aprovechar, por beneficio económico, las vulnerabilidades del software y en general de las plataformas tecnológicas. A lo anterior, se suma la creciente tendencia a realizar negocios, transacciones comerciales y financieras a través de internet y aplicaciones móviles sin que a veces nos detengamos a pensar si realmente los datos de la Compañía están siendo protegidos contra las amenazas de atacantes.</p>
                            <p>Contamos con personal ampliamente especializado y certificado para realizar análisis de vulnerabilidades técnicas, pruebas de Ethical Hacking y pentesting que le permitirán tener una idea del nivel de riesgo al que está expuesto su organización. Nuestros informes no se limitan a un simple reporte técnico, van más allá y analizan cómo en caso que un atacante logre la explotación de una o varias vulnerabilidades, se afectará el sistema y el proceso de negocio que éste soporta.</p>
                        </div>
                        <div className={`${styles.paragraph} ${parrafoVisible === 'parrafo5' ? styles.visible : ''}`}>
                            <p>A través del uso de metodologías como TOGAF(The Open Group Architectural Framework) u otras similares tenemos la capacidad de apoyar a nuestros clientes con la definición de las metas y objetivos empresariales y a su vez arquitectar como el software y hardware se integren de manera efectiva para lograr la consecución de las metas definidas, siempre pensando en la eficiencia en costos y la agilidad en los procesos para la toma de decisiones oportuna.</p>
                        </div>
                        <div className={`${styles.paragraph} ${parrafoVisible === 'parrafo6' ? styles.visible : ''}`}>
                            <p>Documentamos las políticas y estándares de seguridad informática y de la información, previo conocimiento del contexto financiero, humano, de mercado, regulatorio y contractual y apoyados en metodologías y estándares de controles sin dejar de lado el conocimiento de los procesos y arquitectura de los sistemas de información y tecnología utilizada por la compañía.</p>
                            <p>Nuestras labor no queda en solo documentación, se extiende a lograr la adopción de los controles, definición y seguimiento a indicadores de cumplimiento.</p>
                        </div>                    
                    </div>
                </div>
            </div>
        </div>
    )
}