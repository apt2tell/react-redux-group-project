import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Rockets from '../Rocket/Rockets';
import store from '../../redux/configureStore';
import App from '../../App';

const MockRockets = () => (
  <Provider store={store}>
    <Rockets />
  </Provider>
);

test('renders correctly', () => {
  const tree = renderer.create(<MockRockets />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

const JestApp = () => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

describe('Link to render rocket page', () => {
  test('should display rocket page', () => {
    render(
      (<JestApp />),
    );
    userEvent.click(screen.getByRole('link', { name: /rockets/i }));
    expect(screen.getByText(/rockets/i)).toBeInTheDocument();
  });
});
