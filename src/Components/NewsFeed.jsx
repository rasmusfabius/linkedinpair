import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import Api from '../Api';



export default class NewsFeed extends Component {
    state = {
        newsfeed: null
    }
    async loadData() {
        this.setState({
            newsfeed: await Api.fetch('.profile/api/posts/')
        })
    }
    componentDidMount = async () => {
        this.loadData();
    };
    render() {
        if (!this.state.newsfeed)
            return null;
        return (
            <div>
                <Jumbotron>
                    <h1 className='display-3'>Hello, world!</h1>
                    <p className='lead'>
                        This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.
          </p>
                    <hr className='my-2' />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <p className='lead'>
                        <Button color='primary'>Learn More</Button>
                    </p>
                </Jumbotron>
            </div>
        );
    }
}
export default NewsFeed;