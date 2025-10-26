import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/asset';


const Landing = () => {
    return (
        <div className="hero">
            <div className="container">
                <div style={{ display: 'flex', gap: 24 }}>
                    <div style={{ flex: 1, marginBottom: 75 }}>
                        <h1>Sell and manage event tickets with ease</h1>
                        <p>Create events, track sales, and manage tickets — fast.</p>
                        <Link to="/login"><button className="btn btn-primary">Get Started</button></Link>
                    </div>
                    <div className="circle"></div>
                    <svg className='svg-wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff6600" fillOpacity="1" d="M0,224L48,186.7C96,149,192,75,288,85.3C384,96,480,192,576,213.3C672,235,768,181,864,149.3C960,117,1056,107,1152,90.7C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                </div>
                <div className="box">
                    <h3 style={{ color: "#ff6600", marginBottom: 10 }}><img src={assets.payment} alt="zenith-pay" style={{ width: 15, margin: 2 }} />Easy Payment</h3>
                    <p style={{ color: "#333", fontSize: 15 }}>Multiple payment options with strong encryption for a safe checkout experience.</p>
                </div>
                <div className="box">
                    <h3 style={{ color: "#ff6600", marginBottom: 10 }}><img src={assets.discount} alt="zen-discount" style={{ width: 15, margin: 2 }} />Early Bird Discounts</h3>
                    <p style={{ color: "#333", fontSize: 15 }}>Save more when you book early — special offers for frequent users.</p>
                </div>
                <div className="box">
                    <h3 style={{ color: "#ff6600", marginBottom: 10 }}><img src={assets.events} alt="zen-events" style={{ width: 15, margin: 2 }} />Host Events with Ease</h3>
                    <p style={{ color: "#333", fontSize: 15 }}>Create, manage, and track your event ticket sales in real time.</p>
                </div>
            </div>
            </div>
    )
}
export default Landing;