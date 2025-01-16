import React, { useMemo, useState } from 'react'
import useCounter from '../hooks/useCounter'
import Small from './Small';

const heavyStuff = ( iterationNumber = 100) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log("Ahi vamos...");
    }

    return `${iterationNumber} iteraciones realizadas`;
}

const MemoHook = () => {

    const { counter, incrementar } = useCounter(500);

    const [show, setShow ] = useState(true);

    const memorizedValue = useMemo( () => heavyStuff(counter), [counter]);
  return (
    <>
        <h1>Counter: <Small value={counter} /> </h1>
        <hr />

        {/* <h4>{ heavyStuff(counter) }</h4> */}
        <h4>{ memorizedValue }</h4>

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

export default MemoHook
