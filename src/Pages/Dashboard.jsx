import React from 'react'
import { Outlet, Link } from 'react-router-dom'


export default function Dashboard() {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <h2>Dashboard</h2>
                <div style={{ display: 'flex', gap: 8 }}>
                    <Link to="tickets/new"><button className="btn">Create Ticket</button></Link>
                </div>
            </div>
            <Outlet />
        </div>
    )
}