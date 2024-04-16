import React from 'react'
import PageHeader from '../components/PageHeader';
import bgBlue from '../../src/assets/img/bg5.png';

import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import WhyUs from '../components/WhyUs';
import ContactUs from '../components/ContactUs';
import BlogSlider from '../components/BlogSlider';
import headerBg from '../assets/img/banner/hippa_banner.webp';
import bgNeed from '../../src/assets/img/medical-banner-with-doctor-wearing-goggles.webp';

import PostImg4 from '../assets/img/what-nist.webp';
import PostImg5 from '../assets/img/Compliance-Consulting-Saves-Businesses-1024x384-1.webp';
import ContentSlider from '../components/ContentSlider';

import HippaImg1 from '../assets/img/hippa_01.svg';
import HippaImg2 from '../assets/img/hippa_02.svg';
import HippaImg3 from '../assets/img/hippa_03.svg';
const slides = [
  { id: 4, cat: "Blog", img: PostImg4, title: "What NIST 800-53 Revision 5 Means to Cybersecurity?", content: "NIST Special Publication (SP) 800-53, Revision 5, Security and Privacy Controls for Information Systems and Organizations, represents a multi-year effort to develop the next generation of security and privacy controls needed to strengthen and support the federal government and every sector of critical infrastructure. These next-generation controls offer a proactive and systematic approach to ensuring that critical systems, components, and services are sufficiently trustworthy and have the necessary resilience to defend the economic and national security interests of the United States.", link: "https://wilsoncgrp.com/blog/what-nist-800-53-revision-5-means-to-cybersecurity" },
  { id: 5, cat: "Blog", img: PostImg5, title: "Compliance Consulting Saves Businesses", content: "Many firms that suffer from cyber-breaches not only struggle financially, but their credibility within their industry may also be jeopardized. This can lead to customers losing trust in the company, resulting in loss of potential sales and a struggle to regain customer trust. For these reasons, compliance with federal, industry, and/or cyber regulations is mandatory for businesses and organizations to save themselves from devastating consequences of becoming non-compliant.", link: "https://wilsoncgrp.com/blog/compliance-consulting-saves-businesses" },
  { id: 6, cat: "Blog", img: PostImg5, title: "Compliance Consulting Saves Businesses", content: "Many firms that suffer from cyber-breaches not only struggle financially, but their credibility within their industry may also be jeopardized. This can lead to customers losing trust in the company, resulting in loss of potential sales and a struggle to regain customer trust. For these reasons, compliance with federal, industry, and/or cyber regulations is mandatory for businesses and organizations to save themselves from devastating consequences of becoming non-compliant.", link: "https://wilsoncgrp.com/blog/compliance-consulting-saves-businesses" },
  { id: 7, cat: "Blog", img: PostImg5, title: "Compliance Consulting Saves Businesses", content: "Many firms that suffer from cyber-breaches not only struggle financially, but their credibility within their industry may also be jeopardized. This can lead to customers losing trust in the company, resulting in loss of potential sales and a struggle to regain customer trust. For these reasons, compliance with federal, industry, and/or cyber regulations is mandatory for businesses and organizations to save themselves from devastating consequences of becoming non-compliant.", link: "https://wilsoncgrp.com/blog/compliance-consulting-saves-businesses" }
];

const contentSlide = [
  { id: 1, img: HippaImg1, title: "Evaluate:", content: "Prior to the start of any active assessment activity, our Compliance Experts will gather all necessary information to perform a thorough security risk assessment. Then, we conduct a thorough HIPAA security risk assessment for healthcare providers as required by the HIPAA Security Rule and the Centers for Medicare and Medicaid Service Electronic Health Record Incentive Program." },
  { id: 2, img: HippaImg2, title: "Design:", content: "The results of this HIPAA security risk assessment are displayed in a report which can be used to determine risks in policies, processes, and systems. Tailored to the client’s needs and business goal, our experienced consultants and Compliance Experts design strategies to mitigate weaknesses and minimize risks listed in HIPAA security risk assessment report." },
  { id: 3, img: HippaImg3, title: "Manage:", content: "WCG also offers HIPAA compliant cloud services to healthcare organizations in order to secure their cloud infrastructure, protecting patients’ sensitive personal and health information. Our HIPAA compliant cloud services consist of a set of control-based technologies and policies designed to maintain data security, adhere to compliance regulations, and provide a data backup plan in the event of a security breach." }
];

const iframeElement = <iframe width="100%" height="480" src="https://www.youtube.com/embed/iKdNd-oIcmM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>

const Hipaa = () => {
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
      <PageHeader requestConBtn="#contactUs" videoUrl={iframeElement} headTitle="HIPAA Compliance Consulting | HIPAA Assessment Services" metaDesc="HIPAA Security Risk Assessment identifies potential gaps and vulnerabilities within current data infrastructure, providing recommendations for improvement to ensure your organization is fully compliant with HIPAA standards." parent="Compliance Services" parentUrl="compliance-assessment-services" title={"Health Insurance Portability and Accountability Act (HIPAA)"} backgroundImage={headerBg} />
      <Box className="mainContent">
        <Box className="pageInfoSection" py={{ md: 12, xs: 6 }} sx={{ backgroundImage: `url(${bgBlue})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom 50px right', backgroundSize: '160px' }}>
          <Box className="container">
            <Typography variant='h2' className='sectionTitle'>What is HIPAA?</Typography>
            <Box mt={{ xs: 2, md: 3 }}>
              <Stack spacing={3}>

                <Typography >
                  In 1996, the United States Congress enacted the Health Insurance Portability and Accountability Act (HIPAA), which was designed to improve the efficiency and effectiveness of the healthcare system by facilitating electronic interchange of healthcare information, including financial and administrative transactions sent electronically between healthcare organizations. Congress directed the Department of Health and Human Services (HHS) to develop standards for transactions, unique health identifiers, transaction code sets, electronic signatures, privacy, and security.

                </Typography>

                <Typography>
                  The HIPAA Security Rule, originally issued by HHS in 2003, established national standards to protect individuals’ electronic personal health information that is created, received, used, or maintained by a covered entity. The Security Rule requires appropriate administrative, physical, and technical safeguards to ensure the confidentiality, integrity, and security of electronic protected health information (e-PHI).
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Box>



        <Box className="faqSection titleSectionBg" py={{ md: 13, xs: 4 }} position='relative' sx={{ overflow: 'hidden' }} >
          <Box style={bgHalfAfterStyle} sx={{ width: { md: '60%', xs: '100%' }, height: { md: '1135px', xs: '350px' }, position: { md: 'absolute', xs: 'relative' } }}></Box>
          <Box className='container' sx={{ backgroundColor: 'transparent' }}>
            <Grid container rowSpacing={{ md: 2, xs: 0 }} columnSpacing={{ md: 4, xs: 0 }}  >

              <Grid item xs={12} md={5}>

              </Grid>
              <Grid item xs={12} md={7} bgcolor='#fff' px={{ md: 0, xs: 2 }} pb={6} sx={{ zIndex: 9, borderRadius: '12px', boxShadow: { md: '10px 10px 35px 0px #0000001A', xs: 'none' } }}>
                <Box p={{ md: 7 }} py={6} >
                  <Typography variant="h2" color='' className='sectionTitle titleDes2'>Why is HIPAA important?</Typography>
                  <Box pt={4}>
                    <Stack spacing={3}>
                      <Typography>HIPAA plays a crucial role in <strong>protecting patients’ sensitive personal and health information</strong> because it ensures healthcare providers, health plans, healthcare clearinghouses, and business associates of HIPAA-covered entities must implement multiple safeguards to control who has access to health data, restricting who can view health information and who that information can be shared with.</Typography>

                      <Typography>HIPAA introduced a number of important benefits for the <strong>healthcare industry</strong> to help with the transition from paper records to electronic copie s of health information. HIPAA has also helped to streamline administrative healthcare functions, improve efficiency in the healthcare industry, and ensure protected health information is shared securely.</Typography>

                      <Typography>The standards for recording health data and electronic transactions ensures everyone is singing from the same hymn sheet. Since all HIPAA-covered entities must use the same code sets and nationally recognized identifiers, HIPAA compliance helps enormously with the transfer of electronic health information between healthcare providers, health plans, and other entities.</Typography>
                    </Stack>

                  </Box>




                </Box>
              </Grid>

            </Grid>
          </Box>
        </Box>




        <Box bgcolor='primary.light' py={{ md: 13, xs: 4 }}>
          <Box className="container">
            <Typography variant='h2' className='sectionTitle'>How will WCG help you with HIPAA Compliance?</Typography>
            <Typography pb={1} pt={4}>Wilson Consulting Group (WCG) provides HIPAA Compliance Services for organizations looking to assess and determine their compliance with HIPAA’s administrative, physical, and technical safeguards.</Typography>
            <ContentSlider resourcesSlide={contentSlide} />
            <Typography fontSize="18px" fontWeight='500'>These HIPAA Compliance Services help organizations within the healthcare industry to design, restructure, and/or implement the necessary safeguards to ensure the confidentiality, integrity, and security of electronically protected health information, thereby satisfying the Security Rule and ensuring their HIPAA compliance.
            </Typography>
          </Box>
        </Box>

        <WhyUs />
        <BlogSlider resourcesSlide={slides} />
        <ContactUs />
      </Box>
    </>
  )
}

export default Hipaa