import React from 'react';
import { render } from '@testing-library/react';
import Header from './index';

it('renders Header component', () => {
  const { container } = render(<Header />);
  
  expect(container.getElementsByTagName('header'));
});
