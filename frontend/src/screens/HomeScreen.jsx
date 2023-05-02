import { useState } from "react";
import { Button } from "react-bootstrap";
import ModalInfoAsociatie from "../components/ModalInfoAsociatie";
function HomeScreen() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Button onClick={() => setShowModal(true)}>Informatii Asociatie</Button>
      <ModalInfoAsociatie show={showModal} onHide={() => setShowModal(false)} />
    </div>
  );
}

export default HomeScreen;
