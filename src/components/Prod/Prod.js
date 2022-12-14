import './Prod.css'
import { Link } from "react-router-dom"

const Prod = ({ prod }) => {
    return (
        <div className="Notas" key={prod.id}>
            <img height="200px" src={prod.img} alt={prod.title} />
            <h3>{prod.title}</h3>
            <p>{prod.text}</p>
            <Link to={`/detalle/${prod.id}`}>Ver detalle +</Link>
        </div>
    )
}

export default Prod 