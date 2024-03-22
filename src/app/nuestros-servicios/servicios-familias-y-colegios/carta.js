import React from 'react';
import styles from '../nuestros-servicios.module.css';
import Image from 'next/image';


const Carta = ({ title, description, image, backgroundImage }) => {

  const cardStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div className={styles.carta}>
      <div className={styles.front} style={cardStyle}>
        <Image
          src={`/${image}`}
          width={40}
          height={40}
          alt='imagen carta'
          className={styles.icon} />
        <h3>{title}</h3>
      </div>
      <div className={styles.back}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Carta;