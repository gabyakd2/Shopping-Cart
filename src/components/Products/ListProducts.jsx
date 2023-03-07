import React, { useState } from "react";
import useFilters from "../../hooks/useFilters.jsx";
import CardProduct from "../CardProduct/CardProduct.jsx";
import { products as initialProducts } from '../../mocks/products.json'
import style from './ListProduct.module.css';

export default function ListProducts() {
  const [products] = useState(initialProducts)
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <main className={style.products}>
        {filteredProducts.map(({ id, title, description, price, brand, thumbnail }) => (
          <div className={`my-5 ${style.liProduct}`} key={id}>
            <CardProduct
              title={title}
              description={description}
              thumbnail={thumbnail}
              price={price}
              brand={brand}
            />
          </div>
        ))}
    </main>
  );
}
