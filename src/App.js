import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ProdContainer from './components/ProdContainer/ProdContainer';
import ProdDetailContainer from './components/ProdDetailContainer/ProdDetailContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ItemListContainer text='Las Elisas - Arte en Muebles'/>
        <Routes>
          <Route path='/' element={<ProdContainer />}/>
          <Route path='/prod/:prodId' element={<ProdDetailContainer />}/>
        </Routes>
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
