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
        return (
            <Container>
                <Row>
                    <Col>
                    <ExperienceModal experience={{}}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Experiences;