import React from 'react'
import PageHeader from '../components/PageHeader';
import bgBlue from '../../src/assets/img/bg5.png';

import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import WhyUs from '../components/WhyUs';
import ContactUs from '../components/ContactUs';
import BlogSlider from '../components/BlogSlider';
import headerBg from '../assets/img/banner/hippa_banner.webp';
import bgNeed from '../../src/assets/img/medical-banner-with-doctor-wearing-goggles.webp';

import PostImg1 from '../assets/img/Frame-1.webp';
import PostImg2 from '../assets/img/hipaa-compliance-services_bg.webp';
import PostImg3 from '../assets/img/Why-HIPAA-Compliance-Is-Important.webp';
import PostImg4 from '../assets/img/Why-HIPAA-Compliance-Is-Important.webp';
import PostImg5 from '../assets/img/cyber-security-1914950_960_720.webp';
import PostImg6 from '../assets/img/the-fda-guide-how-medical-devices-can-be-secured.jpg';

import ContentSlider from '../components/ContentSlider';

import HippaImg1 from '../assets/img/hippa_01.svg';
import HippaImg2 from '../assets/img/hippa_02.svg';
import HippaImg3 from '../assets/img/hippa_03.svg';
const slides = [
  { id: 1, cat: "Blog", img: PostImg1, title: "Improving Cybersecurity Awareness in Healthcare", content: "Many cyberattacks succeed due to mistakes by employees and a lack of awareness of basic aspects of cybersecurity. According to the 2022 Verizon Data Breach Investigations Report, 82% of data breaches in 2021 involved the human element. Improving security awareness of the workforce by focusing on key behaviors will go a long way toward improving security and preventing data breaches.", link: "https://wilsoncgrp.com/blog/improving-cybersecurity-awareness-in-healthcare" },
  { id: 2, cat: "Blog", img: PostImg2, title: "HIPAA Compliance Services", content: "The 1996 Health Insurance Portability and Accountability Act (HIPAA) promotes the security and privacy of employee health information. HIPAA seeks to facilitate efficient and effective electronic transfer of healthcare information between healthcare facilities as well as protect patients’ privacy. The Health and Human Services Department (HHS) was mandated to develop with security standards that they issued in 2003. The resulting health security standards rule gives patients rights over their health information and set standards on who can access it. The act further articulates precautions that all healthcare providers must take to protect and secure electronically collected health information. Agencies, organizations, and individuals classified as covered entities must comply with HIPAA.", link: "https://wilsoncgrp.com/blog/hipaa-compliance-services" },
  { id: 3, cat: "Blog", img: PostImg3, title: "Managing Vulnerabilities and Risks in the Healthcare Sector", content: "The healthcare industry processes a large volume of sensitive personal data of billions of people worldwide. A security breach therefore has significant financial, personal and organizational consequences. It is therefore hardly surprising that the cost of data breach in healthcare organizations more than double the average cost in other sectors. According to the 2017 Cost of Data Breach Study, healthcare organizations had an average cost of $380 for each lost or stolen record . This is compared to the average global cost of data breach being $141.", link: "https://wilsoncgrp.com/blog/managing-vulnerabilities-and-risks-in-the-healthcare-sector" },
  { id: 4, cat: "Blog", img: PostImg4, title: "Why HIPAA Compliance Is Important", content: "Healthcare organizations have increasingly become a target for cyber attacks. Numerous malicious, large scale health data breaches have taken place this year such as the Anthem data breach, which affected nearly 80 million individuals.[1]More recently, UCLA Health suffered a massive data breach in May 2015, where hackers accessed the medical files of more than 4.5 million patients, according to a UCLA Health notice published in July.[2]According to a 2015 Harris Poll commissioned by Vormetric Data Security, 26 percent of healthcare IT decision makers are protecting data because of a data breach in the past.[3] The report also stated that 48 percent of U.S. healthcare organizations reported either encountering a data breach or failing a compliance audit in the last year.", link: "https://wilsoncgrp.com/blog/why-hipaa-compliance-is-important" },
  { id: 5, cat: "Blog", img: PostImg5, title: "Security and Privacy Issues of Connected Medical Devices", content: "The healthcare sector is developing more technologically advanced devices aimed at making healthcare more accurate and safer. While the goal is to accelerate the body's capacity to heal, computer-hacking threats to these devices that millions of people depend on pose serious issues. It is also not a surprise why hackers are extremely interested in health record data; while social security number is worth 10 cents on the dark web, and credit card 25 cents, medical health record data could be worth hundreds or even thousands of dollars. This means trouble not only for healthcare providers but also the patients they help.", link: "https://wilsoncgrp.com/blog/security-and-privacy-issues-of-connected-medical-devices" },
  { id: 6, cat: "Blog", img: PostImg6, title: "The FDA Guide: How Medical Devices Can Be Secured", content: "Medical devices have gone from simple bandages that help wrap up wounds to MRI machines that scan the body for organ irregularities. With increasing complexity over the last five years, these devices have come to rely on software and the Internet to assist people with more efficiency. Now that these machines are able to communicate with one another, their network is susceptible to data loss and compromise due to cyberattacks. A good example of this was the 2017 WannaCry’s ransomware attack against the UK’s National Health Service (NHS), costing them £92M to recover the data and its subsequent cleanup.", link: "https://wilsoncgrp.com/blog/the-fda-guide-how-medical-devices-can-be-secured" }
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
      <PageHeader canonicalUrl="health-insurance-portability-and-accountability-act-hipaa" requestConBtn="#contactUs" videoUrl={iframeElement} headTitle="HIPAA Compliance Consulting | HIPAA Assessment Services" metaDesc="HIPAA Security Risk Assessment identifies potential gaps and vulnerabilities within current data infrastructure, providing recommendations for improvement to ensure your organization is fully compliant with HIPAA standards." parent="Compliance Services" parentUrl="compliance-assessment-services" title={"Health Insurance Portability and Accountability Act (HIPAA)"} backgroundImage={headerBg} />
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
              <Grid item xs={12} md={7} bgcolor='#fff' px={{ md: 0, xs: 2 }} pb={{md: 6, xs: 2}} sx={{ zIndex: 9, borderRadius: '12px', boxShadow: { md: '10px 10px 35px 0px #0000001A', xs: 'none' } }}>
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




        <Box bgcolor='primary.light' py={{ md: 13, xs: 6 }}>
          <Box className="container">
            <Typography variant='h2' className='sectionTitle'>How will WCG help you with HIPAA Compliance?</Typography>
            <Typography pb={1} pt={{xs: 2, md:4}}>Wilson Consulting Group (WCG) provides HIPAA Compliance Services for organizations looking to assess and determine their compliance with HIPAA’s administrative, physical, and technical safeguards.</Typography>
            <ContentSlider resourcesSlide={contentSlide} />
            <Typography fontSize="16px" >These HIPAA Compliance Services help organizations within the healthcare industry to design, restructure, and/or implement the necessary safeguards to ensure the confidentiality, integrity, and security of electronically protected health information, thereby satisfying the Security Rule and ensuring their HIPAA compliance.
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