'use client'

import React, { useState } from 'react';
import Lottie from 'react-lottie';
import headerUp from '../../public/upload.json';
import styles from './styles.module.css'
import Link from 'next/link';
import { animateScroll } from 'react-scroll';


const HeaderIcon = () => {
    const [isHovered, setIsHovered] = useState(false);

    const defaultOptions = {
        loop: true,
        autoplay: false,
        animationData: headerUp,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    const handleScrollToTop = () => {
        animateScroll.scrollToTop();
    };

    return (
        
        <div
            className={styles.headerUp}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link href="#" smooth="true" duration={300} onClick={handleScrollToTop}>
                <Lottie
                    options={defaultOptions}
                    height={80}
                    width={80}
                    isStopped={!isHovered}
                />
            </Link>
        </div>
    );
};
export default HeaderIcon;