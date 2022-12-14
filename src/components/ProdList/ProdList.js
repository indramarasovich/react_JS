import './ProdList.css'
import Prod from "../Prod/Prod"

const ProdList = ( {prods} ) => {
    return (
        <div className="Lista">
            { prods.map(prod => (
                <Prod key={prod.id} prod={prod} />
            )) }
        </div>
    )
}

export default ProdList