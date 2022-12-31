import ProdCount from "../ProdCount/ProdCount" 
import { useContext } from 'react'
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const ProdDetail = ({ id, img, name, price, text, stock }) => {

    const { addItem, isInCart } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        addItem({ id, name, price, quantity})
    }

    return (
        <div>
            <img height="300px" src={img} alt={id} />
            <h1>{name}</h1>
            <h2>${price}</h2>
            <p>{text}</p>
            { isInCart(id)
                ? <Link to='/cart'> <button>Terminar Compra</button> </Link>
                : stock > 0 
                    ? <ProdCount stock={stock} onAdd={handleOnAdd}/> 
                    : <h1>'No hay stock'</h1>}
        </div>
    )
}

export default ProdDetail