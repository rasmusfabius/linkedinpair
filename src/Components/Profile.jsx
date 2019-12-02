import React from 'react';
import ProfileHeading from './ProfileHeading';
import AboutUs from './AboutUs';

import { Jumbotron, Container } from 'reactstrap';
import Api from "../Api";

class Profile extends React.Component {
  state = {
    profile: null
  };
  render() {
    return (
      <div>
        <Container>
          <Jumbotron className='jumbotronProfile'>
            {this.state.profile ? (
              <>
                <ProfileHeading profile={this.state.profile}></ProfileHeading>

                <AboutUs aboutUs={this.state.profile.bio}></AboutUs>
              </>
            ) : (
              <h1>Profile info still loading</h1>
            )}
          </Jumbotron>
        </Container>
      </div>
    );
  }
  async loadData() {
    this.setState({
      profile: await Api.fetch("/profile/me")
    });
  }
  componentDidMount = async () => {
    this.loadData();
  }
}

export default Profile;
