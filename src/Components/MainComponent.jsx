import React, {Component} from 'react';
import Profile from "./Profile";
import { Container} from 'reactstrap';

class MainComponent extends Component {
    render() {
        return (
            <Container>
            <Profile />
            </Container>
        );
    }
}

export default MainComponent;