/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUserDetails, updateUserProfile } from "../actions/userActions";
import FormContainer from "../components/FormContainer";
import Message from "../components/Message";

import Profile from "../components/Profile";

function ProfileScreen() {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile_number, setMobileNumber] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [apartment_number, setApartmentNumber] = useState("");
  const [profile_picture, setProfilePicture] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { error, loading, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      // history.push("/");
      console.log("redirect to login");
    } else {
      if (!user || !user.first_name) {
        dispatch(getUserDetails(userInfo.id));
      } else {
        setFirstName(user.first_name);
        setLastName(user.last_name);
        setEmail(user.email);
        setMobileNumber(user.mobile_number);
        setApartmentNumber(user.apartment_number);
        setProfilePicture(user.profile_picture)
      }
    }
  }, [dispatch, userInfo, user]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password != confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(
        updateUserProfile({
          first_name: first_name,
          last_name: last_name,
          email: email,
          password: password,
          mobile_number: mobile_number,
          apartment_number:apartment_number,
          // profile_picture:profile_picture
        })
      );
    }
  };
  return (
    <Row>
      <Col md={5}>
        <h2>User Profile</h2>
        
        {message && <Message variant="danger">{message}</Message>}
        {/* <Image rounded src={profile_picture} /> */}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="first_name">
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
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Re-enter password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="mobile_number">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter Mobile"
              value={mobile_number}
              onChange={(e) => setMobileNumber(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="apartment_number">
            <Form.Label>Apartment Number</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter Apartment"
              value={apartment_number}
              onChange={(e) => setApartmentNumber(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button type="submit" variant="outline-dark">
            Update
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default ProfileScreen;
