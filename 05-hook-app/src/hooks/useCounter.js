import { useState } from "react"

const useCounter = ( initialvalue = 10) => {
    const [counter, setCounter] = useState(initialvalue);

    const incrementar = () => {
        setCounter(counter + 1);
    }

    const decrementar = () => {
        setCounter(counter - 1);
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