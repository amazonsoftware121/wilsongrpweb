import React from 'react';
import PageHeader from '../components/PageHeader';
import headerBg from '../assets/img/coprehensivem.jpg'
import { Box, Typography, Stack, Grid } from '@mui/material';
import bgBlue from '../../src/assets/img/bg5.png';
import WCGApproach from '../components/WCGApproach';
import WhyUs from '../components/WhyUs';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import bgFaq from '../../src/assets/img/rev-img-05.jpg';
import ContactUs from '../components/ContactUs';
import BlogSlider from '../components/BlogSlider';


const slides = [
  { id: 1, cat: 'Data Sheet', img: 'cloud-serv.png', title: 'Cloud Services', content: 'Cloud Services enable businesses to utilize a network of remote systems to transmit, process, store and access data, applications, and services over the Internet, which boosts their competitiveness in the digital space. Cloud solutions come in various forms and sizes to cater to different organizational needs. ', link: 'https://wilsoncgrp.com/uploads/1597586929593_Cloud%20Services.pdf' },
  { id: 2, cat: 'Blog', img: 'network-2402637_960_720.webp', title: 'Combatting the Security Risks of Cloud Computing', content: 'Small and large enterprises continue to benefit from increased digitization and greater use of cloud-based application and storage facilities.', link: 'https://wilsoncgrp.com/blog/combatting-the-security-risks-of-cloud-computing' },
  { id: 3, cat: 'Blog', img: 'cloud-3406627_960_720.webp', title: 'The Risks of Using Cloud Services', content: 'When J. C. R. “Lick” Licklider developed ARPAnet in 1962, he had the vision of creating a device that could receive and send data simultaneously amongst a large group of people. He called this idea the  “Intergalactic Computer Network”.', link: 'https://wilsoncgrp.com/blog/the-risks-of-using-cloud-services' },
  { id: 4, cat: 'Blog', img: 'Cracking-the-Enigma-of-Cloud-Computing-1200x450-1.webp', title: 'Cracking the Enigma of Cloud Computing', content: 'One of the most frequent questions tech industry insiders get from those working outside of the industry is “What is the cloud?” ', link: 'https://wilsoncgrp.com/blog/cracking-the-enigma-of-cloud-computing' },
  { id: 5, cat: 'Blog', img: 'cloud-computing-101.webp', title: 'Cloud Computing 101', content: 'Visionary Steve Jobs once spoke of a dream in which data could be uploaded and accessed anywhere. Before there was the cloud, there were floppy disks, CD ROMs and very large immobile hardware. Fast forward to 2015 – now we are able to access and store information without physical limitations.', link: 'https://wilsoncgrp.com/blog/cloud-computing-101' }
  // Add more slides as needed
];
const Faqs = [{
  key: 1,
  que: 'More comprehensive than an automated scan.',
  ans: 'Regardless of an organization’s size, resources or security budget, a Comprehensive Security Assessment uncovers issues that wouldn’t otherwise show up on an automated scan. WCG’s security assessment experts use their creativity and expertise to provide a complete picture of an organization’s security posture.'
},
{
  key: 2,
  que: 'A clear view of your organization’s all vulnerabilities on your perimeter network.',
  ans: 'It also includes a thorough report that suggests remediation projects based on the degree of vulnerability, complexity, business relevance and other factors of importance to the organization. This helps the organization prioritize not only its security efforts but also its security budget.'
},
{
  key: 3,
  que: 'General security awareness training.',
  ans: 'WCG’s security assessment experts explain strategies to address threats uncovered during penetration testing and help organizations address compliance issues. But they also go a step further to educate organizations so they can build ongoing programs, improve their security training programs and raise their overall security awareness.'
}
];
const ComprehensiveSecurityAssessment = () => {

  const [expanded, setExpanded] = React.useState('panel0');
  const [expandIcon, setExpandIcon] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const bgHalfAfterStyle = {
    content: "''",
    position: 'absolute',
    top: '0',
    left: '0',
    width: '60%',
    height: '960px',
    // other styles as needed
    backgroundImage: `url(${bgFaq})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    zIndex: 0

  };

  const bgHalfDblAfterStyle = {
    content: "''",
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '325',
    height: '604px',
    // other styles as needed
    backgroundImage: `url(${bgBlue})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    zIndex: 0

  };
  return (
    <>
      <PageHeader title={"Comprehensive Security Assessment"} backgroundImage={headerBg} parent="Risk Management Services" parentUrl="https://wilsoncgrp.com/risk-management-and-assessment-services" />
      <Box className="mainContent">
        <Box className="pageInfoSection" py={{ md: 12, xs: 4 }} sx={{ position: 'relative', backgroundImage: `url(${bgBlue})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom 50px right', backgroundSize: '160px' }}>
          <Box className="container">
            <Typography variant='h2' className='sectionTitle'>What is Comprehensive Security Assessment?</Typography>
            <Box mt={{ md: 3 }}>
              <Stack spacing={3}>
                <Typography >
                  Understanding your organization’s information and cyber security risks and identifying vulnerabilities are essential to protecting sensitive data. Having this understanding is also integral to regulatory compliance efforts. Not knowing your security risks can leave your organization open to attacks and breaches that can result in the loss, misuse or exposure of proprietary information. Security breaches even lead to significant financial losses, as well as damage your reputation and the trust of your customers.
                </Typography>
                <Typography >
                  To establish an effective security strategy, you must begin with an accurate evaluation of your current information security posture. The Comprehensive Security Assessment incorporates industry-leading penetration tests that use human expertise, creativity and logic to discover vulnerabilities that tests often miss. It provides a realistic view of what a cybercriminal could get into if he or she intentionally targeted an organization.
                </Typography>
              </Stack>
            </Box>

          </Box>
          <Box style={bgHalfDblAfterStyle}></Box>
        </Box>

        <Box className="cardHalfLightBg" bgcolor='primary.light' pt={{ md: 10, xs: 4 }}>
          <Box className="container" sx={{ position: 'relative', zIndex: 999 }}>
            <Box >
              <Grid container >
                <Grid item sm={6} sx={{ paddingRight: { md: 10 } }}>
                  <Typography variant='h2' className='sectionTitle' mb={3}>
                    Methodology of Comprehensive Security Assessment
                  </Typography>
                  <Typography>Wilson Consulting Group’s Comprehensive Security Assessment identifies and thoroughly tests potential points of attack to pinpoint vulnerabilities. A typical comprehensive security assessment consists of the following assessment areas:</Typography>
                </Grid>
                <Grid item sm={6}>
                  <Grid container>
                    <Grid item md={6}>
                      <ul className='listDisc'>
                        <li>External assessment</li>
                        <li>VPN assessment</li>
                        <li>War dialing</li>
                        <li>Wireless security assessment</li>
                        <li>Social engineering</li>
                        <li>VoIP security assessment</li>
                        <li>Physical security assessment</li>
                      </ul>
                    </Grid>
                    <Grid item md={6}>
                      <ul className='listDisc'>
                        <li>Server configuration assessment</li>
                        <li>Microsoft® Windows® assessment</li>
                        <li>UNIX environment assessment</li>
                        <li>Network architecture assessment</li>
                        <li>Firewall assessment</li>
                        <li>Mobile security assessment</li>
                      </ul>
                    </Grid>
                  </Grid>
                </Grid>

              </Grid>
            </Box>

            <Box >
              <WCGApproach />
            </Box>



          </Box>
        </Box>


        <Box className="faqSection titleSectionBg" py={15} position='relative' sx={{ overflow: 'hidden' }}>
          <Box style={bgHalfAfterStyle}></Box>
          <Box className='container'>
            <Grid container rowSpacing={2} columnSpacing={4}>

              <Grid item xs={12} md={5}>

              </Grid>
              <Grid item xs={12} md={7} bgcolor='primary.main' pb={6} sx={{ zIndex: 9 }}>
                <Box p={3} >
                  <Typography color='#fff !important' className='sectionTitle'>Benefits of our services</Typography>
                  <Typography mt={1} color='primary.light'>WCG’s security consultants will identify risks and outline specific, actionable steps to improve your overall security posture.</Typography>
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

        <Box py={12}>
          <WhyUs />
        </Box>

        <Box py={12} bgcolor={'primary.light'} position='relative' >
          <Box sx={{

          }} ></Box>

          <BlogSlider resourcesSlide={slides} />
        </Box>
        <Box py={12} >
          <ContactUs />
        </Box>


      </Box>

    </>
  )
}

export default ComprehensiveSecurityAssessment