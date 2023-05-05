/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import {
  Button,
  Form,
  Modal,
  Overlay,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  getAssociationsList,
  registerAssociation,
} from "../actions/associationActions.jsx";
function ModalRegisterAssociation(props) {
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

  const submitHandler = (e) => {
    console.log("triggered");
    e.preventDefault();
    dispatch(
      registerAssociation({
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

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Format should be: dd/mm/yyyy - hh/mm
    </Tooltip>
  );
  return (
    <Modal show={props.show} onHide={props.onHide} size="lg" scrollable="true">
      <Modal.Header>
        <Modal.Title>Register Association</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Association Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
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
            <Form.Label>
              Schedule of collections
              <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
              >
                <i className="bi bi-info-circle" />
              </OverlayTrigger>
            </Form.Label>
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
          <Form.Group>
            <Button type="submit" onClick={props.onHide}>
              Create
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ModalRegisterAssociation;
