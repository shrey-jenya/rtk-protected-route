import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../app/features/authSlice'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = () => {
        dispatch(logout())
        navigate('/login')
    }
    return (
        <div>
            <h1>are you sure you want to logout?</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Logout
