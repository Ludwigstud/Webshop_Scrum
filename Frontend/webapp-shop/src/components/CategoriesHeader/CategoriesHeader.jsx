import React from 'react'
import {Link} from "react-router-dom"
import man from './man.jpg'
import women from './women.jpg'
import kids from './kids.jpg'
import sport from './sport.jpg'

const CategoriesHeader = () => {
  return (
    <>   
    <Link to="/Men"><div className='categories-header-container'>
        <img className='categorie-image' src={man} alt="Man" />
        <div className='title'>Men</div>
    </div></Link> 
    <Link to="/Men"><div className='categories-header-container'>
    <img className='categorie-image' src={women} alt="Man" />
        <div className='title'>Women</div>
    </div></Link> 
    <Link to="/Men"><div className='categories-header-container'>
    <img className='categorie-image' src={kids} alt="Man" />
        <div className='title'>Kids</div>
    </div></Link> 
    <Link to="/Men"><div className='categories-header-container'>
    <img className='categorie-image' src={sport} alt="Man" />
        <div className='title'>Sport</div>
    </div></Link> 
    </>

  )
}

export default CategoriesHeader