import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './features/navigation/Navbar';
import Rockets from './features/Rockets';
import Missions from './features/Missions';
import MyProfile from './features/MyProfile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/my-profile" element={<MyProfile />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
