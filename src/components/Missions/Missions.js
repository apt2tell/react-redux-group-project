/* eslint-disable */
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
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
      <Table striped bordered hover responsive>
        <thead>
          <tr>
          <th>
            <h1>Mission</h1>
          </th>
          <th>
            <h1>Description</h1>
          </th>
          <th>
            <h1>Status</h1>
          </th>
          <th>
            &nbsp;
          </th>
          </tr>
        </thead>
        <tbody>
          {mission.map((item) => (
            <tr key={item.missionId}>
              <MissionCard
                  missionName={item.missionName}
                  description={item.missionDesc}
                  id={item.missionId}
                  missionActive={item.missionActive}
                />
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Missions;
