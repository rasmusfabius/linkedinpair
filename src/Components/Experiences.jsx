import React, {Component} from 'react';
import {Container, Jumbotron, Row, Col, Button} from 'reactstrap';
import ExperienceModal from './ExperienceModal';
import Api from '../Api';
import Moment from 'react-moment';
import moment from "moment";

class Experiences extends Component {
    state = {
        experiences: null,
        selectedExp: {}
    };

    async loadData() {
        const data = await Api.fetch('/profile/' + Api.USER + '/experiences');
        data.map((data) => {
            //trasforming back the data to the correct format for the input
            data.startDate = moment(data.startDate).format("YYYY-MM-DD");
            //if endDate is null means that is the present work
            data.endDate = data.endDate ? moment(data.endDate).format("YYYY-MM-DD") : null;
            data.presentWork = !data.endDate;
            return data;
        });
        this.setState({
            experiences: data
        });
    }

    componentDidMount = async () => {
        this.loadData();
    };

    resetUpdate() {
        this.setState({selectedExp: {}});
    }

    deleteExperience = async (exp) => {
        let resp = await Api.fetch("/profile/user13/experiences/" + exp._id, "DELETE");
        var expWithoutCurrent = this.state.experiences.filter(x => x._id !== exp._id);
        this.setState({experiences: expWithoutCurrent})
    }

    updateExperience = (val) => {
        let currentExp = this.state.selectedExp;
        currentExp[val.target.name] = val.target.value;
        this.setState({selectedExp: currentExp})
    }

    showUpdatedExperience = (update) => {
        if (update) {
            const index = this.state.experiences.findIndex((exp) => this.state.selectedExp._id === exp._id);
            this.state.experiences[index] = {...this.state.selectedExp};
        }
        this.resetUpdate();
    };

    formatDate(date) {
        console.log(date);
        if (!date) return "present time";
        return moment(date).format("MMMM Do YYYY");
    }


    render() {
        if (!this.state.experiences) return null;
        return (
            <Container>
                <Jumbotron>
                    <Row>
                        <Col md={9}>
                            <h3>Experiences</h3>
                        </Col>
                        <Col md={3} className="text-right">
                            <ExperienceModal experience={this.state.selectedExp} updateExp={this.updateExperience}
                                             showUpdatedExperience={this.showUpdatedExperience}/>
                        </Col>
                    </Row>
                    {this.state.experiences.map(exp =>
                        (
                            <>
                                <Row>
                                    <Col>
                                        <div classNames='card'>
                                            <div className='card-body'>

                                                <img src={exp.image} className="exp-image"/>
                                                <div className="experience-role">{exp.role}</div>

                                                <div className='card-text experience-detail'>
                                                    <div
                                                        className="flex-grow-1">{exp.company} in {exp.area} from {this.formatDate(exp.startDate)} to {this.formatDate(exp.endDate)}</div>
                                                    <div>
                                                        <Button className="button-margin" size="sm"
                                                                onClick={() => this.setState({selectedExp: {...exp}})}><i
                                                            className='fas fa-pencil-alt'></i></Button>
                                                        <Button className="button-margin" size="sm"
                                                                onClick={() => this.deleteExperience(exp)}><i
                                                            className='fas fa-trash'></i></Button>
                                                    </div>
                                                </div>
                                                <hr/>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </>
                        ))}


                </Jumbotron>
            </Container>
        );
    }
}

export default Experiences;
