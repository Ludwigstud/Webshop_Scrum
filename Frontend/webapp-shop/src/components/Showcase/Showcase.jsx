import React from 'react'
import showcase from './showcase.jpg';

const Showcase = () => {
  return (
    <div className='showcase-container'>
     
      <img className='showcase-image'  src={showcase} alt="sowcaseImage" />
      <div className='info'>
        <p className='title'>Take 50% off!</p>
        <button>shop now</button>
      </div>
    </div>
  )
}

export default Showcase