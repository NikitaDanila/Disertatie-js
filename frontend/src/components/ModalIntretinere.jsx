/* eslint-disable react/prop-types */
import { Modal } from "react-bootstrap";

function ModalIntretinere(props) {
  return (
    <Modal show={props.show} onHide={props.onHide} className="ui-draggable">
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Intretinere</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Prin această platformă online, ne propunem să oferim informaţii cât
          mai detaliate legate de modul de calcul a întreţinerii de la bloc.
          Dorim să existe o transparenţă totală atât legată de cheltuielile care
          se fac, cât şi de modul în care sunt ele repartizate locatarilor. În
          acest sens vă punem la dispoziţie următoarele secţiuni:
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

export default ModalIntretinere;
