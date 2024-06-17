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


import PostImg1 from '../assets/img/Frame-1.webp';
import PostImg2 from '../assets/img/hipaa-compliance-services_bg.webp';
import PostImg3 from '../assets/img/Why-HIPAA-Compliance-Is-Important.webp';
import PostImg4 from '../assets/img/Why-HIPAA-Compliance-Is-Important.webp';
import PostImg5 from '../assets/img/cyber-security-1914950_960_720.webp';
import PostImg6 from '../assets/img/the-fda-guide-how-medical-devices-can-be-secured.jpg';
import BlogSlider from '../components/BlogSlider';


const slides = [
  { id: 1, cat: "Blog", img: PostImg1, title: "Improving Cybersecurity Awareness in Healthcare", content: "Many cyberattacks succeed due to mistakes by employees and a lack of awareness of basic aspects of cybersecurity. According to the 2022 Verizon Data Breach Investigations Report, 82% of data breaches in 2021 involved the human element. Improving security awareness of the workforce by focusing on key behaviors will go a long way toward improving security and preventing data breaches.", link: "https://wilsoncgrp.com/blog/improving-cybersecurity-awareness-in-healthcare" },
  { id: 2, cat: "Blog", img: PostImg2, title: "HIPAA Compliance Services", content: "The 1996 Health Insurance Portability and Accountability Act (HIPAA) promotes the security and privacy of employee health information. HIPAA seeks to facilitate efficient and effective electronic transfer of healthcare information between healthcare facilities as well as protect patients’ privacy. The Health and Human Services Department (HHS) was mandated to develop with security standards that they issued in 2003. The resulting health security standards rule gives patients rights over their health information and set standards on who can access it. The act further articulates precautions that all healthcare providers must take to protect and secure electronically collected health information. Agencies, organizations, and individuals classified as covered entities must comply with HIPAA.", link: "https://wilsoncgrp.com/blog/hipaa-compliance-services" },
  { id: 3, cat: "Blog", img: PostImg3, title: "Managing Vulnerabilities and Risks in the Healthcare Sector", content: "The healthcare industry processes a large volume of sensitive personal data of billions of people worldwide. A security breach therefore has significant financial, personal and organizational consequences. It is therefore hardly surprising that the cost of data breach in healthcare organizations more than double the average cost in other sectors. According to the 2017 Cost of Data Breach Study, healthcare organizations had an average cost of $380 for each lost or stolen record . This is compared to the average global cost of data breach being $141.", link: "https://wilsoncgrp.com/blog/managing-vulnerabilities-and-risks-in-the-healthcare-sector" },
  { id: 4, cat: "Blog", img: PostImg4, title: "Why HIPAA Compliance Is Important", content: "Healthcare organizations have increasingly become a target for cyber attacks. Numerous malicious, large scale health data breaches have taken place this year such as the Anthem data breach, which affected nearly 80 million individuals.[1]More recently, UCLA Health suffered a massive data breach in May 2015, where hackers accessed the medical files of more than 4.5 million patients, according to a UCLA Health notice published in July.[2]According to a 2015 Harris Poll commissioned by Vormetric Data Security, 26 percent of healthcare IT decision makers are protecting data because of a data breach in the past.[3] The report also stated that 48 percent of U.S. healthcare organizations reported either encountering a data breach or failing a compliance audit in the last year.", link: "https://wilsoncgrp.com/blog/why-hipaa-compliance-is-important" },
  { id: 5, cat: "Blog", img: PostImg5, title: "Security and Privacy Issues of Connected Medical Devices", content: "The healthcare sector is developing more technologically advanced devices aimed at making healthcare more accurate and safer. While the goal is to accelerate the body's capacity to heal, computer-hacking threats to these devices that millions of people depend on pose serious issues. It is also not a surprise why hackers are extremely interested in health record data; while social security number is worth 10 cents on the dark web, and credit card 25 cents, medical health record data could be worth hundreds or even thousands of dollars. This means trouble not only for healthcare providers but also the patients they help.", link: "https://wilsoncgrp.com/blog/security-and-privacy-issues-of-connected-medical-devices" },
  { id: 6, cat: "Blog", img: PostImg6, title: "The FDA Guide: How Medical Devices Can Be Secured", content: "Medical devices have gone from simple bandages that help wrap up wounds to MRI machines that scan the body for organ irregularities. With increasing complexity over the last five years, these devices have come to rely on software and the Internet to assist people with more efficiency. Now that these machines are able to communicate with one another, their network is susceptible to data loss and compromise due to cyberattacks. A good example of this was the 2017 WannaCry’s ransomware attack against the UK’s National Health Service (NHS), costing them £92M to recover the data and its subsequent cleanup.", link: "https://wilsoncgrp.com/blog/the-fda-guide-how-medical-devices-can-be-secured" }
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
                <Grid className="centerBorderWrapperContent " xs={12} md={6} >
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
                <Grid xs={12} md={6}>
                </Grid>
              </Grid>

              <Grid container >
                <Grid xs={12} md={6}>
                </Grid>
                <Grid className="centerBorderWrapperContent" xs={12} md={6}>
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
                <Grid className="centerBorderWrapperContent" xs={12} md={6}>
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
                <Grid xs={12} md={6}>
                </Grid>
              </Grid>

              <Grid container >
                <Grid xs={12} md={6}>
                </Grid>
                <Grid className="centerBorderWrapperContent" xs={12} md={6}>
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
                <img src={cmmcImg02} />
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
                      <Typography variant='h3' sx={{ fontSize: '24px', fontWeight: 'bold', lineHeight: 'normal', color: expanded === 'panel1' ? '#28A0CF' : '#000' }}> Level 5 – Advanced / Progressive </Typography>
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
                      <Typography variant='h3' sx={{ fontSize: '24px', fontWeight: 'bold', lineHeight: 'normal', color: expanded === 'panel2' ? '#28A0CF' : '#000' }}>  Level 4 – Proactive </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Includes advanced and sophisticated cybersecurity practices. The processes at this level are periodically reviewed, properly resourced, and are improved regularly across the enterprise. In addition, the defensive responses operate at machine speed and there is a comprehensive knowledge of all cyber assets. This level has an additional 95 controls beyond the first three Levels required by DoD CMMC.
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
                      <Typography variant='h3' sx={{ fontSize: '24px', fontWeight: 'bold', lineHeight: 'normal', color: expanded === 'panel2' ? '#28A0CF' : '#000' }}>  Level 3 – Good Cyber Hygiene </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Good CMMC Cyber Hygiene includes coverage of all NIST SP 800-171 Rev. 1 controls and additional practices beyond the scope of current CUI protection. Processes at this level are maintained and followed, and there is a comprehensive knowledge of cyber assets. This level requires an additional 91 security controls beyond those covered in Levels 1 and 2.
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
                      <Typography variant='h3' sx={{ fontSize: '24px', fontWeight: 'bold', lineHeight: 'normal', color: expanded === 'panel2' ? '#28A0CF' : '#000' }}>  Level 2 – Intermediate Cyber Hygiene  </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Intermediate CMMC Cyber Hygiene includes universally accepted cybersecurity best practices. Practices at this level would be documented, and access to CUI data will require multi-factor authentication. This level includes an additional 115 security controls beyond that of Level 1.
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
                      <Typography variant='h3' sx={{ fontSize: '24px', fontWeight: 'bold', lineHeight: 'normal', color: expanded === 'panel2' ? '#28A0CF' : '#000' }}>  Level 1 – Basic Cyber Hygiene  </Typography>
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

        <Box py={{ md: 12, xs: 6, }} position='relative'>
          <Box sx={{ backgroundImage: `url(${halfBg2})`, width: "calc(50% - 30px)", position: 'absolute', height: '100%', backgroundSize: 'cover', top: 0, zIndex: 9 }} ></Box>
          <Box className="container">
            <Grid container alignItems="center">

              <Grid item xs={12} md={6}>
                <Box position="relative" zIndex='99' pr={{ md: "80px", xs: 0 }}>
                  <Typography variant='h2' sx={{ color: "#fff !important" }} mb={3} className='sectionTitle'>How  can we help?</Typography>
                  <Typography sx={{ color: "#fff", lineHeight: '26px' }}>It is never too late to evaluate your cybersecurity posture. WCG is your reliable partner that understands the CMMC compliance landscape and has the experience of working with federal third-party vendors. Although the CMMC-AB program is not yet finalized, we are offering consulting and remediation services based on the latest draft version of the certification model to help you get ready for CMMC Compliance. If you do not know where your organization stands, WCG provides the following:</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
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

                <Box display='flex' gap={3} mt={5}>
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