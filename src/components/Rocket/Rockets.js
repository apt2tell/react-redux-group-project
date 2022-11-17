import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRocketAPI } from '../../redux/rocket/rocketSlice';
import RocketCard from './RocketCard';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  // Dispatch the List of rockets
  useEffect(() => {
    if (!rockets.length) dispatch(getRocketAPI());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {rockets.map((rocket) => (<RocketCard key={rocket.id} rocket={rocket} />))}
    </>
  );
};

export default Rockets;
