/* eslint-disable */
import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Missions from './components/Missions/Missions';
import Rockets from './components/Rocket/Rockets';
import MyProfile from './components/MyProfile';
import Navbar from './components/navigation/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/Missions" element={<Missions />} />
          <Route path="/MyProfile" element={<MyProfile />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
