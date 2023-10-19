import React from 'react'
import './_Showcase.scss'

const Showcase = () => {
  return (
    <div className='showcase-container'>
      <div className='showcase-image'></div>
      <div className='info'>
        <p title>Take 50% off!</p>
        <button>shop now</button>
      </div>
    </div>
  )
}

export default Showcase