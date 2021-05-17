import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InfoButton from './index';

it('renders InfoButton component', () => {
  const { container } = render(<InfoButton />);
  
  //fireEvent.click(container);

  expect(container.querySelector('[class="info"]'));
});
