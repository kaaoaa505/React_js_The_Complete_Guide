import { render, screen } from '@testing-library/react';
import App from './App';

test('App is running', () => {
  render(<App />);
  const linkElement = screen.getByText(/App/i);
  expect(linkElement).toBeInTheDocument();
});
