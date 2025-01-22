import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import MarvelPage from '../heroes/pages/MarvelPage'
import DcPage from '../heroes/pages/DcPage'
import LoginPage from '../auth/pages/LoginPage'
import { NavBar } from '../ui'

export const AppRouter = () => {
  return (
    <>
        <NavBar />
        <Routes>
            <Route path='marvel' element={ <MarvelPage />} />
            <Route path='/dc' element={ <DcPage />} />
            <Route path='/login' element={ <LoginPage />} />

            <Route path='/*' element={ <Navigate to='/marvel' />} />
        </Routes>
    </>
  )
}
