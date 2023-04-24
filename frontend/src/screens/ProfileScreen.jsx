/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
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
  const [confirmPassword, setConfirmPassword] = useState("");
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
      if (!user) {
        dispatch(getUserDetails("1"));
      } else {
        setFirstName(userInfo.first_name);
        setLastName(userInfo.last_name);
        setEmail(userInfo.email);
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
        })
      );
    }
    // console.log("working");
  };
  return (
    <Row>
      <Col md={3}>
        <h2>User Profile</h2>
        {message && <Message variant="danger">{message}</Message>}
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
          <Button type="submit" variant="outline-dark">
            Update
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default ProfileScreen;
