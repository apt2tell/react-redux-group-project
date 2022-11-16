/* eslint-disable */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissionsAPI } from '../../redux/missions/missionSlice';
import MissionCard from './MissionCard';

const Missions = () => {
  const dispatch = useDispatch();
  const mission = useSelector((state) => state.missions);
 
  // Dispatch the list of missions
  useEffect(() => {
    if (!mission.length) dispatch(getMissionsAPI());
    // eslint-disable-next-line 
  }, []);

  return (
    <>
      <table>
        <tbody>
          <th>
            <h1>Mission</h1>
          </th>
          <th>
            <h1>Description</h1>
          </th>
          <th>
            <h1>Status</h1>
          </th>
          {mission.map((item) => (
            <tr className="row" key={item.missionId}>
              <td>
                <MissionCard
                  missionName={item.missionName}
                  description={item.missionDesc}
                  id={item.missionId}
                  missionActive={item.missionActive}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Missions;
