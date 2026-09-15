import { render, screen } from '@testing-library/react';
import App from './App';

beforeAll(() => {
  window.matchMedia =
    window.matchMedia ||
    (() => ({ matches: false, addListener() {}, removeListener() {} }));
});

test('renders the hero headline and a quote call to action', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/set your brand on fire/i);
  expect(screen.getAllByRole('link', { name: /get a quote/i }).length).toBeGreaterThan(0);
});

test('lists all three services', () => {
  render(<App />);
  ['Video Production', 'Video Editing', 'Experimental Marketing'].forEach((name) => {
    expect(screen.getByRole('heading', { name })).toBeInTheDocument();
  });
});
