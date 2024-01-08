import React from 'react';
import { render } from '@testing-library/react';
import ErrorView from './index';

it('renders ErrorView component', () => {
  const { container } = render(<ErrorView />);
  
  expect(container.querySelector('[class="error_view"]'));
});
