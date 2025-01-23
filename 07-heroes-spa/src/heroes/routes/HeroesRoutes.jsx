import React from 'react'
import { NavBar } from '../../ui'
import { Navigate, Route, Routes } from 'react-router'
import { DcPage, HeroPage, MarvelPage, SearchPage } from '../pages'

export const HeroesRoutes = () => {
  return (
    <>
        <NavBar />

        <Routes>
            <Route path='marvel' element={ <MarvelPage />} />
            <Route path='/dc' element={ <DcPage />} />
            <Route path='/search' element={ <SearchPage />} />
            <Route path='/hero/:heroId' element={ <HeroPage />} />

            <Route path='/' element={ <Navigate to='/marvel' />} />
        </Routes>
    </>
  )
}
