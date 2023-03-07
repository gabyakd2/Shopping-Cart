import React, { useState, useId } from "react";
import useFilters from "../../hooks/useFilters";

export default function Filters() {
  const { setFilters } = useFilters();
  const [minPrice, setMinPrice] = useState(0);

  const idMinPriceFilter = useId();
  const idCategoryFilter = useId();

  const handleChangeMinPrice = (e) => {
    setMinPrice(e.target.value);
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
        />{" "}
        $ {minPrice}
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
