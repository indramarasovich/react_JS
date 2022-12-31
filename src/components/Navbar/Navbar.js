import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo.jpeg'
import { BookmarksContext } from '../../context/BookmarksContext';
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {

    const { bookmarks } = useContext(BookmarksContext)
    const { user } = useContext(AuthContext)

    return (
    <nav className="menubar">
        <a href="/"><img className='imgcart' src={logo} alt={'logo'} /></a>
        <ul>
            <li><NavLink to='/' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>HOME</NavLink></li>
            <li><NavLink to='/productos/anillos' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>ANILLOS</NavLink></li>
            <li><NavLink to='/productos/dijes' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>DIJES</NavLink></li> 
            <li><NavLink to='/productos/aros' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>AROS</NavLink></li>
            {user && 
                <Link to='/bookmarks'>
                    Booksmarks: {bookmarks.length}
                </Link>
            }
            <Link to='/login'>
                Login
            </Link>
        </ul>  
        <CartWidget /> 
    </nav>        
    )
}

export default Navbar;
