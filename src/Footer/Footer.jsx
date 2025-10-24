import React from 'react'
import './Footer.css'
import { assets } from '../assets/asset'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt='' />
                    <p><b>Zenith ticket</b>-Simplifying ticket management for teams and individuals with speed, clarity, and collaboration.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook} alt="" />
                        <img src={assets.twitter} alt="" />
                        <img src={assets.linkedin} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+234-705-241-3428</li>
                        <li>ibrahimazeezah98@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2025 @ zenith.com - All Right Reserved.</p>
        </div>
    )
}

export default Footer
