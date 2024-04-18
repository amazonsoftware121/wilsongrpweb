import React, { useState } from 'react'
import { Box, Typography, Container, Button } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Grid, Pagination, Navigation } from 'swiper/modules';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Stack, width } from '@mui/system';
import bgBlue from '../../src/assets/img/bg5.png'


const ContentSlider = (props) => {

    const [hoveredSlide, setHoveredSlide] = useState(null);
    const slides = props.resourcesSlide;
    const handleHover = (index) => {
        setHoveredSlide(index);
    };


    const breakpoints = {
        // when window width is >= 768px
        320: {
            slidesPerView: 1,
            spaceBetween: 20,

        },
        768: {
            slidesPerView: 1,
            spaceBetween: 20,

        },
        // when window width is >= 1024px
        1024: {
            slidesPerView: 1,
            spaceBetween: 40,

        },
        // when window width is >= 1024px
        1199: {
            slidesPerView: 1,
            spaceBetween: 40,

        },
    };
    return (
        <>
            <Box bgcolor='#fff' my={{ md: 4, xs: 4 }} position='relative' sx={{borderRadius: '30px', overflow: 'hidden', boxShadow: '0px 0px 30px 0px rgba(0, 0, 0, 0.1)'}} >

                <Box className='ContentSlider'>
                    <Box >
                        <Swiper
                            
                            breakpoints={breakpoints}
                            grid={{
                                rows: 1,
                            }}
                            spaceBetween={40}
                            pagination={{
                                clickable: true,
                                el: '.custom-pagination'
                            }}
                            navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}

                            modules={[Grid, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            {slides.map((slide, index) => (
                                <SwiperSlide key={slide.id} className={`slideNumber${index}`} >
                                    <Box className="slideWrapper">
                                        <Box display='flex' alignItems='center' sx={{flexDirection: {xs: 'column', sm: 'column', md: 'row'}}}>
                                            <Box sx={{ width: {sm: '100%', xs: '100%', md: '45%'} }}>
                                                <img src={slide.img} style={{ width: '100%' }} />
                                            </Box>
                                            <Box sx={{ width: {sm: '100%', xs: '100%', md: '55%'} }} >
                                            <Box py={{md: 10, xs: 3, sm: 4}} px={{md: 9, xs: 3, sm: 4}} >
                                                <Typography variant='h4' pb={{md: 3, xs: 1}} fontSize='28px' fontWeight='700'>{slide.title}</Typography>
                                                <Typography pb={{md:0, xs: 6}} fontSize={{xs: '16px', md:'18px'}} lineHeight={{xs: '26px', md:'32px'}}>{slide.content}</Typography>
                                            </Box>
                                            </Box>
                                        </Box>

                                    </Box>
                                </SwiperSlide>
                            ))}

                            {/* Navigation Buttons */}
                            <Box className='customBottomNav'  >
                                {/* Pagination */}
                                <Box className="custom-pagination"></Box>
                            </Box>
                        </Swiper>

                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default ContentSlider