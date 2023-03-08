import React from 'react'
import useCart from '../../hooks/useCart';
import useFilters from '../../hooks/useFilters'

export default function Footer() {
  const { filters } = useFilters();
  const { cart } = useCart();
  console.log(cart)
  return (
    <div>
        {
            JSON.stringify(filters)
        }
    </div>
  )
}
