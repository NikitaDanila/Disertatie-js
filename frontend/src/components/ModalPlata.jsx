/* eslint-disable react/prop-types */
import { Modal } from "react-bootstrap";

function ModalPlata(props) {
  return (
    <Modal show={props.show} onHide={props.onHide} className="ui-draggable">
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Plata card</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Această facilitate permite proprietarilor să-şi plătescă întreţinerea
          folosind orice card bancar Visa, Visa Electron, MasterCard sau
          Maestro. Nu există nici un fel de taxă de activare sau cost fix lunar.
          Sistemul funcţionează în felul următor:
          {
            <li>
              <b>Avizier</b> - permite afişarea a peste 60 de rapoarte (ex:
              lista de plată, registre de fonduri, state de salarii etc)
              anunţuri sau alte documente
            </li>
          }
          {
            <li>
              <b>Facturi</b> - arată cheltuielile care au intrat în componenţa
              listei de plată, chletuielile care s-au făcut din fonduri şi
              veniturile pe care le-a avut asociaţia
            </li>
          }
          {
            <li>
              <b>Documente</b> - actele asociaţiei de proprietari, contractele
              încheiate, deciziile comitetului şi hotărârile adunării generale
            </li>
          }
        </Modal.Body>
      </Modal.Dialog>
    </Modal>
  );
}

export default ModalPlata;
