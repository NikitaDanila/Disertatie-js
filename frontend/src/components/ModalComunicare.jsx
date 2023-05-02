/* eslint-disable react/prop-types */
import { Modal } from "react-bootstrap";

function ModalComunicare(props) {
  return (
    <Modal show={props.show} onHide={props.onHide} className="ui-draggable">
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Comunicare</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Această platformă îşi propune să ajute la îmbunătăţirea comunicării
          dintre administraţie şi proprietari. Pentru acest scop există două
          secţiuni:
          {
            <li>
              <b>Discuţii </b> - permite dezbaterea unor subiecte între
              proprietarii care au conturi activate
            </li>
          }
          {
            <li>
              <b>Reclamaţii </b> trimite mesaje private către administraţie în
              vederea semnalării unor probleme sau pentru diverse alte menţiuni
            </li>
          }
        </Modal.Body>
      </Modal.Dialog>
    </Modal>
  );
}

export default ModalComunicare;
