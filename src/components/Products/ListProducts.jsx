import React, { useState } from "react";
import useFilters from "../../hooks/useFilters.jsx";
import CardProduct from "../CardProduct/CardProduct.jsx";
import { products as initialProducts } from "../../mocks/products.json";
import style from "./ListProduct.module.css";
import useCart from "../../hooks/useCart.jsx";
import { AddToCartIcon, RemoveFromCartIcon } from "../Icons.jsx";

export default function ListProducts() {
  const [products] = useState(initialProducts);
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(products);
  const { addToCart, cart, removeFromCart } = useCart();

  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className={style.products}>
      {filteredProducts.map(
        (product) => {
          const isProductInCart = checkProductInCart(product)
          return(
          <div className={`my-5 ${style.liProduct}`} key={product.id}>
            <CardProduct
              title={product.title}
              description={product.description}
              thumbnail={product.thumbnail}
              price={product.price}
              brand={product.brand}
              // addToCart={() => addToCart(product)}
            />
            <button onClick={() => {
              isProductInCart 
            ? removeFromCart(product)
            : addToCart(product)}}
            >
            {
              isProductInCart
              ? <RemoveFromCartIcon />
              : <AddToCartIcon />
            }
            </button>
          </div>
        )}
      )}
    </main>
  );
}
