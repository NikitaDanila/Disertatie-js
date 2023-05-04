/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  getAssociationsList,
  updateAssociationDetails,
} from "../actions/associationActions.jsx";
function ModalUpdateAssociation(props) {
  const dispatch = useDispatch();

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
  const { loading, error, association } = associationDetailsById;

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

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateAssociationDetails({
        id: association.id,
        name,
        email,
        phone,
        schedule,
        iban,
        fiscalCode,
        address,
        president,
        administrator,
        censor,
        addressOfCollection,
      })
    );
    dispatch(getAssociationsList());
  };
  return (
    <Modal show={props.show} onHide={props.onHide} size="lg" scrollable="true">
      <Modal.Title>Update association information</Modal.Title>
      <Modal.Body>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Association Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Association Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Association Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Schedule of collections</Form.Label>
            <Form.Control
              type="text"
              placeholder="Association Schedule of collections"
              value={schedule}
              onChange={(e) => setSchedule(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Address of collections</Form.Label>
            <Form.Control
              type="text"
              placeholder="Association Address of collections"
              value={addressOfCollection}
              onChange={(e) => setAddressOfCollection(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Bank IBAN</Form.Label>
            <Form.Control
              type="text"
              placeholder="Association Bank IBAN"
              value={iban}
              onChange={(e) => setIban(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Fiscal Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Association Fiscal Code"
              value={fiscalCode}
              onChange={(e) => setFiscalCode(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Association Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>President</Form.Label>
            <Form.Control
              type="text"
              placeholder="Association President"
              value={president}
              onChange={(e) => setPresident(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Administrator</Form.Label>
            <Form.Control
              type="text"
              placeholder="Association Administrator"
              value={administrator}
              onChange={(e) => setAdministrator(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Censor</Form.Label>
            <Form.Control
              type="text"
              placeholder="Association Censor"
              value={censor}
              onChange={(e) => setCensor(e.target.value)}
            />
          </Form.Group>
          <Button type="submit" onClick={props.onHide}>
            Update
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}

export default ModalUpdateAssociation;
