import React, { useState } from "react";
import Filters from "../components/Filters/Filters";
import { products as initialProducts } from '../mocks/products.json'
import ListProducts from "../components/Products/ListProducts";

export default function Home() {

  const [products] = useState(initialProducts)
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
    <div>
      <Filters setFilters={setFilters} />
      <ListProducts filteredProducts={filteredProducts} />
    </div>
  );
}
