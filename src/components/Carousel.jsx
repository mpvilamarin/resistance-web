'use client'

import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './styles.module.css';

const Carousel = () => {
   const [currentImage, setCurrentImage] = useState(0);

   const images = [
      './certificaciones/AWS.png',
      './certificaciones/CISA.png',
      './certificaciones/CISM.png',
      './certificaciones/COBIT.png',
      './certificaciones/ISO3100.png',
      './certificaciones/ISO22301.png',
      './certificaciones/ISO27001.png',
      './certificaciones/ISO27032.jpeg',
      './certificaciones/ITIL4.png',
   ];

   const imagesToShow = 3;

   const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: imagesToShow,
      slidesToScroll: 1,
      swipeToSlide: true,
      afterChange: (index) => setCurrentImage(index),
   };

   return (
      <div className={styles.carousel}>
         <Slider {...settings} style={{ display: 'flex', alignItems: 'center'}}>
            {images.map((image, index) => (
               <div key={index}>
                  <img src={image} className={styles.carouselImage} />
               </div>
            ))}
         </Slider>
      </div>
   );
};

export default Carousel;