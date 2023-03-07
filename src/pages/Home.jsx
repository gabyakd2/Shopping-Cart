import React from "react";
import Filters from "../components/Filters/Filters";
import ListProducts from "../components/Products/ListProducts";
import Footer from "../components/Footer/Footer";


export default function Home() {

  return (
    <div>
      <Filters />
      <ListProducts />
      <Footer />
    </div>
  );
}
