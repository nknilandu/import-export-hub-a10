import React from "react";
import { FiSearch } from "react-icons/fi";
import ProductCard from "../../components/ProductCard/ProductCard";
import { FiBox } from "react-icons/fi";

const AllProducts = () => {
  const handleSeaarch = (e) => {
    e.preventDefault();
  };
  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      <div className="">
        <h2 className="text-3xl font-bold text-foreground mb-2">
          All Products
        </h2>
        <p className="text-muted-foreground">
          Discover quality products from trusted suppliers worldwide
        </p>
      </div>
      {/* searchbar */}
      <div className="w-full bg-base-100 p-5 rounded-xl shadow my-5">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* ================ */}
          <form onSubmit={handleSeaarch} className="flex gap-2">
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors z-10">
                <FiSearch className="h-5 w-5" />
              </div>

              <input
                type="text"
                name="password"
                placeholder="Search anything"
                required
                className="input text-sm py-2 pl-12 pr-4 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
              />
            </div>
            <button className="btn btn-soft btn-secondary rounded-md">
              Search
            </button>
          </form>
          <div className="flex justify-center items-center gap-2">
            <FiBox />
            <p>15 products found</p>
          </div>
          {/* =============== */}
        </div>
      </div>
      {/* product */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 overflow-hidden my-5 pb-9 mt-10">
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
    </div>
  );
};

export default AllProducts;
