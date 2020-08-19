import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { deleteListing } from '../../Services/listings'

export default function PopUp(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <>
      <div className="modal-ctn">
        <Button variant="danger button delete" onClick={handleShow}>
          X
  </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Listing</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to delete this listing?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
        </Button>
            <Button variant="primary" onClick={() => props.handleClick(props.listing.id)}>
              Delete
        </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  )
}
