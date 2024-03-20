import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hi there from h1', () => {
  render(<App />);
  const h1_content = screen.getByText(/Hi there/i);
  expect(h1_content).toBeInTheDocument();
});
