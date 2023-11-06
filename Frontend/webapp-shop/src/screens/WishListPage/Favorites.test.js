import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import Favorites from './Favorites';

describe('Favorites Component', () => {
  it('Den ska visa ett meddelande när det inte finns några favoritprodukter', () => {
    render(<Favorites />);
    const message = screen.getByText('Du har inga favoritprodukter ännu..');
    expect(message).toBeInTheDocument();
  });

  it('Den ska visa favoritprodukter när det finns favoritprodukter', () => {
    const mockFavorites = [
      {
        id: 1,
        imageUrl: 'image-url-1',
        productName: 'Product 1',
        categoryId: 3,
        price: 50,
        priceAfterSale: 40,
      },
      {
        id: 2,
        imageUrl: 'image-url-2',
        productName: 'Product 2',
        categoryId: 1,
        price: 15,
        priceAfterSale: null,
      },
    ];

    const localStorageMock = {
      getItem: jest.fn().mockReturnValue(JSON.stringify(mockFavorites)),
    };
    global.localStorage = localStorageMock;

    render(<Favorites />);
  });
});
