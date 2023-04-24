import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../actions/userActions";
import FormContainer from "../components/FormContainer";
import Message from "../components/Message";
import { useAppDispatch, useAppSelector } from "../hooks";

function RegisterScreen({ location, history }: any) {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useAppDispatch();

  const redirect = location?.search ? location?.search.split("=")[1] : "/";

  const userRegister = useAppSelector((state: any) => state.userRegister);
  const { error, loading, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      // history.push("/");
      console.log("redirect");
    }
  });

  const submitHandler = (e: any) => {
    e.preventDefault();
    if (password != confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(register(first_name, last_name, email, password));
    }
    // console.log("working");
  };
  return (
    <div>
      <FormContainer>
        {message && <Message variant="danger">{message}</Message>}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="fist_name">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              required
              type="name"
              placeholder="Enter First Name"
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="last_name">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              required
              type="name"
              placeholder="Enter Last Name"
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Re-enter password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button type="submit" variant="outline-dark">
            Register
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            Have an account?{" "}
            <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
              Sign In!
            </Link>
          </Col>
        </Row>
      </FormContainer>
    </div>
  );
}

export default RegisterScreen;
