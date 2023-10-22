import React from "react";
import img from "../products/shoe.jpg";
import { FaRegHeart } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";

const ProductCard = () => {
  return (
    <>
      <div className="product-page">
        <div className="container">
          <img src={img} alt="" />

          <div className="information">
            <div className="product-name">
              <h5>Knitted summer top</h5>

              <div className="icon">
                <FaRegHeart />
              </div>
            </div>
            <div className="rating">
              {" "}
              <div className="star">
                {" "}
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </div>{" "}
              <p className="total-rating">(23)</p>{" "}
            </div>
            <div className="cost-add">
              <p className="product-cost">$37.88</p>
              <div className="add">
                <p className="minus button">-</p>
                <p className="total">0</p>
                <p className="plus button">+</p>
              </div>
            </div>
            <div className="size">
              <p className="sizetext">Size</p>
              <div className="sizepick">
                <div className="roundsize">
                  {" "}
                  <p>XS</p>
                </div>
                <div className="roundsize">
                  {" "}
                  <p>S</p>
                </div>
                <div className="roundsize">
                  {" "}
                  <p>M</p>
                </div>
                <div className="roundsize">
                  {" "}
                  <p>L</p>
                </div>
                <div className="roundsize">
                  {" "}
                  <p>XL</p>
                </div>
                <div className="roundsize">
                  {" "}
                  <p>XXL</p>
                </div>
              </div>
            </div>

            <div className="colorpick">
              <p>Color</p>
              <div className="colors">
                <div className="color red"> </div>
                <div className="color blue"> </div>
                <div className="color white"> </div>
                <div className="color grey"> </div>
                <div className="color black"> </div>
              </div>
            </div>
            <div className="description">
              <h5>Description</h5>
              <p className="information">
                Amet amet Lorem eu consectetur in deserunt nostrud dolor culpa ad sint amet. Nostrud deserunt
                consectetur culpa minim mollit veniam aliquip pariatur exercitation ullamco ea voluptate et. Pariatur
                ipsum mollit magna proident nisi ipsum.
              </p>
            </div>

            <div className="add-to-cart"><p className="button">+ ADD TO CART</p></div>
          </div>
        </div>
      </div>
      <div className="paddingbottom"></div>
    </>
  );
};

export default ProductCard;

// const [products, setProducts] = useState([]);

// useEffect(() => {
//   fetchProductData();
// }, []);

// const fetchProductData = async () => {
//   try {
//     const response = await fetch("https://localhost:7042/api/Products");
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }

//     const productData = await response.json();
//     setProducts(productData);
//   } catch (error) {
//     console.error("Error fetching product data:", error);
//   }
// };

// return (
//   <div>
//     <h1>Product List</h1>
//     <div className="product-cards">
//       {products.map((product, index) => (
//         <div key={index} className="product-card">
//           <h3>{product.name}</h3>
//           <p>Price: ${product.productName}</p>
//           <p>Price: ${product.price}</p>
//           <p>Description: {product.description}</p>
//         </div>
//       ))}
//     </div>
//   </div>
// );
