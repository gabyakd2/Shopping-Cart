import React from 'react'

export default function ProductCart({thumbnail, price, title, quantity, addToCart}) {
  return (
    <li>
        <img src={thumbnail} alt={title} />
        <div>
            <strong>{title}</strong> - ${price}
        </div>

        <footer>
            <small>
                Cantidad: {quantity}
            </small>
        </footer>
        <button onClick={addToCart}>+</button>
    </li>
  )
}
