import React from 'react';

import NavigationBar from './NavigationBar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import ProfilePage from "./ProfilePage";
import NewsFeed from './NewsFeed';

class MainPage extends React.Component {
  state = {};
  render() {
    return (
      <div>

        <NavigationBar />
        <Router>
          <Route path='/'>
            <ProfilePage />
          </Route>
          <Route path='/NewsFeed'>
            <NewsFeed />
          </Route>

        </Router>
      </div>


    );
  }
}

export default MainPage;
