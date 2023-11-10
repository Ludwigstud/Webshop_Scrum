import React from 'react';
import Carousel from 'better-react-carousel';
import CreditCard from '../../CreditCard/CreditCard';
import { Link } from 'react-router-dom';

const CreditCardCarousel = ({ creditCards }) => {
  if (!creditCards || creditCards.length === 0) {
    return null;
  }

  const arrows = creditCards.length <= 1;

  return (
    <Carousel cols={1} rows={1} gap={10} loop hideArrow={arrows}>
      {creditCards.map((creditCard, index) => (
        <Carousel.Item key={index}>
          <Link to={`/profile/paymentmethods/edit/${creditCard.id}`}>
            <CreditCard creditCard={creditCard} />
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CreditCardCarousel;
