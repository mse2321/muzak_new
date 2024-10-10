import React from 'react';
import { render } from '@testing-library/react';
import { StateProvider } from './state';

test('renders the state provider', () => {
  const { container } = render(<StateProvider />);
  expect(container);
});
