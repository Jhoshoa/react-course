import React from 'react'
import { getHeroesByPublisher } from '../helpers';
import { HeroeList } from '../components/HeroeList';

export const MarvelPage = () => {
  const heroes = getHeroesByPublisher('Marvel Comics');

  return (
    <div className='container mt-5'>
      <h1>Search Page</h1>
      <hr />
      <HeroeList heroes={heroes} />
    </div>
  )
}
