import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {Col, Row, Form, FormGroup, Label, Input} from 'reactstrap';
import Api from "../Api";

const ExperienceModal = props => {
    const {buttonLabel, className} = props;

    const [modal, setModal] = useState(false);


    const toggle = () => setModal(!modal);

    const submit = () => {
        const title = document.getElementById("title").value;
        const employmentType = document.getElementById("empolymentType").value;
        const company = document.getElementById("company").value;
        const location= document.getElementById("location").value;

        const experience = {title, employmentType, company, location};
        Api.fetch("/experience", "PUT", JSON.stringify(experience)).then(() => {
            toggle();
            window.location.reload();
        });
    };

    return (
        <>
            <Button onClick={toggle} className={'buttonExpEdit'}>
                Add new experience
            </Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Edit experience</ModalHeader>
                <ModalBody>
                    <Form>
                        <Row form>
                            <Col md={12}>
                            <FormGroup>
                                <Label for='title'>Title *</Label>
                                <Input type='text' name='title' id='title' defaultValue={props.experience.title}
                                       placeholder='Full-stack Developer'/>
                            </FormGroup>
                                </Col>
                        </Row>
                        <Row form>
                            <Col md={12}>
                            <FormGroup>
                                <Label for='employmentType'>Employment type</Label>
                                <Input type='text' name='employmentType' id='employmentType'
                                       defaultValue={props.experience.employmentType}
                                       placeholder='-'/>
                            </FormGroup>
                        </Col>
                        </Row>
                        <Row form>
                            <Col md={12}>
                            <FormGroup>
                                <Label for='company'>Company *</Label>
                                <Input type='company' name='email' id='company' defaultValue={props.experience.company}
                                       placeholder='Eg: Google LLC'/>
                            </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={12}>
                            <FormGroup>
                                <Label for='location'>Location</Label>
                                <Input type='text' name='area' id='location' defaultValue={props.experience.location}
                                       placeholder='Bangalore'/>
                            </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={12}>
                            <FormGroup>
                                <label>
                                    <input
                                        type="checkbox"
                                        defaultChecked={props.experience.isChecked}
                                       />
                                    <span> Check Me!</span>
                                </label>
                            </FormGroup>
                            </Col>
                        </Row>

                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color='primary' onClick={submit}>
                        Edit
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
};

export default ExperienceModal;
