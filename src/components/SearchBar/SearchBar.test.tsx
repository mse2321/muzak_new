import React from 'react';
import { screen, render } from '@testing-library/react';
import SearchBar from './index';

it('renders SearchBar component', () => {
  render(<SearchBar />);
  
  expect(screen.queryByTestId('search_form'));
});
