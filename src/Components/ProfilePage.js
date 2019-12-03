import React, {Component} from 'react';
import Profile from "./Profile";
import Experiences from "./Experiences";
import {Route} from "react-router-dom";

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