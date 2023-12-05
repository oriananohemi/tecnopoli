import { Inter } from "next/font/google";
import AuthButtons from "./auth-buttons";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('background-store.avif')" }}
    >
      <section className="block bg-gray-100 bg-opacity-25 h-full">
        <div className="text-center pt-36 md:flex md:flex-row md:justify-evenly md:items-center">
          <img
            src="brand.png"
            alt="Tecnopoli"
            className="w-60 mb-14 md:w-1/4 mx-auto md:m-0"
            style={{ borderRadius: "30px" }}
          />
          <div className="p-4 rounded">
            <h1 className="hidden md:block text-5xl mb-14 ">
              Expertos en tecnología
            </h1>
            <AuthButtons />
          </div>
        </div>
      </section>
    </main>
  );
}
