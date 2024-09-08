import React, { useState } from 'react';
import pizzas from './pizzas.js'; 

const Cart = () => {
  const [cart, setCart] = useState(pizzas.map(pizza => ({ ...pizza, quantity: 1 })));

  const increaseQuantity = (id) => {
    setCart(
      cart.map((pizza) =>
        pizza.id === id
          ? { ...pizza, quantity: pizza.quantity + 1 }
          : pizza
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((pizza) =>
          pizza.id === id && pizza.quantity > 0
            ? { ...pizza, quantity: pizza.quantity - 1 }
            : pizza
        )
        .filter((pizza) => pizza.quantity > 0)
    );
  };

  const calculateTotal = () => {
    return cart.reduce((total, pizza) => total + pizza.price * pizza.quantity, 0);
  };

  return (
    <div className="container">
      <h2>Carrito de Compras</h2>
      <div className="row">
        {cart.map((pizza) => (
          <div key={pizza.id} className="col-md-4"> {/* Cada tarjeta ocupa 4 columnas en pantallas medianas y grandes */}
            <div className="card mb-4">
              <img src={pizza.img} alt={pizza.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{pizza.name}</h5>
                <p className="card-text">Cantidad: {pizza.quantity}</p>
                <p className="card-text">Precio: ${pizza.price}</p>
                <button className="btn btn-secondary" onClick={() => decreaseQuantity(pizza.id)}>
                  -
                </button>
                <button className="btn btn-secondary" onClick={() => increaseQuantity(pizza.id)}>
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <h3>Total: ${calculateTotal()}</h3>
        <button className="btn btn-success">Pagar</button>
      </div>
    </div>
  );
};

export default Cart;
