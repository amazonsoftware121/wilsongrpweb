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
        { id: 1, cat: 'Data Sheet', img: 'cloud-serv.png', title: 'Cloud Services', content: 'Cloud Services enable businesses to utilize a network of remote systems to transmit, process, store and access data, applications, and services over the Internet, which boosts their competitiveness in the digital space. Cloud solutions come in various forms and sizes to cater to different organizational needs. ', link: 'https://wilsoncgrp.com/uploads/1597586929593_Cloud%20Services.pdf' },
        { id: 2, cat: 'Blog', img: 'network-2402637_960_720.webp', title: 'Combatting the Security Risks of Cloud Computing', content: 'Small and large enterprises continue to benefit from increased digitization and greater use of cloud-based application and storage facilities.', link: 'https://wilsoncgrp.com/blog/combatting-the-security-risks-of-cloud-computing' },
        { id: 3, cat: 'Blog', img: 'cloud-3406627_960_720.webp', title: 'The Risks of Using Cloud Services', content: 'When J. C. R. “Lick” Licklider developed ARPAnet in 1962, he had the vision of creating a device that could receive and send data simultaneously amongst a large group of people. He called this idea the  “Intergalactic Computer Network”.', link: 'https://wilsoncgrp.com/blog/the-risks-of-using-cloud-services' },
        { id: 4, cat: 'Blog', img: 'Cracking-the-Enigma-of-Cloud-Computing-1200x450-1.webp', title: 'Cracking the Enigma of Cloud Computing', content: 'One of the most frequent questions tech industry insiders get from those working outside of the industry is “What is the cloud?” ', link: 'https://wilsoncgrp.com/blog/cracking-the-enigma-of-cloud-computing' },
        {id: 5, cat: 'Blog', img: 'cloud-computing-101.webp', title: 'Cloud Computing 101', content: 'Visionary Steve Jobs once spoke of a dream in which data could be uploaded and accessed anywhere. Before there was the cloud, there were floppy disks, CD ROMs and very large immobile hardware. Fast forward to 2015 – now we are able to access and store information without physical limitations.', link: 'https://wilsoncgrp.com/blog/cloud-computing-101'}


        // Add more slides as needed
    ];

    return (
        <>
        <Typography className='sectionTitle' textAlign='center' mb={7}>Resources</Typography>
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
                                                
                                            <Typography sx={{padding: '4px 29px', position: 'absolute', top: '-65px', right: '20px', textTransform: 'uppercase', color: '#fff', fontWeight: 500 }}  bgcolor='primary.main' className='subtitle' gutterBottom>{slide.cat}</Typography>
                                                <Typography sx={{ color: "#000", fontSize: "20px", fontWeight: "600", lineHeight: 'normal' }} className='title' variant='h4' color="text.secondary" mb={2}>
                                                    {slide.title}
                                                </Typography>
                                                <Typography className='description'  color="secondary.main">
                                                    {slide.content.slice(0,110)} ...
                                                </Typography>
                                            </CardContent>
                                            <CardActions sx={{padding: '0 10px'}}>
                                                <Button sx={{paddingLeft: 0,  fontWeight: 'bold', fontSize: '16px'}} className='textBtn-sky' target={slide.cat === "Data Sheet" && '_blank'}  varient='text' size="large" href={slide.link}  >{slide.cat === "Data Sheet" ? 'Download' : "Read More"}</Button>
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