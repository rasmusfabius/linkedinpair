import React from 'react';
import ProfileModal from './ProfileModal';

class ProfileHeading extends React.Component {
  state = {};
  render() {
    return (
      <>
        <div className='my-5 profileHeading'>
          <img src={this.props.profile.image}></img>
          <ProfileModal profile={this.props.profile} />
        </div>

        <div>
          <h2>
            {this.props.profile.name} {this.props.profile.surname}
          </h2>
          <h4>{this.props.profile.title}</h4>
          <h4>{this.props.profile.area}</h4>
        </div>
      </>
    );
  }
}

export default ProfileHeading;
