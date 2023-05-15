/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAssociationDetails } from "../actions/associationActions";
import { listUsers } from "../actions/userActions";
import {
  getWaterConsumptionDetails,
  getWaterConsumptionDetailsById,
} from "../actions/waterConsumptionActions";
import ChartWaterConsumption from "../components/ChartWaterConsumption";
import ModalInfoAssociation from "../components/ModalInfoAssociation";
import ModalUpdateWaterConsumption from "../components/ModalUpdateWaterConsumption";

function AdminHomeScreen() {
  const [showModal, setShowModal] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [dropdownUser, setDropdownUser] = useState(userInfo.fullname);

  const associationDetails = useSelector((state) => state.associationDetails);
  const { loading, error, associations } = associationDetails;

  const waterConsumptionDetails = useSelector(
    (state) => state.waterConsumptionDetails
  );
  const { consumption } = waterConsumptionDetails;

  const userList = useSelector((state) => state.userList);
  const { users } = userList;

  useEffect(() => {
    if (!userInfo && !userInfo.isAdmin) {
      navigateTo("/login");
    }
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers());
    }

    if (userInfo.username && !consumption) {
      dispatch(getWaterConsumptionDetails());
    }
  }, [consumption, userInfo, navigateTo, dispatch]);

  const selectHandler = (id) => {
    dispatch(getWaterConsumptionDetailsById(id));
    users.forEach((user) => {
      if (user.id == id) {
        setDropdownUser(user.fullname);
      }
    });
  };

  return (
    <Container fluid>
      <Row className="justify-content-md-end">
        <Col>
          <Dropdown onSelect={selectHandler}>
            <Dropdown.Toggle size="sm" variant="light">
              Choose User: {dropdownUser}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {users?.map((user) => (
                <Dropdown.Item key={user.id} as="button" eventKey={user.id}>
                  {user.fullname}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>

        <Button
          style={{ width: "auto" }}
          size="sm"
          onClick={() => {
            setShowModal(true);
            dispatch(getAssociationDetails(userInfo.id));
          }}
        >
          Informatii Asociatie
        </Button>
      </Row>

      <Row className="justify-content-center">
        <ChartWaterConsumption consumption={consumption} />
        <Button
          style={{ width: "auto" }}
          size="sm"
          onClick={() => setShowModalUpdate(!showModalUpdate)}
        >
          Update
        </Button>
        <ModalUpdateWaterConsumption
          show={showModalUpdate}
          onHide={() => setShowModalUpdate(!showModalUpdate)}
        />
      </Row>
      <ModalInfoAssociation
        show={showModal}
        onHide={() => setShowModal(false)}
      />
    </Container>
  );
}

export default AdminHomeScreen;
