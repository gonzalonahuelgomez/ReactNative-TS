import { useCounter } from "../hooks/useCounter"

const ContadorConHook = () => {
    const { counter, accumulator } = useCounter(0)

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

export default ContadorConHook