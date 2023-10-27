import React from 'react';
import { render, screen } from '@testing-library/react';
import BottomNavbar from './BottomNavbar';
import TestRouter from './TestRouter'; // Import your TestRouter component

describe('BottomNavbar', () => {
  it('should render without errors', () => {
    render(
      <TestRouter>
        <BottomNavbar />
      </TestRouter>
    );

    const component = screen.getByTestId('bottom-navbar');
    expect(component).toBeInTheDocument();
  });

  it('should have three navigation links', () => {
    render(
      <TestRouter>
        <BottomNavbar />
      </TestRouter>
    );

    const links = screen.getAllByTestId('bottom-navbar-link');
    expect(links).toHaveLength(3);
  });

  it('should have a home link', () => {
    render(
      <TestRouter>
        <BottomNavbar />
      </TestRouter>
    );

    const homeLink = screen.getByTestId('bottom-navbar-link-home');
    expect(homeLink).toBeInTheDocument();
  });

  it('should have a cart link', () => {
    render(
      <TestRouter>
        <BottomNavbar />
      </TestRouter>
    );

    const cartLink = screen.getByTestId('bottom-navbar-link-cart');
    expect(cartLink).toBeInTheDocument();
  });

  it('should have a profile link', () => {
    render(
      <TestRouter>
        <BottomNavbar />
      </TestRouter>
    );

    const profileLink = screen.getByTestId('bottom-navbar-link-profile');
    expect(profileLink).toBeInTheDocument();
  });
});
