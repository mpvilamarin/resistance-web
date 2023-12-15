import React from 'react';
import styles from '../nuestros-servicios.module.css';


const Carta = ({ title, description, image, backgroundImage }) => {

  const cardStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div className={styles.carta}>
      <div className={styles.front} style={cardStyle}>
        <img src={`/${image}`} className={styles.icon}/>
        <h3>{title}</h3>
      </div>
      <div className={styles.back}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Carta;