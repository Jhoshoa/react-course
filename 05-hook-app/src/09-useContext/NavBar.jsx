import React from 'react'
import { Link } from 'react-router'

const NavBar = () => {
  return (
    <>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/login'>Login</Link>
    </>
  )
}

export default NavBar
