import React from 'react'

export const HeroeList = ({heroes = []}) => {
    return (
        <>
            {
                heroes.map((hero) => {
                    return (
                        <li key={hero.id}>{hero?.superhero}</li>
                    );
                })
            }
        </>
    )
}
