import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CategoriesHeader from '../../components/CategoriesHeader/CategoriesHeader';
import Showcase from '../../components/Showcase/Showcase';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import BestSellers from '../../components/BestSellers/BestSellers';
import { BiSolidChevronRight } from 'react-icons/bi';
const Home = () => {
  //fetch('https://localhost:7042/api/Products/GetproductsHadi')

  return (
    <>
    <section className='home-section'>
      <div className='container'>
        <div className='categories-header'>
        < CategoriesHeader/>
        </div>
        <div className='showcase'>
          <Showcase/>
        </div>
        <div className='featured-products'>
          <div className='featured-products'>
            <div className='section-header'>
              <h4>Featured Products</h4>
              <Link to='/Products'>
                view all{' '}
                <span>
                  <BiSolidChevronRight />
                </span>
              </Link>
            </div>
            <div className='cards'>
              <div className='card-item'>
                <FeaturedProducts />
              </div>
            </div>
          </div>
          <hr />
          <div className='best-sellers'>
            <div className='section-header'>
              <h4>Best sellers</h4>
              <Link to='/Products'>
                view all{' '}
                <span>
                  <BiSolidChevronRight />
                </span>
              </Link>
            </div>
            <div className='cards'>
              <div className='card-item'>
                <BestSellers />
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default Home;
