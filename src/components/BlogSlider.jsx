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


const BlogSlider = () => {

    const [hoveredSlide, setHoveredSlide] = useState(null);

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



    const slides = [
        { id: 1, type: 'Blog', img: 'microsoftteams-image-1.jpg', title: 'FedRAMP’s Latest Changes and Expectations', content: 'Everything changes, which means nothing stays the same. The Federal Risk and Authorization Management Program (FedRAMP) has encountered changes, and those changes mean that requirements are not the same for Cloud Service Providers (CSPs) who provide or plan to provide cloud service offerings (CSOs) to U.S. Government agencies.', link: 'https://wilsoncgrp.com/blog/fedramp-latest-changes-and-expectations' },
        { id: 2, type: 'Blog', img: 'newBaselineSecurityControl.jpg', title: 'FedRAMP Has New Baseline Security Control Requirements', content: 'Beware all cyber threats; you have new challenges to face! The Federal Risk and Authorization Management Program(FedRAMP) has implemented the new National Institute of Standards and Technology (NIST) 800-53 Rev.5 baseline and security control requirements to address cyber threats. Considered a new “threat-based methodology”, the changes provide guidance to assist Cloud Service Providers (CSPs), FedRAMP Third-Party Assessment Organizations (3PAOs), and Federal Agencies to transition to the new FedRAMP requirements. The Rev. 5 baseline is an innovative approach that helps the government to inform risk management decisions. Additionally, this approach provides CSPs, 3PAOs and Federal Agencies with an opportunity to expedite the authorization process by prioritizing controls that mitigate threats and vulnerabilities posing the most risks to federal systems and data.', link: 'https://wilsoncgrp.com/blog/fedramp-has-new-baseline-security-control-requirements' },
        { id: 3, type: 'Blog', img: 'cloudservices.jpg', title: 'FedRAMP: Mandatory Protection for Your Cloud Services with Federal Businesses', content: 'These days, many questions arise surrounding the security of data and cloud posture: “How did this happen, why did this happen, and can this happen again?” Fortunately, the Federal Risk and Authorization Management Program (FedRAMP) exists for non-federal organizations that handle sensitive, confidential government data.', link: 'https://wilsoncgrp.com/blog/mandatory-protection-for-your-cloud-services' },
        { id: 4, type: 'Data Sheet', img: 'resources.jpg', title: 'FedRAMP Datasheet', content: 'FedRAMP is a U.S. government-wide program that delivers a standard approach to the security assessment, authorization, and continuous monitoring of cloud products and services. Compliance is mandatory for all Cloud Service Providers (CSPs) that hold federal data and are providing or seeking to provide services to federal agencies.', link: 'https://wilsoncgrp.com/uploads/WCG-FedRAMP-Datasheet-20220815-2.pdf' },



        // Add more slides as needed
    ];

    return (
        <>
            <Container className='blogSlider'>
                <Box>
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
                                <motion.div
                                    onMouseEnter={() => handleHover(index)}
                                    onMouseLeave={() => handleHover(null)}
                                    transition={{ duration: 0.6 }}
                                    className="slideWrapper"
>
                                    

                                   

                                    
                                        <Card variant="" sx={{ height: '100%', display: 'flex', padding: '20px', borderRadius: '15px', border: '1px solid #CCCCCC', flexDirection: 'column', justifyContent: 'space-between', gap: '15px', backgroundColor: 'transparent'}}>
                                            <CardMedia
                                                sx={{ height: 300 }}
                                                image={`assets/img/${slide.img}`}
                                                title="green iguana"
                                            />
                                            <CardContent sx={{ padding: '10px 10px 0 10px', position: 'relative' }}>
                                                
                                            <Typography sx={{padding: '4px 29px', position: 'absolute', top: '-65px', right: '20px', textTransform: 'uppercase', color: '#fff', fontWeight: 500 }}  bgcolor='primary.main' className='subtitle' gutterBottom>{slide.type}</Typography>
                                                <Typography sx={{ color: "#000", fontSize: "20px", fontWeight: "600", lineHeight: 'normal' }} className='title' variant='h4' color="text.secondary" mb={2}>
                                                    {slide.title}
                                                </Typography>
                                                <Typography className='description'  color="secondary.main">
                                                    {slide.content.slice(0,110)} ...
                                                </Typography>
                                            </CardContent>
                                            <CardActions sx={{padding: '0 10px'}}>
                                                <Button sx={{paddingLeft: 0,  fontWeight: 'bold', fontSize: '16px'}} className='textBtn-sky'  varient='text' size="large" href={slide.link}  >Read More</Button>
                                            </CardActions>
                                        </Card>
                                    

                                </motion.div>





                            </SwiperSlide>

                        ))}

                        {/* Navigation Buttons */}
                        <Box className='customBottomNav' sx={{marginTop: '40px !important'}} >
                            {/* Pagination */}
                            <Box className="swiper-button-prev"><FaArrowLeft /></Box>
                            <Box className="custom-pagination"></Box>
                            <Box className="swiper-button-next"><FaArrowRight /></Box>
                        </Box>
                    </Swiper>

                </Box>
            </Container>
        </>
    )
}

export default BlogSlider