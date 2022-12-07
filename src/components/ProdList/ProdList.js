import Prod from "../Prod/Prod"

const ProdList = ( {prods} ) => {
    return (
        <div style={{display: 'flex' }}>
            { prods.map(prod => (
                <Prod key={prod.id} prod={prod} />
            )) }
        </div>
    )
}

export default ProdList