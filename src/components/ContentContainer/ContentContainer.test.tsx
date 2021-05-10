import React from 'react';
import { render } from '@testing-library/react';
import ContentContainer from './index';

it('renders ContentContainer component', () => {
  const { container } = render(<ContentContainer />);
  
  expect(container.getElementsByTagName('header'));
  expect(container.getElementsByTagName('footer'));
});
