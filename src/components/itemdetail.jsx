import React from 'react';
import { useParams } from 'react-router-dom';


function ProductDetail() {
  let { id } = useParams();

  // Aquí puedes usar el ID para cargar los detalles del producto correspondiente

  return (
    <div>
      <h2>Detalles del producto con ID: {id}</h2>
      {/* Otros componentes para mostrar los detalles del producto */}
    </div>
  );
}

export default ProductDetail;