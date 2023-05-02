/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Modal, Table } from "react-bootstrap";
import { useSelector } from "react-redux";

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

  const associationDetails = useSelector((state) => state.associationDetails);
  const { loading, error, association } = associationDetails;

  useEffect(() => {
    if (association) {
      setName(association.name);
      setEmail(association.email);
      setPhone(association.phone_number);
      setSchedule(association.schedule_of_receipts);
      setIban(association.bank_iban);
      setFiscalCode(association.fiscal_code);
      setAddress(association.address);
      setPresident(association.president);
      setAdministrator(association.administrator);
      setCensor(association.censor);
      setAddressOfCollection(association.address_of_collection);
    }
  }, [association]);

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Dialog>
        <Modal.Title>Informatii despre asociatie</Modal.Title>
        <Modal.Body>
          <Table bordered hover striped>
            <thead>
              <tr>
                <td>Name</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{name}</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <td>Email</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{email}</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <td>Phone Number</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{phone}</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <td>Schedule of collection</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{schedule}</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <td>Address of Collection</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{addressOfCollection}</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <td>Bank IBAN</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{iban}</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <td>Fiscal Code</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{fiscalCode}</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <td>Address</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{address}</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <td>President</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{president}</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <td>Administrator</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{administrator}</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <td>Censor</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{censor}</td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
      </Modal.Dialog>
    </Modal>
  );
}

export default ModalInfoAssociation;
