import React from 'react'
import PageHeader from '../components/PageHeader'
import headerBg from '../assets/img/banner/fredrampBanner.webp';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';

import fedRampS1 from '../assets/img/fedramp_service_01.svg';
import fedRampS2 from '../assets/img/fedramp_service_02.svg';
import fedRampS3 from '../assets/img/fedramp_service_03.svg';
import fedRampS4 from '../assets/img/fedramp_service_04.svg';
import { FaUserClock, FaCoins, FaUsersCog } from "react-icons/fa";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { IoIosArrowDropdownCircle } from "react-icons/io";
import ContactUs from '../components/ContactUs';
import BlogSlider from '../components/BlogSlider';



import PostImg1 from '../assets/img/microsoftteams-image-1.webp';
import PostImg2 from '../assets/img/microsoftteams-image.jpg';
import PostImg3 from '../assets/img/Fedramp-mandatory-services-for-your-cloud-services.jpg';
import PostImg4 from '../assets/img/fedramp_resources.webp';


const slides = [
  { id: 1, cat: "Blog", img: PostImg1, title: "FedRAMP’s Latest Changes and Expectations", content: "Everything changes, which means nothing stays the same. The Federal Risk and Authorization Management Program (FedRAMP) has encountered changes, and those changes mean that requirements are not the same for Cloud Service Providers (CSPs) who provide or plan to provide cloud service offerings (CSOs) to U.S. Government agencies.", link: "https://wilsoncgrp.com/blog/fedramp-latest-changes-and-expectations" },
  { id: 2, cat: "Blog", img: PostImg2, title: "FedRAMP Has New Baseline Security Control Requirements", content: "Beware all cyber threats; you have new challenges to face! The Federal Risk and Authorization Management Program(FedRAMP) has implemented the new National Institute of Standards and Technology (NIST) 800-53 Rev.5 baseline and security control requirements to address cyber threats.", link: "https://wilsoncgrp.com/blog/fedramp-has-new-baseline-security-control-requirements" },
  { id: 3, cat: "Blog", img: PostImg3, title: "FedRAMP: Mandatory Protection for Your Cloud Services with Federal Businesses", content: 'These days, many questions arise surrounding the security of data and cloud posture: “How did this happen, why did this happen, and can this happen again?"', link: "https://wilsoncgrp.com/blog/mandatory-protection-for-your-cloud-services" },
  { id: 4, cat: "Data Sheet", img: PostImg4, title: "FedRAMP Datasheet", content: "Reduce compliance expenditures and expedite authorization process", link: "https://wilsoncgrp.com/uploads/WCG-FedRAMP-Datasheet-20220815-2.pdf" },
];

const FedrampConsulting = () => {

  const iframeElement = <iframe width="100%" height="480" src="https://www.youtube.com/embed/4_nIVONppiQ?si=6OxyhKM3M0TP6wDb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>;

  return (
    <>
      <PageHeader videoUrl={iframeElement} canonicalUrl="fedramp-consulting" requestConBtn="#contactUs" headTitle="FedRAMP Advisory and Assessment Services | Certified 3PAO" metaDesc="FedRAMP Compliance Consulting Services help you meet mandatory FedRAMP security requirements while providing a painless audit experience tailored to your needs." parent="Compliance Services" parentUrl="compliance-assessment-services" title={"FedRAMP Advisory and Assessment Services"} backgroundImage={headerBg} />
      <Box className="mainContent">
        <Box className="pageInfoSection" py={{ md: 12, xs: 6 }}>
          <Box className="container">
            <Typography variant='h2' className='sectionTitle'>What is FedRAMP?</Typography>
            <Box mt={{ xs: 2, md: 3 }}>
              <Stack spacing={3}>
                <Typography >
                  FedRAMP is a U.S. government-wide program that delivers a standard approach to the security assessment, authorization, and continuous monitoring of cloud products and services. Compliance is mandatory for all Cloud Service Providers (CSPs) that hold federal data and are providing or seeking to provide services to federal agencies.
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Box>


        <Box py={{ md: 12, xs: 6 }} bgcolor="primary.light">
          <Box className="container">
            <Typography variant='h2' className='sectionTitle'>Secure your ATO with a reliable FedRAMP assessor</Typography>
            <Box mt={{ xs: 2, md: 3 }}>
              <Stack spacing={3}>
                <Typography >
                  Achieving or maintaining the FedRAMP authorization can be time-consuming and complex if you do not have professional guidance from a FedRAMP accredited 3PAO (Third Party Assessment Organization).
                </Typography>
                <Typography >
                  As a certified FedRAMP 3PAO authorized by the U.S. General Services Administration (GSA), WCG is qualified to conduct security assessments for CSPs seeking FedRAMP Ready and FedRAMP Provisional/Agency Authorizations. We bring our excellent FedRAMP assessors who have years of in-depth and compliance-focused knowledge and experience to help your organization win and maintain FedRAMP ATO (Authority to Operate).
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Box>

        <Box py={{ md: 12, xs: 6 }}>
          <Box className="container">
            <Typography textAlign="center" variant='h2' className='sectionTitle'>FedRAMP Services</Typography>
            <Typography textAlign="center">We provide the following FedRAMP services to assist your organization in pursuing FedRAMP ATO.</Typography>
            <Box py={{ md: 8, xs: 5 }}>
              <Grid container columnSpacing={7} alignItems="center">
                <Grid item md={6} sm={12} pr={7}>
                  <img src={fedRampS1} style={{ width: '100%' }} />
                </Grid>
                <Grid item md={6} sm={12}>
                  <Typography color="primary.main" mb={1}>
                    FedRAMP Advisory
                  </Typography>
                  <Stack spacing={3}>



                    <Typography mt={0} variant='h4' fontSize="32px" lineHeight="38px" fontWeight="bold" mb={2} pr={{ md: 10 }}>
                      Consulting and Documentation Assistance
                    </Typography>

                    <Typography>
                      Before a CSP can begin the FedRAMP certification process, they must first develop and implement FedRAMP documentation and security controls. WCG FedRAMP consultants will guide you throughout the process and assist with Security Artifact Creation, such as Security Assessment Plan (SAP), System Security Plan (SSP), Security Assessment Report (SAR), and Plan of Action and Milestone (POA&M). WCG’s FedRAMP Consulting Services ensure you are fully prepared for FedRAMP audit and authorization.
                    </Typography>
                    <Typography fontWeight="bold">
                      We also provide the following as part of our FedRAMP Consulting Services:
                    </Typography>
                    <ul className='listDisc'>
                      <li>Assist in determining your cloud solution’s proper Federal Information Processing Standards (FIPS)-199 categorization of the risk level.</li>
                      <li>Conduct FedRAMP Vulnerability Assessment and Penetration Test.</li>
                      <li>Conduct a Gap Analysis to evaluate the sufficiency of security controls to determine organizations’ compliance level against FedRAMP requirements.</li>
                      <li>Evaluate, review, and revise your Incident Response Plan, Process, and Procedures to ensure they adequately address FedRAMP requirements.</li>
                    </ul>
                  </Stack>
                </Grid>
              </Grid>
            </Box>

            <Box pb={{ md: 9, xs: 5 }} >
              <Grid container columnSpacing={7} alignItems="center">

                <Grid item md={6} sm={12}>
                  <Typography color="primary.main" mb={1}>
                    FedRAMP Preparation
                  </Typography>
                  <Stack spacing={3}>



                    <Typography mt={0} variant='h4' fontSize="32px" lineHeight="38px" fontWeight="bold" mb={2} pr={{ md: 25 }}>
                      FedRAMP Readiness Assessment
                    </Typography>

                    <Typography>
                      WCG FedRAMP assessors review your organization’s environment and conduct a technical capability assessment to determine if it meets FedRAMP compliance requirements. This service results in a comprehensive FedRAMP Readiness Assessment Report (RAR), offering reassurance in your FedRAMP readiness.
                    </Typography>
                    <Typography>
                      In order to kick off the authorization process with the Joint Authorization Board (JAB), CSPs must achieve the FedRAMP Ready JAB designation for their Cloud Service Offering (CSO) through a FedRAMP Readiness Assessment.
                    </Typography>

                  </Stack>
                </Grid>
                <Grid item md={6} sm={12} pl={7}>
                  <img src={fedRampS2} style={{ width: '100%' }} />
                </Grid>
              </Grid>
            </Box>

            <Box pb={{ md: 7, xs: 5 }}>
              <Grid container columnSpacing={7} alignItems="center">
                <Grid item md={6} sm={12} pr={15}>
                  <img src={fedRampS3} style={{ width: '100%' }} />
                </Grid>
                <Grid item md={6} sm={12}>
                  <Typography color="primary.main" mb={1}>
                    FedRAMP Authorization
                  </Typography>
                  <Stack spacing={3}>
                    <Typography mt={0} variant='h4' fontSize="32px" lineHeight="38px" fontWeight="bold" mb={2} pr={{ md: 10 }}>
                      Full Security Assessment
                    </Typography>
                    <Typography>
                      Our FedRAMP assessors perform an independent assessment of the system to evaluate critical control implementation and verify your compliance level to FedRAMP. This 3PAO Full Security Assessment is conducted in accordance with NIST SP 800-53 Revision 5 and FedRAMP baselines for low, moderate, or high-impact cloud organizations’ products and/or services.
                    </Typography>
                    <Typography>
                      FedRAMP Penetration Test activities are also within the scope of this Full Security Assessment.
                    </Typography>
                    <Typography fontWeight="bold">
                      A 3PAO-required Security Authorization Package will be developed and issued by WCG which contains:
                    </Typography>
                    <ul className='listDisc'>
                      <li>Security Assessment Plan (SAP)</li>
                      <li>Security Assessment Report (SAR)</li>
                      <li>Plan of Action and Milestones (POA&M) generated from FedRAMP assessment</li>
                    </ul>
                  </Stack>
                </Grid>
              </Grid>
            </Box>

            <Box pb={{ md: 9, xs: 5 }} >
              <Grid container columnSpacing={7} alignItems="center">

                <Grid item md={6} sm={12}>
                  <Box pr={10}>
                    <Typography color="primary.main" mb={1}>
                      FedRAMP Continuous Monitoring
                    </Typography>
                    <Stack spacing={3}>



                      <Typography mt={0} variant='h4' fontSize="32px" lineHeight="38px" fontWeight="bold" mb={2} pr={{ md: 25 }}>
                        Annual Assessment
                      </Typography>

                      <Typography>
                        We provide ongoing support with risk evaluation to maintain your organization's FedRAMP ATO by the following:
                      </Typography>
                      <ul className='listDisc'>
                        <li>Work with your organization to provide evidentiary information to Authorizing Officials (AOs) at least monthly, annually, every three years, and on an as-needed basis.</li>
                        <li>As a certified FedRAMP 3PAO, we perform the FedRAMP assessment on an annual basis for a subset of the overall controls implemented on the system to ensure your organization’s operational visibility.</li>
                        <li>Assist with the integrated change control process to maintain a secure baseline configuration of your architecture.</li>

                      </ul>


                    </Stack>
                  </Box>
                </Grid>
                <Grid item md={6} sm={12} pl={7}>
                  <img src={fedRampS4} style={{ width: '100%' }} />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>

        <Box bgcolor="primary.light" py={{ md: 12, xs: 6 }}>
          <Box className="container">
            <Typography className='sectionTitle' variant='h2' textAlign="center" mb={4}>
              Why choose WCG for your <br /> FedRAMP needs?
            </Typography>
            <Grid container columnSpacing={10}>
              <Grid item md={6}>
                <Box className="customItemBox2">
                  <Box><span className='iconRight icon01'><FaUserClock /></span></Box>
                  <Box>
                    <Typography className='customItemBox2__title'>Time Saving</Typography>
                    <Typography>Our FedRAMP process and use of internal application provide a faster and simplified approach to evaluate controls and identify deficiencies. We can effectively and efficiently get you ready for the authorization up to 60 days, which saves 80% faster time to market.</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>


            <Grid container mt={-4}>
              <Grid item md={3}></Grid>
              <Grid item md={6}>
                <Box className="customItemBox2">
                  <Box><span className='iconRight icon02'><FaCoins /></span></Box>
                  <Box>
                    <Typography className='customItemBox2__title'>Cost Saving</Typography>
                    <Typography>Our pricing is competitive and straightforward with no hidden agenda, miscellaneous charges, or add-on fees, which provides you with at least 40% cost savings compared to others’ pricing and approach.</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            <Grid container mt={-4}>
              <Grid item md={6}></Grid>
              <Grid item md={6}>
                <Box className="customItemBox2">
                  <Box><span className='iconRight icon03'><FaUsersCog /></span></Box>
                  <Box>
                    <Typography className='customItemBox2__title'>Experienced Team</Typography>
                    <Typography>Our team is highly talented, knowledgeable, and experienced in conducting FedRAMP assessments and providing consulting in accordance with NIST 800-53 Rev 5. We have unique experiences in working with federal agencies, which allow us to have the know-how to ensure businesses are successful with their assessments.</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>



          </Box>
        </Box>


        <Box py={{ md: 12, xs: 6 }}>
          <Box className="container">
            <Typography className='sectionTitle' variant='h2' textAlign="center">Frequently asked questions (FAQ)</Typography>

            <Box className="faqSection2" mt={6}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<IoIosArrowDropdownCircle size={70} />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography>What are the impact levels of a FedRAMP authorization?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Stack spacing={3}>
                    <Typography>
                      FedRAMP authorizations are granted at three impact/compliance levels based on the NIST FIPS 199 guidelines:
                    </Typography>
                    <ul className='listDisc'>

                      <li><strong>Low Impact:</strong> This level is appropriate for Cloud Service Offerings (CSOs) where the loss of confidentiality, integrity, and availability would result in limited adverse effects on an agency’s operations, assets, or individuals. There are two baselines for systems with Low Impact data: the LI-SaaS Baseline (for Low-Impact SaaS applications that do not store personal identifiable information beyond login credentials) and the standard Low Baseline.</li>
                      <li><strong>Moderate Impact:</strong> Nearly 80% of CSP applications that receive FedRAMP authorization fall into this category. It is suitable for CSOs where the loss of confidentiality, integrity, and availability would result in serious adverse effects on an agency’s operations, assets, or individuals. </li>
                      <li><strong>High Impact:</strong> FedRAMP high impact level is reserved for CSOs where the loss of confidentiality, integrity, or availability would have severe or catastrophic effects. High Impact systems are critical and require the most rigorous security controls and scrutiny.</li>

                    </ul>
                  </Stack>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<IoIosArrowDropdownCircle size={70} />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Typography>How long does it take to get FedRAMP authorization?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Stack spacing={3}>
                    <Typography>
                      <strong>The timeline of FedRAMP authorization generally spans 12 to 18 months;</strong> however, many factors can shift this timeline.
                    </Typography>
                    <ul className='listDisc'>
                      <li><strong>Pre-Assessment and Planning (3-6 months):</strong> The initial steps include an in-depth review of FedRAMP standards, a gap analysis, preparation of necessary documentation, and the selection of a 3PAO.</li>
                      <li><strong>Security Assessment (6-9 months):</strong> The selected 3PAO conducts a thorough review and testing of the cloud service’s security controls. This period is dedicated to verifying documentation and validating security practices.</li>
                      <li><strong>Remediation (1-3 months):</strong> After the assessment, providers must address any identified gaps or deficiencies, which may include refining security controls and policies.</li>
                      <li><strong>Authorization Package Submission and Review (2-3 months):</strong> The compiled security package and assessment results are submitted to the FedRAMP Program Management Office (PMO) and potentially to a sponsoring agency.</li>
                      <li><strong>Authority to Operate (ATO) Issuance (1-2 months):</strong> The final phase involves approval of the package by the sponsoring agency or the Joint Authorization Board (JAB), granting an ATO that confirms compliance with all FedRAMP requirements.</li>

                    </ul>
                  </Stack>
                </AccordionDetails>
              </Accordion>


              <Accordion>
                <AccordionSummary
                  expandIcon={<IoIosArrowDropdownCircle size={70} />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Typography>What is the difference between FedRAMP and FISMA?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <TableContainer>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table" className='customizeTable'>
                      <TableHead >
                        <TableRow>
                          <TableCell></TableCell>
                          <TableCell >FedRAMP</TableCell>
                          <TableCell >FISMA</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>

                        <TableRow >
                          <TableCell component="th" scope="row">
                            Purpose
                          </TableCell>
                          <TableCell >Provides a standardized approach to security assessment, authorization, and continuous monitoring for cloud products/services/offerings.</TableCell>
                          <TableCell >Provides a framework to ensure the effectiveness of security controls over information and information systems supporting federal operations and assets.</TableCell>
                        </TableRow>

                        <TableRow >
                          <TableCell component="th" scope="row">
                            Applicability
                          </TableCell>
                          <TableCell >Mandatory for all Cloud Service Providers (CSPs) that hold federal data and are providing or seeking to provide services to federal agencies.</TableCell>
                          <TableCell >Mandatory for all federal agencies and any contractors or other organizations supporting a federal agency.</TableCell>
                        </TableRow>

                        <TableRow >
                          <TableCell component="th" scope="row">
                            Compliance Assessor
                          </TableCell>
                          <TableCell >
                            Only FedRAMP certified 3PAO is authorized to conduct FedRAMP Readiness Assessment and Full Security Assessment for CSPs.
                          </TableCell>
                          <TableCell >
                            Any third party capable of conducting an assessment against the NIST SP 800-53 standards can be used to evaluate compliance.
                          </TableCell>
                        </TableRow>

                        <TableRow >
                          <TableCell component="th" scope="row">
                            Controls/Framework
                          </TableCell>
                          <TableCell >
                            Leverages NIST SP 800-53 Revision 5 with control parameters defined by FedRAMP and additional controls required by FedRAMP.
                          </TableCell>
                          <TableCell >Leverages NIST SP 800-53 Revision 5 with control parameters defined by the organization providing services to a federal agency.</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </AccordionDetails>
              </Accordion>

            </Box>

          </Box>
        </Box>
        <BlogSlider resourcesSlide={slides} />
        <ContactUs />
      </Box>
    </>
  )
}

export default FedrampConsulting