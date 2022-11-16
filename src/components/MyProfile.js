import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { leaveMission, selectAllMissions } from '../redux/missions/missionSlice';
import { cancelRocket } from '../redux/rocket/rocketSlice';

const MyProfile = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.filter((item) => (
    item.rocketReserved === true)));
  const reservation = useSelector(selectAllMissions);
  const missionJoined = reservation.filter((item) => item.missionActive === true);

  // Cancel Rocket handler
  const cancelRocketHandler = (e) => {
    const data = e.target.id;
    dispatch(cancelRocket(data));
  };

  // cancel Mission handler
  const cancelMissionHandler = (e) => {
    const data = e.target.id;
    dispatch(leaveMission(data));
  };

  return (
    <>
      <div className="wrapper">
        <h1 className="mission-title">My Missions</h1>
        <table>
          <tbody>
            <th>
              {!missionJoined.length ? (<li>No missions joined.</li>) : null }
              {missionJoined && missionJoined.map((item) => (
                <tr className="row" key={item.missionId}>
                  <td>
                    <h2>
                      {item.missionName}
                    </h2>
                    <button type="button">
                      <a href={item.missionLink}>Read More</a>
                    </button>
                    <button
                      type="button"
                      className="cancel-mission"
                      id={item.missionId}
                      onClick={cancelMissionHandler}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </th>

          </tbody>
        </table>
        <h1 className="rocket-title">My Rockets</h1>
        <table>
          <tbody>
            <th>
              {!rockets.length ? (<li>No missions joined.</li>) : null }
              {rockets && rockets.map((item) => (
                <tr className="row" key={item.rocketId}>
                  <td>
                    <h2>
                      {item.rocketName}
                    </h2>
                    <button type="button">
                      <a href={item.rocketWiki}>Read More</a>
                    </button>
                    <button
                      type="button"
                      className="cancel-mission"
                      id={item.rocketId}
                      onClick={cancelRocketHandler}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </th>

          </tbody>
        </table>
      </div>

    </>
  );
};

export default MyProfile;
