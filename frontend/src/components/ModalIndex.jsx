/* eslint-disable react/prop-types */
import { Modal } from "react-bootstrap";

function ModalIndex(props) {
  return (
    <Modal show={props.show} onHide={props.onHide} className="ui-draggable">
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Index Contoare</Modal.Title>
        </Modal.Header>
        Această facilitate doreşte să simplifice modul în care sunt comunicaţi
        indecşii de la contoarele individuale. (ex: apometre) Interfaţa oferă
        atât posibilitatea introducerii consumurilor, cât şi consultarea
        valorilor înregistrate în lunile precedente. Administraţia stabileşte un
        interval în care să se facă citirea (ex: între 1 şi 5 ale fiecărei luni)
        iar utlizatării vor fi notificaţi (prin email sau Facebook) în momentul
        în care începe sau se încheie perioada respectivă.
        <Modal.Body></Modal.Body>
      </Modal.Dialog>
    </Modal>
  );
}

export default ModalIndex;
