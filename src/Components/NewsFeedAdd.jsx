import React, { Component } from 'react'
import { Container, Jumbotron, Row, Col } from 'reactstrap';

import Api from "../Api";

class NewsFeedAdd extends Component {
    state = {
        text: ""
    };

    submit() {
        Api.fetch("/posts/", "POST", JSON.stringify(this.state)).then(() => {
            this.props.refresh();
        });

    }

    render() {
        return (
            <Row>
                <Col>
                    <div className="new-post-container">
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
                    </div>
                </Col>
            </Row>
        )
    }
}

export default NewsFeedAdd;
