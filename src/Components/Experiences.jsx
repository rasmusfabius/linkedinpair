import React, {Component} from 'react';
import {Container, Jumbotron, Row, Col} from "reactstrap";
import ExperienceModal from './ExperienceModal'
import Api from "../Api";

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
        if (!this.state.experiences)
            return null;
        return (

            <Container>
                <Jumbotron>
                    <Row>
                        <Col>
                            <ExperienceModal experience={{}}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ul>
                                {this.state.experiences.map((exp) => <li>{exp.role} at {exp.company} in {exp.area}</li>)}
                            </ul>
                        </Col>
                    </Row>
                </Jumbotron>
            </Container>

        );
    }
}

export default Experiences;