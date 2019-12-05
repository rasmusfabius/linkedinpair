import React, { Component } from 'react'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import NewsFeedModel from "./NewsFeedModel"

import Api from "../Api";

class NewsFeedAdd2 extends Component {
    state = {
        text: ""
    };

    submit() {
        Api.fetch("/posts/", "POST", JSON.stringify(this.state)).then(() => {
            this.props.refresh();
        });

    }

    updateFeed = (newText) => {
        this.setState({ text: newText })
    }

    render() {
        return (
            <Row>
                <Col sm="12">

                    <div className="display-flex bodyNewsFeed">
                        <NewsFeedModel updateFeed={this.updateFeed} />
                        <button className="share-box_trigger share-box_trigger1"><i class="fas fa-camera fa-2x iconNewsFeed"></i></button>
                        <button className="share-box_trigger share-box_trigger1"><i class="fas fa-video fa-2x iconNewsFeed"></i></button>
                        <button className="share-box_trigger share-box_trigger1"><i class="far fa-file-alt fa-2x iconNewsFeed"></i></button>
                    </div>

                </Col>

                {/*       <div className="new-post-container">
                        <div>
                            <h5>ADD NEWS</h5>
                            <textarea className="form-control" rows="3" cols="50" value={this.state.name} name="text"
                                onChange={(data) => {
                                    this.setState({ text: data.target.value })
                                }} />
                            <br />
                            <button onClick={() => {
                                this.submit()
                            }}> Post
                            </button>
                        </div>
                    </div> */}

            </Row>
        )
    }
}

export default NewsFeedAdd2;
