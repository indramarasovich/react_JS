import { useState } from "react"

const ProdCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(0)

    const decrement = () => {
        if(count > 1) {
            setCount(prev => prev - 1)
        }
    }

    const increment = () => {
        if(count < stock) {
            setCount(prev => prev + 1)
        }
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => onAdd(count)} disabled={!count}>Agregar al carrito</button>
        </div>
    )
}

export default ProdCount