import { RouteGuard } from "@tecnopoli/utils/RouteGuard";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import Header from "@tecnopoli/shared/components/header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    /*     <RouteGuard> */
    <>
      <Header />
      <Component {...pageProps} />
    </>
    /*     </RouteGuard> */
  );
}
