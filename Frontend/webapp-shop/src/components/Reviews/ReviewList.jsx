import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ReviewList = () => {
  // Review data
  const reviews = [
    { id: 1, author: 'Cameron Williamson', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac justo risus. Integer lobortis, lacus eu aliquet consectetur, lacus diam lobortis nibh, a suscipit lectus tellus ac purus.', rating: 5, date: '22 Oct 2023', profileImage: 'images/user1.jpeg' },
    { id: 2, author: 'Theresa Webb', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac justo risus. Integer lobortis, lacus eu aliquet consectetur, lacus diam lobortis nibh, a suscipit lectus tellus ac purus.', rating: 3, date: '22 Oct 2023', profileImage: 'images/user1.jpeg' },
    { id: 3, author: 'Marvin McKinney', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac justo risus. Integer lobortis, lacus eu aliquet consectetur, lacus diam lobortis nibh, a suscipit lectus tellus ac purus.', rating: 4, date: '22 Oct 2023', profileImage: 'images/user1.jpeg' },
    { id: 4, author: 'Jacob Jones', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac justo risus. Integer lobortis, lacus eu aliquet consectetur, lacus diam lobortis nibh, a suscipit lectus tellus ac purus.', rating: 5, date: '22 Oct 2023', profileImage: 'images/user1.jpeg' },
    // lägg till mer reviews
  ];

  return (
    <div className="review-list">
      <h1 className="center-title">Reviews</h1>
      {reviews.map((review) => (
        <div key={review.id} className="review">
          <div className="profile-image">
            <img src={process.env.PUBLIC_URL + '/' + review.profileImage} alt={`Profile of ${review.author}`} />
          </div>
          <div className="text-container">
            <div className="author">{review.author}</div>
            <div className="date small-text">{review.date}</div>
            <div className="content">{review.content}</div>
          </div>
          <div className="stars">
            {[...Array(review.rating)].map((_, index) => (
              <FontAwesomeIcon icon={faStar} key={index} className="star-icon" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;