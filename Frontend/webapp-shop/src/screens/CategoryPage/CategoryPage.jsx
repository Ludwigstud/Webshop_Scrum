import React from 'react';

export default function CategoryPage() {
  return (
    <div
      className='categories-main-container container-fluid'
      style={{ paddingLeft: 0, paddingRight: 0 }}
    >
      <div className='categories-headroom container'>
        <div className='categories-headroom-row row'>
          <div className='categories-burger-meny-holder col-2'>
            <i className='fa-solid fa-bars-staggered'></i>
          </div>
          <div className='categories-searchbar-holder col-8'>
            <form action='/Products/Search' method='get'>
              <i className='fa-light fa-search'></i>
              <input type='text' placeholder='Search' />
            </form>
          </div>
          <div className='categories-basket-holder col-2'>
            <i className='fa-light fa-shopping-basket'></i>
          </div>
        </div>
      </div>

      <div className='categories-carousel-container container-fluid'>
        <div className='categories-carousel-slide'>
          <div className='categories-carousel-row'>
            <a href='#'>
              <div className='categories-carousel-tags-holder tags-holder-active'>
                <h6>MEN</h6>
              </div>
            </a>
            <a href='#'>
              <div className='categories-carousel-tags-holder'>
                <h6>WOMEN</h6>
              </div>
            </a>
            <a href='#'>
              <div className='categories-carousel-tags-holder'>
                <h6>KIDS</h6>
              </div>
            </a>
            <a href='#'>
              <div className='categories-carousel-tags-holder'>
                <h6>ACCESORIES</h6>
              </div>
            </a>
            <a href='#'>
              <div className='categories-carousel-tags-holder'>
                <h6>OTHERS</h6>
              </div>
            </a>
            <a href='#'>
              <div className='categories-carousel-tags-holder'>
                <h6>ELECTRONICS</h6>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className='categories-content-container container'>
        <div className='categories-content-row row'>
          <div className='categories-half-image-holder-left col-6'>
            <a href=''>
              <h6>Dresses</h6>
            </a>
          </div>
          <div className='categories-half-image-holder col-6'>
            <a href=''>
              <h6>Pants</h6>
            </a>
          </div>
        </div>
        <div className='categories-content-row row'>
          <div className='categories-full-image-holder col-12'>
            <a href=''>
              <h6>Accesories</h6>
            </a>
          </div>
        </div>
        <div className='categories-content-row row'>
          <div className='categories-half-image-holder-left col-6'>
            <a href=''>
              <h6>Shoes</h6>
            </a>
          </div>
          <div className='categories-half-image-holder col-6'>
            <a href=''>
              <h6>T-shirts</h6>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
