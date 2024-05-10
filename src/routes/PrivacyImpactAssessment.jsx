import React from 'react';
import PageHeader from '../components/PageHeader';
import headerBg from '../assets/img/banner/privacy_impact_assement.webp';
import bgBlue from '../../src/assets/img/bg5.png';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import WhyUs from '../components/WhyUs';
import BlogSlider from '../components/BlogSlider';

import PostImg1 from '../assets/img/Is-your-Business-a-Target-of-Ransomware_01.webp'
import PostImg2 from '../assets/img/GDPR-New-Frontiers-in-Regulating-Data-Protection-and-Privacy-Standards.webp'
import ContactUs from '../components/ContactUs';
import bgNeed from '../assets/img/rev-img-05.webp';
import piaImg from '../assets/img/pia_img.png';
import { height } from '@mui/system';

const slides = [
    { id: 1, cat: 'Blog', img: PostImg1, title: 'GDPR’s Data Protection Impact Assessment and its Implications for Organizations', content: "A data breach may be viewed as the accidental or unlawful destruction, loss, alteration or unauthorized disclosure or, access to data . Over the years, the security broadcasts are generally replete with numerous incidences of data breaches across the globe. Therefore, it is little surprise that 1 in 4 business have experienced this type of incident . The significant financial impact is also unmistakable as the total average cost is estimated to be 3.62 million dollars, which equates to in excess of$300,000 dollars .", link: 'https://wilsoncgrp.com/blog/gdprs-data-protection-impact-assessment-and-its-implications-for-organizations' },
    { id: 2, cat: 'Blog', img: PostImg2, title: "GDPR - New Frontiers in Regulating Data Protection and Privacy Standards", content: "In recent years, the world has become even more data-driven. We have seen the explosive demand for data which ushered in the creation of unprecedented volume, velocity and variety.", link: 'https://wilsoncgrp.com/blog/gdpr-new-frontiers-in-regulating-data-protection-and-privacy-standards' }
    

    // Add more slides as needed
];


const PrivacyImpactAssessment = () => {


    const bgHalfAfterStyle = {
        content: "''",
        top: '0',
        left: '0',
        // other styles as needed
        backgroundImage: `url(${bgNeed})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 0,
        height: "100%"

    };
    return (
        <>
            <PageHeader canonicalUrl="privacy-impact-assessment" requestConBtn="#contactUs" headTitle="Privacy Impact Assessment (PIA) | Data Privacy Security Scan" metaDesc="A Privacy Impact Assessment (PIA) minimizes threats of data breaches and ensures personal identifiable information (PII) is secure across the enterprise." parent="Compliance Services" parentUrl="compliance-assessment-services" title={"Privacy Impact Assessment"} backgroundImage={headerBg} />
            <Box className="mainContent">
                <Box className="pageInfoSection" py={{ md: 12, xs: 4 }} sx={{ backgroundImage: `url(${bgBlue})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom 50px right', backgroundSize: '160px' }}>
                    <Box className="container">
                        <Typography variant='h2' className='sectionTitle'>What is a Privacy Impact Assessment?</Typography>
                        <Box mt={{ xs: 2, md: 3 }}>
                            <Stack spacing={3}>
                                <Typography >
                                    Current advances in online technology, cloud computing, mobile phone technology and social media have revolutionized modern business and government operations. Much of the personal information is shared across the Internet but not encrypted. Confidential data is too often lost because of online security breaches. The public expects strong privacy protection, programs, and processes to safeguard their information.
                                </Typography>
                                <Typography>
                                    A Privacy Impact Assessment (PIA) is a structure review of an information system to identify and mitigate risks, including risks to confidentiality, at every stage of the system life cycle. PIA states what personally identifiable information (PII) is collected and provides a systematic means of answering questions such as:
                                </Typography>
                                <ul className='listDisc'>
                                    <li>What personal data are you processing?</li>
                                    <li>How is it being processed?</li>
                                    <li>What are the existing measures for data protection??</li>
                                    <li>What aspects of processing can potentially cause harm to concerned individuals, the organization, or the public?</li>
                                    <li>How can the risks of harm be addressed?</li>
                                </ul>
                            </Stack>
                        </Box>
                    </Box>
                </Box>


                <Box className="pageInfoSection" py={{ md: 12, xs: 4 }} bgcolor='primary.light' >
                    <Box className="container">
                        <Typography variant='h2' className='sectionTitle'>Who needs to comply?</Typography>
                        <Box mt={{ xs: 2, md: 3 }}>
                            <Stack spacing={3}>
                                <Typography >
                                    <strong>Any business or federal agencies </strong> responsible for introducing new or revised service or changes a new system, process or information asset is (the Information Asset Owner – IAO) responsible for ensuring the completion of a PIA and therefore must be effectively informed of these procedures.
                                </Typography>
                                <Typography>
                                    U.S. federal law requires compliance and commitment to ensure personal identifiable information (PII) is managed with the utmost priority and care. The Privacy Act and The Section 208 of the E-Government Law requires that federal agencies maintain and protect PII, and it establishes the requirement for agencies to conduct Privacy Impact Assessments (PIA) for electronic information systems and collections. It also requires each federal agency to publish notice of its system of records (SORN) in the Federal Register and to allow individuals to request access to and make corrections to their record.
                                </Typography>
                                <Typography>
                                    To ensure compliance with federal law, <strong>all</strong> systems that collect PII must be evaluated to determine how information is collected, secured, stored, retrieved, shared, and managed. M-03-22, OMB Guidance for Implementing the Privacy Provisions of the E-Government Act of 2002, provides direction to federal agencies on conducting PIAs.
                                </Typography>
                            </Stack>
                        </Box>
                    </Box>
                </Box>








                <Box className="pia" py={{ md: 13, xs: 4 }}>
                    <Box className="container">
                        <Box bgcolor="#E4F8FF" py={{ md: 13, xs: 4 }} borderRadius="80px" px={{md: 15}}>
                            <Grid alignItems="center" container  columnSpacing={{ md: 4 }} >
                                <Grid item xs={12} md={6}><img src={piaImg} /></Grid>
                                <Grid item xs={12} md={6}>
                                    <Stack spacing={3}>
                                        <Typography variant="h2" color='' className='sectionTitle'>Why is it important to conduct a PIA?</Typography>
                                        <Typography fontSize="19px">
                                            A Privacy Impact Assessment enables an organization to implement a risk-based approach to data protection. Provision of a system that allows for an early warning that privacy may be breached, implement safeguards, and prevent future privacy issues.
                                        </Typography>
                                        <Typography fontSize="19px">
                                            A PIA also demonstrates an organization’s commitment to comply with data protection laws, and shows that it admits to being accountable for all the personal data it processes. This aids the organization in gaining the confidence and trust of the public. If the PIA is conducted for the entire organization, it will also facilitate and assist in meeting the registration requirements of the National Privacy Commission, including the maintenance of records of the organization’s processing activities. Critical information necessary to improve existing policies and procedures, including privacy notices, will also be obtained.

                                        </Typography>
                                    </Stack>
                                </Grid>

                            </Grid>
                        </Box>
                    </Box>
                </Box>

                <Box className="faqSection titleSectionBg" py={{ md: 16, xs: 4 }} position='relative' sx={{ overflow: 'hidden' }} bgcolor='primary.light' >
                    <Box style={bgHalfAfterStyle} sx={{ width: { md: '60%', xs: '100%' }, height: { md: '1135px', xs: '350px' }, position: { md: 'absolute', xs: 'relative' } }}></Box>
                    <Box className='container' sx={{ backgroundColor: 'transparent' }}>
                        <Grid container rowSpacing={{ md: 2, xs: 0 }} columnSpacing={{ md: 4, xs: 0 }}  >

                            <Grid item xs={12} md={4}>

                            </Grid>
                            <Grid item xs={12} md={8} bgcolor='#fff' px={{ md: 0, xs: 2 }} pb={6} sx={{ zIndex: 9, borderRadius: '12px', boxShadow: { md: '10px 10px 35px 0px #0000001A', xs: 'none' } }}>
                                <Box p={{ md: 7 }} py={6} >
                                    <Typography variant="h2" color='' className='sectionTitle titleDes2'>How will WCG help you?</Typography>
                                    <Box pt={3}>
                                        <Typography pb={2}>Wilson Consulting Group (WCG) understands the risks posed by privacy violations. WCG assists organizations and government agencies to conduct Privacy Impact Assessments by following these steps:</Typography>
                                        <ul className="listDisc" style={{ paddingBottom: '35px' }}>
                                            <li>    Identify the need for PIA</li>
                                            <li>Describe the data flows</li>
                                            <li>Identify privacy risks</li>
                                            <li>Identify privacy solutions</li>
                                            <li>Record PIA outcomes</li>
                                            <li>Integrate outcomes into project plan    </li>
                                        </ul>
                                        <Typography>WCG focuses on privacy threats and breaches that affect organizations and helps them mitigate risk and manage exposures. Our Privacy Impact Assessments guarantees that privacy risks are identified, evaluated, and remediated. Why not be one step ahead by protecting personal data within your organization now?</Typography>
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

export default PrivacyImpactAssessment