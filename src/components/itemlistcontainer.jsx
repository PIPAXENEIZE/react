import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h2>{greeting}</h2>
    </div>
  );
};

export default ItemListContainer;