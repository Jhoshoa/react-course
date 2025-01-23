import React from 'react'
import { HeroeList } from '../components/HeroeList';

export const DcPage = () => {

  const publisher = 'DC Comics';
  

  return (
    <div className='container mt-5'>
        <h1>Dc Page</h1>
        <hr />
        <HeroeList publisher={publisher} />
    </div>
  )
}
