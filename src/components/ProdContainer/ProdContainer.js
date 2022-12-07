import {useState, useEffect} from 'react';
import ProdList from '../ProdList/ProdList';
import { getProds } from '../../asyncMock';

const ProdContainer = () => {
    const [prods, setProds] = useState([])

    useEffect(() => {
        getProds()
          .then(response => {
            setProds(response)
          })
          .catch(error => {
            console.log(error)
          })
    }, [])
    
    const arrayTransf = prods.map(prod => <h2 key={prod.id}>{prod.title}</h2>)

    return(
        <div>
            <h2>Productos</h2>
            <ProdList prods={prods} />
        </div>
    )
}

export default ProdContainer;