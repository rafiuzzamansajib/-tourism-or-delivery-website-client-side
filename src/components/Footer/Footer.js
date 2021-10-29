import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <>
            <div className="footer-dark">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        <ul>
                            <li><Link as={HashLink} to="/home#home">Home</Link></li>
                            <li><Link as={HashLink} to="/home#services">Services</Link></li>
                            <li><Link as={HashLink} to="/home#specialist">Doctors</Link></li>
                            <li><Link as={HashLink} to="/home#contact">Contact Us</Link></li>
                            <li><Link to="/login">Log In</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-6 item text">
                        <h2 className='text-center'>Life Care Hospital</h2>
                        <p className='p-2'>A hospital is a health care institution providing patient treatment with specialized medical and nursing staff and medical equipment.The best-known type of hospital is the general hospital, which typically has an emergency department to treat urgent health problems ranging from fire and accident victims to a sudden illness.</p>
                    </div>
                    <div className="col item social">
                        <Link to="#"><FontAwesomeIcon icon={faFacebook} /></Link>
                        <Link to="#"><FontAwesomeIcon icon={faTwitter} /></Link>
                        <Link to="#"><FontAwesomeIcon icon={faInstagram} /></Link>
                        <Link to="#"><FontAwesomeIcon icon={faBlog} /></Link>
                    </div>
                </div>
                <p className="copyright">Life Care Hospital © 2021</p>
            </div>
    </div>
        </>
    );
};

export default Footer;