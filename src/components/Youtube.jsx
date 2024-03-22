'use client'

import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '@/styles/youtube.module.css';
import axios from 'axios';



function Youtube() {
    const [currentImage, setCurrentImage] = useState(0);
    const [videos, setVideos] = useState([]);

    const imagesToShow = 4;

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: imagesToShow,
        slidesToScroll: 1,
        swipeToSlide: true,
        afterChange: (index) => setCurrentImage(index),
    };

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const apiKey = 'AIzaSyBTRg59JMHSUHgEfEHIt-NLXWHnc8RVsHs';
                const channelId = 'UCasKWQFfPNp8QWW6MklNB_Q';
                const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=32`);

                setVideos(response.data.items);
            } catch (error) {
                console.error('Error fetching YouTube videos:', error);
            }
        };

        fetchVideos();
    }, []);

    const openVideoInNewTab = (videoId) => {
        window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
    };


    return (
        <div className={styles.carousel}>
            <Slider {...settings} style={{ display: 'flex', alignItems: 'center' }}>
                {videos && videos.length > 0 && videos.map((video, index) => (
                    <div key={index} onClick={() => openVideoInNewTab(video.id.videoId)}>
                        <img 
                        src={video.snippet.thumbnails.default.url} 
                        alt={video.snippet.title} 
                        className={styles.carouselVideo} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Youtube;