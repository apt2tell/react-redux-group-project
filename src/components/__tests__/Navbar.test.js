/* eslint-disable */
import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navigation/Navbar';

it('Navbar renders correctly', () => {
  const Component = render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );
  expect(Component).toMatchSnapshot();
});
