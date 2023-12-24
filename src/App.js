// App.js
import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DirectoryPage from './pages/DirectoryPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<DirectoryPage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
