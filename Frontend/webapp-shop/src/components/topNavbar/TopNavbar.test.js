import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TopNavbar from './TopNavbar';

test('it renders the TopNavbar component', () => {
  render(<TopNavbar />);
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
});

test('it opens the Offcanvas when the button is clicked', () => {
  render(<TopNavbar />);
  const button = screen.getByRole('button');
  const offcanvas = screen.getByRole('dialog');

  expect(offcanvas).not.toBeVisible();
  fireEvent.click(button);
  expect(offcanvas).toBeVisible();
});

test('it displays the Contact us title', () => {
  render(<TopNavbar />);
  const title = screen.getByText('Contact us');
  expect(title).toBeInTheDocument();
});
