import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const heading = screen.getByText(/John Johnsons Cruisey Movie Monday/i);
  expect(heading).toBeInTheDocument();
});

test('renders without showing any movies', () => {
  render(<App />);
  const movieCard = screen.
  expect(movieCard).not.toBeInTheDocument();
})
