import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/Dialogs';
import Footer from './components/footer/Footer';

import './App.css';

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="app-wrapper">
        <Header />
        <div className="wrapper content-wrapper">
          <Navbar />
          <div className="content content-wrapper__content">
            <Route path='/dialogs' component={Dialogs}/>
            <Route path='/profile' component={Profile}/>
            {/* <Profile mainUrl = 'https://avatanplus.com/files/resources/original/5b1f86e3923d2163f326e90f.jpg'/> */}
          </div> 
          {/* <Dialogs /> */}
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
