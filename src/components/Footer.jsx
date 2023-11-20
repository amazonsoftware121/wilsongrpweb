import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className='footerTop'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='footerCol fCol1'>
                                <h4>About Company</h4>
                                <p>
                                    Wilson Consulting Group (WCG) is an innovative global cybersecurity consulting firm headquartered in Washington D.C., with a European office in London, England.
                                </p>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className='footerCol fCol2'>
                                <h4>Quick links</h4>
                                <div className='footerMenu'>
                                    <ul>
                                        <li><Link to="/">About Us</Link></li>
                                        <li><Link to="/">Our Services</Link></li>
                                        <li><Link to="/">Cyber Security</Link></li>
                                        <li><Link to="/">Industries We Serve</Link></li>
                                        <li><Link to="/">Careers</Link></li>
                                        <li><Link to="/">Contact</Link></li>
                                        <li><Link to="/">Privacy Policy</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className='footerCol fCol3'>
                                <h4>Our Services</h4>
                                <div className='footerMenu'>
                                    <ul>
                                        <li><Link to="/">Cyber Security Assessment</Link></li>
                                        <li><Link to="/">Risk Management and Assessment</Link></li>
                                        <li><Link to="/">Cloud Services</Link></li>
                                        <li><Link to="/">Cybersecurity Maturity Model Certification (CMMC)</Link></li>
                                        <li><Link to="/">FedRAMP Advisory and Assessment Services</Link></li>
                                        <li><Link to="/">IT Governance</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className='footerCol fCol4'>
                                <h4>Contact Info</h4>
                                <div className='contactInfo'>
                                    <div className='contactInfoItem'>
                                        <div className='contactInfoItem__icon'>

                                        </div>
                                        <div className='contactInfoItem__text'>
                                            sales@wilsoncgrp.com
                                        </div>
                                    </div>

                                    <div className='contactInfoItem'>
                                        <div className='contactInfoItem__icon'>

                                        </div>
                                        <div className='contactInfoItem__text'>
                                            800 Maine Avenue SW, Suite 200, Washington DC 20024
                                        </div>
                                    </div>


                                    <div className='contactInfoItem'>
                                        <div className='contactInfoItem__icon'>

                                        </div>
                                        <div className='contactInfoItem__text'>
                                            1.866.780.1655
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='footerBottom'>
                <p className='copyright text-center'>© 2023 Wilson consulting group. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer