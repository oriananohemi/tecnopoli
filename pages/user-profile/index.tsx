import React, { useState } from "react";

const UserProfile = () => {
  const [username, setUsername] = useState("Nombre de Usuario");
  const [email, setEmail] = useState("correo@example.com");
  const [password, setPassword] = useState("contraseña");
  const [cellphone, setCellphone] = useState("300 000 0000");
  const [address, setAddress] = useState("Calle 123, Bogotá, Colombia");
  const [dni, setDni] = useState("123456789");
  const [profileImage, setProfileImage] = useState("favicon.ico");

  const handleUsernameChange = (e: any) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleImageChange = (e: any) => {
    // Lógica para cambiar la imagen de perfil
    const newImage = URL.createObjectURL(e.target.files[0]);
    setProfileImage(newImage);
  };

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4 text-center text-primary">
        Perfil de Usuario
      </h2>
      <div className="text-center mb-8">
        <img
          src={profileImage}
          alt="Imagen de perfil"
          className="w-40 h-40 rounded-full block mx-auto"
        />
        <div>
          <input type="file" onChange={handleImageChange} accept="image/*" />
        </div>
      </div>
      <form>
        <div className="mb-4 mt-16">
          <label
            htmlFor="username"
            className="block text-gray-700 font-semibold mb-2"
          >
            Nombre de Usuario:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            className="border border-gray-300 rounded-md py-2 px-3 w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-semibold mb-2"
          >
            Correo Electrónico:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="border border-gray-300 rounded-md py-2 px-3 w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-semibold mb-2"
          >
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handleEmailChange}
            className="border border-gray-300 rounded-md py-2 px-3 w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="cellphone"
            className="block text-gray-700 font-semibold mb-2"
          >
            Celular
          </label>
          <input
            type="text"
            id="cellphone"
            value={cellphone}
            onChange={handleEmailChange}
            className="border border-gray-300 rounded-md py-2 px-3 w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-gray-700 font-semibold mb-2"
          >
            Dirección
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={handleEmailChange}
            className="border border-gray-300 rounded-md py-2 px-3 w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="dni"
            className="block text-gray-700 font-semibold mb-2"
          >
            Número de documento
          </label>
          <input
            type="text"
            id="dni"
            value={dni}
            onChange={handleEmailChange}
            className="border border-gray-300 rounded-md py-2 px-3 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-52 md:px-72 mt-4 rounded-full"
        >
          Guardar
        </button>
      </form>
    </div>
  );
};

export default UserProfile;
