/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Modal, NavLink, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import ModalIntretinere from "../components/ModalIntretinere";
import Profile from "../components/Profile";
function IndexScreen() {
  const navigateTo = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;
  return (
    <>
      <Table>
        <tbody>
          <tr>
            <td>
              <Button
                variant="link"
                className="text-decoration-none text-reset"
                onClick={() => setShowModal(true)}
              >
                <Card style={{ width: "18rem" }}>
                  <Card.Title>Intretinere</Card.Title>
                  <Card.Body>
                    <Card.Img src="https://www.e-bloc.ro/images/chart_small.png"></Card.Img>
                    <Card.Text>
                      <ul>
                        <li className="text-left">Element 1</li>
                        <li>Element 2</li>
                        <li>Element 3</li>
                        <li>Element 4</li>
                        <li>Element 5</li>
                      </ul>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Button>
              <ModalIntretinere
                show={showModal}
                onHide={() => setShowModal(false)}
              />
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default IndexScreen;
