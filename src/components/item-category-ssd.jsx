import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import products from '../utils/AsyncMock';
import 'tailwindcss/tailwind.css';
import { FadeLoader } from 'react-spinners';

// asincronia
function mockAsyncRequest(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}

function ItemCategory() {
  const [loading, setLoading] = useState(true);
  const [productsData, setProductsData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('SSD'); // Cambiado a 'SSD'

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedProducts = await mockAsyncRequest(products);
        const productsArray = Object.values(fetchedProducts).flat();
        setProductsData(productsArray);
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
      }
    }
    fetchData();
  }, []);

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
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card p-4 bg-white shadow-lg rounded-lg flex">
            <Link to={`/product/items/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
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

export default ItemCategory;
