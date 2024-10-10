import React from 'react';
import { screen, render } from '@testing-library/react';
import SearchResults from './index';

it('renders SearchResults component', () => {
  render(<SearchResults />);
  
  expect(screen.queryByTestId('search_results'));
});
