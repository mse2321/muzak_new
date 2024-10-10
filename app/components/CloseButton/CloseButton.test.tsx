import React from 'react';
import { render } from '@testing-library/react';
import CloseButton from './index';

it('renders CloseButton component', () => {
  const { container } = render(<CloseButton />);
  
  expect(container.querySelector('[class="info"]'));
});
