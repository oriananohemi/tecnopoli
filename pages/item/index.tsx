import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { useSearchParams } from "next/navigation";

const Item = () => {
  const [quantity, setQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [item, setItem] = useState<any>({});
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("query");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const localStorageElements = localStorage.getItem("products");
        const elements = JSON.parse(localStorageElements);

        const filteredElements = elements.filter(
          (element) => element.id == searchQuery
        );
        setItem(filteredElements[0]);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    getProducts();
  }, [searchQuery]);

  const handleAddToCart = () => {
    console.log(`Agregado al carrito: ${quantity} unidades`);
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
    <div className="container mx-auto my-8">
      <FaArrowLeft />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={item.image}
            alt={item.name}
            className="ml-40 md:ml-0 w-96 md:w-full rounded-md shadow-md"
          />
        </div>
        <div>
          <h2 className="text-3xl font-ligth mt-10 mb-4 text-primary">
            {item.name}
          </h2>
          <div className="flex justify-between">
            <p className="font-semibold text-4xl mb-4">${item.price}</p>
            <div className="flex items-center mb-4">
              <button
                onClick={handleDecreaseQuantity}
                className="border rounded-l px-3 py-1"
              >
                -
              </button>
              <span className="px-3">{quantity}</span>
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
            <p className="mb-4 mt-2">
              {item.availableUnits} unidades disponibles
            </p>
          </div>
          <button
            onClick={toggleModal}
            className="text-blue-500 font-semibold focus:outline-none"
          >
            <p>
              {item.description}
              ...
            </p>
          </button>
          <div className="flex mt-8">
            <button
              onClick={handleBuyNow}
              className="bg-secondary hover:bg-primary text-white font-bold py-4 px-28 rounded-xl m-2"
            >
              Comprar
            </button>
            <button
              onClick={handleAddToCart}
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
                  {item.characteristics.map((characteristic) => (
                    <p>{characteristic}</p>
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
