import './CartWidget.css';
import cartImg from './assets/cart.png'

const CartWidget = () => {
    return (
        <button className='carrito'>
            <img src={cartImg} alt='cartImg'/>
            <h1>10</h1>
        </button>
    )
}   

export default CartWidget