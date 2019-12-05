import React from 'react';
import {Container} from 'reactstrap'
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
          <Route path='/' exact>
            <ProfilePage />
          </Route>
          <Route path='/NewsFeed'>
              <Container>
            <NewsFeed />
              </Container>
          </Route>
        </Router>
      </div>


    );
  }
}

export default MainPage;
