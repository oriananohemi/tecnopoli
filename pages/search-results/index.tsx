import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const SearchResults = () => {
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [results, setResults] = useState<any[]>([]);
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("query");

  const addToCart = () => {
    console.log(`Producto agregado al carrito`);
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const localStorageElements = localStorage.getItem("products");
        const elements = JSON.parse(localStorageElements);
        /* TBD */
        if (elements === undefined || elements === null) {
          setSearchResults([]);
        } else {
          const filteredElements = elements.filter(
            (element) => element.id == searchQuery
          );
          setResults(elements);
          setSearchResults(filteredElements[0]);
        }
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    getProducts();
  }, [searchQuery]);

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-2xl font-semibold mb-4">
        Resultados de búsqueda para: {searchQuery}
      </h1>
      {searchResults && searchResults.length === 0 ? (
        <>
          <p>No se encontraron resultados</p>
          <p>Te recomendamos visitar tendencias</p>
          {results.map(({ id, name, image, description, price }) => (
            <div
              key={id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={image}
                alt={name}
                className="w-full h-40 object-cover"
              />
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
            </div>
          ))}
        </>
      ) : (
        searchResults.map(({ id, name, image, description, price }) => (
          <div
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
          </div>
        ))
      )}
    </div>
  );
};

export default SearchResults;
