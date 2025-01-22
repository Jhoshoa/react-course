import React from 'react'
import { Routes, Route, Navigate, Link } from 'react-router'
import HomePage from './HomePage'
import LoginPage from './LoginPage'
import AboutPage from './AboutPage'
import NavBar from './NavBar'
import UserProvider from './context/UserProvider'

const MainApp = () => {
  return (
    <UserProvider>
        <h1>Main</h1>

        {/* This woks but make a complet refresh of ALL page */}
        {/* <a  href='/'>Home</a>
        <a  href='/about'>About</a>
        <a  href='/login'>Login</a> */}

        {/* A better way to redirect or go a page is using the Link from React-router */}
        {/* <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/login'>Login</Link> */}

        <NavBar />

        <hr />

        <Routes>
            <Route path='/' element={ <HomePage />} />
            <Route path='/about' element={ <AboutPage />} />
            <Route path='/login' element={ <LoginPage />} />

            {/* This one way to go to adefault route that doesn't exist */}
            {/* <Route path='/*' element={ <LoginPage />} /> */}

            {/* Another way */}
            <Route path='/*' element={ <Navigate to='/about' /> } />
        </Routes>
    </UserProvider>
  )
}

export default MainApp
