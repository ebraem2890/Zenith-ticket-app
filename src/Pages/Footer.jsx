import React from 'react'

const Footer = () => {
    return (
        <footer style={{ marginTop: 32, padding: '18px 0' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>© {new Date().getFullYear()} Zenith Ticket</div>
                <div>Terms • Privacy</div>
            </div>
        </footer>
    )
}
export default Footer;
