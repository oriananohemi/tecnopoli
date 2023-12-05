import React from "react";
import Link from "next/link";

const AuthButtons = () => {
  return (
    <div>
      <Link
        className="block mx-auto w-5/6 rounded-md bg-white px-2 py-1.5 text-base font-semibold leading-6 text-primary shadow-sm hover:bg-primary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-primary"
        href="/login"
        passHref
      >
        Inicia sesión
      </Link>
      <Link
        className="block mx-auto mt-4 w-5/6 rounded-md bg-primary px-2 py-1.5 text-base font-semibold leading-6 text-white shadow-sm hover:bg-white hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-primary"
        href="/sign-up"
        passHref
      >
        Regístrate
      </Link>
    </div>
  );
};

export default AuthButtons;
