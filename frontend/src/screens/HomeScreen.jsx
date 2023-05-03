/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAssociationDetails } from "../actions/associationActions";
import { getWaterConsumptionDetails } from "../actions/waterConsumptionActions";
import ChartWaterConsumption from "../components/ChartWaterConsumption";
import ModalInfoAssociation from "../components/ModalInfoAssociation";

function HomeScreen() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

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
    if (!consumption) {
      dispatch(getWaterConsumptionDetails());
    }
  }, [userInfo, navigateTo, consumption, dispatch]);

  return (
    <Container fluid>
      <Row className="justify-content-md-end">
        <Button
          style={{ width: "auto" }}
          size="sm"
          onClick={() => {
            setShowModal(true);
            dispatch(getAssociationDetails());
          }}
        >
          Informatii Asociatie
        </Button>

        <ModalInfoAssociation
          show={showModal}
          onHide={() => setShowModal(false)}
        />
      </Row>
      <ChartWaterConsumption />
    </Container>
  );
}

export default HomeScreen;
