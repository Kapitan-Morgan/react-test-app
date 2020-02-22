import React from 'react';

import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Footer from './components/footer/Footer';

import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="wrapper content-wrapper">
        <Navbar />
        <Profile />
      </div>
      <Footer />
    </div>
  );
}

export default App;
