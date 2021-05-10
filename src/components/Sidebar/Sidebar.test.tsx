import React from 'react';
import { screen, render } from '@testing-library/react';
import Sidebar from './index';

it('renders Sidebar component', () => {
  render(<Sidebar />);
  
  expect(screen.queryByTestId('album_player_section'));
});
