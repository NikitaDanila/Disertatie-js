/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

function ModalUpdateWaterConsumption(props) {
  const [january, setJanuary] = useState("");
  const [february, setFebruary] = useState("");
  const [march, setMarch] = useState("");
  const [april, setApril] = useState("");
  const [may, setMay] = useState("");
  const [june, setJune] = useState("");
  const [july, setJuly] = useState("");
  const [august, setAugust] = useState("");
  const [september, setSeptember] = useState("");
  const [october, setOctober] = useState("");
  const [november, setNovember] = useState("");
  const [december, setDecember] = useState("");

  const waterConsumptionDetails = useSelector(
    (state) => state.waterConsumptionDetails
  );
  const { consumption } = waterConsumptionDetails;

  useEffect(() => {
    if (consumption) {
      setJanuary(consumption.january);
      setFebruary(consumption.february);
      setMarch(consumption.march);
      setApril(consumption.april);
      setMay(consumption.may);
      setJune(consumption.june);
      setJuly(consumption.july);
      setAugust(consumption.august);
      setSeptember(consumption.september);
      setOctober(consumption.october);
      setNovember(consumption.november);
      setDecember(consumption.december);
    }
  }, [consumption]);

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Title>Update Index</Modal.Title>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>January</Form.Label>
            <Form.Control
              value={january}
              onChange={(e) => setJanuary(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>february</Form.Label>
            <Form.Control
              value={february}
              onChange={(e) => setFebruary(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>March</Form.Label>
            <Form.Control
              value={march}
              onChange={(e) => setMarch(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>April</Form.Label>
            <Form.Control
              value={april}
              onChange={(e) => setApril(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>May</Form.Label>
            <Form.Control
              value={may}
              onChange={(e) => setMay(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>June</Form.Label>
            <Form.Control
              value={june}
              onChange={(e) => setJune(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>July</Form.Label>
            <Form.Control
              value={july}
              onChange={(e) => setJuly(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control.Label>August</Form.Control.Label>
            <Form value={august} onChange={(e) => setAugust(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>September</Form.Label>
            <Form.Control
              value={september}
              onChange={(e) => setSeptember(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>October</Form.Label>
            <Form.Control
              value={october}
              onChange={(e) => setOctober(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>November</Form.Label>
            <Form.Control
              value={november}
              onChange={(e) => setNovember(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>December</Form.Label>
            <Form.Control
              value={december}
              onChange={(e) => setDecember(e.target.value)}
            ></Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
export default ModalUpdateWaterConsumption;
