import React, { useState, useId } from "react";
import useFilters from "../../hooks/useFilters";

export default function Filters() {
  const { filters, setFilters } = useFilters();

  const idMinPriceFilter = useId();
  const idCategoryFilter = useId();

  const handleChangeMinPrice = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: e.target.value,
    }));
  };

  const handleChangeCategory = (e) => {
    setFilters(prevState => ({
        ...prevState,
        category: e.target.value
    }))
  }

  return (
    <section>
      <div>
        <label htmlFor={idMinPriceFilter}>Desde: </label>
        <input
          type="range"
          id={idMinPriceFilter}
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />{" "}
        $ {filters.minPrice}
      </div>
      <div>
        <label htmlFor={idCategoryFilter}>Categoría</label>
        <select id={idCategoryFilter} onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="laptops">Notebooks</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </section>
  );
}
