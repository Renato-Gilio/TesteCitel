import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

interface RemoverModalProps {
  title: string;
  item: string;
  modalName: string;
  id: number;
  remover: (id: number) => void;
}

const RemoverModal = ({
  title,
  item,
  modalName,
  id,
  remover,
}: RemoverModalProps) => {
  const [show, setShow] = useState(false);

  const handleOpen = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const onRemove = (id: number) => {
    remover(id);
  };

  return (
    <>
      <Button variant="danger" onClick={handleOpen}>
        {modalName}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {title}: {item}?
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="d-flex justify-content-end">
          <Button
            size="sm"
            variant="danger"
            className="mx-3"
            onClick={() => onRemove(id)}
          >
            Remover
          </Button>
          <Button size="sm" variant="secondary">
            Cancelar
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export { RemoverModal };
