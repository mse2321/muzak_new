import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

//TODO - must be refactored

test('renders the app', () => {
  const { container } = render(<App />);
  expect(container);
});
