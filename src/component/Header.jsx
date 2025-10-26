import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const Header = () => {
const { token, logout, user } = useAuth()
const navigate = useNavigate()


const handleLogout = async ()=>{
await logout()
navigate('/login')
}


return (
<header>
<div className="container" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
<div style={{display:'flex',gap:12,alignItems:'center'}}>
<Link to="/" style={{textDecoration:'none', color:'inherit'}}><h2>Zenith Ticket</h2></Link>
<nav style={{display:'flex', gap:12}}>
<Link to="/">Home</Link>
{token && <Link to="/app/tickets">Tickets</Link>}
</nav>
</div>


<div>
{token ? (
<div style={{display:'flex', gap:8, alignItems:'center'}}>
<div>Hi, {user?.name || 'User'}</div>
<button className="btn btn-ghost" onClick={handleLogout}>Logout</button>
</div>
) : (
<Link to="/login"><button className="btn btn-primary">Login</button></Link>
)}
</div>
</div>
</header>
)
}

export default Header
