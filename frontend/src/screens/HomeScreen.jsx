/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAssociationDetails } from "../actions/associationActions";
import { getWaterConsumptionDetails } from "../actions/waterConsumptionActions";
import ChartWaterConsumption from "../components/ChartWaterConsumption";
import ModalInfoAssociation from "../components/ModalInfoAssociation";
import {
  ASSOCIATION_DETAILS_REQUEST,
  ASSOCIATION_DETAILS_SUCCESS,
} from "../constants/associationConstants";
function HomeScreen() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const associationDetails = useSelector((state) => state.associationDetails);
  const { loading, error, associations } = associationDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const waterConsumptionDetails = useSelector(
    (state) => state.waterConsumptionDetails
  );
  const { consumption } = waterConsumptionDetails;
  useEffect(() => {
    if (!consumption || consumption.length === 0) {
      dispatch(getWaterConsumptionDetails());
    }
  }, [dispatch, consumption, userInfo, navigateTo]);

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
      <ChartWaterConsumption consumption={consumption} />
    </Container>
  );
}

export default HomeScreen;
