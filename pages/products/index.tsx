import { useProducts } from "@tecnopoli/contexts/ProductsContext";
import Card from "@tecnopoli/shared/components/card";
import { FaCartArrowDown } from "react-icons/fa";
import Router from "next/router";
import Link from "next/link";

const Catalog = () => {
  const products = useProducts();

  return (
    <div
      className="bg-no-repeat h-screen pt-10"
      style={{ backgroundImage: "url('background.png')" }}
    >
      <h1 className="text-primary text-center mt-20 text-3xl text-semibold">
        Catálogo de productos
      </h1>
      <div className="m-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product: any) => (
          <Card {...product} />
        ))}
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

export default Catalog;
