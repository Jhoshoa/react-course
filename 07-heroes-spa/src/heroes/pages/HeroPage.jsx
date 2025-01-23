import React from 'react'
import { Navigate, useParams } from 'react-router'
import { getHeroesById } from '../helpers';

export const HeroPage = () => {

    const { heroId } = useParams();

    const hero = getHeroesById(heroId)
    console.log(hero);

    if ( !hero) {
      // return <>404 - not found</>
      return <Navigate to='/marvel' />
    }
  return (
    <div className='row mt-5'>
        <div className="col-4">
          <img src="" alt="" className='img-thumbnail' />
        </div>
    </div>
  )
}
