import React, { useState } from 'react'
import { Box, Typography, Container, Button } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion"
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
import { Stack } from '@mui/system';
import bgBlue from '../../src/assets/img/bg5.png'


const BlogSlider = (props) => {

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
            slidesPerView: 2,
            spaceBetween: 20,

        },
        // when window width is >= 1024px
        1024: {
            slidesPerView: 2,
            spaceBetween: 40,

        },
        // when window width is >= 1024px
        1199: {
            slidesPerView: 3,
            spaceBetween: 40,

        },
    };
    return (
        <>
         <Box py={{md: 12, xs: 4}} bgcolor={'primary.light'} position='relative' >
          <Box sx={{
            backgroundImage: `url(${bgBlue})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom 50px right', backgroundSize: '160px', backgroundColor: 'rgba(255, 255, 255, 0.5)',
            width: '324px',
            height: '604px',
            position: 'absolute',
            right: 0,
            bottom: '20px',
            opacity: 0.3
          }} ></Box>
            <Typography className='sectionTitle' textAlign='center' mb={5}>Resources</Typography>
            <Container className='blogSlider'>
                <Box mx={-2}>
                    <Swiper
                    style={{padding: '15px'}}
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
                                <motion.div
                                    onMouseEnter={() => handleHover(index)}
                                    onMouseLeave={() => handleHover(null)}
                                    transition={{ duration: 0.6 }}
                                    className="slideWrapper"
                                >
                                    <Card variant="" sx={{ height: '100%', display: 'flex', padding: '20px', borderRadius: '15px', border: '1px solid #CCCCCC', flexDirection: 'column', justifyContent: 'space-between', gap: '15px', backgroundColor: 'transparent' }}>
                                        <CardMedia
                                            sx={{ height: 300 }}
                                            image={`${slide.img}`}
                                            title="green iguana"
                                        />
                                        <CardContent sx={{ height: { md: '150px' },  padding: '10px 10px 0 10px', position: 'relative' }}>

                                            <Typography sx={{ padding: '4px 29px', position: 'absolute', top: '-65px', right: '20px', textTransform: 'uppercase', color: '#fff', fontWeight: 500 }} bgcolor='primary.main' className='subtitle' gutterBottom>{slide.cat}</Typography>
                                            <Typography sx={{ color: "#000", fontSize: "20px", fontWeight: "600", lineHeight: 'normal', height: '60px', overflow: 'hidden' }} className='title resouBlogTitle' variant='h4' color="text.secondary" mb={2}>
                                                <a href={slide.link} >{slide.title}</a>
                                            </Typography>
                                            <Typography className='description' color="secondary.main">
                                                {slide.content.slice(0, 110)} ...
                                            </Typography>
                                        </CardContent>
                                        <CardActions sx={{ padding: '0 10px' }}>
                                            <Button sx={{ paddingLeft: 0, fontWeight: 'bold', fontSize: '16px' }} className='textBtn-sky' target={slide.cat === "Data Sheet" && '_blank'} varient='text' size="large" href={slide.link}  >{slide.cat === "Data Sheet" ? 'Download' : "Read More"}</Button>
                                        </CardActions>
                                    </Card>
                                </motion.div>
                            </SwiperSlide>
                        ))}

                        {/* Navigation Buttons */}
                        <Box className='customBottomNav' sx={{ marginTop: '40px !important' }} >
                            {/* Pagination */}
                            <Box className="swiper-button-prev"><FaArrowLeft /></Box>
                            <Box className="custom-pagination"></Box>
                            <Box className="swiper-button-next"><FaArrowRight /></Box>
                        </Box>
                    </Swiper>

                </Box>
            </Container>
            </Box>
        </>
    )
}

export default BlogSlider