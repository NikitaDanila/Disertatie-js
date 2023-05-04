/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { adminRegister } from "../actions/userActions";

function ModalCreateUser(props) {
  const [first_name, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [last_name, setLastName] = useState("");
  const [password, setPassword] = useState("*2369fF^$");

  const dispatch = useDispatch();

  const userUpdate = useSelector((state) => state.userUpdate);

  const {
    error: errorUpdate,
    loading: loadingUpdate,
    success: successUpdate,
  } = userUpdate;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(adminRegister(first_name, last_name, email, password));
  };
  return (
    <Modal {...props}>
      <Form onSubmit={submitHandler}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Create User</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form.Group controlId="fist_name">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter First Name"
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="last_name">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Last Name"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
            {/* <Form.Group controlId="apartment_number">
              <Form.Label>Apartment Number</Form.Label>
              <Form.Control
                value={apartment_number}
                onChange={(e) => setApartmentNumber(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="mobile_number">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                value={mobile_number}
                onChange={(e) => setMobileNumber(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="isAdmin">
              <Form.Check
                type="checkbox"
                label="Admin"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              ></Form.Check>
            </Form.Group> */}
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" variant="outline-dark" onClick={props.onHide}>
              Create
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Form>
    </Modal>
  );
}

export default ModalCreateUser;
