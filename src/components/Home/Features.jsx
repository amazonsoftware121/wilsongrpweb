import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Container,Button, Typography } from "@mui/material";

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Mousewheel, Pagination } from 'swiper/modules';
import { FaArrowRight } from 'react-icons/fa';
import { Label } from '@mui/icons-material';
import { useRef } from "react";
import hover3d from '../../utils/hover';

import {motion, useScroll, useTransform} from 'framer-motion';
import Communication from '../../../src/assets/img/communications_new.jpg';
import Features2 from '../../../src/assets/img/features2.jpg';
import HealthIndustiresnew from '../../../src/assets/img/healthIndustiresnew.jpg';
import InsuranceNew from '../../../src/assets/img/insuranceNew.jpg'





const Features = () => {

const secRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target: secRef,
        offset: ["start end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 0.4], [0,1]);

    
    const [swiper, setSwiper] = useState(null);

    const slides = [
        { id: 1, title: 'Communications', desc:"Wilson Consulting Group (WCG) assists businesses in improving their communications infrastructure by conducting a comprehensive analysis of their current system to identify strengths and weaknesses.", img: Communication },
        { id: 2, title: 'Banking and Capital Markets', desc:"Today’s dynamic and evolving insurance industry faces complex information technology challenges. Wilson Consulting Group’s (WCG) team of professionals guide our insurance industry clients to achieve a competitive advantage.", img: Features2 },
        { id: 3, title: 'Healthcare Industry', desc:"The dynamic use of information technology in the healthcare industry presents unique challenges for healthcare providers. E-health has become the preferred method of communication,research, and record-keeping for many care services.", img: HealthIndustiresnew },
        { id: 4, title: 'Insurance', desc:"Today’s dynamic and evolving insurance industry faces complex information technology challenges. Wilson Consulting Group’s (WCG) team of professionals guide our insurance industry clients to achieve a competitive advantage.", img: InsuranceNew }
        // Add more slides as needed
    ];
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<div class="' + className + '">' + `<span>${slides[index].id}</span> <div class="slidebar"></div> <span>${slides[index].title}</span>` + '</div>';
        },
    };
    const handleSlideChange = () => {
        // Update progress bar or perform any other actions on slide change
    };

    return (
        <>
        
            <Box component="section" className="features" sx={{ height: 'calc(100vh - 16px)' }} >
                <Swiper 
                    direction={'horizontal'}
                    mousewheel={false}
                    onSwiper={(swiper) => setSwiper(swiper)}
                    onSlideChange={handleSlideChange}
                    pagination={pagination}
                    modules={[Pagination, Mousewheel]}
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id} style={{ background: `linear-gradient(1.22deg, rgba(4, 77, 105, 0.7) 21.34%, rgba(4, 77, 105, 0) 92.71%),
url(${slide.img})`,backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: "100vh", backgroundPosition: 'bottom center' }} >
                            <Box className='slideWrapper'>
                                <Container>
                                <motion.div initial={{y: 200 , opacity: 0}}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 1.5 }}>
                                <Box className="slide-content" style={{
                color: '#fff'
              }}>
                                <span className='labelCustom'>Features</span>
                                    <h2 className='title' style={{marginTop: "35px"}}>{slide.title}</h2>
                                    <Typography my={3}>{slide.desc}</Typography>

                                    <Button variant='text' className='textBtn-light' href='#' mt={2} endIcon={<FaArrowRight  size={12} />} sx={{color: "#fff",
                                    '&:hover': {
color: '#000'
                                    }
                                    }} >Read More </Button>
                                </Box>
                                </motion.div>
                                </Container>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
            
        </>
    )
}

export default Features