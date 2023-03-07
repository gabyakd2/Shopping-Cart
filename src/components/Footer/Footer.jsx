import React from 'react'
import useFilters from '../../hooks/useFilters'

export default function Footer() {
  const { filters } = useFilters();

  return (
    <div>
        {
            JSON.stringify(filters)
        }
    </div>
  )
}
