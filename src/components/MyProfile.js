import React from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { leaveMission, selectAllMissions } from '../redux/missions/missionSlice';
import { cancelRocket } from '../redux/rocket/rocketSlice';

const MyProfile = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.filter((item) => (
    item.active === true)));
  const reservation = useSelector(selectAllMissions);
  const missionJoined = reservation.filter((item) => item.missionActive === true);

  // Cancel Rocket handler
  const cancelRocketHandler = (e) => {
    const data = Number(e.target.id);
    dispatch(cancelRocket(data));
  };

  // cancel Mission handler
  const cancelMissionHandler = (e) => {
    const data = Number(e.target.id);
    dispatch(leaveMission(data));
  };

  return (
    <>
      <div className="wrapper">
        <div>
          <h1 className="mission-title">My Missions</h1>
          <Table bordered>
            <tbody>
              <th>
                {!missionJoined.length ? (<li>No missions joined.</li>) : null }
                {missionJoined && missionJoined.map((item) => (
                  <tr className="row" key={item.missionId}>
                    <td>
                      <h2>
                        {item.missionName}
                      </h2>
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
          </Table>
        </div>
        <div>
          <h1 className="rocket-title">My Rockets</h1>
          <Table bordered>
            <tbody>
              <th>
                {!rockets.length ? (<li>No missions joined.</li>) : null }
                {rockets && rockets.map((item) => (
                  <tr className="row" key={item.id}>
                    <td>
                      <h2>
                        {item.rocket_name}
                      </h2>
                      <button
                        type="button"
                        className="cancel-mission"
                        id={item.id}
                        onClick={cancelRocketHandler}
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))}
              </th>
            </tbody>
          </Table>
        </div>
      </div>

    </>
  );
};

export default MyProfile;
