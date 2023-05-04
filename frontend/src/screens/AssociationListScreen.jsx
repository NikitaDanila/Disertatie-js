/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  getAssociationDetails,
  getAssociationDetailsById,
  getAssociationsList,
} from "../actions/associationActions.jsx";
import ModalInfoAssociation from "../components/ModalInfoAssociation";
function AssociationListScreen() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const associationsList = useSelector((state) => state.associationsList);
  const { associations } = associationsList;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(getAssociationsList());
    }
  }, [dispatch, userInfo]);

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
              <Button>Add new</Button>
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
                  variant="primary"
                  className="btn-sm m-2"
                  onClick={() => {
                    setShowModal(true);
                    dispatch(getAssociationDetailsById(association.id));
                  }}
                >
                  <i className="fas fa-eye"></i>
                </Button>
                <Button variant="light" className="btn-sm m-2">
                  <i className="fas fa-edit"></i>
                </Button>
                <Button variant="danger" className="btn-sm m-2">
                  <i className="fas fa-trash"></i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ModalInfoAssociation
        show={showModal}
        onHide={() => setShowModal(false)}
      />
    </Container>
  );
}

export default AssociationListScreen;
