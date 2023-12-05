import React, { useState } from "react";

const Checkout = () => {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleCompleteCheckout = () => {
    // Lógica para completar la compra
    console.log("Compra completada");
  };

  const stepsContent = [
    <div>
      <h2>Paso 1: Definir el envío</h2>
      {/* Contenido para definir el envío */}
      <button onClick={handleNextStep}>Siguiente</button>
    </div>,
    <div>
      <h2>Paso 2: Forma de pago</h2>
      {/* Contenido para elegir la forma de pago */}
      <button onClick={handlePrevStep}>Anterior</button>
      <button onClick={handleNextStep}>Siguiente</button>
    </div>,
    <div>
      <h2>Paso 3: Resumen de la compra</h2>
      {/* Contenido para revisar el resumen de la compra */}
      <button onClick={handlePrevStep}>Anterior</button>
      <button onClick={handleCompleteCheckout}>Completar la compra</button>
    </div>,
  ];

  return (
    <div className="container mx-auto my-8">
      <div>{stepsContent[step - 1]}</div>
    </div>
  );
};

export default Checkout;
