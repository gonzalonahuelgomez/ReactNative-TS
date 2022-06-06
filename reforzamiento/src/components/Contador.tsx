import React, { useState } from 'react'

const Contador = () => {
    const [counter, setCounter] = useState(0)

    const accumulator = (number:number) => {
        setCounter(counter + number)
    }

    return (
        <>
            <h3>Contador: <small>{ counter }</small></h3>

            <button
                className='btn btn-primary'
                onClick={ () => accumulator(1) }>
                +1
            </button>
            &nbsp;
            <button
                className='btn btn-primary'
                onClick={ () => accumulator(-1) }>
                -1
            </button>
        </>
    )
}

export default Contador