import React from 'react';
import Carousel from 'better-react-carousel';
import CreditCard from '../../CreditCard/CreditCard';

const CreditCardCarousel = ({ creditCards }) => {
  if (!creditCards || creditCards.length === 0) {
    return null;
  }

  const arrows = creditCards.length <= 1;

  return (
    <Carousel cols={1} rows={1} gap={10} loop hideArrow={arrows}>
      {creditCards.map((creditCard, index) => (
        <Carousel.Item key={index}>
          <CreditCard creditCard={creditCard} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CreditCardCarousel;
