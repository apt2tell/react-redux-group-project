import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { joinMission, leaveMission } from '../../redux/missions/missionSlice';

const MissionCard = ({
  missionName, description, id, missionActive,
}) => {
  const dispatch = useDispatch();

  // Create Join Mission handler
  const joinMissionHandler = (e) => {
    dispatch(joinMission(e.target.id));
  };

  // Create Leave Mission handler
  const leaveMissionHandler = (e) => {
    dispatch(leaveMission(e.target.id));
  };

  return (
    <>
      <td>
        {missionName}
      </td>
      <td>
        {description}
      </td>
      <td className="align-badge">
        {missionActive === false ? (<span className="badge">Not A Member</span>) : (<span className="badge"> A Member</span>) }
      </td>
      <td className="align-btn">
        {missionActive === false ? (<button className="join-mission-btn mission-btn" type="submit" id={id} onClick={joinMissionHandler}>Join Mission</button>) : (<button className="leave-mission-btn mission-btn" type="submit" id={id} onClick={leaveMissionHandler}>Leave Mission</button>)}
      </td>
    </>
  );
};

MissionCard.propTypes = {
  id: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  missionActive: PropTypes.bool.isRequired,
};

export default MissionCard;
