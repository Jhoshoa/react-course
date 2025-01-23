import React from 'react'
import { HeroeList } from '../components/HeroeList';

export const MarvelPage = () => {

  const publisher = 'Marvel Comics';

  return (
    <div className='container mt-5'>
      <h1>Search Page</h1>
      <hr />
      <HeroeList publisher={publisher} />
    </div>
  )
}
