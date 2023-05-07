/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Modal, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

function ModalInfoUser(props) {
  // const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;

  const associationDetails = useSelector((state) => state.associationDetails);
  const { association } = associationDetails;

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header>User Info</Modal.Header>
      <Modal.Body>
        <Table bordered striped hover>
          <thead>
            <tr>
              <td>Username</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user.username}</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <td>Full Name</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user.first_name + " " + user.last_name}</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <td>Email</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user.email}</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <td>Mobile Number</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user.mobile_number}</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <td>Apartment Number</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user.apartment_number}</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <td>Admin Status</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user.isAdmin ? "True" : "False"}</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <td>Association</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{association ? association.name : null}</td>
            </tr>
          </tbody>
        </Table>
      </Modal.Body>
    </Modal>
  );
}
export default ModalInfoUser;
