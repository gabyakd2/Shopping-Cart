import React, { useState } from "react";
import useFilters from "../../hooks/useFilters.jsx";
import CardProduct from "../CardProduct/CardProduct.jsx";
import { products as initialProducts } from "../../mocks/products.json";
import style from "./ListProduct.module.css";
import useCart from "../../hooks/useCart.jsx";

export default function ListProducts() {
  const [products] = useState(initialProducts);
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(products);
  const { addToCart, cart } = useCart();

  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className={style.products}>
      {filteredProducts.map(
        ({ id, title, description, price, brand, thumbnail }) => {
          const isProductInCart = checkProductInCart(id)
          return(
          <div className={`my-5 ${style.liProduct}`} key={id}>
            <CardProduct
              title={title}
              description={description}
              thumbnail={thumbnail}
              price={price}
              brand={brand}
              addToCart={() => addToCart({ title, price, thumbnail })}
            />
          </div>
        )}
      )}
    </main>
  );
}
