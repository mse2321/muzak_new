import React from 'react';
import { render } from '@testing-library/react';
import AudioPlayer from './index';

it('renders AudioPlayer component', () => {
  const { container } = render(<AudioPlayer />);
  
  expect(container.querySelector('className="audioPlayer_container"'));
});
