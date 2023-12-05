import React from "react";

const Cart = () => {
  const cartItems = [
    { id: 1, name: "Producto 1", price: 19.99, quantity: 2 },
    { id: 2, name: "Producto 2", price: 29.99, quantity: 1 },
    // ... Otros productos en el carrito
  ];

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">Carrito de Compras</h2>
      {cartItems.map((item) => (
        <article
          key={item.id}
          className="flex justify-between items-center border-b border-gray-300 py-2"
        >
          <div>
            <p className="text-lg">{item.name}</p>
            <p>Cantidad: {item.quantity}</p>
          </div>
          <p>${item.price * item.quantity}</p>
        </article>
      ))}
      <div className="mt-4 flex justify-between font-bold">
        <p>Total:</p>
        <p>${getTotalPrice()}</p>
      </div>
      <div className="mt-8">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Continuar compra
        </button>
      </div>
    </div>
  );
};

export default Cart;
