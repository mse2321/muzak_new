import React from 'react';
import { render } from '@testing-library/react';
import Page from './page';

test('renders the app', () => {
  const { container } = render(<Page />);
  expect(container);
});
