import './CartWidget.css';
import cartImg from '../../assets/cart.png'
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { getQuantity } = useContext(CartContext)
    const totalQuantity = getQuantity()
    
    return (
        <button className='carrito'>
            <Link to='/cart'>
            <img src={cartImg} alt='cartImg'/>
            <h1 callName='linkCarrito'>{totalQuantity}</h1>
            </Link>
        </button>
    )
}   

export default CartWidget