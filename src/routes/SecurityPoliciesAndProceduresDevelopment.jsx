import React from 'react';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import bgBlue from '../../src/assets/img/bg5.png';
import WhyUs from '../components/WhyUs';
import BlogSlider from '../components/BlogSlider';
import PostImg1 from '../assets/img/roleImpact.jpg'
import PostImg2 from '../assets/img/covid.jpg'
import PostImg3 from '../assets/img/securityrisk.jpg';

import PostImg4 from '../assets/img/AdobeStock_109748812-1024x683-1.webp';
import PostImg5 from '../assets/img/Security.webp';
import PostImg6 from '../assets/img/Secure-Your-Trade-Secrets-from-Cyber-Espionage.webp';



import ContactUs from '../components/ContactUs';
import headerBg from '../assets/img/security_policy_banner-new.jpg'
import PageHeader from '../components/PageHeader';

const slides = [
    { id: 4, cat: 'Blog', img: PostImg4, title: 'Shielding the Organization in the Fight Against Malware', content: "Malware continues to be one of the top factors contributing to network compromise which may eventually lead to data breach. Malware attack has the costliest impact on organizations with an average total cost amounting to$2.4 million. This means close to $7,000 per day or $200,000 per month is incurred by victims across the globe. Moreover, these attacks cause significant damage to an organization infrastructure by compromising data, preventing or slowing down the running of computers and resulting in the loss of vital information.", link: 'https://wilsoncgrp.com/blog/shielding-the-organization-in-the-fight-against-malware' },
    { id: 5, cat: 'Blog', img: PostImg5, title: 'Combat Cybercrime in Your Business', content: "Conducting business online opens several opportunities but also poses risks. Earlier this year, hundreds of companies had data breaches, exposing sensitive information of clients and employees.", link: 'https://wilsoncgrp.com/blog/combat-cybercrime-in-your-business' },
    { id: 6, cat: 'Blog', img: PostImg6, title: 'Secure Your Trade Secrets from Cyber Espionage', content: "Trend Micro Incorporated, a global leader in security software, stated that cyber espionage is the most serious threat concern to global businesses in 2017. Twenty percent of global organizations rank cyber espionage as the most serious threat to their business, with 26% struggling to keep up with the rapidly evolving threat landscape. In addition, one in five U.S. organizations have suffered a cyber espionage-related attack in the last year. Trend Micro’s research covered over 2,400 organizations across the U.S. and Europe.", link: 'https://wilsoncgrp.com/blog/secure-your-trade-secrets-from-cyber-espionage' },
/*    { id: 1, cat: 'Blog', img: PostImg1, title: 'ROLE AND IMPACT OF WOMEN IN TECHNOLOGY', content: 'Even with the underrepresentation of women in the technology industry, many women have taken leadership roles in the industry and are recognized globally.', link: 'https://wilsoncgrp.com/blog/role-and-impact-of-women-in-technology' },
    { id: 2, cat: 'Blog', img: PostImg2, title: 'COVID-19 FACTS: HOW BUSINESS LEADERS SHOULD TAKE ACTION', content: 'At the current time, much is unknown about the COVID-19 pandemic that has swept the globe. However, there is an undeniable threat to local and international health and economic status.', link: 'https://wilsoncgrp.com/blog/covid-19-facts-how-business-leaders-should-take-action' },
    { id: 3, cat: 'Blog', img: PostImg3, title: 'SURVIVING SECURITY RISKS EXISTENT IN THIRD-PARTY SOFTWARE', content: 'Third-Party Software is comprised of software libraries, modules and other components that are either purchased from a third-party vendor or made freely available.', link: 'https://wilsoncgrp.com/blog/surviving-security-risks-existent-in-third-party-software' }
    */
    // Add more slides as needed
];

const SecurityPoliciesAndProceduresDevelopment = () => {
    return (
        <>
            <PageHeader canonicalUrl="security-plans-policies-and-procedures-development" requestConBtn="#contactUs" headTitle="Security Plans, Policies and Procedures Development | WCG" metaDesc="WCG helps you develop sound plans, policies, and procedures to ensure proper security control over information systems and compliance with desired regulations." parent="Risk Management Services" parentUrl="risk-management-and-assessment-services" title={"Security Policies and Procedures Development"} backgroundImage={headerBg} />
            <Box className="mainContent">

                <Box className="pageInfoSection" py={{ md: 12, xs: 4 }} sx={{ backgroundImage: `url(${bgBlue})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom 50px right', backgroundSize: '160px' }}>
                    <Box className="container">
                        <Typography variant='h2' className='sectionTitle'>What are Policies and Procedures?</Typography>
                        <Box mt={{ xs: 2, md: 3 }}>
                            <Stack spacing={3}>

                                <Typography >
                                    Policies are high-level documents that establish organizational rules and guide decision-making. They represent the philosophy of an organization and the strategic thinking of senior management and business process owners.
                                </Typography>
                                <Typography>Procedures are detailed documents that establish the process for how to carry out these policies. Procedures are often required for compliance reasons, facilitate a more thorough training process, and help to retain important information that helps your organization prevent errors.
                                </Typography>
                                <Typography>Policies and procedures reflect management guidance and direction in developing controls over information systems and related resources. Installing strong policies and procedures for your organization affords greater protection of your most sensitive data while also meeting regulatory and compliance standards.</Typography>
                            </Stack>
                        </Box>
                    </Box>
                </Box>


                <Box className="wcgHelp" bgcolor='primary.light' py={{ md: 10, xs: 4 }}>
                    <Box className='container'>
                    <Typography variant='h2' className='sectionTitle' mb={3}>How will WCG help?</Typography>
        <Grid container>
        <Grid item sm={6} sx={{ paddingRight: { md: 10 } }}>
            
            <Stack spacing={3}>
          <Typography>  Wilson Consulting Group (WCG) assists organizations in developing sound policies and procedures to ensure proper control over information systems and related resources.</Typography>

          <Typography>The development and implementation of these policies and procedures enable organizations to comply with applicable regulations and standards, such as GLBA, HIPAA, NIST Series, ISACA CISA,PCI DSS, ISO 27002, and CobiT.</Typography>

          <Typography>WCG assists organizations to develop policies and procedures for:</Typography>
          </Stack>
            </Grid>
            <Grid item sm={6}>
                  <Grid container>
                    <Grid item md={6}>
                <ul className='listDisc'>
                <li>Acceptable Use</li>
                <li>Access and Authentication Management</li>
                <li>Backup and Restore</li>
                <li>Business Continuity and Disaster Preparedness</li>
                <li>Business Impact Analysis</li>
                <li>Change Control</li>
                <li>Configuration Management</li>
                <li>Cryptographic Controls</li>
                <li>Data Classification</li>
                <li>Data Retention and Disposal</li>
                <li>Gap Analysis</li>
                <li>Key Management</li>


                </ul>
            </Grid>
            <Grid item md={6}>
                <ul className='listDisc'>
                <li>Mobile and Telecommuting</li>
                <li>Malicious Software</li>
                <li>Media Handling</li>
                <li>Physical Security</li>
                <li>Risk Management</li>
                <li>Security Awareness and Training</li>
                <li>System Logging and Monitoring</li>
                <li>Vulnerability and Patch Management</li>
                <li>Incident Response</li>
                <li>Information Security</li>

                </ul>
            </Grid>


            </Grid>



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

export default SecurityPoliciesAndProceduresDevelopment