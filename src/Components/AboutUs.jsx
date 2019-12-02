import React from 'react';
import { Jumbotron } from 'reactstrap';

class AboutUs extends React.Component {
  state = {};
  render() {
    return (
      <Jumbotron className='aboutUsJumbotron'>
        <div>{this.props.aboutUs}</div>
      </Jumbotron>
    );
  }
}

export default AboutUs;
