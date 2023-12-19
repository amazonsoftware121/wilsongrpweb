import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import 'swiper/css';
import 'swiper/css/navigation';


import img1 from '../../../src/assets/img/microsoftteams-image-1.jpg';
import img2 from '../../../src/assets/img/newBaselineSecurityControl.jpg';
import img3 from '../../../src/assets/img/cloudservices.jpg';
import img4 from '../../../src/assets/img/medical-banner-with-doctor-working-laptop.jpg';
import img5 from '../../../src/assets/img/fedRAMPCompliance.jpg';
import img6 from '../../../src/assets/img/whatnist.jpg';

import { Navigation } from 'swiper/modules';

const Insight = () => {
    const [swiper, setSwiper] = useState(null);
    const [activeTab, setActiveTab] = useState(0);

    const slides = [
        { id: 1, title: "FedRAMP’s Latest Changes and Expectations", date: "Sep 5, 2023", img: img1 },
        { id: 2, title: "FedRAMP Has New Baseline Security Control Requirements", date: "Aug 31, 2023", img: img2 },
        { id: 3, title: "FedRAMP: Mandatory Protection for Your Cloud Services with Federal Businesses", date: "Jul 24, 2023", img: img3 },
        { id: 4, title: "Improving Cybersecurity Awareness in Healthcare", date: "Oct 27, 2022", img: img4 },
        { id: 5, title: "FedRAMP Compliance: What You Need to Know?", date: "Oct 19, 2022", img: img5 },
        { id: 6, title: "What NIST 800-53 Revision 5 Means to Cybersecurity?", date: "Oct 12, 2022", img: img6 },
        // Add more slides as needed
    ];

    const navigation = {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    };

    const handleSlideChange = (swiper) => {
        setActiveTab(swiper.activeIndex);
    };
    console.log(swiper);
    return (
        <>


            <Box className="insight" sx={{ display: 'flex', 
            height: {
                sm: 'auto',
                md: '100vh'
                }, 
            minHeight: {
                sm: 'auto',
                md: '750px'
            } }} >
                {/* Left Side Tabs */}


                <Grid container>
                    <Grid item sm={12} md={4} xs={12} sx={{
                        position: 'relative',
                        padding: {
                            md: '70px 40px 40px 70px',
                            xs: '40px 15px'
                        }, backgroundColor: '#F1F1F1', color: '#fff'
                    }}>

                        <Typography className='colorPrimary'>Insight</Typography>
                        <Typography component={"h2"} variant='h2' color={"black"} className='sectionTitle' mb={3} mt={1}>Discover Innovative Solutions</Typography>
                        <Box sx={{
                            display: {
                                md: 'block',
                                xs: 'none'
                            }
                        }}>
                            {slides.map((slide, index) => (
                                <div key={slide.id} onClick={() => swiper.slideTo(index)} style={{ cursor: 'pointer', marginBottom: '20px' }}>
                                    <Button variant="outlined" sx={{ width: '400px', color: activeTab === index ? '#fff' : '#28A0CF', backgroundColor: activeTab === index ? '#28A0CF' : 'transparent' }}>
                                        {slide.title.length > 38 ? `${slide.title.slice(0, 38)}...` : slide.title}
                                    </Button>
                                </div>
                            ))}
                        </Box>

                        {/* Navigation Arrows */}



                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="justify"
                        >


                            <Button variant="contained" className='bottomButton'>Explore Latest Insights</Button>

                            <Box mt={3} className="insightNav">
                                <ArrowBackIcon
                                    className="swiper-button-prev"
                                    onClick={() => swiper.slideTo(index - 1)}
                                    sx={{ fontSize: '2rem' }}
                                />
                                <ArrowForwardIcon
                                    className="swiper-button-next"
                                    onClick={() => swiper.slideTo(index + 1)}
                                    sx={{ fontSize: '2rem' }}

                                />
                            </Box>
                        </Grid>
                    </Grid>

                    {/* Right Side Swiper */}
                    <Grid item xs={12} md={8}>
                        <Box
                            sx={{ width: '100%', height: {
                                xs: 'auto',
                                md: '100vh'
                                }, minHeight: {
                                xs: '50vh',
                                md: '750px',
                                } }}
                        >
                            <Swiper className='insigtSwipperRight'

                                mousewheel={false}
                                onSwiper={(swiper) => {
                                    setSwiper(swiper);
                                    handleSlideChange(swiper);
                                }}
                                onSlideChange={(swiper) => handleSlideChange(swiper)}
                                navigation={navigation}

                                breakpoints={{
                                    600: {
                                        slidesPerView: 1, // 1 slide for screens less than 600 pixels wide
                                        direction: 'horizontal'
                                    },
                                    960: {
                                        slidesPerView: 1.5, // 1.5 slides for screens between 600 and 960 pixels wide
                                        direction: 'vertical'
                                    },
                                    1280: {
                                        slidesPerView: 1.5, // 2 slides for screens between 960 and 1280 pixels wide
                                        direction: 'vertical'
                                    },
                                    // Add more breakpoints as needed
                                }}



                                modules={[Navigation]}
                                effect={'slide'} // You can change this to 'fade' or other effects
                                // Adjust the space between slides (negative margin for overlap)
                                speed={800} // Adjust the speed of the transition (in milliseconds)
                               

                            >
                                {slides.map((slide) => (
                                    <SwiperSlide key={slide.id} style={{
                                        height: 'calc(100%)',
                                        background: `linear-gradient(352.88deg, rgba(1, 78, 109, 0.8) 36.5%, rgba(0, 0, 0, 0) 83.35%) , url(${slide.img}) top/cover no-repeat`,
                                    }}
                                    >
                                        <Box className='slideWrapper'>
                                            <Box className="slide-content">
                                                <Box>
                                                    <Typography mb={2}>{slide.date}</Typography>
                                                    <Typography variant="h2" className='title' component={'h2'} mb={3}>{slide.title}</Typography>

                                                    <Button variant='text' href='#' mt={2} sx={{ color: "#fff" }}>Read More &nbsp; <FaArrowRight size={12} /></Button>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

        </>
    );
};

export default Insight;
