import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getRocketAPI from '../../redux/rocket/rocketSlice';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  // Dispatch the List of rockets
  useEffect(() => {
    if (!rockets.length) dispatch(getRocketAPI());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {rockets.map((rocket) => <RocketCard key={rocket.rocketId} rocket={rocket} />)}
    </>
  );
};

export default Rockets;