import React from "react";
import { products } from "../../mocks/products.json";
import CardProduct from "../CardProduct/CardProduct.jsx";
import style from './ListProduct.module.css';

export default function ListProducts() {
  return (
    <main className={style.products}>
        {products.map(({ id, title, description, price, brand, thumbnail }) => (
          <div className={`my-5 ${style.liProduct}`} id={id}>
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
