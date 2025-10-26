import React, { useReducer, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { ticketsReducer, initialTickets } from '../store/ticketsReducer'


export default function TicketForm() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [state, dispatch] = useReducer(ticketsReducer, initialTickets)
    const { register, handleSubmit, setValue, formState: { errors } } = useForm()


    useEffect(() => {
        const raw = localStorage.getItem('ticketapp_tickets')
        if (raw) {
            try { const parsed = JSON.parse(raw); dispatch({ type: 'SET', payload: parsed }) } catch (e) { }
        }
    }, [])


    useEffect(() => {
        // if editing, set current values
        if (id && state.length) {
            const ticket = state.find(t => t.id === id)
            if (ticket) {
                setValue('title', ticket.title)
                setValue('description', ticket.description)
                setValue('status', ticket.status)
            }
        }
    }, [id, state, setValue])


    useEffect(() => {
        // persist on changes
        localStorage.setItem('ticketapp_tickets', JSON.stringify(state))
    }, [state])


    const onSubmit = (data) => {
        // custom validation example: status must be one of a set
        const allowed = ['draft', 'published', 'closed']
        if (!allowed.includes(data.status)) {
            return alert('Status must be one of: ' + allowed.join(', '))
        }


        if (id) {
            dispatch({ type: 'UPDATE', payload: { ...data, id } })
        } else {
            const newTicket = { ...data, id: Date.now().toString() }
            dispatch({ type: 'ADD', payload: newTicket })
        }


        navigate('/app/tickets')
    }


    return (
        <div style={{ maxWidth: 640 }}>
            <h3>{id ? 'Edit Ticket' : 'Create Ticket'}</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="card">
                <div className="form-row">
                    <label>Title</label>
                    <input {...register('title', { required: 'Title is required' })} />
                    {errors.title && <div style={{ color: 'red' }}>{errors.title.message}</div>}
                </div>


                <div className="form-row">
                    <label>Description</label>
                    <textarea {...register('description', { required: 'Description is required' })} rows={4} />
                    {errors.description && <div style={{ color: 'red' }}>{errors.description.message}</div>}
                </div>


                <div className="form-row">
                    <label>Status</label>
                    <select {...register('status', { required: 'Status required' })}>
                        <option value="draft">draft</option>
                        <option value="published">published</option>
                        <option value="closed">closed</option>
                    </select>
                    {errors.status && <div style={{ color: 'red' }}>{errors.status.message}</div>}
                </div>


                <div style={{ display: 'flex', gap: 8 }}>
                    <button className="btn btn-primary" type="submit">Save</button>
                    <button type="button" className="btn" onClick={() => navigate(-1)}>Cancel</button>
                </div>
            </form>
        </div>
    )
}