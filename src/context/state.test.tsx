import React from 'react';
import { render } from '@testing-library/react';
import { StateProvider } from './state';

//TODO - must be refactored
test('renders the state provider', () => {
  const { container } = render(<StateProvider />);
  expect(container);
});
