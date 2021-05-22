import { Modal } from 'react-bootstrap';

export default function CartModal(props) {
  return (
    <Modal
      show={props.show}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      keyboard={false}
      onHide={() => props.onHide()}
    >
      <Modal.Header>
        <h5 className="fw-bold mt-2">Carrinho</h5>
      </Modal.Header>
      <Modal.Body>Hello</Modal.Body>
    </Modal>
  );
}
