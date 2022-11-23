import './Navbar.css';
import Lista from '../Lista/Lista'
import CartWidget from '../CartWidget/CartWidget';


const Navbar = () => {
    const menu = ['HOME', 'ANILLOS', 'DIJES', 'AROS']
    return (
        <nav className="menubar">
            <img src={'./img/logo.png'} />
            <ul>
                {menu.map(label => <Lista text={label}/>)}  
            </ul>  
            <CartWidget /> 
        </nav>   
             
    )
}

export default Navbar;