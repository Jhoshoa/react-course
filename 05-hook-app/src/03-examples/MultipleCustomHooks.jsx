import React from 'react'
import useFetch from '../hooks/useFetch'
import useCounter from '../hooks/useCounter';

const MultipleCustomHooks = () => {

    const { counter, incrementar, decrementar } = useCounter(1);
    // console.log(JSON.stringify(counter));
    const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

  return (
    <>
        <h1>Multiple Custom Hooks: Pokemon</h1>
        <hr />

        { isLoading && <p>Cargando ...</p>}

        <h3>{ data?.name }</h3>

        {/* <pre>{ JSON.stringify(data, null, 2)}</pre> */}

        <button
            className='btn btn-primary mt-2'
            onClick={ () => counter > 1 ? decrementar() : null }
        >Anterior</button>

        <button
            className='btn btn-primary mt-2'
            onClick={ () => incrementar() }
        >Siguiente</button>
    </>
  )
}

export default MultipleCustomHooks
