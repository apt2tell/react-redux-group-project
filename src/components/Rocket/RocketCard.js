/* eslint-disable camelcase */
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { cancelRocket, reserveRocket } from '../../redux/rocket/rocketSlice';

const RocketCard = ({ rocket }) => {
  const dispatch = useDispatch();
  // Destructure rocket keys
  const {
    id, active, flickr_images, description, rocket_name,
  } = rocket;

  // Reserve rocket handler
  const handleReserve = (e) => {
    const data = Number(e.target.id);
    dispatch(reserveRocket(data));
  };

  // Cancel rocket reserve
  const handleCancelReserve = (e) => {
    const data = Number(e.target.id);
    dispatch(cancelRocket(data));
  };

  return (
    <div className="rocket-card">
      <img className="image" src={flickr_images} alt="rocket" />
      <div className="rocket-desc">
        <h1 className="title-desc">{rocket_name}</h1>
        <p className="info">
          {active === true && (<span className="rocket-reserve">Reserved</span>)}
          {description}
        </p>
        { active === true
          ? (
            <button className="cancel-btn btn" type="button" id={id} onClick={handleCancelReserve}>Cancel Reservation </button>
          )
          : (
            <button className="reserve-btn btn" type="button" id={id} onClick={handleReserve}>Reserve Rocket</button>
          )}
      </div>
    </div>
  );
};

RocketCard.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string,
    active: PropTypes.bool,
    flickr_images: PropTypes.string,
    description: PropTypes.string,
    rocket_name: PropTypes.string,
  }).isRequired,
};

export default RocketCard;
