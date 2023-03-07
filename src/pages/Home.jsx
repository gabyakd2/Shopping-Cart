import React from "react";
import Filters from "../components/Filters/Filters";
import ListProducts from "../components/Products/ListProducts";
import Footer from "../components/Footer/Footer";
import Cart from "../components/Cart/Cart";


export default function Home() {

  return (
    <div>
      <Cart />
      <Filters />
      <ListProducts />
      <Footer />
    </div>
  );
}
