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
    const role = document.getElementById('role').value;
    const company = document.getElementById('company').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const description = document.getElementById('description').value;
    const area = document.getElementById('area').value;

    const experience = { startDate, endDate, description, role, company, area };
    Api.fetch('/profile/user13/experiences', 'POST', JSON.stringify(experience)).then(() => {
      this.toggle();
      window.location.reload();
    });
  }

  render() {
    const props = this.props;
    return (
      <>
        <Button onClick={this.toggle.bind(this)} className={'buttonExpEdit'}>
          Add new experience
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle.bind(this)} className={this.props.className}>
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
                      defaultValue={props.experience.startDate}
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
                      defaultValue={props.experience.endDate}
                      placeholder='Full-stack Developer'
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={12}>
                  <FormGroup>
                    <Label for='employment'>Employment type</Label>
                    <Input type='text' name='role' id='role' defaultValue={props.experience.role} placeholder='-' />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={12}>
                  <FormGroup>
                    <Label for='company'>Company *</Label>
                    <Input type='company' name='email' id='company' defaultValue={props.experience.company} placeholder='Eg: Google LLC' />
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
