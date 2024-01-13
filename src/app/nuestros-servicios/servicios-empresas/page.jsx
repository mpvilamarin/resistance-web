'use client'

import styles from '../empresas.module.css';
import Consultorias from '../Toggles/Consultorias';
import Seguridad from '../Toggles/Seguridad';
import Form from '@/components/Form';

const Empresas = () => {

    return (
        <div>
            <div className={styles.contHero}>
                <h1>EMPRESAS</h1>
            </div>
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
                    <video></video>
                </div>
            </div>

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
                    <video></video>
                </div>
                <Seguridad />
            </div>
            <Form />
        </div>
    );
};

export default Empresas;






