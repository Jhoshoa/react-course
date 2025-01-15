import { useState } from "react"

const useCounter = ( initialvalue = 10) => {
    const [counter, setCounter] = useState(initialvalue);

    const incrementar = (value = 1) => {
        setCounter(counter + value);
    }

    const decrementar = (value = 1) => {
        setCounter(counter - value);
    }

    const reset = () => {
        setCounter(0);
    }

    return {
        counter,
        incrementar,
        decrementar,
        reset,
    }
}

export default useCounter;