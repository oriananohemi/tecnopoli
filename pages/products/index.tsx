import { useState, useEffect } from "react";
import Link from "next/link";

const Catalog = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const localStorageElements = localStorage.getItem("products");
        const elements = JSON.parse(localStorageElements || "");

        setProducts(elements);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    getProducts();
  }, []);

  const addToCart = () => {
    console.log(`Producto agregado al carrito`);
  };

  return (
    <div>
      <h1 className="text-center mt-20 text-2xl">Catálogo de productos</h1>
      <div className="flex m-20 justify-between">
        {products.map(({ id, name, image, description, price }) => (
          <Link
            href={`/item?query=${id}`}
            key={id}
            className="bg-blue-200 rounded-lg shadow-md overflow-hidden w-96"
          >
            <img src={image} alt={name} className="w-96 p-20 object-cover" />
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
    </div>
  );
};

export default Catalog;
