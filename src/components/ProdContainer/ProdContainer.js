import './ProdContainer.css'
import {useState, useEffect} from 'react';
import ProdList from '../ProdList/ProdList';
import { getProds, getProdsByCategory } from '../../asyncMock';
import { useParams } from 'react-router-dom';

const ProdContainer = () => {
    const [prods, setProds] = useState([])

    const { categoria } = useParams()
    console.log(categoria)

    useEffect(() => {
      if(!categoria) {
          getProds()
            .then(response => {
              setProds(response)
            })
            .catch(error => {
              console.log(error)
            })
      } else {
          getProdsByCategory(categoria)
            .then(response => {
              setProds(response)
            })
            .catch(error => {
              console.log(error)
            })
      }
    }, [categoria])
    
    return(
        <div className="Productos">
            <h2>PRODUCTOS</h2>
            <ProdList prods={prods} />
        </div>
    )
}

export default ProdContainer;