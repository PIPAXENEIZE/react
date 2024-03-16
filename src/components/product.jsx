import React from 'react'
import Counter from '../components/counter';
import ItemDetail from './item';

const product = () => {
  return (
    <div>
        <h1>Productos</h1>
        <ItemDetail/>
        
        <Counter/>
    </div>
    
  )
  
}

export default product
