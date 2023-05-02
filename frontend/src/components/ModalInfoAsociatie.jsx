/* eslint-disable react/prop-types */
import { Modal } from "react-bootstrap";

function ModalInfoAsociatie(props) {
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Dialog>
        <Modal.Title>Informatii despre asociatie</Modal.Title>
        <Modal.Body>Body</Modal.Body>
      </Modal.Dialog>
    </Modal>
  );
}

export default ModalInfoAsociatie;
