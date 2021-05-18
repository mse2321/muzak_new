import React from 'react';
import { screen, render } from '@testing-library/react';
import Song from './index';

it('renders Song component', () => {
  render(<Song />);
  
  expect(screen.queryByTestId('play_buttons'));
});


