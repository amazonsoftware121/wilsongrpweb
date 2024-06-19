import React from 'react';
import PageHeader from '../components/PageHeader';
import headerBg from '../assets/img/banner/cmmc_banner.webp';
import WhyUs from '../components/WhyUs';
import ContactUs from '../components/ContactUs';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import bgBlue from '../../src/assets/img/bg5.png';
import cmmcBg from '../../src/assets/img/cmmc_bg.jpg';
import cmmcImg02 from '../../src/assets/img/cmmc_img02.webp';
import halfBg2 from '../assets/img/cmmc_bg_half.webp';


import { motion } from 'framer-motion';
import { FaExclamation, FaCalendarAlt, FaNewspaper, FaHandshake, FaRocketchat, FaGlobeAmericas } from "react-icons/fa";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import CmmcLevelGraph from '../assets/img/CMMC-Level-graph-20201228_2x.png'
import globeX from '../assets/img/globe_x.svg';


import PostImg1 from '../assets/img/cmmc-info.jpg';

import BlogSlider from '../components/BlogSlider';


const slides = [
  { id: 1, cat: "Data Sheet", img: PostImg1, title: "CYBERSECURITY MATURITY MODEL CERTIFICATION (CMMC) COMPLIANCE", content: "Get ready for CMMC with our effective compliance consulting and remediation services. Reduce your level of efforts & risks. Start your journey with WCG today to maintain and win DoD contracts!", link: "https://wilsoncgrp.com/uploads/CMMC-INFO-SHEET.pdf" }
];

const CybersecurityMaturityModelCertification = () => {

  const [expanded, setExpanded] = React.useState('panel1');
  const [expandIcon, setExpandIcon] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const iframeElement = <iframe width="100%" height="480" src="https://www.youtube.com/embed/aYaZIFheY0c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>

  return (
    <>
      <PageHeader canonicalUrl="cybersecurity-maturity-model-certification" requestConBtn="#contactUs" videoUrl={iframeElement} headTitle="CMMC Compliance Consulting | CMMC Assessment and Remediation" metaDesc="WCG’s CMMC Compliance Consulting and Remediation Services reduce your organization’s level of efforts & risks and help maintain and win DoD contracts." parent="Compliance Services" parentUrl="/compliance-assessment-services" title={"Cybersecurity Maturity Model Certification (CMMC)"} backgroundImage={headerBg} />
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
                <Grid className="centerBorderWrapperContent " xs={6} sm={6} md={6} >
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
                <Grid xs={6} sm={6} md={6}>
                </Grid>
              </Grid>
              <Grid container >
                <Grid xs={6} sm={6} md={6}>
                </Grid>
                <Grid className="centerBorderWrapperContent" xs={6} sm={6} md={6}>
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
                <Grid className="centerBorderWrapperContent" xs={6} sm={6} md={6}>
                  <Box pb={5} className="centerBorderWrapperContentInner left">
                    <Box className='iconHeading' mt={0}><span className='iconBorder'><FaHandshake /></span></Box>
                    <motion.div initial={{ x: -100, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}>
                      <Box maxWidth="350px" mt={3}>
                        <Stack spacing={2}>

                          <Typography variant='h4' sx={{ fontSize: '20px', fontWeight: 'bold' }} color='primary.main'>June 2020</Typography>
                          <Typography sx={{ fontWeight: 500 }}>DOD Signed Memorandum of Understanding with CMMC Accreditation Board</Typography>
                          <Typography sx={{ fontWeight: 'bold', fontSize: '18px', color: '#333333' }} variant='h5'>PHASE 03</Typography>
                        </Stack>
                      </Box>
                    </motion.div>

                  </Box>
                </Grid>
                <Grid xs={6} sm={6} md={6}>
                </Grid>
              </Grid>

              <Grid container >
                <Grid xs={6} sm={6} md={6}>
                </Grid>
                <Grid className="centerBorderWrapperContent" xs={6} sm={6} md={6}>
                  <Box pb={5} className="centerBorderWrapperContentInner right">
                    <Box className='iconHeading' mt={0}><span className='iconBorder'><FaRocketchat /></span></Box>
                    <motion.div initial={{ x: 100, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}>
                      <Box maxWidth="350px" mt={3}>
                        <Stack spacing={2}>
                          <Typography variant='h4' sx={{ fontSize: '20px', fontWeight: 'bold' }} color='primary.main'>September 2020</Typography>
                          <Typography sx={{ fontWeight: 500 }}>Interim version was published</Typography>
                          <Typography sx={{ fontWeight: 'bold', fontSize: '18px', color: '#333333' }} variant='h5'>PHASE 04</Typography>
                        </Stack>
                      </Box>
                    </motion.div>
                  </Box>
                </Grid>
              </Grid>


              <Grid container >
                <Grid className="centerBorderWrapperContent" xs={6} sm={6} md={6}>
                  <Box pb={5} className="centerBorderWrapperContentInner left">
                    <Box className='iconHeading' mt={0}><span className='iconBorder'><FaGlobeAmericas /></span></Box>
                    <motion.div initial={{ x: -100, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}>
                      <Box maxWidth="350px" mt={3}>
                        <Stack spacing={2}>

                          <Typography variant='h4' sx={{ fontSize: '20px', fontWeight: 'bold' }} color='primary.main'>October 2020</Typography>
                          <Typography sx={{ fontWeight: 500 }}>CMMC will begin appearing in Requests for information (RFIs)</Typography>
                          <Typography sx={{ fontWeight: 'bold', fontSize: '18px', color: '#333333' }} variant='h5'>PHASE 05</Typography>
                        </Stack>
                      </Box>
                    </motion.div>

                  </Box>
                </Grid>
                <Grid xs={6} md={6} sm={6}>
                </Grid>
              </Grid>

              <Grid container >
                <Grid xs={6} sm={6} md={6}>
                </Grid>
                <Grid className="centerBorderWrapperContent" xs={6} sm={6} md={6}>
                  <Box pb={5} className="centerBorderWrapperContentInner right">
                    <Box className='iconHeading' mt={0}><span className='iconBorder'><FaCalendarAlt /></span></Box>
                    <motion.div initial={{ x: 100, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}>
                      <Box maxWidth="350px" mt={3}>
                        <Stack spacing={2}>
                          <Typography variant='h4' sx={{ fontSize: '20px', fontWeight: 'bold' }} color='primary.main'>Early 2021</Typography>
                          <Typography sx={{ fontWeight: 500 }}>CMMC will begin appearing in Requests for proposals (RFPs) in early 2021</Typography>
                          <Typography sx={{ fontWeight: 'bold', fontSize: '18px', color: '#333333' }} variant='h5'>PHASE 06</Typography>
                        </Stack>
                      </Box>
                    </motion.div>
                  </Box>
                </Grid>
              </Grid>

            </Box>
          </Box>
        </Box>

        <Box py={{ md: 5, xs: 4 }}>
          <Box className="container">

            <Grid container alignItems="center">
              <Grid item md={6} pr={{ md: 13, xs: 0 }}>
                <Typography className='sectionTitle'>
                  Are you compliant?
                </Typography>
                <Box mt={{ xs: 2, md: 3 }}>
                  <Stack spacing={3}>

                    <Typography>The Cybersecurity Maturity Model Certification (CMMC) is mandatory for all contractors doing business with the DoD at any level. All contractors are required to obtain a CMMC certification. This includes all suppliers at all tiers along the supply chain, small businesses, commercial item contractors and foreign suppliers. No organizations are permitted to receive or share DoD information related to programs & projects without having completed the CMMC Compliance.</Typography>

                    <Typography><strong>Please note:</strong> As of October 2020, the CMMC-AB is working through its initial stand up phase and working to meet the requirements of the DoD. <strong>So, no contractors are currently CMMC certified.</strong></Typography>

                    <Typography>Request a FREE Consultation now to get a guide towards successful CMMC Certification.</Typography>
                  </Stack>
                </Box>
              </Grid>
              <Grid item md={6}>
                <img src={cmmcImg02} style={{maxWidth: '100%'}} />
              </Grid>


            </Grid>
          </Box>
        </Box>


        <Box className="faqSection titleSectionBg" bgcolor={'primary.light'} py={{ md: 12, xs: 6, }} >
          <Box className='container'>
            <Grid container rowSpacing={2} columnSpacing={4}>

              <Grid item xs={12} md={5}>
                <Box pr={{ md: 6 }}>
                  <Typography color='primary.main'>CMMC </Typography>
                  <Typography mt={3} variant='h2' className='sectionTitle'>The CMMC Framework</Typography>
                  <img src={CmmcLevelGraph} style={{ width: "100%" }} />
                </Box>

              </Grid>
              <Grid item xs={12} md={7}>
                <Box className='accordionDark'>

                  <Accordion sx={{ background: 'none', boxShadow: 'none', borderBottom: expanded === 'panel1' ? `none` : '2px solid #000' }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                      expandIcon={expanded === 'panel1' ? <FaMinus size={26} color='#28A0CF' /> : <FaPlus color='#000' size={26} />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                      sx={{ borderBottom: expanded === 'panel1' ? '1px solid #28A0CF' : 'none' }}
                    >
                      <Typography variant='h3' sx={{ fontSize: {md: '24px', xs: "20px"}, fontWeight: 'bold', lineHeight: 'normal', color: expanded === 'panel1' ? '#28A0CF' : '#000' }}> Level 5 – Advanced / Progressive </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Includes highly advanced cybersecurity practices. The processes involved at this level include continuous improvement across the enterprise and defensive responses performed at machine speed. This level requires an additional 34 controls among CMMC cyber security practices.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>


                  <Accordion sx={{ background: 'none', border: 'none', boxShadow: 'none', borderRadius: '0 !important', borderBottom: expanded === 'panel2' ? `none` : '2px solid #000' }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                      expandIcon={expanded === 'panel2' ? <FaMinus color='#28A0CF' size={26} /> : <FaPlus color='#000' size={26} />}
                      aria-controls="panel2bh-content"
                      id="panel2bh-header"
                      sx={{ borderBottom: expanded === 'panel2' ? '1px solid #28A0CF' : 'none' }}
                    >
                      <Typography variant='h3' sx={{ fontSize: {md: '24px', xs: "20px"}, fontWeight: 'bold', lineHeight: 'normal', color: expanded === 'panel2' ? '#28A0CF' : '#000' }}>  Level 4 – Proactive </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Includes advanced and sophisticated cybersecurity practices. The processes at this level are periodically reviewed, properly resourced, and are improved regularly across the enterprise. In addition, the defensive responses operate at machine speed and there is a comprehensive knowledge of all cyber assets. This level has an additional 95 controls beyond the first three Levels required by DoD CMMC.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>




                  <Accordion sx={{ background: 'none', border: 'none', boxShadow: 'none', borderRadius: '0 !important', borderBottom: expanded === 'panel3' ? `none` : '2px solid #000' }} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                      expandIcon={expanded === 'panel3' ? <FaMinus color='#28A0CF' size={26} /> : <FaPlus color='#000' size={26} />}
                      aria-controls="panel3bh-content"
                      id="panel3bh-header"
                      sx={{ borderBottom: expanded === 'panel3' ? '1px solid #28A0CF' : 'none' }}
                    >
                      <Typography variant='h3' sx={{ fontSize: {md: '24px', xs: "20px"}, fontWeight: 'bold', lineHeight: 'normal', color: expanded === 'panel3' ? '#28A0CF' : '#000' }}>  Level 3 – Good Cyber Hygiene </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Good CMMC Cyber Hygiene includes coverage of all NIST SP 800-171 Rev. 1 controls and additional practices beyond the scope of current CUI protection. Processes at this level are maintained and followed, and there is a comprehensive knowledge of cyber assets. This level requires an additional 91 security controls beyond those covered in Levels 1 and 2.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>


                  <Accordion sx={{ background: 'none', border: 'none', boxShadow: 'none', borderRadius: '0 !important', borderBottom: expanded === 'panel4' ? `none` : '2px solid #000' }} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary
                      expandIcon={expanded === 'panel4' ? <FaMinus color='#28A0CF' size={26} /> : <FaPlus color='#000' size={26} />}
                      aria-controls="panel4bh-content"
                      id="panel4bh-header"
                      sx={{ borderBottom: expanded === 'panel4' ? '1px solid #28A0CF' : 'none' }}
                    >
                      <Typography variant='h3' sx={{ fontSize: {md: '24px', xs: "20px"}, fontWeight: 'bold', lineHeight: 'normal', color: expanded === 'panel4' ? '#28A0CF' : '#000' }}>  Level 2 – Intermediate Cyber Hygiene  </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Intermediate CMMC Cyber Hygiene includes universally accepted cybersecurity best practices. Practices at this level would be documented, and access to CUI data will require multi-factor authentication. This level includes an additional 115 security controls beyond that of Level 1.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>



                  <Accordion sx={{ background: 'none', border: 'none', boxShadow: 'none', borderRadius: '0 !important', borderBottom: expanded === 'panel5' ? `none` : '2px solid #000' }} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                    <AccordionSummary
                      expandIcon={expanded === 'panel5' ? <FaMinus color='#28A0CF' size={26} /> : <FaPlus color='#000' size={26} />}
                      aria-controls="panel5bh-content"
                      id="panel5bh-header"
                      sx={{ borderBottom: expanded === 'panel5' ? '1px solid #28A0CF' : 'none' }}
                    >
                      <Typography variant='h3' sx={{ fontSize: {md: '24px', xs: "20px"}, fontWeight: 'bold', lineHeight: 'normal', color: expanded === 'panel5' ? '#28A0CF' : '#000' }}>  Level 1 – Basic Cyber Hygiene  </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Basic CMMC Cyber Hygiene includes basic cybersecurity appropriate for small companies utilizing a subset of universally accepted common practices. The processes at this level would include some performed practices, at least in an ad hoc manner. This level has 35 security controls that must be successfully implemented.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>






                </Box>
              </Grid>

            </Grid>
          </Box>
        </Box>

        <Box py={{ md: 12, xs: 0, }} position='relative'>
          <Box sx={{ display: {md: 'block', xs: 'none'}, backgroundImage: `url(${halfBg2})`, width: {md: "calc(50% - 30px)", xs: "calc(100% - 0px)" }, position: 'absolute', height: '100%', backgroundSize: 'cover', top: 0, zIndex: 9 }} ></Box>
          <Box className="container">
            <Grid container alignItems="center">

              <Grid item xs={12} md={6} py={{xs: 6, md: 0}} position="relative">
              <Box sx={{ display: {md: 'none', xs: 'block'}, backgroundImage: `url(${halfBg2})`, left: "-15px", width: {md: "calc(50% - 30px)", xs: "calc(100% + 30px)" }, position: 'absolute', height: '100%', backgroundSize: 'cover', top: 0, zIndex: 9 }} ></Box>
                <Box position="relative" zIndex='99' pr={{ md: "80px", xs: 0 }}>
                  <Typography variant='h2' sx={{ color: "#fff !important" }} mb={3} className='sectionTitle'>How  can we help?</Typography>
                  <Typography sx={{ color: "#fff", lineHeight: '26px' }}>It is never too late to evaluate your cybersecurity posture. WCG is your reliable partner that understands the CMMC compliance landscape and has the experience of working with federal third-party vendors. Although the CMMC-AB program is not yet finalized, we are offering consulting and remediation services based on the latest draft version of the certification model to help you get ready for CMMC Compliance. If you do not know where your organization stands, WCG provides the following:</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} py={{xs: 4, md: 0}}>
                <Box display='flex' gap={3}>
                  <Box><img src={globeX} /></Box>
                  <Box>
                    <Typography variant='h3' fontSize="24px" mb={2} mt={1} fontWeight="700">CMMC Consulting</Typography>
                    <Typography variant='h4' mb={3} fontSize="18px" fontWeight="500">WCG provides</Typography>
                    <ul className='listDisc'>
                      <li>a top-down assessment and gap analysis of your organization’s cybersecurity posture,</li>
                      <li>identification of the CMMC scope to help your organization align with CMMC controls, and</li>
                      <li>a comprehensive readiness assessment report with concise and clear recommendations</li>
                    </ul>
                  </Box>
                </Box>

                <Box display='flex' gap={3} mt={{md: 5, xs: 3}}>
                  <Box><img src={globeX} /></Box>
                  <Box>
                    <Typography variant='h3' fontSize="24px" mb={2} mt={1} fontWeight="700">CMMC Remediation</Typography>
                    <Typography variant='h4' mb={3} fontSize="18px" fontWeight="500">WCG works with our clients to develop a Plan of Action customized to their organizations to:</Typography>
                    <ul className='listDisc'>
                      <li>address deficient controls,</li>
                      <li>close the gap on CMMC Compliance, and</li>
                      <li>reach your desired, targeted CMMC-level and become compliant to get CMMC certification.</li>
                    </ul>
                  </Box>
                </Box>

              </Grid>

            </Grid>
          </Box>

        </Box>

        <WhyUs />
        <BlogSlider resourcesSlide={slides} />
        <ContactUs />
      </Box>
    </>
  )
}

export default CybersecurityMaturityModelCertification