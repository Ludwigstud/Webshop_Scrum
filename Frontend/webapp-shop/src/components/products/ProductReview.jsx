import React from "react";
import { FaStar } from "react-icons/fa6";
const ProductReview = () => {
  return (
    <>
      <div className="review-card">
        <div className="container">
          <div className="profile-img"></div>
          <div className="text-info">
            <div className="name-rating">
              <div className="name-date">
                <p>Annette Black</p>
                <div className="date">23 Jan 2022</div>
              </div>

              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>

            <div className="comment">
            Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductReview;
