import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import Api from '../Api';

class ExperienceModal extends React.Component {
    //const {buttonLabel, className} = props;
    experience = JSON.parse(JSON.stringify(this.props.experience));
    state = { modal: false };

    toggle() {
        this.setState({ modal: !this.state.modal });
    }

    submit() {
        //take props from props, not by Id
        const role = document.getElementById('role').value;
        const company = document.getElementById('company').value;
        const startDate = document.getElementById('startDate').value;
        const endDate = document.getElementById('endDate').value;
        const description = document.getElementById('description').value;
        const area = document.getElementById('area').value;

        const experience = { startDate, endDate, description, role, company, area };
        //if props.experience._id has a value => we have to send a PUT! to /expriences/_id
        //else a POST is perfect
        Api.fetch('/profile/user13/experiences', 'POST', JSON.stringify(experience)).then(() => {
            this.toggle();
            //send the new experience to the parent component. the parent component shoukld just push it into the exprience array
            // window.location.reload();
        });
    }

    render() {
        const props = this.props;
        return (
            <>
                <Button onClick={this.toggle.bind(this)} className={'buttonExpEdit'}>
                    Add new experience
        </Button>
                <Modal isOpen={this.state.modal || this.props.experience._id} toggle={this.toggle.bind(this)} className={this.props.className}>
                    <ModalHeader toggle={this.toggle.bind(this)}>Edit experience</ModalHeader>
                    <ModalBody>
                        <Form>
                            <Row form>
                                <Col md={12}>
                                    <FormGroup>
                                        <Label for='title'>Start date *</Label>
                                        <Input
                                            type='date'
                                            name='startDate'
                                            id='startDate'
                                            value={this.props.experience.startDate}
                                            onChange={(val) => this.props.updateExp(val)}
                                            placeholder='Full-stack Developer'
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={12}>
                                    <FormGroup>
                                        <Label for='title'>End date *</Label>
                                        <Input
                                            type='date'
                                            name='endDate'
                                            id='endDate'
                                            value={this.props.experience.endDate}
                                            onChange={(val) => this.props.updateExp(val)}
                                            placeholder='Full-stack Developer'
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={12}>
                                    <FormGroup>
                                        <Label for='employment'>Employment type</Label>
                                        <Input type='text' name='role' id='role' value={this.props.experience.role}
                                            onChange={(val) => this.props.updateExp(val)} placeholder='-' />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={12}>
                                    <FormGroup>
                                        <Label for='company'>Company *</Label>
                                        <Input type='company' name='email' id='company' value={this.props.experience.company}
                                            onChange={(val) => this.props.updateExp(val)} placeholder='Eg: Google LLC' />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={12}>
                                    <FormGroup>
                                        <Label for='location'>Location</Label>
                                        <Input type='text' name='area' id='area' defaultValue={props.experience.location} placeholder='Bangalore' />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={12}>
                                    <FormGroup>
                                        <Label for='description'>Description</Label>
                                        <Input type='text' name='description' id='description' defaultValue={props.experience.description} placeholder='' />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color='primary' onClick={this.submit.bind(this)}>
                            Add
            </Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    }
}

export default ExperienceModal;
