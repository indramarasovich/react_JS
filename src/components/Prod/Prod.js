import './Prod.css'
import { Link } from "react-router-dom"

const Prod = ({ prod }) => {
    return (
        <div className="Prods" key={prod.id}>
            <img height="200px" src={prod.img} alt={prod.name} />
            <h3>{prod.name}</h3>
            <p>${prod.price}</p>
            <Link to={`/detalle/${prod.id}`}>Ver detalle +</Link>
        </div>
    )
}

export default Prod 