import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../../redux/configureStore';
import RocketCard from '../Rocket/RocketCard';

const rocket = {
  id: 'falcon1',
  rocket_name: 'Falcon 1',
  description:
      'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
  flickr_images: 'https://imgur.com/DaCfMsj.jpg',
  active: true,
};

const MockRockets = () => (
  <Provider store={store}>
    <RocketCard rocket={rocket} />
  </Provider>
);
test('Check if renders properly', () => {
  const tree = renderer.create(<MockRockets />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe('toggle reserve rocket button', () => {
  test('should log a rocket to my profile page', () => {
    render(
      (<MockRockets />),
    );
    userEvent.click(screen.getByRole('button', { name: /cancel reservation/i }));
    expect(screen.getByText(/reserved/i)).toBeInTheDocument();
  });
});
