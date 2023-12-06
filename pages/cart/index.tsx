import { useState, useEffect } from "react";
import { useCart } from "@tecnopoli/contexts/CartContext";
import { useProducts } from "@tecnopoli/contexts/ProductsContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const [results, setResults] = useState<any[]>([]);
  const products = useProducts();

  console.log("cartItems", cartItems);

  const getProduct = () => {
    return cartItems.map((item: any) => {
      const productResults = products.find(
        (product: any) => product.id === item.product
      );
      return {
        ...productResults,
        quantity: item.quantity,
      };
    });
  };

  useEffect(() => {
    if (products.length > 0) {
      setResults(getProduct());
    }
  }, [products]);

  const calcularTotal = () => {
    let total = 0;

    results.forEach((item) => {
      const subtotalPorProducto = item.price * item.quantity;
      total += subtotalPorProducto;
    });

    return total;
  };

  return (
    <div>
      <h1 className="text-primary text-center text-2xl m-10">
        Carrito de Compras
      </h1>
      <ul>
        {results.map((item, index) => (
          <li
            key={index}
            className="flex shadow bg-gray-100 p-10 m-10 justify-between items-center"
          >
            <div className="flex">
              <img src={item.image} alt={item.name} className="w-20 h-20" />
              <div className="flex flex-col">
                <p>{item.name}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>Subtotal: {item.price * item.quantity}</p>
              </div>
            </div>
            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <p className="m-10 text-xl">Total del carrito: {calcularTotal()}</p>
    </div>
  );
};

export default Cart;
