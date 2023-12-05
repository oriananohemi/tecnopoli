import { useEffect, useState } from "react";
import Router from "next/router";
import Link from "next/link";
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "@tecnopoli/firebase";
import { FaGoogle } from "react-icons/fa";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth as Auth,
        email,
        password
      );
      setSuccess(true);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const userCredential = await signInWithPopup(auth as Auth, provider);
      setSuccess(true);
    } catch (err: any) {
      setError(err.message);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (success) {
        Router.push("/login");
      }
    }, 1000);
  }, [success]);

  return (
    <div
      className="relative bg-no-repeat flex flex-col md:flex-row justify-center h-screen pt-20"
      style={{ backgroundImage: "url('background.png')" }}
    >
      <div
        className="hidden md:block bg-no-repeat bg-cover md:w-1/3 md:shadow h-5/6"
        style={{ backgroundImage: "url('background-store.avif')" }}
      >
        <img
          src="brand.png"
          alt="Tecnopoli"
          className="md:w-72 mx-auto mt-32"
          style={{ borderRadius: "30px" }}
        />
      </div>
      <div className="md:w-1/3 md:h-5/6 bg-gray-200 bg-opacity-25 md:shadow">
        <form className="rounded px-8 pt-4 md:pt-16 mb-4">
          <h2 className="m-10 text-center text-4xl font-semibold leading-9 tracking-tight text-primary">
            Regístrate
          </h2>
          <div className="mb-6">
            <label
              className="block text-primary text-sm font-bold mb-2"
              htmlFor="email"
            >
              Correo Electrónico:
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
              Contraseña:
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
          <div className="flex items-center justify-between">
            <button
              onClick={handleRegister}
              type="button"
              className="flex w-full justify-center rounded-md bg-secondary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Registrarse
            </button>
          </div>
          <button
            className="ml-40 mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md focus:outline-none focus:shadow-outline"
            onClick={handleGoogleSignIn}
          >
            <FaGoogle />
          </button>
          <div className="mt-10 text-center text-sm">
            <Link
              href="/login"
              className="text-xs font-semibold leading-6 text-primary hover:text-blue-500"
            >
              ¿Ya tienes cuenta?. Inicia Sesión
            </Link>
          </div>
        </form>
      </div>
      {success && (
        <div
          className="z-10 absolute inset-x-0 top-4 w-2/3 left-60 bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
          role="alert"
        >
          <div className="flex">
            <div className="py-1">
              <svg
                className="fill-current h-6 w-6 text-teal-500 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
              </svg>
            </div>
            <div>
              <p className="font-bold">Bienvenido a Tecnopolis</p>
              <p className="text-sm">Enviamos un email de confirmación</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
