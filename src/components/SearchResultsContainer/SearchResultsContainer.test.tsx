import React from 'react';
import { render } from '@testing-library/react';
import SearchResultsContainer from './index';

it('renders SearchResultsContainer component', () => {
  const { container } = render(<SearchResultsContainer />);
  
  expect(container.querySelector('className="searchContainer"'));
});
