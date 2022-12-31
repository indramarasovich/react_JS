import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
import ProdDetail from '../ProdDetail/ProdDetail'

const ProdDetailContainer = () => {
    const [prod, setProd] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const { prodId } = useParams()

    useEffect(() => {
        const docRef = doc(db, 'prods', prodId)

        getDoc(docRef)
            .then(doc => {
                const data = doc.data()
                const prodAdapted = { id: doc.id, ...data}

                setProd(prodAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [prodId])

    if(isLoading) {
        return <h1>Cargando producto...</h1>
      }

    return (
        <div>
            <h1>Detalle del producto</h1>
           <ProdDetail {...prod}/>
        </div>
    )
}

export default ProdDetailContainer