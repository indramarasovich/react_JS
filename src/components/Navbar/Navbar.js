import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.jpeg'

const Navbar = () => {
    const navigate = useNavigate()

    return (
    <nav className="menubar">
        <a href="/"><img src={logo} alt={'logo'} /></a>
        <ul>
            <li><NavLink to='/' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>HOME</NavLink></li>
            <li><NavLink to='/productos/anillos' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>ANILLOS</NavLink></li>
            <li><NavLink to='/productos/dijes' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>DIJES</NavLink></li> 
            <li><NavLink to='/productos/aros' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>AROS</NavLink></li>
        </ul>  
        <CartWidget /> 
    </nav>   
             
    )
}

export default Navbar;
