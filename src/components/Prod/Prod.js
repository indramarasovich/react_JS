const Prod = ({ prod }) => {
    return (
        <div key={prod.id} style={{margin: 20}}>
            <h2 >{prod.title}</h2>
            <p>{prod.text}</p>
        </div>
    )
}

export default Prod