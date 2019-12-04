import React, { Component } from 'react';
import { Jumbotron, Container, CardText, ListGroup, Row, Col, ListGroupItem } from 'reactstrap';
import Api from '../Api';
import NewsFeedAdd from './NewsFeedAdd';
import Moment from 'react-moment';
import reactLogo from "../Image/react.svg"

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
                                                    <ListGroup>
                                                        <ListGroupItem>{news.username} <img src={reactLogo} style={{ width: 40   }}></img></ListGroupItem>
                                                        <ListGroupItem>{news.text}</ListGroupItem>
                                                        <ListGroupItem><Moment format="DD MMM YYYY">{news.createdAt}</Moment></ListGroupItem>

                                                    </ListGroup>
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