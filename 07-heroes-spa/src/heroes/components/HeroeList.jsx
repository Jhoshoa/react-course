import React, { useMemo } from 'react'
import { HeroCard } from './HeroCard'
import { getHeroesByPublisher } from '../helpers';

export const HeroeList = ({publisher}) => {

    const heroes = useMemo( () => getHeroesByPublisher(publisher), [publisher]);

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
