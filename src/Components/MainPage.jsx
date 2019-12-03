import React from 'react';
import Profile from './Profile';
import NavigationBar from './NavigationBar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Experiences from "./Experiences";
import ProfilePage from "./ProfilePage";

class MainPage extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <NavigationBar/>
        <Router>
          <Route path='/'>
              <ProfilePage/>
          </Route>
        </Router>
      </div>


    );
  }
}

export default MainPage;
