import React, { useEffect, useState } from 'react'

const Pizza = () => {
  const [datos, setDatos] = useState(null); // Inicializar como null o un objeto vacío
  
  useEffect(() => {
    const consultarApi = async () => {
      try {
        const url = 'http://localhost:5000/api/pizzas/p001';
        const response = await fetch(url);
        const data = await response.json();
        setDatos(data);
        console.log(data); // Cambié `datos` a `data` para evitar la referencia a un estado no actualizado
      } catch (error) {
        console.error('Error fetching pizza data:', error);
      }
    };

    consultarApi();
  }, []);

  // Verificar que los datos estén cargados antes de renderizar
  if (!datos) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container d-flex justify-content-center align-items-center ">
    <div className="card w-75  h-50">
      <img src={datos.img} alt={datos.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{datos.name}</h5>
        <ul>
          {datos.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <p className="card-text">Precio: ${datos.price}</p>
        <p className="card-text">Descripción: ${datos.desc}</p>
        <button className="btn btn-primary">Agregar al carrito</button>
      </div>
    </div>
    </div>
  );
}

export default Pizza;