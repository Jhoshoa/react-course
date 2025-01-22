import React from 'react'
import { HeroCard } from './HeroCard'

export const HeroeList = ({heroes = []}) => {
    return (
        <div className='row rows-cols-1 row-cols-md-3 g3'>
            {
                heroes.map((hero) => (
                    <HeroCard key={hero.id} {...hero} />
                ))
            }
        </div>
    )
}
