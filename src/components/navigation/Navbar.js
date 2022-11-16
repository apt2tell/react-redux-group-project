/* eslint-disable import/prefer-default-export */
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../app/assets/image/planet.png';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: '/MyProfile',
      text: 'My Profile',
    },
  ];
  return (
    <div className="header">
      <div className="logo-title">
        <span><img src={logo} alt="logo" /></span>
        <span className="banner">Space Traveller&apos;s Hub</span>
      </div>
      <div className="nav">
        <ul className="nav-bar">
          {links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path} activeclassname="active-link">
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
