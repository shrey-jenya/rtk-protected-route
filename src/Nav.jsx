import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from './app/features/authSlice'
const Nav = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
    const dispatch = useDispatch()
    const handleLogout = () => {
        const confLogout = window.confirm('Are you sure you want to log out?')
        if (confLogout) {
            dispatch(logout())
        }
    }
    return (
        <nav className="bg-white shadow dark:bg-gray-800">
            <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
                <Link to='/' className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200   mx-1.5 sm:mx-6">home</Link>
                <Link to='dashboard' className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200   mx-1.5 sm:mx-6">Blog</Link>
                {
                    isAuthenticated ? (
                        <button onClick={handleLogout} className="border-b-2 text-gray-800 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Logout</button>
                    ) : (
                        <Link to='login' className="border-b-2 text-gray-800 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Login</Link>
                    )
                }
            </div>
        </nav>
    )
}
export default Nav
