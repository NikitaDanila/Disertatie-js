/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAssociationDetails } from "../actions/associationActions";
import { getUserDetails } from "../actions/userActions";
import { getWaterConsumptionDetails } from "../actions/waterConsumptionActions";
import ChartWaterConsumption from "../components/ChartWaterConsumption";
import ModalInfoAssociation from "../components/ModalInfoAssociation";

function HomeScreen() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // const userDetails = useSelector((state) => state.userDetails);
  // const { user } = userDetails;

  const associationDetails = useSelector((state) => state.associationDetails);
  const { loading, error, associations } = associationDetails;

  const waterConsumptionDetails = useSelector(
    (state) => state.waterConsumptionDetails
  );
  const { consumption } = waterConsumptionDetails;
  useEffect(() => {
    if (!userInfo) {
      navigateTo("/login");
    }
  });
  return (
    <Container fluid>
      <Row className="justify-content-md-end">
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

        <ModalInfoAssociation
          show={showModal}
          onHide={() => setShowModal(false)}
        />
      </Row>
      <Row>
        <ChartWaterConsumption consumption={consumption} />
      </Row>
    </Container>
  );
}

export default HomeScreen;
