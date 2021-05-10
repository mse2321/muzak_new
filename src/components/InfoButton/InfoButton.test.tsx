import React from 'react';
import { render } from '@testing-library/react';
import InfoButton from './index';

it('renders InfoButton component', () => {
  const { container } = render(<InfoButton />);
  
  expect(container.querySelector('className="info"'));
});
