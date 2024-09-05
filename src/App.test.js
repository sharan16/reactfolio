import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

// Mock window.scrollTo
window.scrollTo = jest.fn();

test('renders homepage content', () => {
  render(
    <Router>
      <App />
    </Router>
  );
  
  // Look for content that actually exists in your App component
  const titleElement = screen.getByText(/Welcome to my website!/i);
  expect(titleElement).toBeInTheDocument();

  const subtitleElement = screen.getByText(/Hi, I'm Shan Somas/i);
  expect(subtitleElement).toBeInTheDocument();
});
