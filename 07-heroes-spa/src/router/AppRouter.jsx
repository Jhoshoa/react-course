import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import LoginPage from '../auth/pages/LoginPage'
import { NavBar } from '../ui'
import { MarvelPage, DcPage, HeroesRoutes } from '../heroes'

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='/login' element={ <LoginPage />} />

            <Route path='/*' element={ <HeroesRoutes /> } />
        </Routes>
    </>
  )
}
