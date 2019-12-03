import React, {Component} from 'react';
import Profile from "./Profile";
import Experiences from "./Experiences";


class ProfilePage extends Component {
    render() {
        return (
            <div>
                <Profile />
                <Experiences />
            </div>
        );
    }
}

export default ProfilePage;