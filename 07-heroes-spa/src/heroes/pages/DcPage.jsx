import React from 'react'
import { getHeroesByPublisher } from '../helpers'
import { HeroeList } from '../components/HeroeList';

export const DcPage = () => {

  const heroes = getHeroesByPublisher('DC Comics');

  return (
    <div className='container mt-5'>
        <h1>Dc Page</h1>
        <hr />
        <HeroeList heroes={heroes} />
    </div>
  )
}
