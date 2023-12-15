"use client"

import React, { useEffect, useRef, useState } from "react";
import styles from './styles.module.css';
import { data } from "./data";


const Certificaciones = () => {
    const listRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect (() => {
const listNode = listRef.current;
const imgNode = listNode.querySelectorAll("li > img") [currentIndex];

if(imgNode) {
    imgNode.scrollIntoView({
        behavior: "smooth"
    })
}
    }, [currentIndex])

    return (
        <div className={styles.cont}>
            <div className={styles.slider}>
                <div className={styles.images}>
                    <ul ref={listRef}>
                        {
                            data.map((item) => {
                                return (
                                    <li key={item.id}>
                                        <img src={item.image} alt='Img Certificación' className={styles.image} />
                                        <p>{item.name}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Certificaciones;