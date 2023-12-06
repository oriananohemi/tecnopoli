import React, { useState, useEffect } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { useProducts } from "@tecnopoli/contexts/ProductsContext";
import { categories } from "@tecnopoli/utils/config/categories";
import Router from "next/router";
import Link from "next/link";
import Card from "@tecnopoli/shared/components/card";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);
  const products = useProducts();

  const handleSearch = () => {
    setTimeout(() => {
      Router.push(`/search-results?search=${searchQuery}`);
    }, 1000);
  };

  const handleToggleAdvancedOptions = () => {
    setShowAdvancedOptions(!showAdvancedOptions);
  };

  return (
    <div
      className="bg-no-repeat pt-10 h-screen w-view container mx-auto my-8"
      style={{ backgroundImage: "url('background.png')" }}
    >
      <div className="container mx-auto my-8">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Iphone..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-gray-300 rounded-l py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Buscar
          </button>
        </div>
      </div>
      <h2 className="font-mono text-2xl font-medium mt-16 mb-6 text-primary">
        Categorías
      </h2>
      <div className="flex space-x-2">
        {categories.map((category) => (
          <Link
            href={`/products`}
            key={category.id}
            className="relative cursor-pointer transition-transform transform hover:scale-110 w-56 md:w-96"
          >
            <img
              src={category.image}
              alt={category.name}
              className="md:min-w-full rounded-lg h-40 md:h-60"
            />
            <p className="absolute bottom-2 left-2 text-white font-bold">
              {category.name}
            </p>
          </Link>
        ))}
      </div>
      <div className="hidden md:flex space-x-2 h-2/3">
        <img
          src="banner.jpeg"
          className="mx-auto mt-20 w-full hidden md:flex"
        />
        <img src="store.jpeg" className="mx-auto mt-20 w-full hidden lg:flex" />
      </div>
      <h2 className="font-mono text-2xl font-medium mt-20 mb-6 text-primary">
        Tendencias en tecnología
      </h2>
      <div className="m-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.slice(0, 3).map((product: any) => (
          <Card {...product} />
        ))}
      </div>
      <div className="hidden md:block relative mt-8 p-4 bg-gray-200">
        <div className="absolute bottom-20 left-24 md:left-52 text-center md:text-start">
          <p className="text-2xl text-white font-mono">¡Proximamente!</p>
        </div>
        <img
          src="banner-4.webp"
          className="mx-auto"
          style={{ width: "60em" }}
        />
      </div>
      <Link
        href="/cart"
        className="fixed bottom-24 right-8 bg-blue-500 text-white w-10 h-10 p-3 rounded-full cursor-pointer shadow-lg"
      >
        <FaCartArrowDown />
      </Link>
    </div>
  );
};

export default Home;
