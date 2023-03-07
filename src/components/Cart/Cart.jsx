import React, { useId } from "react";
import { CartIcon } from "../Icons";
import './Cart.css'

export default function Cart() {
  const cartCheckId = useId()


  return (
  <>
    <label htmlFor={cartCheckId} className="cart-button">
      <CartIcon />
    </label>
    <input type="checkbox" hidden id={cartCheckId}/>
    
    <aside className="cart">
      <ul>
        <li>
          <img src="https://i.dummyjson.com/data/products/6/thumbnail.png" alt="" />
          <div>
            <strong>Nootebook</strong> - $1749
          </div>

          <footer>
            <small>
              Qty: 1
            </small>
          </footer>
        </li>
      </ul>
    </aside>
  </>
  )
}
