import React from 'react';
import PageHeader from '../components/PageHeader';
import headerBg from '../assets/img/banner/gramm_banner.webp';
import bgBlue from '../../src/assets/img/bg5.png';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import bgNeed from '../../src/assets/img/rev-img-05_1.webp';
import { FaArrowUp } from "react-icons/fa";
import penaltiesImg from '../assets/img/front-view-satisfied-young-businessman-working-office-1.webp';
import { GiDeadEye } from "react-icons/gi";
import { GoCodeOfConduct } from "react-icons/go";
import { CgDanger } from "react-icons/cg";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { TbMapSearch } from "react-icons/tb";
import { RiMiniProgramLine } from "react-icons/ri";
import { MdOutlineDangerous } from "react-icons/md";
import { IoNewspaperSharp } from "react-icons/io5";
import { BsTools } from "react-icons/bs";
import { GiTeacher } from "react-icons/gi";
import WhyUs from '../components/WhyUs';
import ContactUs from '../components/ContactUs';
import BlogSlider from '../components/BlogSlider';

import PostImg1 from '../assets/img/Cyber-Threats-to-Higher-Education-Institutions.webp';
import PostImg2 from '../assets/img/Compliance-Consulting-Saves-Businesses-1024x384-1.webp';
import PostImg3 from '../assets/img/AdobeStock_118950639-1024x683-1.webp';

import { motion } from 'framer-motion';

const slides = [
  
    { id: 1, cat: 'Blog', img: PostImg1, title: 'Cyber Threats to Higher Education Institutions', content: 'Centralized higher education labs were once a standard and necessary offering. Now, an increasing number of higher education students have personal computers to support their studies, and they expect the higher education institutions they attend to provide appropriate security and privacy for the personal information they share with the institution.', link: 'https://wilsoncgrp.com/blog/cyber-threats-to-higher-education-institutions' },
    { id: 2, cat: 'Blog', img: PostImg2, title: 'Compliance Consulting Saves Businesses', content: 'Many firms that suffer from cyber-breaches not only struggle financially, but their credibility within their industry may also be jeopardized. This can lead to customers losing trust in the company, resulting in loss of potential sales and a struggle to regain customer trust. For these reasons, compliance with federal, industry, and/or cyber regulations is mandatory for businesses and organizations to save themselves from devastating consequences of becoming non-compliant.', link: 'https://wilsoncgrp.com/blog/compliance-consulting-saves-businesses' },

    { id: 3, cat: 'Blog', img: PostImg3, title: 'Your Alma Mater is Breached - Should You Care?', content: 'In 2015, the higher education industry experienced 165 security incidents.[1] This year, seven higher education institutions withstood malicious, large-scale data breaches. No higher education institution of any size or prestige is immune to security threats.[2] A compromised security infrastructure can cripple reputation and moreover, result in financial loss.', link: 'https://wilsoncgrp.com/blog/your-alma-mater-is-breached-should-you-care' },
    // Add more slides as needed
  ];
 



const GrammLeachBlileyActCompliance = () => {
    const bgHalfAfterStyle = {
        content: "''",
        top: '0',
        left: '0',
        // other styles as needed
        backgroundImage: `url(${bgNeed})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 0

    };
    return (
        <>
            <PageHeader canonicalUrl="gramm-leach-bliley-act-compliance" requestConBtn="#contactUs" headTitle="GLBA Compliance Consulting | GLBA Assessment Services" metaDesc="GLBA Compliance Services assist financial institutions in determining compliance level and developing privacy practices and policies to meet GLBA requirements." parent="Compliance Services" parentUrl="compliance-assessment-services" title={"Gramm-Leach Bliley Act (GLBA) Compliance"} backgroundImage={headerBg} />
            <Box className="mainContent">
                <Box className="pageInfoSection" py={{ md: 12, xs: 4 }} sx={{ backgroundImage: `url(${bgBlue})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom 50px right', backgroundSize: '160px' }}>
                    <Box className="container">
                        <Typography variant='h2' className='sectionTitle'>What is GLBA Compliance?</Typography>
                        <Box mt={{ xs: 2, md: 3 }}>
                            <Stack spacing={3}>
                                <Typography>
                                    The Gramm-Leach-Bliley Act (GLBA), also known as the Financial Modernization Act of 1999, is a United States federal law that mandates financial institutions to disclose information-sharing practices to their customers and proactively secure sensitive data. GLBA compliance prevents unauthorized sharing or loss of private customer data, which puts financial institutions at a lower risk of penalties or reputational damage.
                                </Typography>
                            </Stack>
                        </Box>
                    </Box>
                </Box>

                <Box className="faqSection titleSectionBg" py={{ md: 13, xs: 4 }} bgcolor='primary.light' position='relative' sx={{ overflow: 'hidden' }} >
                    <Box style={bgHalfAfterStyle} sx={{ width: { md: '60%', xs: '100%' }, height: { md: '1135px', xs: '350px' }, position: { md: 'absolute', xs: 'relative' } }}></Box>
                    <Box className='container' sx={{ backgroundColor: 'transparent' }}>
                        <Grid container rowSpacing={{ md: 2, xs: 0 }} columnSpacing={{ md: 4, xs: 0 }}  >

                            <Grid item xs={12} md={3}>

                            </Grid>
                            <Grid item xs={12} md={9} bgcolor='#fff' px={{ md: 0, xs: 2 }} pb={{ md: 6, xs: 2 }} sx={{ zIndex: 9, borderRadius: '12px', boxShadow: { md: '10px 10px 35px 0px #0000001A', xs: 'none' } }}>
                                <Box p={{ md: 7 }} py={6} >
                                    <Typography variant="h2" color='' className='sectionTitle titleDes2'>GLBA Compliance deadline</Typography>
                                    <Box pt={4}>
                                        <Stack spacing={3}>
                                            <Typography>On November 15, 2022, the Federal Trade Commission (FTC) announced that the deadline to comply with certain provisions of the updated Standards for Safeguarding Customer Information Rule (Rule) component of the GLBA has been extended by six months from December 9, 2022, to June 9, 2023</Typography>
                                            <Box>
                                                <Typography mb={2} fontSize='18px' fontWeight="500">The six-month extension applies to the following GLBA compliance requirements:</Typography>
                                                <ul className='listDisc'>
                                                    <li>Designate a qualified individual to oversee their information security program,</li>
                                                    <li>Develop a written risk assessment,</li>
                                                    <li>Limit and monitor who can access sensitive customer information,</li>
                                                    <li>Encrypt all sensitive information,</li>
                                                    <li>Train security personnel,</li>
                                                    <li>Develop an incident response plan,</li>
                                                    <li>Periodically assess the security practices of service providers, and</li>
                                                    <li>Implement multi-factor authentication or another method with equivalent protection for any individual accessing customer information.</li>
                                                </ul>
                                            </Box>
                                        </Stack>

                                    </Box>




                                </Box>
                            </Grid>

                        </Grid>
                    </Box>
                </Box>


                <Box className="pageInfoSection" py={{ md: 12, xs: 4 }} >
                    <Box className="container">
                        <Typography variant='h2' className='sectionTitle'>Who must comply with GLBA?</Typography>
                        <Box mt={{ xs: 2, md: 3 }}>
                            <Stack spacing={3}>
                                <Typography>
                                    GLBA compliance is applicable to financial institutions offering any financial products and services to individuals, such as loans, debt collection, financial advice, investment advice, or insurance. These include but are not limited to:
                                </Typography>
                                <ul className='listDisc'>
                                    <li>ATM operators</li>
                                    <li>Banks</li>
                                    <li>Car rental companies</li>
                                    <li>Check-cashing businesses</li>
                                    <li>Consumer credit reporting agencies</li>
                                    <li>Credit counseling services</li>
                                    <li>Courier services</li>
                                    <li>Credit card companies</li>
                                    <li>Etc.</li>
                                </ul>
                                <Typography>Higher education is also within GLBA applicability. In 2021, the FTC issued amendments that were approved by its governing agency, the GLBA, thus updating the compliance requirements for higher educational institutions with a financial connection to the Title IV Program: “Any institution that receives Title IV funding must now comply with the Gramm-Leach-Bliley Act (GLBA).” “GLBA contains no exemption for colleges or universities. As a result, educational entities that engage in financial activities, such as processing student loans, are required to comply."</Typography>
                            </Stack>
                        </Box>
                    </Box>
                </Box>


                <Box className="threeBox" py={{ md: 12, xs: 4 }} bgcolor='primary.light'>
                    <Box className="container">
                        <Typography mb={2} variant='h2' className='sectionTitle'>GLBA Compliance requirements</Typography>
                        <Typography>The primary data protection recommendations of the GLBA are outlined by the following:</Typography>
                        <Box mt={3}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={4} >
                                <motion.div initial={{ x: -100, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 1 }}>
                                    <Box bgcolor="#fff" style={{ padding: "40px 15px 20px 15px", height: '100%' }}>
                                        <Stack spacing={3}>
                                            <Box className="icon">
                                                <Box component="span" className='arrowUpIcon'>  <FaArrowUp /></Box>
                                            </Box>
                                            <Typography variant='h4'>
                                                The Financial Privacy Rule:
                                            </Typography>
                                            <Typography>It requires financial institutions to protect the privacy of consumers, which covers most personal information (name, date of birth, and Social Security number) as well as transactional data (account or credit card numbers).</Typography>
                                        </Stack>
                                    </Box>
                                    </motion.div>
                                </Grid>

                                <Grid item xs={12} md={4}  >
                                <motion.div initial={{ y: 100, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 1 }}>
                                    <Box bgcolor="#fff" style={{ padding: "40px 15px 20px 15px", height: '100%' }}>
                                        <Stack spacing={3}>
                                            <Box className="icon">
                                                <Box component="span" className='arrowUpIcon'>  <FaArrowUp /></Box>
                                            </Box>
                                            <Typography variant='h4'>
                                                The Safeguards Rule:
                                            </Typography>
                                            <Typography>
                                                This requires all financial institutions to design, implement, and maintain security measures to protect private information.
                                            </Typography>
                                        </Stack>
                                    </Box>
                                    </motion.div>
                                </Grid>


                                <Grid item xs={12} md={4} >
                                <motion.div initial={{ x: 100, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 1 }}>
                                    <Box bgcolor="#fff" style={{ padding: "40px 15px 20px 15px", height: '100%' }} >
                                        <Stack spacing={3}>
                                            <Box className="icon">
                                                <Box component="span" className='arrowUpIcon'>  <FaArrowUp /></Box>
                                            </Box>
                                            <Typography variant='h4'>
                                                The Pretexting Rule:
                                            </Typography>
                                            <Typography>This encourages financial institutions to develop safeguards for pretexting, also known as social engineering.</Typography>
                                        </Stack>
                                    </Box>
                                    </motion.div>
                                </Grid>

                            </Grid>
                        </Box>
                    </Box>
                </Box>


                <Box className="penalties" pt={{ md: 12, xs: 4 }}>
                    <Box className="container">
                        <Box bgcolor="#eaf6fb" pb={{md: 0, xs: 5}}>
                            <Grid container rowGap={3} alignItems="center">
                                <Grid item md={5} xs={12}>
                                    <img src={penaltiesImg} style={{ float: 'left' }} style={{maxWidth: "100%"}} />
                                </Grid>
                                <Grid item md={7} xs={12} pr={{md: 8, xs: 2}} pl={{md: 3, xs: 2}}>
                                    <Stack spacing={2}>
                                        <Typography className='sectionTitle'>Penalties for Non-compliance</Typography>
                                        <Typography borderBottom="3px dashed" pb={2}>The penalties for failing to meet GLBA compliance requirements are as follows:</Typography>
                                    </Stack>
                                    <ul className='numberList'>
                                        <li><span className='numberCustom'>01</span><Typography>Fines of <strong>$100,000</strong> for each violation for financial institutions found in violation of GLBA regulation.</Typography></li>
                                        <li><span className='numberCustom'>02</span><Typography>Fines of <strong>$10,000</strong> for each violation for officers and directors in charge of institutions found to be in violation of GLBA regulation.</Typography></li>
                                        <li><span className='numberCustom'>03</span><Typography>Up to <strong>5</strong> years in prison for officers and directors in charge of institutions found in violation of GLBA regulation.</Typography></li>
                                    </ul>
                                    <Typography>Rest assure, we will guide you in the right direction to avoid any violations and non-compliance penalties that can cause a setback in security operations.</Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Box>

                <Box className="" pt={{ md: 6, xs: 4 }} pb={{ md: 8, xs: 4 }}>
                    <Box className="container">
                        <Box className="leftGradBorderWrapper">
                            <Grid container rowGap={3}>
                                <Grid xs={12} md={6} pr={{md: 15, xs: 0}} pt={{ md: 6, xs: 4 }}>
                                <motion.div initial={{ x: -100, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 1 }}>
                                    <Stack spacing={3}>
                                        <Typography className='sectionTitle'>How will WCG help?</Typography>
                                        <Typography sx={{ fontSize: '26px', fontWeight: '700' }}>GLBA Assessment Services</Typography>
                                        <Typography>WCG provides GLBA Assessment Services to assist financial institutions in determining their level of compliance against GLBA compliance requirements. We catalog the systems used for managing Non-personal, Public Information (NPI) and identify threats and vulnerabilities that can put the information at risk.</Typography>
                                    </Stack>
                                    </motion.div>
                                </Grid>
                                <Grid ml={{md: 0, xs: '15px'}} className="leftGradBorder" xs={12} md={6} pt={{ md: 6, xs: 4 }}>
                                    <Box  pt={2} pb={5} pl={4}>
                                    <motion.div initial={{ y: -100, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 1 }}>
                                        <Typography fontSize='18px' fontWeight="500" pb={2}>Our GLBA Assessment Services include, but are not limited to:</Typography>
</motion.div>
<motion.div initial={{ x: 100, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 1 }}>
                                        <Typography variant='h4' className='iconHeading'><span className='iconBorder'><GiDeadEye /></span>Review and /or Develop GLBA Data Maps</Typography>
                                        Data mapping articulates and illustrates how data is stored, transmitted, and processed internally and externally. WCG reviews or develops GLBA data maps for financial institutions to ensure the data flows are accurate and sufficiently meet GLBA compliance requirements.
                                        </motion.div>
                                        <motion.div initial={{ x: 100, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 1 }}>
                                        <Typography variant='h4' className='iconHeading'><span className='iconBorder'><GoCodeOfConduct /></span>Conduct Compliance Assessment</Typography>
                                        <ul className='listDisc'>
                                            <li>Determine the involvement of your institution</li>
                                            <li>Evaluate the risk assessment process</li>
                                            <li>Examine and scrutinize policies, processes, procedures, and third-party agreements to determine if they sufficiently comply with the GLBA standards, NIST 800-171 requirements, and achieve industry best practices and where appropriate, make precise recommendations to satisfy the compliance requirements</li>
                                            <li>Analyze existing controls to verify if they sufficiently meet GLBA Standards and NIST 800-171 Rev.2 requirements</li>
                                            <li>Assess the service providers’ agreement and measures taken to oversee service providers</li>
                                        </ul>
                                        </motion.div>
                                        <motion.div initial={{ x: 100, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 1 }}>
                                        <Typography variant='h4' className='iconHeading'><span className='iconBorder'><CgDanger /></span>Examine Risk Assessment Results or Conduct Risk Assessment</Typography>
                                        <ul className='listDisc'>
                                            <li>Examine the results of the most recent risk assessment completed within one-year timeframe</li>
                                            <li>If the risk assessment was over one-year timeframe, WCG will conduct a comprehensive Vulnerability Assessment, Cyber Security and Penetration Testing to evaluate cyber-threats and vulnerabilities to your GLBA environment.</li>
                                        </ul>
                                        </motion.div>
                                        <motion.div initial={{ x: 100, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 1 }}>
                                        <Typography variant='h4' className='iconHeading'><span className='iconBorder'><MdOutlineDeveloperMode /></span>Develop Reports</Typography>
                                        WCG presents clear and concise recommendations to document vulnerabilities and non-compliance risks discovered during assessments.
</motion.div>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Box>


                <Box className="" bgcolor="primary.light" pt={{ md: 6, xs: 4 }} pb={{md: 10, xs: 4}}>
                    <Box className="container">
                        <Box className="leftGradBorderWrapper">
                            <Grid container rowGap={3} >
                                <Grid xs={12} md={6} pr={{md: 15, xs: 0}} pt={{ md: 6, xs: 4 }}>
                                <motion.div initial={{ x: -100, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 1 }}>
                                    <Stack spacing={3}>
                                        <Typography sx={{ fontSize: '26px', fontWeight: '700' }}>GLBA Implementation Services</Typography>
                                        <Typography>We utilize best practices in our GLBA implementation services that provide your organization with superior protective measures for your information systems and data. This approach keeps your organization compliant and operating effectively and efficiently while meeting its objectives. Also, we develop and implement individually tailored GLBA compliance programs, which consist of but are not have limited to:</Typography>
                                    </Stack>
                                    </motion.div>
                                </Grid>
                                <Grid ml={{md: 0, xs: '15px'}} className='leftGradBorder' xs={12} md={6} pt={{ md: 6, xs: 4 }}>
                                    <Box  pb={8} pl={4}>
                                    <motion.div initial={{ x: 100, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 1 }}>
                                        <Typography variant='h4' className='iconHeading' sx={{marginTop: '0 !important'}}><span className='iconBorder'><TbMapSearch /></span>Develop Data Maps</Typography>
                                        WCG develops GLBA data mapping documents that articulate and illustrate what data your financial institution possesses, where they reside, how they flow through systems and applications, and how they are collected, stored, and discarded.
</motion.div>
<motion.div initial={{ x: 100, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 1 }}>
                                        <Typography variant='h4' className='iconHeading'><span className='iconBorder'><RiMiniProgramLine /></span>Generate a Customized Compliance Program Plan</Typography>
                                        This includes activities, practices, roles, and responsibilities that protect confidential information and data. These areas comply with the provisions of the FTC safeguard rules, which implement applicable provisions of the GLBA.
                                        </motion.div>
                                        <motion.div initial={{ x: 100, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 1 }}>
                                        <Typography variant='h4' className='iconHeading'><span className='iconBorder'><MdOutlineDangerous /></span>Conduct Risk Assessment</Typography>
                                        WCG conducts a comprehensive Vulnerability Assessment, Cyber Security and Penetration Testing based to evaluate cyber-threats and vulnerabilities to your GLBA-relevant data.
                                        </motion.div>
                                        <motion.div initial={{ x: 100, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 1 }}>
                                        <Typography variant='h4' className='iconHeading'><span className='iconBorder'><IoNewspaperSharp /></span>Develop GLBA-required Policies</Typography>
                                        WCG develops the following GLBA-required policies for financial institutions to ensure they sufficiently comply with the GLBA compliance requirements:
                                        <motion.div initial={{ y: 100, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 1 }}>
                                        <ul className='listDisc' style={{ marginTop: '20px' }}>
                                            <li>Risk Assessment
                                                <ol style={{paddingLeft: "20px"}}><li style={{listStyle: "lower-roman"}}>Third Party Risk Management</li></ol></li>
                                            <li>Vulnerability Assessment and Penetration Testing</li>
                                            <li>Vulnerability and Patch Management</li>
                                            <li>Access Control</li>
                                            <li>Acceptable Use</li>
                                            <li>Cryptography</li>
                                            <li>Security Awareness, Training, and Education</li>
                                            <li>Incident Response</li>
                                            <li>Audit and Logging</li>
                                            <li>Record Retention and Disposal</li>
                                            <li>Change Management</li>
                                            <li>Password</li>
                                            <li>Malicious Code</li>
                                            <li>Data Classification</li>
                                            <li>Asset Management</li>
                                            <li>Compliance Management</li>
                                            <li>Email</li>
                                            <li>Identification and Authentication</li>
                                        </ul>
                                        </motion.div>
                                        </motion.div>
                                        <motion.div initial={{ x: 100, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 1 }}>
                                        <Typography variant='h4' className='iconHeading'><span className='iconBorder'><BsTools /></span>Implement Controls</Typography>

                                        WCG will work with your organization to implement controls found to be deficient or missing. The implementation of these controls will result in risk reduction, acceptance, avoidance, or transfer.
                                        </motion.div>
                                        <motion.div initial={{ x: 100, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 1 }}>
                                        <Typography variant='h4' className='iconHeading'><span className='iconBorder'><GiTeacher /></span>Conduct Awareness Training</Typography>
                                        Staff awareness training is a crucial component for preventing data breaches and non-compliance since 75% of reported cyber-attacks are due to human error. Tailored to your needs, WCG will work with you organization to recommend and/or develop specific compliance awareness training courses to educate your employees that interact with covered Personally Identifiable Information (PII) during their daily activities.
                                        </motion.div>


                                    </Box>
                                </Grid>
                            </Grid>

                        </Box>
                        <motion.div initial={{ y: 100, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 1 }}>
                        <Typography pt={8}>WCG works closely with your financial institution and assures your compliance in accordance with the GLBA’s mandates. We provide institutions with exact information on how to protect confidential, private customer information; in addition, we apprise you of all updates that will impact compliance practices.</Typography>
                        </motion.div>
                    </Box>
                </Box>


<WhyUs />
<BlogSlider resourcesSlide={slides} />
        
        
          <ContactUs />

            </Box>
        </>
    )
}

export default GrammLeachBlileyActCompliance