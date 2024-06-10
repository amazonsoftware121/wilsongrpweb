import React from 'react';
import PageHeader from '../components/PageHeader';
import headerBg from '../assets/img/banner/cmmc_banner.webp';
import WhyUs from '../components/WhyUs';
import ContactUs from '../components/ContactUs';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import bgBlue from '../../src/assets/img/bg5.png';
import cmmcBg from '../../src/assets/img/cmmc_bg.jpg';
import { motion } from 'framer-motion';
import { FaExclamation, FaNewspaper, FaHandshake  } from "react-icons/fa";


const CybersecurityMaturityModelCertification = () => {
  const iframeElement = <iframe width="100%" height="480" src="https://www.youtube.com/embed/aYaZIFheY0c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>

  return (
    <>
      <PageHeader canonicalUrl="cybersecurity-maturity-model-certification" requestConBtn="#contactUs" videoUrl={iframeElement} headTitle="CMMC Compliance Consulting | CMMC Assessment and Remediation" metaDesc="WCG’s CMMC Compliance Consulting and Remediation Services reduce your organization’s level of efforts & risks and help maintain and win DoD contracts." parent="Compliance Services" parentUrl="cybersecurity-maturity-model-certification" title={"Cybersecurity Maturity Model Certification (CMMC)"} backgroundImage={headerBg} />
      <Box className="mainContent">
        <Box className="pageInfoSection" py={{ md: 12, xs: 6 }} sx={{ backgroundImage: `url(${bgBlue})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom 50px right', backgroundSize: '160px' }}>
          <Box className="container">
            <Typography variant='h2' className='sectionTitle'>What is CMMC?</Typography>
            <Box mt={{ xs: 2, md: 3 }}>
              <Stack spacing={3}>

                <Typography >
                  The Cybersecurity Maturity Model Certification (CMMC) is the Department of Defense’s (DoD) latest verification mechanism designed to ensure that cybersecurity controls and processes adequately protect Controlled Unclassified Information (CUI) that resides on Defense Industrial Base (DIB) systems and networks.

                </Typography>

                <Typography>
                  The DoD CMMC establishes five CMMC certification levels that reflect the maturity and reliability of an organization’s cybersecurity infrastructure to safeguard sensitive government information on contractors' information systems. This DoD CMMC framework is the vehicle by which the government will mandate a contractor’s cyber security maturity level to be verified by an independent third-party audit.
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Box>


        <Box className="cmmmTimeline" py={{ md: 12, xs: 6 }} sx={{ position: 'relative' }}>
          <Box sx={{ opacity: 0.3, top: 0, position: 'absolute', backgroundImage: `url(${cmmcBg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', width: '100%', height: '100%' }}></Box>
          <Box className="container" sx={{ position: 'relative', zIndex: '9' }}>
            <Typography variant='h2' textAlign='center' className='sectionTitle'>CMMC Timeline</Typography>
            <Box className="centerBorderWrapper" mt={8}>
              <Grid container>
              <Grid  className="centerBorderWrapperContent " xs={12} md={6} >
                  <Box pb={5} className="centerBorderWrapperContentInner left">
                    <Box className='iconHeading' mt={0}><span className='iconBorder'><FaExclamation /></span></Box>
                    <motion.div initial={{ x: -100, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}>
                      <Box maxWidth="350px" mt={3}>
                      <Stack spacing={2}>
                        
                        <Typography variant='h4' sx={{ fontSize: '20px', fontWeight: 'bold' }} color='primary.main'>October 2019</Typography>
                        <Typography sx={{ fontWeight: 500 }}>CMMC implemented requirements released</Typography>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '18px', color: '#333333' }} variant='h5'>PHASE 01</Typography>
                      </Stack>
                      </Box>
                    </motion.div>

                  </Box>
                </Grid>
                <Grid xs={12} md={6}>
                </Grid>





               
              </Grid>

              <Grid container >
              <Grid xs={12} md={6}>
                </Grid>
              <Grid className="centerBorderWrapperContent" xs={12} md={6}>
                  <Box pb={5} className="centerBorderWrapperContentInner right">
                    <Box className='iconHeading' mt={0}><span className='iconBorder'><FaNewspaper /></span></Box>
                    <motion.div initial={{ x: 100, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}>
                      <Box maxWidth="350px" mt={3}>
                      <Stack spacing={2}>
                        
                        <Typography variant='h4' sx={{ fontSize: '20px', fontWeight: 'bold' }} color='primary.main'>January 2020</Typography>
                        <Typography sx={{ fontWeight: 500 }}>Version 1.0 finalization; compliance checklist released</Typography>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '18px', color: '#333333' }} variant='h5'>PHASE 02</Typography>
                      </Stack>
                      </Box>
                    </motion.div>

                  </Box>
                </Grid> 
              </Grid>


              <Grid container >
              
              <Grid className="centerBorderWrapperContent" xs={12} md={6}>
                  <Box pb={5} className="centerBorderWrapperContentInner left">
                    <Box className='iconHeading' mt={0}><span className='iconBorder'><FaHandshake  /></span></Box>
                    <motion.div initial={{ x: -100, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}>
                      <Box maxWidth="350px" mt={3}>
                      <Stack spacing={2}>
                        
                        <Typography variant='h4' sx={{ fontSize: '20px', fontWeight: 'bold' }} color='primary.main'>January 2020</Typography>
                        <Typography sx={{ fontWeight: 500 }}>Version 1.0 finalization; compliance checklist released</Typography>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '18px', color: '#333333' }} variant='h5'>PHASE 02</Typography>
                      </Stack>
                      </Box>
                    </motion.div>

                  </Box>
                </Grid>
                <Grid xs={12} md={6}>
                </Grid>
                





               
              </Grid>


            </Box>




          </Box>




        </Box>

        <WhyUs />
        <ContactUs />
      </Box>
    </>
  )
}

export default CybersecurityMaturityModelCertification