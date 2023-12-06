import { useState, useEffect } from "react";
import { useProducts } from "@tecnopoli/contexts/ProductsContext";
import { useRouter } from "next/router";
import Card from "@tecnopoli/shared/components/card";

const SearchResults = () => {
  const products = useProducts();
  const router = useRouter();
  const [searchResults, setSearchResults] = useState<any[]>([]);

  useEffect(() => {
    if (router.query.search !== undefined && products.length > 0) {
      const query = router.query.search;

      if (query === "undefined") {
        setSearchResults([]);
      } else {
        const filteredProducts = products.filter((product: any) => {
          return (
            product?.name
              ?.toLowerCase()
              .includes((query as string).toLowerCase()) ||
            product?.description
              ?.toLowerCase()
              .includes((query as string).toLowerCase())
          );
        });
        setSearchResults(filteredProducts);
      }
    }
  }, [router.query.search, products]);

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-2xl font-semibold mb-4">
        Resultados de búsqueda para: {router.query.search}
      </h1>
      {searchResults && searchResults.length === 0 ? (
        <>
          <p className="text-center text-primary text-2xl">
            No se encontraron resultados
          </p>
          <p className="text-center text-primary text-2xl">
            Te recomendamos otros productos
          </p>
          <div className="m-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product: any) => (
              <Card key={product.id} {...product} />
            ))}
          </div>
        </>
      ) : (
        searchResults &&
        searchResults.map((product) => <Card key={product.id} {...product} />)
      )}
    </div>
  );
};

export default SearchResults;
