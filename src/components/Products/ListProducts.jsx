import React, { useState } from "react";
import CardProduct from "../CardProduct/CardProduct.jsx";
import style from './ListProduct.module.css';

export default function ListProducts({filteredProducts}) {

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
