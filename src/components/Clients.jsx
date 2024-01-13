'use client'

import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './styles.module.css';

const Clients = () => {
   const [currentImage, setCurrentImage] = useState(0);

   const images = [
      './clients/ancla.png',
      './clients/arpeggio.png',
      './clients/celunion.png',
      './clients/dartis.png',
      './clients/erc.png',
      './clients/eyt.png',
      './clients/fundasuvicol.png',
      './clients/idime.png',
      './clients/ingeodata.png',
      './clients/lepine.png',
      './clients/sierracol.png',
      './clients/subocol.png'
   ];

   const imagesToShow = 4;

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
      <div className={styles.carouselClients}>
         <Slider {...settings} style={{ display: 'flex', alignItems: 'center'}}>
            {images.map((image, index) => (
               <div key={index}>
                  <img src={image} className={styles.carouselImageClients} />
               </div>
            ))}
         </Slider>
      </div>
   );
};

export default Clients;