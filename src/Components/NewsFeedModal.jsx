import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



const NewsFeedModel = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    /*  state = {
         text: ""
     } */

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const handleOnChange = (e) => {
        props.updateFeed(e.target.value)

    }



    return (
        <div>
            <button className="share-box_trigger share-box__open" onClick={toggle}>{buttonLabel}<i class="far fa-edit fa-2x" id="newsfeedPencil"></i>Start a post</button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader className="modalHeaderNfModal" toggle={toggle}>Create a post</ModalHeader>
                <ModalBody>
                    <textarea onChange={(e) => handleOnChange(e)} className="form-control" rows="3" cols="50"></textarea>
                </ModalBody>
                <ModalFooter>
                    <div className="modalFooter">
                        <i class="fas fa-plus fa-2x"></i>
                        <i class="fas fa-camera-retro fa-2x"></i>
                        <i class="far fa-sticky-note fa-2x"></i>
                    </div>
                    <Button color="primary" onClick={toggle}>Post</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default NewsFeedModel;