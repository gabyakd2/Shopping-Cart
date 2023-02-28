import React, { useState } from "react";
import { products as initialProductos } from "../../mocks/products.json";
import CardProduct from "../CardProduct/CardProduct.jsx";
import style from './ListProduct.module.css';

export default function ListProducts() {

  const [products] = useState(initialProductos)
  const [ filters, setFilters ] = useState({
    category: 'all',
    minPrice: 0
  })

  const filterProducts = (products) => {
    // console.log(products)
    return products.filter(product => {
      return (
        product.price >= filters.minPrice && (
          filters.category === 'all' || //si no es all pasa a la otra condicion, 
          product.category === filters.category //sirve para filtrar por categoria
        )
      )
    })
  }

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
