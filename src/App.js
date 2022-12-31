import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Bookmarks from './components/Bookmarks/Bookmarks';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ProdContainer from './components/ProdContainer/ProdContainer';
import ProdDetailContainer from './components/ProdDetailContainer/ProdDetailContainer';
import { BookmarksProvider } from './context/BookmarksContext';
import Login from './components/Login/Login';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';

function App() {
  
  return (
    <div className="App">
      <CartProvider>
      <AuthProvider>
      <BookmarksProvider>
        <BrowserRouter>
          <Navbar />
          <ItemListContainer text='BALOO ACCESORIOS'/>
          <Routes>
            <Route path='/' element={<ProdContainer />}/>
            <Route path='/productos/:categoria' element={<ProdContainer />}/>
            <Route path='/detalle/:prodId' element={<ProdDetailContainer />}/>
            <Route path='/bookmarks' element={<Bookmarks />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/cart' element={<Cart />}/>

          </Routes>
        </BrowserRouter>
      </BookmarksProvider> 
      </AuthProvider>    
      </CartProvider>
    </div>
  );
}

export default App;
