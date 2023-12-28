import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Container, Button, Typography } from "@mui/material";

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Mousewheel, Pagination } from 'swiper/modules';
import { FaArrowRight } from 'react-icons/fa';
import { Label } from '@mui/icons-material';
import { useRef } from "react";
import hover3d from '../../utils/hover';

import { motion, useScroll, useTransform } from 'framer-motion';
import Communication from '../../../src/assets/img/communications_new.jpg';
import Features2 from '../../../src/assets/img/features2.jpg';
import HealthIndustiresnew from '../../../src/assets/img/healthIndustiresnew.jpg';
import InsuranceNew from '../../../src/assets/img/insuranceNew.jpg'
import FinancialInstitutions from '../../../src/assets/img/financial_institution.jpg'





const Features = () => {

    const secRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: secRef,
        offset: ["start end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 0.4], [0, 1]);


    const [swiper, setSwiper] = useState(null);

    const slides = [
        { id: 1, title: 'Government and Public', desc: "Wilson Consulting Group (WCG) is effectively positioned to assist organizations in numerous industries to successfully achieve their objectives and transform and secure their IT environments and applications by providing expert IT governance, risk management, and compliance consulting services.", img: Communication, link: 'https://wilsoncgrp.com/government-and-public-services' },
        { id: 2, title: 'Banking and Capital Markets', desc: "Meeting regulatory requirements and securing businesses against cyber-attacks helps bolster customer satisfaction, increase workforce productivity, improve supplier or partner integration, and reduce operational costs.", img: Features2, link: 'https://wilsoncgrp.com/banking-and-capital-markets' },
        { id: 3, title: 'Financial Institutions', desc: "Today's data-driven, hacker-filled digital world presents unique opportunities for growth in the financial industry. However, the challenges to financial IT are persistent and constantly evolving.", img: FinancialInstitutions, link: 'https://wilsoncgrp.com/financial-institutions' },
        { id: 4, title: 'Educational Institutions and Nonprofit Organizations', desc: "Wilson Consulting Group’s (WCG) secure e-learning models by creating a comprehensive defense mechanism against threats and vulnerabilities in cyber education practices.", img: InsuranceNew, link: 'https://wilsoncgrp.com/educational-institutions-and-nonprofit-organizations' }
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

            <Box component="section" className="features">
                <Swiper
                    direction={'horizontal'}
                    mousewheel={false}
                    onSwiper={(swiper) => setSwiper(swiper)}
                    onSlideChange={handleSlideChange}
                    pagination={pagination}
                    modules={[Pagination, Mousewheel]}
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id} style={{
                            background: `linear-gradient(1.22deg, rgba(4, 77, 105, 0.7) 21.34%, rgba(4, 77, 105, 0) 92.71%),
url(${slide.img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover',height: '100vh', backgroundPosition: 'bottom center'
                        }} >
                            <Box className='slideWrapper'>
                                <Container>
                                    <motion.div initial={{ y: 200, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 1.5 }}>
                                        <Box className="slide-content" style={{
                                            color: '#fff'
                                        }}>
                                            <span className='labelCustom'>Features</span>
                                            <Typography  component='h2' className='title' style={{ marginTop: "35px" }}>{slide.title}</Typography>
                                            <Typography fontSize={{xs: '14px', md: '16px'}} my={3}>{slide.desc}</Typography>

                                            <Button variant='text' className='textBtn-light' href={slide.link} mt={2} endIcon={<FaArrowRight size={12} />} sx={{
                                                color: "#fff",
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
                <Box className="morServicesBtn"><Button variant='outlined' href='https://wilsoncgrp.com/industry-sectors' className='textBtn-sky' >Explore More Industries We Serve &nbsp; <span><FaArrowRight size={14} /></span></Button></Box>
            </Box>

        </>
    )
}

export default Features