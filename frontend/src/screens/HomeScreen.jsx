/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAssociationDetails } from "../actions/associationActions";
import ModalInfoAsociatie from "../components/ModalInfoAsociatie";
function HomeScreen() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const associationDetails = useSelector((state) => state.associationDetails);
  const { loading, error, associationInfo } = associationDetails;

  useEffect(() => {
    if (!associationInfo) {
      dispatch(getAssociationDetails());
    }
  }, [dispatch, associationInfo]);

  return (
    <div>
      <Button onClick={() => setShowModal(true)}>Informatii Asociatie</Button>
      <ModalInfoAsociatie show={showModal} onHide={() => setShowModal(false)} />
    </div>
  );
}

export default HomeScreen;
