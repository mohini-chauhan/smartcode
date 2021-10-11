import "./Footer.css";
import React from 'react'
import footer from "./footer.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook,faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-header">
                <img src={footer} alt="footer-icon"/>
                <p>Join millions of people who organize work and life with App.</p>
                <hr/>
                <div className="social-container">
                    <div className="copyright">
                        ©Smarter.Codes
                    </div>
                    <div className="social-icons">
                        <FontAwesomeIcon className="social-icons-img" icon={faFacebook}/>
                        <FontAwesomeIcon className="social-icons-img" icon={faTwitter}/>
                        <FontAwesomeIcon className="social-icons-img" icon={faInstagram}/>
                    </div>

                </div>


            </div>
            

            
        </footer>
    )
}

export default Footer

