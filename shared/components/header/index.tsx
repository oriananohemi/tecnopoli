import { useState } from "react";
import Router from "next/router";
import { CgProfile } from "react-icons/cg";
import { IoMdArrowDropdown } from "react-icons/io";

const deleteToken = () => {
  sessionStorage.clear();
  Router.push("/login");
};

export default function Header() {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  const userLogged =
    typeof window !== "undefined" ? window.sessionStorage.getItem("at") : false;

  return (
    <div className="shadow flex justify-between items-center bg-blue-200 p-4">
      <img src="logo.png" alt="Logo" className="h-8" />
      {userLogged && (
        <div className="relative">
          <button
            onClick={toggleProfileMenu}
            className="flex items-center focus:outline-none"
          >
            <CgProfile size={30} />
            <IoMdArrowDropdown />
          </button>
          {showProfileMenu && (
            <div className="absolute right-0 mt-2 bg-white text-primary p-2 shadow-md rounded-md animate__animated animate__fadeIn">
              <a href="/home" className="block px-4 py-2 hover:text-blue-500">
                Inicio
              </a>
              <a href="#" className="block px-4 py-2 hover:text-blue-500">
                Historial
              </a>
              <a
                href="/user-profile"
                className="block px-4 py-2 hover:text-blue-500"
              >
                Mi perfil
              </a>
              <button
                onClick={deleteToken}
                className="block px-4 py-2 hover:text-blue-500"
              >
                Cerrar sesión
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
