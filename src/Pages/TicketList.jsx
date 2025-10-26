import React, { useReducer, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ticketsReducer, initialTickets } from '../store/ticketsReducer'



const TicketList = () => {
    const [state, dispatch] = useReducer(ticketsReducer, initialTickets)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const raw = localStorage.getItem('ticketapp_session')
        if (raw) {
            try { const parsed = JSON.parse(raw); dispatch({ type: 'SET', payload: parsed }) } catch (e) { }
        }
        setLoading(false)
    }, [])


    useEffect(() => {
        localStorage.setItem('ticketapp_session', JSON.stringify(state))
    }, [state])


    const handleDelete = (id) => {
        if (!confirm('Delete this ticket?')) return
        dispatch({ type: 'DELETE', payload: id })
    }


    if (loading) return <div>Loading tickets...</div>


    return (
        <div>
            <h3>Your Tickets</h3>
            {state.length === 0 ? (
                <div className="card">No tickets yet. <Link to="/app/tickets/new">Create one</Link></div>
            ) : (
                <div style={{ display: 'grid', gap: 12 }}>
                    {state.map(t => (
                        <div key={t.id} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <div style={{ fontWeight: 600 }}>{t.title}</div>
                                <div style={{ fontSize: 13, color: '#555' }}>{t.description}</div>
                                <div style={{ fontSize: 12, marginTop: 8 }}>Status: {t.status}</div>
                            </div>
                            <div style={{ display: 'flex', gap: 8 }}>
                                <Link to={`/app/tickets/${t.id}/edit`}><button className="btn">Edit</button></Link>
                                <button className="btn btn-ghost" onClick={() => handleDelete(t.id)}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
export default TicketList