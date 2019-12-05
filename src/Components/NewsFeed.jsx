import React, {Component} from 'react';
import {Jumbotron, Container, CardText, ListGroup, Row, Col, ListGroupItem, Button} from 'reactstrap';
import Api from '../Api';
import NewsFeedAdd from './NewsFeedAdd';
import Moment from 'react-moment';
import reactLogo from "../Image/react.svg"
import moment from "moment";

class NewsFeed extends Component {
    state = {
        newsfeed: null
    }

    async loadData() {
        // load posts and users
        const newsfeed = await Api.fetch('/posts/');
        const users = await Api.fetch('/profile/');
        // map the user object to his post
        newsfeed.map(post => {
            post.user = users.find(user => user.username === post.username);
        });
        newsfeed.reverse();
        this.setState({
            newsfeed: newsfeed
        });
    }

    deleteExperience = async (post) => {
        let resp = await Api.fetch("/posts/" + post._id, "DELETE");
        var expWithoutCurrent = this.state.newsfeed.filter(x => x._id !== post._id);
        this.setState({newsfeed: expWithoutCurrent})
    }

    componentDidMount = async () => {
        setInterval(() => this.loadData(), 30000);
        this.loadData();
    };

    render() {
        if (!this.state.newsfeed)
            return null;
        return (
            <>
                <NewsFeedAdd refresh={this.loadData.bind(this)}/>
                <Row>
                    <Col>
                        <div className="new-post-container">
                            <h4>NEWS FEED</h4>
                        </div>
                        <div>
                            {this.state.newsfeed.map(news => (
                                <>
                                    <div className="new-post-container">
                                        <ListGroup>
                                            <ListGroupItem>
                                                <div className="post-detail">
                                                    <div>
                                                        <img src={news.user.image} className="user-image"/>
                                                    </div>
                                                    <div className="details-container">
                                                        <div
                                                            className="user-name">{news.user.name} {news.user.surname}</div>
                                                        <div
                                                            className="user-title">{news.user.title} in {news.user.area}</div>
                                                        <div
                                                            className="post-age">{moment(news.createdAt).fromNow()}</div>
                                                    </div>
                                                </div>
                                            </ListGroupItem>
                                            <ListGroupItem>{news.text}</ListGroupItem>
                                            <ListGroupItem>
                                                <div className="post-age">
                                                    <div className="post-bottom-icons">
                                                        <div className="post-bottom-icons">
                                                            <div className="post-bottom-icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                     height="24" data-supported-dps="24x24"
                                                                     fill="currentColor" focusable="false">
                                                                    <path
                                                                        d="M17.51 11l-2.15-3a14.81 14.81 0 01-2.25-5.29L12.74 1H10.5A2.5 2.5 0 008 3.5v.58a9 9 0 00.32 2.39L9 9H4.66A2.61 2.61 0 002 11.4a2.48 2.48 0 00.39 1.43 2.48 2.48 0 00.69 3.39 2.46 2.46 0 001.45 2.92 2.47 2.47 0 000 .36A2.5 2.5 0 007 22h4.52a8 8 0 001.94-.24l3-.76H21V11h-3.49zM19 19h-2.12l-3.41.82A6 6 0 0112 20H7a.9.9 0 01-.9-.89v-.14l.15-1-1-.4a.9.9 0 01-.55-.83.93.93 0 010-.22l.3-.95-.73-.57a.9.9 0 01-.39-.74.88.88 0 01.12-.44l.46-.72-.46-.72a.88.88 0 01-.14-.51 1 1 0 011-.87h6.64l-1.3-4.7a9 9 0 01-.33-2.37v-.55a.5.5 0 01.5-.5h.95a17.82 17.82 0 002.52 6.22L16.6 13H19v6z"></path>
                                                                </svg>
                                                            </div>
                                                            <div>Like</div>
                                                        </div>
                                                        <div className="post-bottom-icons">
                                                            <div className="post-bottom-icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                     height="24" data-supported-dps="24x24"
                                                                     fill="currentColor" focusable="false">
                                                                    <path
                                                                        d="M18 10H6V9h12v1zm4-5v17l-5-4H3a1 1 0 01-1-1V5a1 1 0 011-1h18a1 1 0 011 1zm-2 1H4v10h13.7l2.3 1.84V6zm-4 6H8v1h8v-1z"></path>
                                                                </svg>
                                                            </div>
                                                            <div>Comment</div>
                                                        </div>
                                                        <div className="post-bottom-icons">
                                                            <div className="post-bottom-icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                     height="24" data-supported-dps="24x24"
                                                                     fill="currentColor" focusable="false">
                                                                    <path
                                                                        d="M24 12a1.18 1.18 0 00-.36-.84L14 2v6h-3A10 10 0 001 18v4h1.87A6.11 6.11 0 019 16h5v6l9.63-9.14A1.18 1.18 0 0024 12zm-8 5.54V14H9a8.15 8.15 0 00-6 2.84A8 8 0 0111 10h5V6.48L21.81 12z"></path>
                                                                </svg>
                                                            </div>
                                                            <div>Share</div>
                                                        </div>
                                                        <div className="post-bottom-spacer"/>
                                                        {(Api.USER === news.username) && <Button className="button-margin" size="sm" onClick={() => this.deleteExperience(news)}><i className='fas fa-trash'></i></Button>}
                                                    </div>
                                                </div>

                                            </ListGroupItem>
                                        </ListGroup>
                                    </div>
                                </>
                            ))}
                        </div>
                    </Col>
                </Row>

            </>
        );
    }
}

export default NewsFeed;