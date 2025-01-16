import React from 'react'
import useFetch from '../hooks/useFetch'

const MultipleCustomHooks = () => {

    const { data, hasError, isLoading } = useFetch('https://pokeapi.co/api/v2/pokemon/3');

  return (
    <>
        <h1>Multiple Custom Hooks: Pokemon</h1>
        <hr />

        { isLoading && <p>Cargando ...</p>}

        <h3>{ data?.name }</h3>

        {/* <pre>{ JSON.stringify(data, null, 2)}</pre> */}
    </>
  )
}

export default MultipleCustomHooks
