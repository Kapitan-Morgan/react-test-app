import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/Dialogs';
import Footer from './components/footer/Footer';

import './App.css';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <div className="wrapper content-wrapper">
          <Navbar state={props.state.navbar} />
          <div className="content content-wrapper__content">
            <Switch>
              <Route exact path='/'>
                <Home/>
              </Route>
              <Route path='/dialogs'>
                <Dialogs state={props.state.messagesPage} />
              </Route>
              <Route path='/profile'>
                <Profile state={props.state.profilePage} />
              </Route>
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
