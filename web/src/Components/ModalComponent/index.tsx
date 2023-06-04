import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface IModalComponentProps {
    handleShow: () => void;
    handleClose: () => void;
    show: boolean;
    modalName: string;
    modalTitle: string;
    children: React.ReactNode;
}

const ModalComponent = ({ 
    handleShow, 
    handleClose, 
    show, 
    modalName,
    modalTitle,
    children 
}: IModalComponentProps) => {
    return (
        <>
            <Button variant="primary" className="btn btn-success" onClick={handleShow}>
                {modalName}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalTitle}</Modal.Title>
                </Modal.Header>

                <Modal.Body>{children}</Modal.Body>
            </Modal>
        </>
    );
};

export { ModalComponent }
