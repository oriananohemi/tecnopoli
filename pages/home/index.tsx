import React, { useState, useEffect } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { categories } from "@tecnopoli/utils/config/categories";
import { getDocs, collection } from "firebase/firestore";
import { db } from "@tecnopoli/firebase";
import Router from "next/router";
import Link from "next/link";

const Home = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(db, "products", "OXkz33QGNvOPXvg6gouZ", "tecnology")
        );
        let newValue = [] as any;
        querySnapshot.forEach((doc) => {
          return newValue.push(doc.data());
        });
        setProducts(newValue);
        localStorage.setItem("products", JSON.stringify(newValue));
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    getProducts();
  }, []);

  const handleSearch = () => {
    setTimeout(() => {
      Router.push(`/search-results?query=${searchQuery}`);
      localStorage.setItem("searchQuery", searchQuery);
    }, 1000);
  };

  const handleToggleAdvancedOptions = () => {
    setShowAdvancedOptions(!showAdvancedOptions);
  };

  const addToCart = () => {
    console.log(`Producto agregado al carrito`);
  };

  return (
    <div className="h-screen w-view container mx-auto my-8">
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
      <div className="hidden md:flex space-x-2 h-1/2">
        <img src="banner.jpeg" className="mx-auto mt-20 w-full" />
        <img src="banner-2.jpeg" className="mx-auto mt-20 w-full" />
      </div>
      <h2 className="font-mono text-2xl font-medium mt-20 mb-6 text-primary">
        Tendencias en tecnología
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.slice(0, 3).map(({ id, name, image, description, price }) => (
          <Link
            href={`/item?query=${id}`}
            key={id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img src={image} alt={name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-4">{name}</h3>
              <p className="text-gray-600 mb-4">{description}</p>
              <p className="text-primary font-bold mb-5 text-xl">${price}</p>
              <button
                onClick={() => addToCart()}
                className="bg-blue-500 hover:bg-secondary text-white font-bold py-2 px-16 mx-auto rounded focus:outline-none focus:shadow-outline"
              >
                Agregar al carrito
              </button>
            </div>
          </Link>
        ))}
      </div>
      <div className="relative mt-8 p-4 bg-gray-200">
        <div className="absolute bottom-20 left-24 md:left-52 text-center md:text-start">
          <p className="text-2xl text-white font-mono">¡Proximamente!</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-28 rounded mt-2">
            Ver más
          </button>
        </div>
        <img src="banner-4.webp" className="w-4/5 mx-auto" />
      </div>
      <Link
        href="/cart"
        className="fixed bottom-24 right-8 bg-blue-500 text-white p-4 rounded-full cursor-pointer shadow-lg"
      >
        <FaCartArrowDown />
      </Link>
    </div>
  );
};

export default Home;
