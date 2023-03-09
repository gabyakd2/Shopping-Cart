import React from "react";
import { AddToCartIcon, RemoveFromCartIcon } from "../Icons.jsx";

export default function CardProduct({
  thumbnail,
  title,
  price,
  brand,
  description,
}) {
  return (
    <div>
    <div className="flex font-sans">
      <div className="flex-none w-60 relative">
        <img
          src={thumbnail}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex-auto p-6 w-96">
        <div className="flex flex-wrap">
          <h1 className="flex-auto text-lg font-semibold text-slate-900 dark:text-sky-400">
            {title}
          </h1>
          <div className="text-lg font-semibold text-slate-500">$ {price}</div>
          <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
            {brand}
          </div>
        </div>
          <br />
        <div className="flex space-x-4 mb-6 text-sm font-medium">
          <div className="flex-auto flex space-x-4">
            {/* <button
              className="h-10 px-6 font-semibold rounded-md bg-black text-white"
              onClick={addToCart}
            >
              <AddToCartIcon />
            </button> */}
          </div>
        </div>
        <p className="text-sm text-slate-700 dark:text-sky-400">{description}</p>
      </div>
    </div>
    </div>
  );
}
