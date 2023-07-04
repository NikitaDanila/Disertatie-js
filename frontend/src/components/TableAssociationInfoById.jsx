/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

function TableAssociationInfoById() {
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
    <>
      <Table bordered striped hover>
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
    </>
  );
}

export default TableAssociationInfoById;
