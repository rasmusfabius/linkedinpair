import React from 'react';
import {Container, Jumbotron, Button} from 'reactstrap';

const Profile = (props) => {
    return (
        <Container>
            <Jumbotron>
                <h1 className="display-3">Hello, world!</h1>
                <hr className="my-2"/>
                <p className="lead">
                    <Button color="primary">Learn More</Button>
                </p>
            </Jumbotron>
        </Container>
    );
};

export default Profile;