/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { deleteUser, getUserDetails, listUsers } from "../actions/userActions";
import Message from "../components/Message";
import ModalCreateUser from "../components/ModalCreateUser";
import UserUpdateModal from "../components/UserUpdateModal";

function UserListScreen() {
  const [modalShow, setModalShow] = useState(false);
  const [createModalShow, setCreateModalShow] = useState(false);
  const [userId, setUserId] = useState(null);
  const [usersLength, setUsersLength] = useState(0);
  let navigateTo = useNavigate();
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDelete = useSelector((state) => state.userDelete);
  const { success: successDelete } = userDelete;

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
                {/* <LinkContainer to={`/admin/user/${user.id}/edit`}> */}
                <Button
                  id="btn"
                  variant="light"
                  className="btn-sm"
                  onClick={() => {
                    setUserId(user.id);
                    setModalShow(true);
                    dispatch(getUserDetails(user.id));
                  }}
                >
                  <i className="fas fa-edit"></i>
                </Button>
                {/* </LinkContainer> */}
                <Button
                  variant="danger"
                  className="btn-sm"
                  onClick={() => deleteHandler(user.id)}
                >
                  <i className="fas fa-trash"></i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
        <UserUpdateModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          userid={userId}
        />
      </Table>
      <ModalCreateUser
        show={createModalShow}
        onHide={() => setCreateModalShow(false)}
      />
    </>
  );
}

export default UserListScreen;
