import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { cancelRocket, reserveRocket } from '../../redux/rocket/rocketSlice';

const RocketCard = ({ rocket }) => {
  const dispatch = useDispatch();

  // Destructure rocket keys
  const {
    rocketId, rocketName, rocketDesc, rocketImage, rocketReserved,
  } = rocket;

  // Reserve rocket handler
  const handleReserve = (e) => {
    const data = e.target.id;
    dispatch(reserveRocket(data));
  };

  // Cancel rocket reserve
  const handleCancelReserve = (e) => {
    const data = e.target.id;
    dispatch(cancelRocket(data));
  };

  return (
    <div className="rocket-card">
      <img className="image" src={rocketImage} alt="rocket" />
      <div className="rocket-desc">
        <h1 className="title-desc">{rocketName}</h1>
        <p className="info">
          {rocketReserved === true && (<span className="rocket-reserve">Reserved</span>)}
          {rocketDesc}
        </p>
        { rocketReserved === true
          ? (
            <button className="cancel-btn" type="button" id={rocketId} onClick={handleCancelReserve}>Cancel Reservation </button>
          )
          : (<button className="reserve-btn" type="button" id={rocketId} onClick={handleReserve}>Reserve Rocket</button>)}
      </div>
    </div>
  );
};

RocketCard.propTypes = {
  rocket: PropTypes.shape({
    rocketId: PropTypes.string,
    rocketName: PropTypes.string,
    rocketDesc: PropTypes.string,
    rocketImage: PropTypes.string,
    rocketReserved: PropTypes.bool,
  }).isRequired,
};

export default RocketCard;
