import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider ({children}) {
    const [ cart, setCart ] = useState([]);

    const addToCart = product => {
      //nos fijamos si el objeto ya existe en nuestro carrito a traves del id
        const indexByOfProduct = cart.findIndex(item => item.id === product.id)

        if(indexByOfProduct >= 0){
          const newCart = structuredClone(cart)
          newCart[indexByOfProduct].quantity += 1
          return setCart(newCart)
        }
        // en caso de que no este en carrito
        setCart(prevState => ([
          ...prevState,
          {
            ...product,
            quantity: 1
          }
        ]))
    }

    const clearToCart = () => {
        setCart([])
    }
}

return (
    <CartContext.Provider value={{
        cart,
        addToCart,
        clearToCart
    }}>
        {children}
    </CartContext.Provider>
)