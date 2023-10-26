import React, { useEffect, useState } from "react";
import './_Home.scss'
import {Link} from "react-router-dom"
import CategoriesHeader from '../../components/CategoriesHeader/CategoriesHeader'
import Showcase from '../../components/Showcase/Showcase'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import BestSellers from '../../components/BestSellers/BestSellers'
import {BiSolidChevronRight} from 'react-icons/bi'
const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://localhost:7042/api/Products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (data.length === 0) {
    return <div>No data available.</div>;
  }
  return (
    <>
    <section className='home-section'>
      <div className='container'>
        <div className='categories-header'>
        <Link to="/Men"><span>< CategoriesHeader categoryName="Men"/></span></Link>
        <Link to="/Women">< CategoriesHeader categoryName="Women"/></Link>
        <Link to="/Kids">< CategoriesHeader categoryName="Kids"/></Link>
        <Link to="/Sport">< CategoriesHeader categoryName="Sport"/></Link>
        </div>
        <div className='showcase'>
          <Showcase/>
        </div>
        <div className='featured-products'>
          <div className='section-header'>
            <h4>Featured Products</h4>
            <Link to="/Products">view all <span><BiSolidChevronRight /></span></Link>
          </div>
          <div className='cards'>
          <div className='card-item'>
            < FeaturedProducts />
            </div>
   

          </div>
        </div>
        <hr />
        <div className='best-sellers'>
        <div className='section-header'>
            <h4>Best sellers</h4>
            <Link to="/Products">view all <span><BiSolidChevronRight /></span></Link>
          </div>
          <div className='cards'>
            <div className='card-item'>
              < BestSellers/>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home