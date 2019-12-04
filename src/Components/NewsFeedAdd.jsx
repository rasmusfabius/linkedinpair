import React, { Component } from 'react'
import { Container, Jumbotron } from 'reactstrap';
class NewsFeedAdd extends Component {
    state = {
        text: ""
    }

    submit() {
        let url = "https://striveschool.herokuapp.com/api/posts/";
        let data = this.state;
        const username = 'user27';
        const password = 'ZGDWyFCA8umbgpvZ';
        let token = btoa(username + ':' + password);
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: 'Basic ' + token
            },
            body: JSON.stringify(data)
        }).then((result) => {
            result.json().then((resp) => {
                console.log("reps", resp)
            })
        })
    }
    render() {
        return (
            <Container>
                <Jumbotron>
                    <div>
                        <h1>ADD COMMENTS</h1>
                        <textarea className="form-control" rows="7" cols="50" value={this.state.name} name="text" onChange={(data) => { this.setState({ text: data.target.value }) }} />
                        <br />
                        <button onClick={() => { this.submit() }} > Submit Data </button>

                    </div>
                </Jumbotron>
            </Container>
        )
    }
}
export default NewsFeedAdd;
