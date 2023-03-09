import React, { useId } from "react";
import useCart from "../../hooks/useCart";
import { CartIcon, ClearCartIcon } from "../Icons";
import ProductCart from "../ProductCart/ProductCart";
import './Cart.css'

export default function Cart() {
  const cartCheckId = useId()
  const { cart, clearToCart, addToCart } = useCart();

  return (
  <>
    <label htmlFor={cartCheckId} className="cart-button">
      <CartIcon />
    </label>
    <input type="checkbox" hidden id={cartCheckId}/>
    
    <aside className="cart">
      <ul>
       {
        cart?.map(product => (
          <ProductCart  key={product.id} {...product} addToCart={() => addToCart(product)} />
        ))
       }
      </ul>
      <button onClick={clearToCart}>
        <ClearCartIcon />
      </button>
    </aside>
  </>
  )
}
