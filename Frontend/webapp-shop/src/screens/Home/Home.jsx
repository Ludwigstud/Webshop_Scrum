
import './_Home.scss'
import {Link} from "react-router-dom"
import CategoriesHeader from '../../components/CategoriesHeader/CategoriesHeader'
import Showcase from '../../components/Showcase/Showcase'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import SaleProducts from '../../components/SaleProducts/SaleProducts'
import BestSellers from '../../components/BestSellers/BestSellers'
import BestSellersSale from '../../components/BestSellersSale/BestSellersSale'
import {BiSolidChevronRight} from 'react-icons/bi'
const Home = () => {


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
            < FeaturedProducts productName="Summer pants" productPrice="31.78"/>
            </div>
            <div className='card-item'>
            < SaleProducts productName="Shoulder bag" productPriceBeforeSale="38.00" productPriceAfterSale="31.78"/>
            </div>
            <div className='card-item'>
            < FeaturedProducts productName="Black sneakers" productPrice="29.95"/>
            </div>
            <div className='card-item'>
            < FeaturedProducts productName="Warm hat" productPrice="6.93"/>
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
            < BestSellers productName="Hand bag" productPrice="24.95"/>
            </div>
            <div className='card-item'>
            < BestSellers productName="T-shirt" productPrice="12.95"/>
            </div>
            <div className='card-item'>
            < BestSellersSale productName="Summer dress" productPriceBeforeSale="36.00" productPriceAfterSale="32.78"/>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home