import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import Api from '../Api';
import NewsFeedAdd from './NewsFeedAdd';

class NewsFeed extends Component {
    state = {
        newsfeed: null
    }
    async loadData() {
        this.setState({
            newsfeed: await Api.fetch('/posts/')
        })
    }
    componentDidMount = async () => {
        this.loadData();
    };
    render() {
        if (!this.state.newsfeed)
            return null;
        return (
            <>
                <Container>
                    <NewsFeedAdd />
                    <Row>
                        <Col>
                            <ul>
                                <div classNames='card'>
                                    <h5 className='card-header'>NEWS FEED</h5>
                                    <div className='card-body'>

                                        {this.state.newsfeed.map(news => (
                                            <>
                                                <Jumbotron>
                                                    <p className='card-text'>
                                                        {news.username}
                                                        {news.text}
                                                        {news.createdAt}

                                                    </p>
                                                </Jumbotron>
                                            </>
                                        ))}
                                    </div>
                                </div>
                            </ul>
                        </Col>
                    </Row>


                </Container>
            </>
        );
    }
}
export default NewsFeed;