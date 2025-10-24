import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/asset'

const Navbar = ({setShowLogin}) => {
    return (
        <div className='navbar'>
            <div className="navbar-container">
                <img src={assets.logo} alt='zenith-logo' className='navbar-logo' />
                <h1 className="navbar-title">Zenith Ticket</h1>
                <p className="description">Track, manage, and resolve your tickets effortlessly in one unified platform.</p>
                <div className="button-group">
                    <button className='btn primary'>Get Started</button>
                    <button className='btn secondary' onClick={() => setShowLogin(true)}>Login</button>
                </div>
                <div className="circle"></div>
                <svg className='svg-wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="2" d="M0,224L48,186.7C96,149,192,75,288,85.3C384,96,480,192,576,213.3C672,235,768,181,864,149.3C960,117,1056,107,1152,90.7C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>
        </div>
    )
}

export default Navbar
