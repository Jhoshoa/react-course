import React, { useState } from 'react'

const CounterApp = () => {

    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });

    const { counter1, counter2, counter3 } = counter;
    // const incrementarContador = () => {
    //     console.log("===>")
    //     const newValue = setCounter({...counter, counter1: counter1 +1});
    //     console.log("===> ==" + newValue)
    // }
  return (
    <>
    <h1> Counter: {counter.counter1}</h1>
    <h1> Counter: {counter.counter2}</h1>
    <h1> Counter: {counter.counter3}</h1>
    <hr />
    <button className='btn' onClick={ () => {setCounter({...counter, counter1: counter1 +1});} }>+1</button>
    </>
  )
}

export default CounterApp
