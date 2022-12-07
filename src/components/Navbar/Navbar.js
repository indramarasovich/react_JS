import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.jpeg'

const Navbar = () => {
    const navigate = useNavigate()

    return (
    <nav className="menubar">
        <img src={logo} alt={'logo'} />
        <ul>
            <NavLink to='/detail' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>HOME</NavLink> 
            <NavLink to='/detail' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>ANILLOS</NavLink> 
            <NavLink to='/detail' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>DIJES</NavLink> 
            <NavLink to='/detail' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>AROS</NavLink> 
        </ul>  
        <CartWidget /> 
    </nav>   
             
    )
}

export default Navbar;
