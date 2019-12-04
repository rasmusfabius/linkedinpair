import React, { Component } from 'react';
import { Jumbotron, Container, CardText, Row, Col } from 'reactstrap';
import Api from '../Api';
import NewsFeedAdd from './NewsFeedAdd';
import Moment from 'react-moment';

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
                                                    <p className='card-text'> <CardText className='newsFeedUser'>{news.username} </CardText>
                                                        <CardText className='newFeedText'>{news.text}</CardText>
                                                        <Moment format="DD MMM YYYY">{news.createdAt}</Moment>

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