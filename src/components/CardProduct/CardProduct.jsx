import React from "react";
import { AddToCartIcon } from "../Icons.jsx";

export default function CardProduct({
    thumbnail,
  title,
  price,
  brand,
  description,
}) {
  return (
    <div className="flex font-sans">
      <div className="flex-none w-48 relative">
        <img
          src={thumbnail}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <form className="flex-auto p-6">
        <div className="flex flex-wrap">
          <h1 className="flex-auto text-lg font-semibold text-slate-900">
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
            <button
              className="h-10 px-6 font-semibold rounded-md bg-black text-white"
              type="submit"
            >
              <AddToCartIcon />
            </button>
          </div>
        </div>
        <p className="text-sm text-slate-700">{description}</p>
      </form>
    </div>
  );
}
