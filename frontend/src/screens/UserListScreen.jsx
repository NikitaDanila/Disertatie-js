/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useEffect, useLayoutEffect, useState } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  getAssociationDetails,
  getAssociationDetailsById,
} from "../actions/associationActions";
import { deleteUser, getUserDetails, listUsers } from "../actions/userActions";
import Message from "../components/Message";
import ModalCreateUser from "../components/ModalCreateUser";
import ModalInfoUser from "../components/ModalInfoUser";
import ModalUpdateUser from "../components/ModalUpdateUser";
function UserListScreen() {
  const [modalShow, setModalShow] = useState(false);
  const [createModalShow, setCreateModalShow] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDelete = useSelector((state) => state.userDelete);
  const { success: successDelete } = userDelete;

  const userDetails = useSelector((state) => state.userDetails);
  const { user: userDetailsUser } = userDetails;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers());
    } else {
      navigateTo("/register");
    }
  }, [dispatch, userInfo, navigateTo]);

  const deleteHandler = (id) => {
    if (window.confirm("Delete permanently?")) {
      dispatch(deleteUser(id));
    }
    dispatch(listUsers());
  };
  const handleInfo = (id) => {
    dispatch(getAssociationDetails(id));
  };
  return (
    <>
      <Row>
        <h1>Users</h1>
      </Row>

      <Table striped bordered hover responsive className="table-sm">
        <thead style={{ textAlign: "center" }}>
          <tr>
            <th>ID</th>
            <th>FULL NAME</th>
            <th>EMAIL</th>
            <th>ADMIN</th>
            <th>
              <Button
                className="btn-sm"
                onClick={() => setCreateModalShow(true)}
              >
                Create New User
              </Button>
            </th>
          </tr>
        </thead>

        <tbody>
          {users?.map((user) => (
            <tr key={user.id}>
              <td style={{ textAlign: "center" }}>{user.id}</td>
              <td>{user.fullname}</td>
              <td>{user.email}</td>
              <td>
                {user.isAdmin ? (
                  <i className="fas fa-check" style={{ color: "green" }}></i>
                ) : (
                  <i className="fas fa-check" style={{ color: "red" }}></i>
                )}
              </td>
              <td style={{ textAlign: "center" }}>
                <Button
                  id="btn-view"
                  className="btn btn-sm m-1"
                  onClick={() => {
                    dispatch(getUserDetails(user.id));
                    setShowViewModal(!showViewModal);
                    handleInfo(user.id);
                  }}
                >
                  <i className="fas fa-eye"></i>
                </Button>
                <Button
                  id="btn-edit"
                  variant="light"
                  className="btn-sm m-1"
                  onClick={() => {
                    dispatch(getUserDetails(user.id));
                    setModalShow(true);
                    handleInfo(user.id);
                  }}
                >
                  <i className="fas fa-edit"></i>
                </Button>

                <Button
                  id="btn-delete"
                  variant="danger"
                  className="btn-sm m-1"
                  onClick={() => deleteHandler(user.id)}
                >
                  <i className="fas fa-trash"></i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
        <ModalUpdateUser show={modalShow} onHide={() => setModalShow(false)} />
      </Table>
      <ModalCreateUser
        show={createModalShow}
        onHide={() => setCreateModalShow(false)}
      />
      <ModalInfoUser
        show={showViewModal}
        onHide={() => setShowViewModal(!showViewModal)}
      />
    </>
  );
}

export default UserListScreen;
