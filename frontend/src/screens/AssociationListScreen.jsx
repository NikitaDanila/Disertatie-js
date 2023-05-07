/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAssociation,
  getAssociationDetails,
  getAssociationDetailsById,
  getAssociationsList,
} from "../actions/associationActions.jsx";
import ModalInfoAssociationById from "../components/ModalInfoAssociation";
import ModalRegisterAssociation from "../components/ModalRegisterAssociation.jsx";
import ModalUpdateAssociation from "../components/ModalUpdateAssociation.jsx";
function AssociationListScreen() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const associationsList = useSelector((state) => state.associationsList);
  const { associations } = associationsList;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(getAssociationsList());
    }
  }, [dispatch, userInfo]);

  const deleteHandler = (id) => {
    if (window.confirm("Delete permanently?")) {
      dispatch(deleteAssociation(id));
    }
  };
  return (
    <Container>
      <h1>Associations</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <td>ID</td>
            <td>NAME</td>
            <td>ADMINISTRATOR</td>
            <td>PRESIDENT</td>
            <td>
              <Button onClick={() => setShowRegisterModal(!showRegisterModal)}>
                Add new
              </Button>
            </td>
          </tr>
        </thead>
        <tbody>
          {associations.map((association) => (
            <tr key={association.id}>
              <td>{association.id}</td>
              <td>{association.name}</td>
              <td>{association.administrator}</td>
              <td>{association.president}</td>
              <td>
                <Button
                  id="read"
                  variant="primary"
                  className="btn-sm m-2"
                  onClick={() => {
                    setShowModal(true);
                    dispatch(getAssociationDetailsById(association.id));
                  }}
                >
                  <i className="fas fa-eye"></i>
                </Button>
                <Button
                  id="edit"
                  variant="light"
                  className="btn-sm m-2"
                  onClick={() => {
                    setShowEditModal(true);
                    dispatch(getAssociationDetailsById(association.id));
                  }}
                >
                  <i className="fas fa-edit"></i>
                </Button>
                <Button
                  id="delete"
                  variant="danger"
                  className="btn-sm m-2"
                  onClick={() => deleteHandler(association.id)}
                >
                  <i className="fas fa-trash"></i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ModalInfoAssociationById
        show={showModal}
        onHide={() => setShowModal(false)}
      />
      <ModalUpdateAssociation
        show={showEditModal}
        onHide={() => setShowEditModal(!showEditModal)}
      />
      <ModalRegisterAssociation
        show={showRegisterModal}
        onHide={() => setShowRegisterModal(!showRegisterModal)}
      />
    </Container>
  );
}

export default AssociationListScreen;
