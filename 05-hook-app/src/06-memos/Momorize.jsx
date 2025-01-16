import React, { useState } from 'react'
import useCounter from '../hooks/useCounter'
import Small from './Small';

const Momorize = () => {

    const { counter, incrementar } = useCounter();

    const [show, setShow ] = useState(true);
  return (
    <>
        <h1>Counter: <Small value={counter} /> </h1>
        <hr />

        <button
            className='btn btn-primary'
            onClick={() => incrementar(2)}
        >
            +1
        </button>

        <button
            className='btn btn-outline-primary'
            onClick={() => setShow(!show)}
        >
            Show/Hide {JSON.stringify(show)}
        </button>
    </>
  )
}

export default Momorize
