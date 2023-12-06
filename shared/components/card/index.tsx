import Link from "next/link";
import { useCart } from "@tecnopoli/contexts/CartContext";

const Card = ({ id, image, name, description, price }: any) => {
  const { addToCart } = useCart();

  const handleCart = (item: any) => {
    addToCart(item, 1);
  };

  return (
    <div className="bg-gray-100 px-4 py-8 shadow-md rounded-lg overflow-hidden flex flex-col justify-between hover:shadow-lg">
      <Link
        className="flex flex-col justify-between"
        href={`/item?id=${id}`}
        key={id}
      >
        <img src={image} alt={name} className="w-42 mx-auto h-36" />
        <div className="my-4 mx-2">
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-gray-600 mb-4 mt-2">{description}</p>
          <p className="text-primary font-bold mb-5 text-xl">
            ${price.toLocaleString().replace(/,/g, ".")}
          </p>
        </div>
      </Link>
      <button
        onClick={() => handleCart(id)}
        className="bg-blue-500 hover:bg-secondary text-white font-bold p-4 ld:p-10 mx-auto rounded focus:outline-none focus:shadow-outline"
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default Card;
