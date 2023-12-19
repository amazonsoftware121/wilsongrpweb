import React,{useEffect, useRef } from 'react'
import Header from '../components/Header'
import MainBanner from '../components/Home/MainBanner'
import Services from '../components/Home/Services'
import Features from '../components/Home/Features'
import {motion} from 'framer-motion';
import { Opacity } from '@mui/icons-material'
import CaseStudies from '../components/Home/CaseStudies'
import Insight from '../components/Home/Insight'
import HorizontalWrapper from '../components/HorizontalWrapper'


const Root = () => {

   
    return (
        <>
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
            </div>
        </>
    )
}

export default Root