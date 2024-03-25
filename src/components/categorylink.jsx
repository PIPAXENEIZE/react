import React from 'react'
import Counter from '../components/counter';
import ItemCategory from './item-category-ssd';

const CategoryLink = () => {
  return (
    <div>
        <h1>Productos</h1>
        <ItemCategory/>
        
        <Counter/>
    </div>
    
  )
  
}

export default CategoryLink