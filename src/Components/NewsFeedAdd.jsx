import React, { Component } from 'react'
import { Container, Jumbotron } from 'reactstrap';
class NewsFeedAdd extends Component {
    state = {
        text: ""
    }

    submit() {
        console.log(this.state)
    }
    render() {
        return (
            <Container>
                <Jumbotron>
                    <div>
                        <h1>ADD COMMENTS</h1>
                        <input type="text" value={this.state.name} name="text" onChange={(data) => { this.setState({ text: data.target.value }) }} />
                        <button onClick={() => { this.submit() }} > Submit Data </button>

                    </div>
                </Jumbotron>
            </Container>
        )
    }
}
export default NewsFeedAdd;
