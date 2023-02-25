import React from "react";
import { products } from "../../mocks/products.json";
import CardProduct from "../CardProduct/CardProduct.jsx";

export default function ListProducts() {
  return (
    <main>
      <ul>
        {products.map(({ id, title, description, price, brand, thumbnail }) => (
          <li className="my-5">
            <CardProduct
              id={id}
              title={title}
              description={description}
              thumbnail={thumbnail}
              price={price}
              brand={brand}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
