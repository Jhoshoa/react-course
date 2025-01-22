import React from 'react'
import { getHeroesByPublisher } from '../helpers'
import { HeroeList } from '../components/HeroeList';

export const DcPage = () => {

  const heroes = getHeroesByPublisher('DC Comics');

  return (
    <>
        <h1>Dc Page</h1>
        <hr />
        <ul>
          <HeroeList heroes={heroes} />
        </ul>
    </>
  )
}
