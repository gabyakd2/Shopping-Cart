import { useContext, useState } from "react"
import { FiltersContext } from "../Context/filterContext"


export default function useFilters () {
    const { filters, setFilters } = useContext(FiltersContext)
  
    const filterProducts = (products) => {
      return products.filter(product => {
        return (
          product.price >= filters.minPrice && (
            filters.category === 'all' || //si no es all pasa a la otra condicion, 
            product.category === filters.category //sirve para filtrar por categoria
          )
        )
      })
    }
  
    return { setFilters, filterProducts, filters }
  }