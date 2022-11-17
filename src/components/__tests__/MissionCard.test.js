import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import MissionCard from '../Missions/MissionCard';
import store from '../../redux/configureStore';

it('MissionCard renders correctly', () => {
  const Component = render(
    <Provider store={store}>
      <MissionCard />
    </Provider>,
  );
  expect(Component).toMatchSnapshot();
});

describe('User interaction tests', () => {
  it('Pressing join mission button changes badge text to "A Member"', () => {
    render(
      <Provider store={store}>
        <MissionCard />
      </Provider>,
    );
    const badgeInfo = screen.getByTestId('badgeInfo');
    const button = screen.getByRole('button', { name: /join mission/i });
    fireEvent.click(button);
    expect(badgeInfo.innerHTML).toBe('Not A Member');
  });
});
