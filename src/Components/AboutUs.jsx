import React from 'react';
import {Jumbotron} from 'reactstrap';
import {Col, Row, Form, FormGroup, Label, Input} from 'reactstrap';

class AboutUs extends React.Component {
    state = {};

    render() {
        return (
            <Row>
                <Col className="col-12 mt-1">
                    <Jumbotron>
                        <div>
                            <h2>
                                {this.props.profile.name} {this.props.profile.surname}
                            </h2>
                            <h4>{this.props.profile.title}</h4>
                            <h4>{this.props.profile.area}</h4>
                        </div>
                        <div>{this.props.profile.bio}</div>
                    </Jumbotron>
                </Col>
            </Row>
        );
    }
}

export default AboutUs;
