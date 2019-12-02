import React from 'react';
import ProfileHeading from './ProfileHeading';
import AboutUs from './AboutUs';

import { Jumbotron, Container } from 'reactstrap';

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

  componentDidMount = async () => {
    let resp = await fetch('https://strive-school-testing-apis.herokuapp.com/api/profile/me', {
      headers: {
        Authorization: 'basic YWRtaW46c3VwZXJzZWNyZXQ='
      }
    });

    let prof = await resp.json();
    this.setState({
      profile: prof
    });
  };
}

export default Profile;
