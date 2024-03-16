import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import products from '../utils/AsyncMock';
import 'tailwindcss/tailwind.css';
import { FadeLoader } from 'react-spinners';

// Función para simular una solicitud asincrónica
function mockAsyncRequest(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000); // Simulamos un retardo de 1 segundo
  });
}

function ItemDetail() {
  const [loading, setLoading] = useState(true);
  const [productsData, setProductsData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        // Simulamos una solicitud asincrónica para obtener productos
        const fetchedProducts = await mockAsyncRequest(products);
        // Verificamos si los datos de productos son un objeto y convertimos a un array de objetos
        const productsArray = Object.values(fetchedProducts).flat();
        setProductsData(productsArray);
        setLoading(false); // Marcamos que la carga ha finalizado
      } catch (error) {
        console.error('Error:', error);
      }
    }
    fetchData();
  }, []);

  // Filtrar los productos basados en la categoría seleccionada
  const filteredProducts = selectedCategory
    ? productsData.filter(product => product.category === selectedCategory)
    : productsData;

  if (loading) {
    return (
      <div className="flex justify-center mt-40 h-screen">
        <FadeLoader color="#36d7b7" loading />
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <div className="flex mb-4">
        <div className="mr-4">
          <span>Filtrar por categoría:</span>
          <select
            className="ml-2 p-2 border border-gray-300 rounded"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Todas</option>
            <option value="SSD">SSD</option>
            <option value="HDD">HDD</option>
            <option value="OLD DISK">OLD DISK</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card p-4 bg-white shadow-lg rounded-lg flex">
            <Link to={`/product/item-${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src={product.imageURL || product.imageURL} alt={product.name} style={{ width: '150px', height: 'auto' }} className="w-full h-auto mx-auto" />
              <div className="ml-4">
                <h3 className="text-black text-xl">{product.name}</h3>
                <p className="text-gray-600">${product.price}</p>
              </div>
            </Link>
            <button onClick={() => addToCart(product)} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-2 py-1 mt-2 rounded" style={{ width: '50%', height: '20%'}}>
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemDetail;
