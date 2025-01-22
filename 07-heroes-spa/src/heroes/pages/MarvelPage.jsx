import React from 'react'
import { getHeroesByPublisher } from '../helpers';
import { HeroeList } from '../components/HeroeList';

export const MarvelPage = () => {
  const heroes = getHeroesByPublisher('Marvel Comics');

  return (
    <>
      <h1>Search Page</h1>
      <hr />
      <ul>
        <HeroeList heroes={heroes} />
      </ul>
    </>
  )
}
