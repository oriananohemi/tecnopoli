import React, { createContext, useState, useEffect } from 'react';
import { getDocs, collection } from "firebase/firestore";
import { db } from "@tecnopoli/firebase";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const querySnapshot = await getDocs(
        collection(db, "products", "OXkz33QGNvOPXvg6gouZ", "tecnology")
      );
      let newValue = [];
      querySnapshot.forEach((doc) => {
        return newValue.push(doc.data());
      });
      setProducts(newValue);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  }

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    }
  }, [products]);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  return React.useContext(ProductsContext);
};