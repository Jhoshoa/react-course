import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import LoginPage from '../auth/pages/LoginPage'
import { NavBar } from '../ui'
import { MarvelPage, DcPage } from '../heroes'

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
