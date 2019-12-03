import React from 'react';
import ProfileHeading from './ProfileHeading';
import AboutUs from './AboutUs';
import {Jumbotron, Container, Row, Col} from 'reactstrap';
import Api from '../Api';
import Experiences from "./Experiences";

class Profile extends React.Component {
    state = {
        profile: null
    };

    render() {
        return (
            this.state.profile ? (
            <div>
                <Container>
                    <Row>
                        <Col className="col-12">
                            <Jumbotron className='profile-background-image jumbotronProfile'>
                              <Container>
                                        <ProfileHeading profile={this.state.profile}/>
                              </Container>
                            </Jumbotron>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <AboutUs profile={this.state.profile}/>
                        </Col>
                    </Row>
                </Container>
            </div>
                ) : (<h1>Profile info still loading</h1>)
        );
    }

    async loadData() {
        this.setState({
            profile: await Api.fetch('/profile/me')
        });
    }

    componentDidMount = async () => {
        this.loadData();
    };
}

export default Profile;
