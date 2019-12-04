import React, { Component } from 'react';
import { Container, Jumbotron, Row, Col } from 'reactstrap';
import ExperienceModal from './ExperienceModal';
import Api from '../Api';
import Moment from 'react-moment';

class Experiences extends Component {
    state = {
        experiences: null,
        selectedExp: {}
    };

    async loadData() {
        this.setState({
            experiences: await Api.fetch('/profile/user13/experiences')
        });
    }

    componentDidMount = async () => {
        this.loadData();
    };


    deleteExperience = async (exp) => {
        let resp = await Api.fetch("/profile/user13/experiences/" + exp._id, "DELETE");
        var expWithoutCurrent = this.state.experiences.filter(x => x._id !== exp._id)
        this.setState({ experiences: expWithoutCurrent })
    }

    updateExperience = (val) => {
        let currentExp = this.state.selectedExp;
        currentExp[val.target.name] = val.target.value;
        this.setState({ selectedExp: currentExp })
    }


    render() {
        if (!this.state.experiences) return null;
        return (
            <Container>
                <Jumbotron>
                    <Row>
                        <Col>
                            <ExperienceModal experience={this.state.selectedExp} updateExp={this.updateExperience} />
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
                                                    <button onClick={() => this.setState({ selectedExp: exp })}>EDIT</button>
                                                    <button onClick={() => this.deleteExperience(exp)}>DELETE</button>
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
