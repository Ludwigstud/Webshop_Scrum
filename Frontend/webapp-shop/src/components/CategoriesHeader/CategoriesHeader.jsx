import React from 'react'

const CategoriesHeader = (props) => {
  return (
    <div className='categories-header-container'>
        <div className='categorie-image'></div>
        <div className='title'>{props.categoryName}</div>
    </div>
  )
}

export default CategoriesHeader