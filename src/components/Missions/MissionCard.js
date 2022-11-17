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
        {missionActive === false ? (<span data-testid="badgeInfo" className="badge">Not A Member</span>) : (<span className="badge"> A Member</span>) }
      </td>
      <td className="align-btn">
        {missionActive === false ? (<button name="joinBtn" className="join-mission-btn mission-btn" type="button" id={id} onClick={joinMissionHandler}>Join Mission</button>) : (<button className="leave-mission-btn mission-btn" type="submit" id={id} onClick={leaveMissionHandler}>Leave Mission</button>)}
      </td>
    </>
  );
};

MissionCard.propTypes = {
  id: PropTypes.string,
  missionName: PropTypes.string,
  description: PropTypes.string,
  missionActive: PropTypes.bool,
};

MissionCard.defaultProps = {
  id: '',
  missionName: '',
  description: '',
  missionActive: false,
};

export default MissionCard;
