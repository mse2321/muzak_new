import React from 'react';
import { screen, render } from '@testing-library/react';
import Profile from './index';

it('renders Profile component', () => {
  render(<Profile />);
  
  expect(screen.queryByTestId('artist_info'));
});
