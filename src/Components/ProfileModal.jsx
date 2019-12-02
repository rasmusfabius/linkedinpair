import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import Api from "../Api";

const ProfileModal = props => {
  const { buttonLabel, className } = props;

  const profile = JSON.parse(JSON.stringify(props.profile));

  const [modal, setModal] = useState(false);



  const toggle = () => setModal(!modal);

  const submit = () => {
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const email = document.getElementById("email").value;
    const area = document.getElementById("area").value;
    const title = document.getElementById("title").value;
    const bio = document.getElementById("bio").value;
    const image = document.getElementById("image").value;

    const profile = {name, surname, email, area, title, bio, image};
    Api.fetch("/profile", "PUT", JSON.stringify(profile)).then(() => {
      toggle();
      window.location.reload();
    });
  };

  return (
    <div>
      <Button onClick={toggle} className={'buttonEdit'}>
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
                  <Input type='text' name='name' id='name'  defaultValue={props.profile.name} placeholder='Mario' />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for='surname'>Surname</Label>
                  <Input type='text' name='surname' id='surname' defaultValue={props.profile.surname} placeholder='Smith' />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for='email'>Email</Label>
                  <Input type='email' name='email' id='email' defaultValue={props.profile.email} placeholder='user@example.com' />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for='area'>Area</Label>
                  <Input type='text' name='area' id='area' defaultValue={props.profile.area} placeholder='Bangalore' />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for='title'>Title</Label>
              <Input type='text' name='title' id='title' defaultValue={props.profile.title} placeholder='CTO @ ACME corp' />
            </FormGroup>
            <FormGroup>
              <Label for='bio'>Bio</Label>
              <Input type='textarea' name='bio' id='bio' defaultValue={props.profile.bio}  placeholder='Bio' />
            </FormGroup>
            <FormGroup>
              <Label for='bio'>Image URL</Label>
              <Input type='text' name='image' id='image' defaultValue={props.profile.image}  placeholder='http://...' />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={submit}>
            Edit
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ProfileModal;
