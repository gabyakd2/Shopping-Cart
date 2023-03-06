import React, { useState } from "react";

export default function Filters({ setFilters }) {
  const [minPrice, setMinPrice] = useState(0);

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
        <label htmlFor="price">Desde: </label>
        <input
          type="range"
          id="price"
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
        />{" "}
        $ {minPrice}
      </div>
      <div>
        <label htmlFor="category">Categoría</label>
        <select id="category" onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="laptops">Notebooks</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </section>
  );
}
