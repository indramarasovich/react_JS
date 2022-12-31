import { useState, createContext } from  'react'

export const CartContext = createContext({ cart: [] })

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (prodToAdd) => {
        if(!isInCart(prodToAdd.id)) {
        setCart([...cart, prodToAdd])
        }
    }

    const isInCart = (id => {
        return cart.some(product => product.id === id)
    })

    const getQuantity = () => {
        let acc = 0
        cart.forEach(prod => {
        acc += prod.quantity
        })
        return acc
    }

    console.log(cart)

    return (
        <CartContext.Provider value={{ cart, addItem, isInCart, getQuantity }}>
            {children}
        </CartContext.Provider>
    )
}