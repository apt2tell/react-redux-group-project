import { render } from '@testing-library/react';
import React from 'react';
import Navbar from '../Navigation/Navbar';

it('Navbar renders correctly', () => {
  const Component = render(<Navbar />);
  expect(Component).toMatchSnapshot();
});
