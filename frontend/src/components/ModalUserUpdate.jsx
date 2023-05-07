/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Button, Dropdown, Form, FormGroup } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getAssociationDetails,
  getAssociationsList,
} from "../actions/associationActions";
import { getUserDetails, listUsers, updateUser } from "../actions/userActions";
import { USER_UPDATE_RESET } from "../constants/userConstants";

function ModalUserUpdate(props) {
  const navigateTo = useNavigate();

  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [apartment_number, setApartmentNumber] = useState("");
  const [mobile_number, setMobileNumber] = useState("");
  const [foo, setFoo] = useState(null);

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { error, loading, user } = userDetails;

  const associationsList = useSelector((state) => state.associationsList);
  const { associations } = associationsList;

  const associationDetails = useSelector((state) => state.associationDetails);
  const { association } = associationDetails;

  const userUpdate = useSelector((state) => state.userUpdate);

  const {
    error: errorUpdate,
    loading: loadingUpdate,
    success: successUpdate,
  } = userUpdate;

  useEffect(() => {
    if (user) {
      setFirstName(user.first_name);
      setLastName(user.last_name);
      setEmail(user.email);
      setIsAdmin(user.isAdmin);
      setApartmentNumber(user.apartment_number);
      setMobileNumber(user.mobile_number);
    }
    if (user.profile_id && user.association !== null) {
      // dispatch(getAssociationDetails(user.profile_id));
      dispatch(getAssociationsList());
    }
  }, [dispatch, user]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        id: user.user,
        first_name,
        last_name,
        email,
        isAdmin,
        mobile_number,
        apartment_number,
        foo,
      })
    );
    dispatch(listUsers());
  };
  return (
    <Modal {...props}>
      <Form onSubmit={submitHandler}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Update User</Modal.Title>
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
            <Form.Group controlId="apartment_number">
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
            <FormGroup>
              <Form.Label>Association</Form.Label>
              {association ? (
                <Form.Control value={association.name} readOnly></Form.Control>
              ) : (
                <Form.Select required onChange={(e) => setFoo(e.target.value)}>
                  <option>Choose an Association</option>
                  {associations.map((association) => (
                    <option key={association.id} value={association.id}>
                      {association.name}
                    </option>
                  ))}
                </Form.Select>
              )}
            </FormGroup>
            <Form.Group controlId="isAdmin">
              <Form.Check
                type="checkbox"
                label="Admin"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              ></Form.Check>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" variant="outline-dark" onClick={props.onHide}>
              Update
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Form>
    </Modal>
  );
}

export default ModalUserUpdate;
