import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import ContentContainer from './index';
import { StateProvider } from '../../context/state';

it('renders ContentContainer component', () => {
  const { container } = render(
    <StateProvider>
      <ContentContainer />
    </StateProvider>
  );
  
  expect(container.getElementsByTagName('header'));
});
