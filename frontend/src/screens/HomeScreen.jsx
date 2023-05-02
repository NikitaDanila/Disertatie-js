/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAssociationDetails } from "../actions/associationActions";
import ModalInfoAsociatie from "../components/ModalInfoAsociatie";
import {
  ASSOCIATION_DETAILS_REQUEST,
  ASSOCIATION_DETAILS_SUCCESS,
} from "../constants/associationConstants";
function HomeScreen() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const associationDetails = useSelector((state) => state.associationDetails);
  const { loading, error, associations } = associationDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <div>
      <Button
        onClick={() => {
          setShowModal(true);
          dispatch(getAssociationDetails());
        }}
      >
        Informatii Asociatie
      </Button>
      <ModalInfoAsociatie show={showModal} onHide={() => setShowModal(false)} />
    </div>
  );
}

export default HomeScreen;
