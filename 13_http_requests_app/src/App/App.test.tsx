import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Load Movies', () => {
  render(<App />);
  const linkElement = screen.getByText(/Load Movies/i);
  expect(linkElement).toBeInTheDocument();
});
