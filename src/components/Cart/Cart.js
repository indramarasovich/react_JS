import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


const Cart = () => {
    const { cart, removeItem, getTotal} = useContext(CartContext)

    const total = getTotal()

    return (
        <div>
            <h1>Carrito</h1>
            {
                cart.map(prod => {
                    return (
                        <div key={prod.id}>
                            <img src={prod.img}/>
                            <h1>{prod.name}</h1>
                            <h2>$ {prod.price}</h2>
                            <h2>{prod.quantity}</h2>
                            <h2>Subtotal: {prod.price * prod.quantity}</h2>
                            <button onClick={() => removeItem(prod.id)}>Eliminar producto</button>
                        </div>
                    )
                })
            }
            <h1>Total: $ {total}</h1>
        </div>
       
    )
}

export default Cart