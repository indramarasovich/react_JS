import { useState, useEffect } from 'react'
import { getProdById } from '../../asyncMock'
import { useParams } from 'react-router-dom'

const ProdDetailContainer = () => {
    const [prod, setProd] = useState()
    const { prodId } = useParams()

    useEffect(() => {
        getProdById(prodId)
            .then(response => {
                setProd(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [prodId])

    return (
        <div>
            <h1>{prod?.title}</h1>
            <h2>{prod?.category}</h2>
            <p>{prod?.text}</p>
        </div>
    )
}

export default ProdDetailContainer