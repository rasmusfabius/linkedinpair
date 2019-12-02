import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';

const ProfileModal = props => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button onClick={toggle}>
        <i class='fas fa-pencil-alt fa-2x'></i>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Edit Profile</ModalHeader>
        <ModalBody>
          <Form>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for='name'>Name</Label>
                  <Input type='text' name='name' id='name' placeholder='Mario' />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for='surname'>Surname</Label>
                  <Input type='text' name='surname' id='surname' placeholder='Smith' />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for='email'>Email</Label>
                  <Input type='email' name='email' id='email' placeholder='user@example.com' />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for='area'>Area</Label>
                  <Input type='text' name='area' id='area' placeholder='Bangalore' />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for='title'>Title</Label>
              <Input type='text' name='title' id='title' placeholder='CTO @ ACME corp' />
            </FormGroup>
            <FormGroup>
              <Label for='exampleAddress2'>Bio</Label>
              <Input type='text' name='bio' id='bio' placeholder='Bio' />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={toggle}>
            Edit
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ProfileModal;
