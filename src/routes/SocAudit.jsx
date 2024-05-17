import React from 'react'
import PageHeader from '../components/PageHeader';
import headerBg from '../assets/img/banner/soc_banner.webp';
import bg01 from '../assets/img/soc_bg_01.webp';
import bgBlue from '../../src/assets/img/bg5.png';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import WhyUs from '../components/WhyUs';
import BlogSlider from '../components/BlogSlider';

import img02 from '../assets/img/soc_img_02.webp'
import img03 from '../assets/img/soc_img_03.webp'

import PostImg1 from '../assets/img/Wilson1.jpg'
import ContactUs from '../components/ContactUs';
import { FaArrowRight } from 'react-icons/fa';

const slides = [
    { id: 1, cat: 'Blog', img: PostImg1, title: 'Surviving Security Risks Existent in Third-Party Software', content: "Third-Party Software is comprised of software libraries, modules and other components that are either purchased from a third-party vendor or made freely available. It includes open source software and commercial off-the-shelf components, which are components that are available for use straight away instead of building entirely from scratch, thereby reducing application development time.", link: 'https://wilsoncgrp.com/blog/surviving-security-risks-existent-in-third-party-software' },
    // Add more slides as needed
];

const iframeElement = <iframe width="100%" height="480" src="https://www.youtube.com/embed/gUuJlA0GvzM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>

const SocAudit = () => {
    return (
        <>
            <PageHeader videoUrl={iframeElement} canonicalUrl="system-and-organization-controls-soc-audit-new" requestConBtn="#contactUs" headTitle="SOC 2 Type 1 & Type 2 Compliance | SOC Audit and Reporting" metaDesc="A SOC Audit report ensures your SOC Compliance with the complex and evolving audit requirements, bringing transparency and peace of mind to your stakeholders." parent="Compliance Services" parentUrl="compliance-assessment-services" title={"System and Organization Controls (SOC) Audit"} backgroundImage={headerBg} />
            <Box className="mainContent">

                <Box className="pageInfoSection" py={{ md: 12, xs: 4 }} sx={{ backgroundImage: `url(${bgBlue})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom 50px right', backgroundSize: '160px' }}>
                    <Box className="container">
                        <Typography variant='h2' className='sectionTitle'>What is a SOC Audit?</Typography>
                        <Box mt={{ xs: 2, md: 3 }}>
                            <Stack spacing={2}>
                                <Typography>Service organizations bear multiple responsibilities concerning different aspects of the business to clients. SOC (System and Organization Controls) audits are designed to help fulfill specific (client or user entity) requests in the form of SOC 1, SOC 2 or SOC 3. To be more specific , System and Organization Controls (SOC) audit reports are a series of comprehensive internal controls that:</Typography>
                                <ul className='listDisc'>
                                    <li>evaluates organizations' risks to improper system and data access</li>
                                    <li>provides information to clients and auditors for trust, transparency, and peace of mind.</li>
                                </ul>
                                <Typography>Some specific users of a SOC report may be accountable for</Typography>
                                <ul className='listDisc'>
                                    <li>procurement and contract negotiation</li>
                                    <li>vendor management</li>
                                    <li>independent auditors of user entities and regulators</li>
                                </ul>
                            </Stack>
                        </Box>
                    </Box>
                </Box>


                <Box sx={{ backgroundImage: `url(${bg01})`, backgroundSize: 'cover' }} py={{ md: 12, xs: 4 }}>
                    <Box className="container">
                        <Box sx={{ width: "90%", margin: '0 auto' }}>
                            <Box sx={{ border: '2px solid #fff', padding: '20px' }}>

                                <Box bgcolor='#FFFFFFE5' px={9} py={12}>
                                    <Stack spacing={3}>
                                        <Typography variant='h2' className='sectionTitle'>What will you gain from a SOC Audit?</Typography>
                                        <ul className='listDisc'>
                                            <li>Better understanding of how risks are addressed in similar organizations in the same industry.</li>
                                            <li>Enhanced organizational reputation and overall reduction of risk as a result of ability to correcting weaknesses and gaps identified in the report.</li>
                                            <li>Savings in time and money – taking away the hassle of dealing with auditors and non-core activities.</li>
                                            <li>Improved customer confidence in your organization’s Trust Service Criteria (security, availability, processing, integrity, confidentiality, privacy).</li>
                                            <li>Increased shareholder confidence in designed controls to effectively mitigate risks.</li>
                                            <li>In an increasingly competitive environment, a SOC Audit can strengthen your position in the market.</li>
                                        </ul>
                                        <Typography>Let WCG partner with you to keep your organization and your clients assured of the integrity of your services.</Typography>


                                    </Stack>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>


                <Box className="boxLayout" py={{ md: 12, xs: 4 }}>
                    <Box className="container">
                        <Grid container columnSpacing={6}>
                            <Grid item md={6} xs={12}>
                                <Box className="imgWrapper">
                                    <img src={img02} style={{borderRadius: '30px 0 0 0'}} />
                                </Box>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <Box >
                                    <Stack spacing={2}>
                                        <Typography className='sectionTitle' pt={1} pb={2}>System and Organization Controls 2 Audit (SOC 2)</Typography>

                                        <Typography>The SOC 2 Audit is a detailed, restricted-to-use report that gives shareholders a thorough understanding of</Typography>
                                        <ul className='listDisc'>
                                            <li>the service organization</li>
                                            <li>the service being provided, and</li>
                                            <li>internal controls relating to that service</li>
                                        </ul>
                                        <Typography>The objectives in a SOC 2 engagement relate to meeting its commitments to customers and system requirements. Commitments are the declarations made by management to customers regarding the performance of one or more of the entity's systems. Such commitments generally are included in written contracts, service level agreements, or public statements (for example, a privacy notice). Some commitments are applicable to all customers (baseline commitments), whereas others are designed to meet individual customer needs and result in the implementation of processes or controls, in addition to those required to meet the baseline commitments. System requirements refer to how the system should function to meet the entity's commitments to customers, relevant laws and regulations, or guidelines of industry groups, such as trade or business associations.</Typography>
                                    </Stack>
                                </Box>
                                <Box className="boxLayout__bgContent">
                                    <Box>
                                        <Typography pb={2} fontSize="18px" fontWeight="700" color="#fff">
                                            Components of a SOC 2
                                        </Typography>
                                        <ul className='listDisc' style={{color: "#fff"}}>
                                            <li>Auditor’s opinion</li>
                                            <li>Description of controls (narrative)</li>
                                            <li>Applicable Trust Services Criteria</li>
                                        </ul>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>

                </Box>

                <Box className="boxLayout box2" pt={{ md: 4, xs: 4 }} pb={{md: 12, xs: 4}}>
                    <Box className="container">
                        <Grid container columnSpacing={6}>
                            <Grid item md={6} xs={12}>
                                <Box >
                                    <Stack spacing={2}>
                                        <Typography className='sectionTitle' pt={1} pb={2}>System and Organization Controls 3 Audit (SOC 3)</Typography>

<Typography>                                        The SOC 3 audit, on the other hand, is a general-use, summary report that follows the same overall process as SOC 2. It provides the highest level of certification and declaration of operational excellence that a data center can receive. This report consists of only an auditor’s opinion, management assertion, and a brief narrative providing background on the service organization.</Typography>

<Typography>It determines whether the service organization maintains effective controls over its systems and is typically intended for users who do not require a more thorough report, which includes a detailed description of the design of controls or tests performed by the service auditor.</Typography>


                                    </Stack>
                                </Box>
                                <Box className="boxLayout__bgContent">
                                    <Box>
                                        <Typography pb={2} fontSize="18px" fontWeight="700" color="#fff">
                                        Components of a SOC 3 audit
                                        </Typography>
                                        <ul className='listDisc' style={{color: "#fff"}}>
                                            <li>Auditor’s opinion</li>
                                            <li>Limited details on the tests performed</li>
                                            <li>Applicable Trust Services Criteria</li>
                                        </ul>
                                        <Button sx={{marginTop: '15px', fontSize: '18px', fontWeight: '700', padding: '0'}} variant='text' href='https://wilsoncgrp.com/components-of-a-soc-3-audit' className='textBtn-light' > Read More &nbsp; <span><FaArrowRight size={14} /></span></Button>
                                        
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <Box className="imgWrapper">
                                    <img src={img03} style={{borderRadius: '0px 30px 0 0'}} />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>

                </Box>


<Box bgcolor='primary.light' py={{ md: 12, xs: 4 }}>
<Box className="container">
<Typography className='sectionTitle' pb={3}>What can WCG do for you?</Typography>
<Stack spacing={2}>
<Typography>Wilson Consulting Group (WCG) is a leader and innovator in the global cyber security industry. We provide assurances about your organization’s controls and a collaborative and effective SOC while performing a thorough assessment. Your organization benefits from this service by:</Typography>
<ul className='listDisc'>
<li>Performing a readiness assessment using the relevant SOC framework and provide recommendations for improvement or identify areas with potential gaps.</li>
<li>Developing a SOC report that organizations can share with customers, or other auditors, to provide transparency into the control environment</li>
<li>Creating a customized SOC report that meets specific industry or customer requirements, such as a SOC 2+ for the pharmaceuticals industry, NIST, HITRUST, or GDPR</li>
<li>Strengthening your brand by identifying and rectifying risks and gaps</li>
<li>Helping you understand the health of the controlled environment within your organization</li>
<li>Providing recommendations for improvement</li>
<li>Inspiring confidence with your stakeholders and clients</li>
</ul>
</Stack>
</Box>
</Box>

                <WhyUs />
                <BlogSlider resourcesSlide={slides} />
                <ContactUs />
            </Box>
        </>
    )
}

export default SocAudit