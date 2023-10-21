import React, { useState } from 'react';

const Checkout = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    tarjeta: '',
    fecha_exp: '',
    cvv: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica de procesamiento de pagos
  };

  return (
    <div className="checkout-form">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="tarjeta">Número de Tarjeta:</label>
        <input
          type="text"
          id="tarjeta"
          name="tarjeta"
          value={formData.tarjeta}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="fecha_exp">Fecha de Expiración:</label>
        <input
          type="text"
          id="fecha_exp"
          name="fecha_exp"
          value={formData.fecha_exp}
          onChange={handleInputChange}
          placeholder="MM/YY"
          required
        />

        <label htmlFor="cvv">CVV:</label>
        <input
          type="text"
          id="cvv"
          name="cvv"
          value={formData.cvv}
          onChange={handleInputChange}
          required
        />

        <button type="submit">Pagar</button>
      </form>
    </div>
  );
};

export default Checkout;
