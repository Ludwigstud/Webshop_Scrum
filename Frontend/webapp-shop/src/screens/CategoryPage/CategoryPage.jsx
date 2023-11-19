import React from 'react';
import useFetch from '../../hooks/useFetch.jsx';
import { useState } from 'react';
import './_categoryPage.scss';
export default function CategoryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const categories = useFetch(`https://localhost:7042/api/Categories`);
  const products = useFetch(`https://localhost:7042/api/Product`);
  
  const filteredCategories = products?.data?.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    
  );

  return (
    <div className='categories-page'>
      {/* Search bar */}
      <div className='search-bar'>
        <input
          type='text'
          placeholder='Search products...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className=''>
        {/* Render filtered categories */}
        {filteredCategories?.map((category) => (
          <div className='category-card' key={category.id}>
            <p>{category.categoryName}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
