import React from 'react';
import { screen, render } from '@testing-library/react';
import SongList from './index';

it('renders SongList component', () => {
  render(<SongList />);
  
  expect(screen.queryByTestId('song_list'));
});
