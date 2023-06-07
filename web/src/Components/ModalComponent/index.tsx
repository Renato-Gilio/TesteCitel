import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

interface IModalComponentProps {
  modalName: string;
  modalTitle: string;
  component: React.ComponentType<any>;
  type?: string;
  arrayChild?: any[]
  id?: number;
}

const ModalComponent = ({
  modalName,
  modalTitle,
  component: Component,
  type,
  arrayChild,
  id
}: IModalComponentProps) => {
  const [show, setShow] = useState(false);

  const handleOpen = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <Button
        variant="primary"
        className={type === "editar" ? "btn btn-primary" : "btn btn-success"}
        onClick={handleOpen}
      >
        {modalName}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Component id={id} categorias={arrayChild} handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export { ModalComponent };
