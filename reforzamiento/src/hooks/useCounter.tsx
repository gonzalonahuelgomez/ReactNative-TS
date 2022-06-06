import { useState } from "react"

export const useCounter = (initial: number = 10) => {
    const [counter, setCounter] = useState(initial)

    const accumulator = (numero: number) => {
        setCounter( counter + numero )
    }

    return {
        counter,
        accumulator
    }
}
