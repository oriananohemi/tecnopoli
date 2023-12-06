import { useState } from "react";
import Router from "next/router";
import Link from "next/link";
import {
  Auth,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "@tecnopoli/firebase";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth as Auth,
        email,
        password
      );
      sessionStorage.setItem("at", userCredential.user?.uid);
      Router.push("/home");
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const userCredential = await signInWithPopup(auth as Auth, provider);
      sessionStorage.setItem("at", userCredential.user?.uid);
      Router.push("/home");
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleFacebookLogin = () => {
    // Lógica para iniciar sesión con Facebook
  };

  return (
    <div
      className="bg-no-repeat flex flex-col md:flex-row justify-center md:items-center h-screen"
      style={{ backgroundImage: "url('background.png')" }}
    >
      <div
        className="hidden md:block bg-no-repeat bg-cover md:w-1/3 md:shadow h-4/6"
        style={{ backgroundImage: "url('background-store.avif')" }}
      >
        <img
          src="brand.png"
          alt="Tecnopoli"
          className="md:w-72 mx-auto mt-32"
          style={{ borderRadius: "30px" }}
        />
      </div>
      <div className="md:w-1/3 md:h-4/6 bg-gray-200 bg-opacity-25 md:shadow">
        <form className="rounded px-8 pt-2 md:pt-16 mb-4">
          <h2 className="m-10 text-center text-4xl font-semibold leading-9 tracking-tight text-primary">
            Inicia sesión
          </h2>
          <div className="mb-6">
            <label
              className="block text-primary text-sm font-bold mb-2"
              htmlFor="email"
            >
              Correo Electrónico
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-primary leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="tucorreo@email.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label
              className="block text-primary text-sm font-bold mb-2"
              htmlFor="password"
            >
              Contraseña
            </label>
            <div className="relative">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-primary leading-tight focus:outline-none focus:shadow-outline"
                name="password"
                id="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="***********"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-0 mr-2 top-2 focus:outline-none"
              >
                {showPassword ? (
                  <img src="eye.svg" className="w-5" />
                ) : (
                  <img src="eye_hidden.svg" className="w-5" />
                )}
              </button>
            </div>
          </div>
          {error && (
            <div className="mb-2">
              <p className="text-red-500 text-sm">{error}</p>
            </div>
          )}
          <div className="mb-6 text-sm text-center">
            <Link
              href="#"
              className="text-xs font-semibold text-primary hover:text-blue-500"
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={handleLogin}
              type="button"
              className="flex w-full justify-center rounded-md bg-secondary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Ingresar
            </button>
          </div>
          <button
            className="flex items-center mx-auto mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md focus:outline-none focus:shadow-outline"
            onClick={handleGoogleLogin}
          >
            Inicia sesión con Google
            <FaGoogle className="ml-4" />
          </button>
          <div className="mt-10 text-center text-sm">
            <Link
              href="/sign-up"
              className="text-xs font-semibold leading-6 text-primary hover:text-blue-500"
            >
              ¿No tienes cuenta?. Registrate
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
