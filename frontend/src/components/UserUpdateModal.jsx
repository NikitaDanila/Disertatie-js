/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getUserDetails, updateUser } from "../actions/userActions";
import { USER_UPDATE_RESET } from "../constants/userConstants";

function UserUpdateModal(props, userid) {
  const { id } = useParams();
  let navigateTo = useNavigate();

  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [apartment_number, setApartmentNumber] = useState("");
  const [mobile_number, setMobileNumber] = useState("");

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { error, loading, user } = userDetails;

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
      setMobileNumber(user.isAdmin);
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
      })
    );
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

export default UserUpdateModal;