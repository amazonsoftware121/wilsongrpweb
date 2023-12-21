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
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Stack } from '@mui/system';


const Services = () => {

    const [hoveredSlide, setHoveredSlide] = useState(null);

    const handleHover = (index) => {
        setHoveredSlide(index);
    };


    const breakpoints = {
        // when window width is >= 768px
        768: {
            slidesPerView: 1,
            spaceBetween: 10,
            grid: {
                rows: 1,
            },
        },
        // when window width is >= 1024px
        1024: {
            slidesPerView: 4,
            spaceBetween: 40,
            grid: {
                rows: 2,
            },
        },
    };



    const slides = [
        { id: 1, img: 'Vulnerability-Assessment.jpg', title: 'Vulnerability Assessment', content: 'Wilson Consulting Group’s cyber security Vulnerability Assessment are designed to evaluate any threats and vulnerabilities to an organization’s information systems and environment.', link: '#' },
        { id: 2, img: 'Penetration-Testing-Services.jpg', title: 'Penetration Testing', content: 'WCG conducts cyber security penetration testing of an organization’s applications, systems and devices to identify vulnerable Internet Protocol (IP) access points, determine where resilience to internal & external attacks and breaches are weak.', link: '#' },
        { id: 3, img: 'Security-Assessment-and-Authorization.jpg', title: 'Security Assessment and Authorization (SA & A)', content: 'WCG’s Security Assessment and Authorization Service is a formal test that evaluates the management, operational and technical controls of the application and system to ensure that the security controls are adequate, configured properly, and satisfy the NIST standards.', link: '#' },
        { id: 4, img: 'Security-Policies-and-Procedures-Development.jpg', title: 'Security Policies and Procedures Development', content: 'Wilson Consulting Group (WCG) assists organizations in developing sound policies and procedures to ensure proper control over information systems and related resources.', link: '#' },
        { id: 5, img: 'FedRAMPAdvisoryand.jpg', title: 'FedRAMP', content: 'Achieve and maintain your FedRAMP Authority to Operate (ATO) with a reliable certified FedRAMP Third-Party Assessment Organization (3PAO)', link: '#' },
        { id: 6, img: 'CybersecurityMaturityModelCertificationCMMC.jpg', title: 'Cybersecurity Maturity Model Certification (CMMC)', content: 'Get ready for DoD CMMC with our efficient compliance consulting and remediation services. Reduce your level of efforts & risks. Start your journey with WCG today to maintain and win DoD contracts.', link: '#' },
        { id: 7, img: 'FISMAAssessmentServices.jpg', title: 'FISMA', content: 'Wilson Consulting Group’s Federal Information Security Management Act (FISMA) Assessment provides knowledgeable and experienced consultants to assist organizations and federal agencies to improve their security posture and become compliant with FISMA.', link: '#' },
        { id: 8, img: 'IT-Governance.jpg', title: 'GDPR', content: 'Wilson Consulting Group (WCG) understands the complexity of the European Union (EU) General Data Protection Regulation (GDPR) and provides organizations with GDPR Consulting Services to address their challenges of compliance.', link: '#' },


        { id: 9, img: "IT-Governance.jpg", title: 'IT Governance', content: "Wilson Consulting Group assists businesses and government agencies by offering practical frameworks, processes, and tool kits to optimize existing governance systems or initiate governance for the first time.", link: "#" },
        { id: 10, img: 'Network-Security-Awareness-Training-and-Development.jpg', title: 'Network Security Awareness Training and Development', content: 'WCG provides comprehensive and continuous awareness and training programs designed to help organizations protect data, increase productivity, and safely utilize information technology.', link: '#' },
        { id: 11, img: 'Gramm-Leach-Bliley-ActGLBA-Compliance.jpg', title: 'Gramm-Leach Bliley Act (GLBA) Compliance', content: 'Evaluate your compliance level to meet GLBA requirements and ensure security controls are sufficient in development and implementation to remediate any non-compliance.', link: '#' },
        { id: 12, img: 'CaliforniaConsumerPrivacyActCCPA.jpg', title: 'California Consumer Privacy Act (CCPA)', content: 'WCG has strengthened and unified data production for customers within the European Union. We are ready to assist other businesses in accomplishing the regulatory CCPA Compliance.', link: '#' },
        { id: 13, img: 'HealthInsurancePortabilityandAccountabilityActHIPAA.jpg', title: 'Health Insurance Portability and Accountability Act (HIPAA)', content: 'Wilson Consulting Group (WCG) provides HIPAA compliance services for organizations looking to assess and determine their compliance with the HIPAA Security Rule.', link: '#' }
        // Add more slides as needed
    ];

    return (
        <>
            <Container className='homeServices'>
                <Box>
                    <Swiper
                        breakpoints={breakpoints}
                        grid={{
                            rows: 2,
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
                                    style={{
                                        backgroundImage: `url(assets/img/${slide.img})`,
                                        boxSizing: 'border-box',
                                        position: 'relative',
                                    }} >
                                    <Box className="slide-content">
                                        <Typography className='subtitle' gutterBottom>Services</Typography>
                                        <Typography className='title' varient="h2" sx={{ color: "#000", fontWeight: "700" }}  >{slide.title}</Typography>
                                        <Typography

                                            display={{ lg: "none", sm: "block" }} className='description' sx={{ mt: 1.5, mb: 2 }} color="#fff" fontSize={"14px"}>
                                            {slide.content.length > 180 ? `${slide.content.slice(0, 180)}...` : slide.content}
                                        </Typography>

                                    </Box>

                                    <Stack direction="row" flexWrap='wrap' justifyContent="space-between">
                                        <Button href='#' variant="text" sx={{ color: "#fff" }}>Read More <FaArrowRight my={2} /></Button>
                                        <Button className='serviceExpandBtn' size='large'
                                            sx={{
                                                display: {
                                                    xs: 'inherit',
                                                    sm: 'inherit',
                                                    md: 'none',
                                                    lg: 'none'
                                                }
                                            }}
                                            endIcon={<FaArrowRight my={2} size={14} />} variant="contained">Request consultation</Button>
                                    </Stack>

                                    <Box className="serviceApend" display={{ xs: 'none', sm: 'none', md: 'none', lg: 'block' }}>
                                        <Card variant="" sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#F1F1EF', borderRadius: '0', padding: '10px 30px 30px 30px' }}>
                                            <CardContent>
                                                <Typography className='subtitle' gutterBottom>Services</Typography>

                                                <Typography sx={{ color: "#000", fontSize: "24px", fontWeight: "700" }} className='title' variant='h4' color="text.secondary" mb={2}>
                                                    {slide.title}
                                                </Typography>
                                                <Typography className='description' sx={{ mb: 1.5 }} color="secondary.main">
                                                    {slide.content}
                                                </Typography>
                                            </CardContent>
                                            <CardActions sx={{ justifyContent: 'space-between' }} >
                                                <Button className='textBtn-dark' varient='text' size="large" href='#' endIcon={<FaArrowRight my={2} size={14} />} >Learn More</Button>
                                                <Button className='serviceExpandBtn' size='large' endIcon={<FaArrowRight my={2} size={14} />} variant="contained">Request consultation</Button>
                                            </CardActions>
                                        </Card>
                                    </Box>

                                </motion.div>





                            </SwiperSlide>

                        ))}

                        {/* Navigation Buttons */}
                        <div className='customBottomNav'>
                            {/* Pagination */}
                            <div className="swiper-button-prev"><FaArrowLeft /></div>
                            <div className="custom-pagination"></div>
                            <div className="swiper-button-next"><FaArrowRight /></div>
                        </div>
                    </Swiper>

                </Box>
            </Container>
        </>
    )
}

export default Services