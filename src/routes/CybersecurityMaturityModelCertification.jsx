import React from 'react';
import PageHeader from '../components/PageHeader';
import ContactUs from '../components/ContactUs';
import headerBg from '../assets/img/banner'

const CybersecurityMaturityModelCertification = () => {
    const iframeElement = <iframe width="100%" height="480" src="https://www.youtube.com/embed/aYaZIFheY0c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>

  return (
    <>
       <PageHeader  canonicalUrl="cybersecurity-maturity-model-certification" requestConBtn="#contactUs" videoUrl={iframeElement} headTitle="CMMC Compliance Consulting | CMMC Assessment and Remediation" metaDesc="WCG’s CMMC Compliance Consulting and Remediation Services reduce your organization’s level of efforts & risks and help maintain and win DoD contracts." parent="Compliance Services" parentUrl="cybersecurity-maturity-model-certification" title={"Cybersecurity Maturity Model Certification (CMMC)"} backgroundImage={headerBg} />
       <WhyUs />
       <ContactUs />
    </>
  )
}

export default CybersecurityMaturityModelCertification