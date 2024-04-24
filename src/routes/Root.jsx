import React, { useEffect, useRef } from 'react'
import MainBanner from '../components/Home/MainBanner'
import Services from '../components/Home/Services'
import Features from '../components/Home/Features'
import { motion } from 'framer-motion';
import CaseStudies from '../components/Home/CaseStudies'
import Insight from '../components/Home/Insight'
import HorizontalWrapper from '../components/HorizontalWrapper'
import Newsletter from '../components/Newsletter';
import { Helmet } from 'react-helmet';


const Root = () => {


    return (
        <>
            <Helmet>
                <title>Wilson Consulting Group | Global Cyber Security Firm</title>
                <meta name="description" content="Wilson Consulting Group is an innovative global cybersecurity consulting firm headquartered in Washington D.C., with a European office in London, England." />
                <link rel="canonical" href="https://wilsoncgrp.com/" />
            </Helmet>
            <div className='home'>
                <MainBanner />
                <HorizontalWrapper >
                    <motion.div initial={{ y: 200, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}>
                        <div><Services /></div>
                    </motion.div>
                </HorizontalWrapper>
                <div><Features /></div>
                <HorizontalWrapper>
                    <div>
                        <CaseStudies />
                    </div>
                </HorizontalWrapper>
                <Insight />
                <Newsletter />
            </div>
        </>
    )
}

export default Root