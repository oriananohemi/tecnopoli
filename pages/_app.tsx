import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { RouteGuard } from "@tecnopoli/utils/RouteGuard";
import Header from "@tecnopoli/shared/components/header";
import { ProductsProvider } from "@tecnopoli/contexts/ProductsContext";
import { CartProvider } from "@tecnopoli/contexts/CartContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    /*     <RouteGuard> */
    <ProductsProvider>
      <CartProvider>
        <>
          <Header />
          <Component {...pageProps} />
        </>
      </CartProvider>
    </ProductsProvider>
    /*     </RouteGuard> */
  );
}
