import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';

const Hero = ({ imagePath, title, button1Text, button1Url, button2Text, button2Url }) => {

    const titleLines = title.split(' ');

    return (
        <div className={styles.contHero}>
            <div className={styles.imageContainer}>
                <Image 
                src={imagePath} 
                width={1350}
                height={645}
                alt="Servicios" 
                className={styles.heroImage} />
            </div>
            <div className={styles.containerHero}>
                <div className={`${styles.animated} ${styles.bounceInLeft}`}>
                    <h1 className={styles.title}>
                        <span>{titleLines[0]}</span>
                        <br />
                        <span>{titleLines[1]}</span>
                    </h1>
                </div>
                <div className={styles.contSec}>
                    <div className={styles.contButtons}>
                        <a href={button1Url} className={styles.button}>{button1Text}</a>
                        <a href={button2Url} className={styles.button1}>{button2Text}</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;