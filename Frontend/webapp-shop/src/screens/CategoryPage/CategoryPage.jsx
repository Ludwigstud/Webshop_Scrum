import React from 'react';
import useFetch from '../../hooks/useFetch.jsx';
import './_categoryPage.scss';
export default function CategoryPage() {
  const categories = useFetch(`https://localhost:7042/api/Categories`);

  return (
    <div className='categories-page'>
      <div className='category-cards-container'>
        {categories?.data?.map((category) => (
          <div className='category-card'>
            <p>{category.categoryName}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
