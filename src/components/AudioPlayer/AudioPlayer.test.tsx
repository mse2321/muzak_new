import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AudioPlayer from './index';

it('renders AudioPlayer component', () => {
  const { container } = render(<AudioPlayer />);

  expect(container.querySelector('[id="music"]'));
  expect(container.querySelector('[class="active_player_button"]'));
  expect(container.querySelector('[class="audioPlayer_container"]'));
});