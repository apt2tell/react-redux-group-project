import React from 'react';

const MyProfile = () => {
  const appLogo = '<a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>';
  return (
    <>
      <header className="app-logo">
        {appLogo}
        <h1>Space Adventures Hub</h1>
      </header>
      <h3>My Missions</h3>
      <div>
        <table>
          <tbody>
            <tr>
              <td />
            </tr>
          </tbody>
        </table>
      </div>

    </>
  );
};

export default MyProfile;
