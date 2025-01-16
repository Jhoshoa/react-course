import React, { useCallback, useState } from 'react'
import ShowIncrement from './ShowIncrement';

// Everytime we click on the Incrementar button the <ShowIncrement /> component 
// is being renderend again, because it is created in a different place of memory
// Even if the <ShowIncrement /> didn't change, So we need to use the useCallback and memo to solve this issue

// useCallback memorize functions
// but we should use the React.memo in the child component

const CallbackHook = () => {

    const [counter, setCounter]= useState(10);

    const incrementFather = useCallback((value) => {
        setCounter( (c) => c + value );
    }, [])

    // const incrementFather = () => {
    //     setCounter( counter + 1);
    // }

  return (
    <>
        <h1>useCallback Hook: {counter} </h1>
        <hr />

        <ShowIncrement increment={incrementFather} />
    </>
  )
}

export default CallbackHook
