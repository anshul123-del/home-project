import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Editmodal({title,show,onHide,Mbody}) {
  

  return (
    <>

      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{Mbody}</Modal.Body>
        
      </Modal>
    </>
  );
}

export default Editmodal;