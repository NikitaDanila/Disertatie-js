/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  getWaterConsumptionDetails,
  updateWaterConsumptionDetails,
} from "../actions/waterConsumptionActions";

function ModalUpdateWaterConsumption(props) {
  const dispatch = useDispatch();
  const [january, setJanuary] = useState(0);
  const [february, setFebruary] = useState(0);
  const [march, setMarch] = useState(0);
  const [april, setApril] = useState(0);
  const [may, setMay] = useState(0);
  const [june, setJune] = useState(0);
  const [july, setJuly] = useState(0);
  const [august, setAugust] = useState(0);
  const [september, setSeptember] = useState(0);
  const [october, setOctober] = useState(0);
  const [november, setNovember] = useState(0);
  const [december, setDecember] = useState(0);

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
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateWaterConsumptionDetails({
        january,
        february,
        march,
        april,
        may,
        june,
        july,
        august,
        september,
        october,
        november,
        december,
      })
    );
    dispatch(getWaterConsumptionDetails());
  };

  return (
    <Modal show={props.show} onHide={props.onHide} scrollable>
      <Modal.Title>Update Index</Modal.Title>
      <Modal.Body>
        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label>January</Form.Label>
            <Form.Control
              type="name"
              value={january}
              onChange={(e) => setJanuary(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>february</Form.Label>
            <Form.Control
              type="name"
              value={february}
              onChange={(e) => setFebruary(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>March</Form.Label>
            <Form.Control
              type="name"
              value={march}
              onChange={(e) => setMarch(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>April</Form.Label>
            <Form.Control
              type="name"
              value={april}
              onChange={(e) => setApril(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>May</Form.Label>
            <Form.Control
              type="name"
              value={may}
              onChange={(e) => setMay(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>June</Form.Label>
            <Form.Control
              type="name"
              value={june}
              onChange={(e) => setJune(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>July</Form.Label>
            <Form.Control
              type="name"
              value={july}
              onChange={(e) => setJuly(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>August</Form.Label>
            <Form.Control
              type="name"
              value={august}
              onChange={(e) => setAugust(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>September</Form.Label>
            <Form.Control
              type="name"
              value={september}
              onChange={(e) => setSeptember(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>October</Form.Label>
            <Form.Control
              type="name"
              value={october}
              onChange={(e) => setOctober(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>November</Form.Label>
            <Form.Control
              type="name"
              value={november}
              onChange={(e) => setNovember(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>December</Form.Label>
            <Form.Control
              type="name"
              value={december}
              onChange={(e) => setDecember(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button type="submit">Update</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
export default ModalUpdateWaterConsumption;
