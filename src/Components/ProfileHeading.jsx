import React from 'react';
import ProfileModal from './ProfileModal';
import {Col, Row, Form, FormGroup, Label, Input} from 'reactstrap';
class ProfileHeading extends React.Component {
    state = {};

    render() {
        return (
            <Row>
                <Col className="col-12">
                    <div className='my-5 profileHeading'>
                        <img src={this.props.profile.image} />
                        <ProfileModal profile={this.props.profile} />
                    </div>
                </Col>
            </Row>
        );
    }
}

export default ProfileHeading;
