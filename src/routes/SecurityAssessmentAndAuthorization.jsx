import React from 'react';
import BlogSlider from "../components/BlogSlider"
import ContactUs from "../components/ContactUs"
import PageHeader from "../components/PageHeader"
import WhyUs from "../components/WhyUs"
import bgBlue from '../../src/assets/img/bg5.png'
import headerBg from "../assets/img/security-assessment-and-authorization-banner.jpg"
import { Box, Grid, Stack, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import bgFaq from '../../src/assets/img/faq_saa.jpg';

const Faqs = [{
    key: 1,
    que: ' Identify true risks and provide ATO recommendations ',
    ans: 'Regardless of an organization’s size, resources, or security budget, WCG’s top-down cyber security assessment provides a complete picture of an organization’s security controls and countermeasures to risks to your system.'
},
{
    key: 2,
    que: 'Maintain Compliance',
    ans: 'WCG provides SA&A services that will help your organization get and remain compliant through a proven methodology that ensures customer readiness and efficient delivery with minimal impact on your support teams.'
}
];

const SecurityAssessmentAndAuthorization = () => {
    const [expanded, setExpanded] = React.useState('panel1');
    const [expandIcon, setExpandIcon] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const bgHalfAfterStyle = {
        content: "''",
        top: '0',
        left: '0',
        // other styles as needed
        backgroundImage: `url(${bgFaq})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 0

    };

    return (
        <>

            <PageHeader requestConBtn="#contactUs" headTitle="Security Assessment and Authorization (SA&A) Services | WCG" metaDesc="WCG’s SA&A service rigorously assesses application and system controls to ensure compliance with NIST 800-53, verifying proper configuration for security." parent="Risk Management Services" parentUrl="risk-management-and-assessment-services" title={"Security Assessment and Authorization"} backgroundImage={headerBg} />
            <Box className="mainContent">

                <Box className="pageInfoSection" py={{ md: 12, xs: 4 }} sx={{ backgroundImage: `url(${bgBlue})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom 50px right', backgroundSize: '160px' }}>
                    <Box className="container">
                        <Typography variant='h2' className='sectionTitle'>What is Security Assessment and Authorization?</Typography>
                        <Box mt={{ xs: 2, md: 3 }}>
                            <Stack spacing={3}>

                                <Typography >
                                    Federal government agencies are mandated by the <a style={{ textDecoration: 'underline' }} href="https://wilsoncgrp.com/federal-information-security-management-act-fisma-assessment">Federal Information Security Management Act (FISMA)</a> to understand the security risks posed to their information technology systems, applications, and environment, and are required to take appropriate actions to mitigate these risks. To help agencies evaluate these risks, the National Institute of Standards and Technology (NIST) developed a Security Assessment and Authorization (SA&A) methodology for federal information systems – NIST SP 800-53.

                                </Typography>
                                <Typography >  The SA&A is a formal methodology for testing and evaluating the security controls of the system to ensure that it is configured properly to meet the security mandate. A FISMA compliant SA&A is required for a system, application, or environment to get an Authority to Operate (ATO). WCG offers security risk assessment and clear recommendations to help our clients become compliant.</Typography>
                            </Stack>
                        </Box>

                    </Box>
                </Box>



                <Box className="faqSection titleSectionBg" py={{ md: 20, xs: 4 }} position='relative' sx={{ overflow: 'hidden' }}>
                    <Box style={bgHalfAfterStyle} sx={{ width: { md: '60%', xs: '100%' }, height: { md: '1135px', xs: '350px' }, position: { md: 'absolute', xs: 'relative' } }}></Box>
                    <Box className='container' sx={{ backgroundColor: { xs: '#28A0CF', md: 'transparent' } }}>
                        <Grid container rowSpacing={2} columnSpacing={4}  >

                            <Grid item xs={12} md={5}>

                            </Grid>
                            <Grid item xs={12} md={7} bgcolor='primary.main' pb={6} sx={{ zIndex: 9 }}>
                                <Box p={{ md: 3 }} py={3} >
                                    <Typography color='#fff !important' className='sectionTitle'>Key Benefits of SA & A, but are not limited to:</Typography>
                                    <Box className='accordionLight'>
                                        {Faqs.map((faq, index) => (
                                            <Accordion key={index} sx={{ margin: '0 !important', background: 'none', boxShadow: 'none' }} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
                                                <AccordionSummary
                                                    expandIcon={expanded === `panel${index}` ? <FaMinus size={26} color='#fff' /> : <FaPlus size={26} color='#fff' />}
                                                    aria-controls="panel1bh-content"
                                                    id="panel1bh-header"

                                                    sx={{ borderBottom: expanded === `panel${index}` ? '1px solid #fff' : 'none' }}
                                                >
                                                    <Typography variant='h3' sx={{ fontSize: '24px', fontWeight: 'bold', lineHeight: 'normal', color: expanded === `panel${index}` ? '#fff' : '#fff' }}>{faq.que}</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails sx={{ paddingTop: '30px' }}>
                                                    <Typography color='#fff'>
                                                        {faq.ans}
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                        ))}


                                    </Box>



                                </Box>
                            </Grid>

                        </Grid>
                    </Box>
                </Box>

                <Box py={{ md: 9, xs: 4 }} bgcolor='primary.light'>
                    <Box className="container">
                        <Typography textAlign='center' pt={4} mb={2} className='sectionTitle' >
                            How will WCG help you?
                        </Typography>
                        <Typography textAlign='center'>
                            Our Security Assessment and Authorization Services include:
                        </Typography>


                        <Box className="helpWcg">
                            <Grid container spacing={6}>
                                <Grid item xs={12} md={6}>
                                    <Box>
                                        <Stack spacing={3}>

                                        </Stack>


                                    </Box>
                                </Grid>
                                <Grid item md={6} xs={12}>

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

export default SecurityAssessmentAndAuthorization