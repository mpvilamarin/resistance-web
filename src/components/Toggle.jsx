'use client'

import { useState } from 'react';
import styles from './styles.module.css';

const TableToggle = () => {
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
    <div className={styles.container}>
      <div className={styles.cont}>
        <div className={styles.contPregunta}>
          <button
            onClick={() => handleToggle('pregunta1')}
            className={`${styles.toggleTitle} ${toggleStates.pregunta1 ? styles.active : ''}`}
          >
            ¿Cuáles son sus principales clientes?
            <img
              src='/Flecha.svg'
              className={`${styles.icon} ${toggleStates.pregunta1 ? styles.active : ''}`}
            />
          </button>
          {toggleStates.pregunta1 && (
            <p className={styles.parrafo}>
              Arpeggio Consultores, D-artis, Fundasuvicol, Celunion, Ancla Telecomunicaciones y Market Cell.
            </p>
          )}
        </div>
        <div className={styles.contPregunta}>
          <button
            onClick={() => handleToggle('pregunta2')}
            className={`${styles.toggleTitle} ${toggleStates.pregunta2 ? styles.active : ''}`}
          >
            ¿Dónde puedo contactarlos?
            <img
              src='/Flecha.svg'
              className={`${styles.icon} ${toggleStates.pregunta2 ? styles.active : ''}`}
            />
          </button>
          {toggleStates.pregunta2 && (
            <p className={styles.parrafo}>
              Puede diligenciar formulario de contacto en nuestra página web o escribirnos a través de nuestras redes sociales.
            </p>
          )}
        </div>
        <div className={styles.contPregunta}>
          <button
            onClick={() => handleToggle('pregunta3')}
            className={`${styles.toggleTitle} ${toggleStates.pregunta3 ? styles.active : ''}`}
          >
            ¿Qué los diferencia de los otros?
            <img
              src='/Flecha.svg'
              className={`${styles.icon} ${toggleStates.pregunta3 ? styles.active : ''}`}
            />
          </button>
          {toggleStates.pregunta3 && (
            <p className={styles.parrafo}>
              El contenido y trabajo que hemos diseñado hasta la fecha aborda de manera más lúdica las problemáticas de seguridad para que sea no sólo de interés de empresas sino de familias paara que se motiven a aprender más acerca de seguridad digital. En Resistance consideramos relevante abordar los riesgos teniendo en cuenta el contexto e idiosincrasia en Colombia y nuestros países de latinoamérica.
            </p>
          )}
        </div>
      </div>
      <div className={styles.cont1}>
        <div className={styles.contPregunta}>
          <button
            onClick={() => handleToggle('pregunta4')}
            className={`${styles.toggleTitle} ${toggleStates.pregunta4 ? styles.active : ''}`}
          >
            ¿Quiénes son sus principales aliados?
            <img
              src='/Flecha.svg'
              className={`${styles.icon} ${toggleStates.pregunta4 ? styles.active : ''}`}
            />
          </button>
          {toggleStates.pregunta4 && (
            <p className={styles.parrafo}>
              Consideramos como aliados de nuestra estrategia a entidades que promueven el buen uso de las tecnologías y la educación como son Ministerio de Educación Nacional, Mintic, Sena, Unicef, Redpapaz, entre otras.
            </p>
          )}
        </div>
        <div className={styles.contPregunta}>
          <button
            onClick={() => handleToggle('pregunta5')}
            className={`${styles.toggleTitle} ${toggleStates.pregunta5 ? styles.active : ''}`}
          >
            ¿Cuál es la principal amenaza de seguridad actualmente?
            <img
              src='/Flecha.svg'
              className={`${styles.icon} ${toggleStates.pregunta5 ? styles.active : ''}`}
            />
          </button>
          {toggleStates.pregunta5 && (
            <p className={styles.parrafo}>
              El phishing es el principal esquema de fraude en el mundo; según estudio realizado en 2020 por la empresa TransUnion en 15 países que incluyó Colombia, el 27% de los consumidores afirmaron haber sido estafados con temas relacionados con el covid.
            </p>
          )}
        </div>
        <div className={styles.contPregunta}>
          <button
            onClick={() => handleToggle('pregunta6')}
            className={`${styles.toggleTitle} ${toggleStates.pregunta6 ? styles.active : ''}`}
          >
            ¿Cómo puedo proteger a mi familia en el ciber espacio
            <img
              src='/Flecha.svg'
              className={`${styles.icon} ${toggleStates.pregunta6 ? styles.active : ''}`}
            />
          </button>
          {toggleStates.pregunta6 && (
            <p className={styles.parrafo}>
              Puedes aprender a través de nuestros cursos de formación que encontrarás en nuestra sección de familias.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TableToggle;