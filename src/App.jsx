import React from 'react'
import './App.css'
import Nav from './Nav'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import User from './api/User'

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='*' element={<NotFound/>}/>
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />
          <Route
            path="/user"
            element={<User />}
          />
        </Routes>
        {/* <Logout/> */}
        <div>
            <p className="text-center text-gray-500 dark:text-gray-400"><a href="https://github.com/shrey-jenya" > &copy; Shrey</a></p>
        </div>
      </div>
    </Router>
  )
}
export default App
