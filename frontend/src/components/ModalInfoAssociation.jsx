/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Modal, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import TableAssociationInfo from "./TableAssociationInfo";

function ModalInfoAssociation(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [schedule, setSchedule] = useState("");
  const [addressOfCollection, setAddressOfCollection] = useState("");
  const [iban, setIban] = useState("");
  const [fiscalCode, setFiscalCode] = useState("");
  const [address, setAddress] = useState("");
  const [president, setPresident] = useState("");
  const [administrator, setAdministrator] = useState("");
  const [censor, setCensor] = useState("");

  const associationDetailsById = useSelector(
    (state) => state.associationDetailsById
  );
  const { loading, error, associationById } = associationDetailsById;

  useEffect(() => {
    if (associationById) {
      setName(associationById.name);
      setEmail(associationById.email);
      setPhone(associationById.phone_number);
      setSchedule(associationById.schedule_of_receipts);
      setIban(associationById.bank_iban);
      setFiscalCode(associationById.fiscal_code);
      setAddress(associationById.address);
      setPresident(associationById.president);
      setAdministrator(associationById.administrator);
      setCensor(associationById.censor);
      setAddressOfCollection(associationById.address_of_collection);
    }
  }, [associationById]);

  return (
    <Modal show={props.show} onHide={props.onHide} scrollable="true" size="lg">
      <Modal.Title>Informatii despre asociatie</Modal.Title>
      <Modal.Body>
        <TableAssociationInfo
          name={name}
          email={email}
          phone_number={phone}
          schedule={schedule}
          addressOfCollection={addressOfCollection}
          iban={iban}
          fiscalCode={fiscalCode}
          address={address}
          president={president}
          administrator={administrator}
          censor={censor}
        />
      </Modal.Body>
    </Modal>
  );
}

export default ModalInfoAssociation;
