import React, { useState, useEffect } from "react";
import { useProducts } from "@tecnopoli/contexts/ProductsContext";
import { useCart } from "@tecnopoli/contexts/CartContext";
import { FaArrowLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { useRouter } from "next/router";
import Link from "next/link";

const Item = () => {
  const products = useProducts();
  const router = useRouter();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [item, setItem] = useState<any>({});

  useEffect(() => {
    if (router.query.id && products.length > 0) {
      const id = parseInt(router.query.id as string);
      const item = products.find((product: any) => product.id === id);
      setItem(item);
    }
  }, [router.query.id, products]);

  const handleCart = (item: any) => {
    addToCart(item, quantity);
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleBuyNow = () => {
    // Lógica para comprar ahora con 'quantity'
    console.log(`Comprar ahora: ${quantity} unidades`);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="h-screen pt-10 container mx-auto my-8">
      <Link href={"/products"}>
        <FaArrowLeft />
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        <img
          src={item.image}
          alt={item.name}
          className="ml-32 md:ml-0 w-96 md:w-full lg:w-96 rounded-md shadow-md p-6 mx-auto"
        />
        <div>
          <h2 className="text-3xl font-semibold my-10 text-primary">
            {item.name}
          </h2>
          <div className="flex justify-between">
            <p className="font-semibold text-4xl mb-4">
              {item.price
                ? item.price.toLocaleString().replace(/,/g, ".")
                : "-"}
            </p>
            <div className="flex items-center mb-4">
              <button
                onClick={handleDecreaseQuantity}
                className="border rounded-l px-3 py-1"
              >
                -
              </button>
              <span className="px-3">{item.available}</span>
              <button
                onClick={handleIncreaseQuantity}
                className="border rounded-r px-3 py-1"
              >
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between">
            <p className="flex items-center mb-4 mt-2">
              <FaStar />
              {item.ranking}
            </p>
            <p className="mb-4 mt-2">{item.available} unidades disponibles</p>
          </div>
          <p>
            {item.description}
            ...
          </p>
          <button
            onClick={toggleModal}
            className="text-blue-500 font-semibold focus:outline-none"
          >
            ver más
          </button>
          <div className="flex flex-col lg:flex-row mt-8">
            <button
              onClick={handleBuyNow}
              className="bg-secondary hover:bg-primary text-white font-bold py-4 px-28 rounded-xl m-2"
            >
              Comprar
            </button>
            <button
              onClick={handleCart}
              className="bg-primary hover:bg-secondary text-white font-bold py-4 px-16 rounded-xl m-2"
            >
              Agregar a carrito
            </button>
          </div>
          <div className="mt-8">
            {showModal && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-4 max-w-md">
                  <h3 className="text-lg font-semibold mb-2">
                    Características Detalladas
                  </h3>
                  {Object.entries(item.characteristics).map(([key, value]) => (
                    <>
                      <p>{key}:</p>
                      <p>{value as any}</p>
                    </>
                  ))}
                  <button
                    onClick={toggleModal}
                    className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
