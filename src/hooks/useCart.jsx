import React, { useContext } from "react";
import { CartContext } from "../Context/cartContext";


export default function useCart() {
  const context = useContext(CartContext)
  if (context === undefined){
    throw new Error('error en useCart')
  }

  return context
}
