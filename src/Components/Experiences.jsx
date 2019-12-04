import React, { Component } from 'react';
import { Container, Jumbotron, Row, Col } from 'reactstrap';
import ExperienceModal from './ExperienceModal';
import Api from '../Api';
import Moment from 'react-moment';

class Experiences extends Component {
  state = {
    experiences: null
  };

  async loadData() {
    this.setState({
      experiences: await Api.fetch('/profile/user13/experiences')
    });
  }

  componentDidMount = async () => {
    this.loadData();
  };

  render() {
    if (!this.state.experiences) return null;
    return (
      <Container>
        <Jumbotron>
          <Row>
            <Col>
              <ExperienceModal experience={{}} />
            </Col>
          </Row>
          <Row>
            <Col>
              <ul>
                <div classNames='card'>
                  <h5 className='card-header'>Featured</h5>
                  <div className='card-body'>
                    <h5 className='card-title'>Special title treatment</h5>
                    {this.state.experiences.map(exp => (
                      <>
                        <p className='card-text'>
                          {exp.role} at {exp.company} in {exp.area} - {exp.startDate} to {exp.endDate} + {exp._id}
                          <button onClick=''>EDIT</button>
                          <button>DELETE</button>
                        </p>
                      </>
                    ))}
                  </div>
                </div>
              </ul>
            </Col>
          </Row>
        </Jumbotron>
      </Container>
    );
  }
}

export default Experiences;
