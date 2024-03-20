import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DOM from h1', () => {
  render(<App />);
  const h1_content = screen.getByText(/DOM/i);
  expect(h1_content).toBeInTheDocument();
});
