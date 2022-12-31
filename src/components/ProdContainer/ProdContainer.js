import './ProdContainer.css'
import {useState, useEffect} from 'react';
import ProdList from '../ProdList/ProdList';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where} from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';

const ProdContainer = () => {
    const [prods, setProds] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoria } = useParams()

    useEffect(() => {
      setLoading(true)

      const collectionRef = categoria
        ? query(collection(db, 'prods'), where('category', '==', categoria))
        :collection(db, 'prods')

      getDocs(collectionRef)
        .then(response => {
          console.log(response.docs)
          const prodsAdapted = response.docs.map(doc => {
            console.log(response.docs)
            const data = doc.data()

            return { id: doc.id, ...data}
          })
          setProds(prodsAdapted) 
        })
        .catch(error => {
          console.log(error)
        })
        .finally(() => {
          setLoading(false)
        })
      }, [categoria])

      
  if(loading) {
    return <h1>Loading...</h1>
  }
      
    return(
        <div className="Productos">
            <h2>PRODUCTOS</h2>
            <ProdList prods={prods} />
        </div>
    )
}


export default ProdContainer;