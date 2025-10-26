import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { login } = useAuth()
    const navigate = useNavigate()


    const onSubmit = async (data) => {
        const res = await login(data)
        if (res.ok) {
            navigate('/app')
        } else {
            alert(res.error || 'Login failed')
        }
    }


    return (
        <div style={{ padding: '32px 0'}}>
            <div className="card" style={{ maxWidth: 480, margin: '0 auto', fontFamily: 'san-serif' }}>
                <h2 style={{ fontSize: 24, fontWeight: 500, color: 'black' }}>Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-row">
                        <label style={{ fontSize: 20, color: 'black'  }}>Email: </label>
                        <input {...register('email', { required: 'Email required' })} />
                        {errors.email && <div style={{ color: 'red' }}>{errors.email.message}</div>}
                    </div>


                    <div className="form-row">
                        <label style={{ fontSize: 20, color: 'black' }}>Password: </label>
                        <input type="password" {...register('password', { required: 'Password required', minLength: { value: 4, message: 'Minimum 4 chars' } })} />
                        {errors.password && <div style={{ color: 'red' }}>{errors.password.message}</div>}
                    </div>


                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <button className="btn btn-primary" type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login