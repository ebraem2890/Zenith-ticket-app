import { useState, useEffect } from 'react'
import { mockLogin, mockLogout } from '../api/auth'


const LOCAL_KEY = 'ticketapp_session'


export function useAuth(){
const [user, setUser] = useState(null)
const [token, setToken] = useState(()=> localStorage.getItem(LOCAL_KEY) || null)
const [loading, setLoading] = useState(false)


useEffect(()=>{
if (token){
// in a real app you'd verify token -> here we'll derive a mock user object
setUser({name:'Authenticated User'})
} else {
setUser(null)
}
}, [token])


const login = async ({email, password}) => {
setLoading(true)
try{
const res = await mockLogin({email, password})
localStorage.setItem(LOCAL_KEY, res.token)
setToken(res.token)
setUser(res.user)
setLoading(false)
return {ok:true}
}catch(err){
setLoading(false)
return {ok:false, error: err.message || 'Login failed'}
}
}


const logout = async ()=>{
await mockLogout()
localStorage.removeItem(LOCAL_KEY)
setToken(null)
setUser(null)
}


return {user, token, loading, login, logout}
}