/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Modal, NavLink, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import ModalComunicare from "../components/ModalComunicare";
import ModalIndex from "../components/ModalIndex";
import ModalIntretinere from "../components/ModalIntretinere";
import ModalPlata from "../components/ModalPlata";
import Profile from "../components/Profile";
function IndexScreen() {
  const navigateTo = useNavigate();
  const [showModalIntretinere, setShowModalIntretinere] = useState(false);
  const [showModalIndex, setShowModalIndex] = useState(false);
  const [showModalPlata, setShowModalPlata] = useState(false);
  const [showModalComunicare, setShowModalComunicare] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;
  return (
    <>
      <Table borderless size="sm">
        <tbody>
          <tr>
            <td>
              <Button
                variant="link"
                className="text-decoration-none text-reset"
                onClick={() => setShowModalIntretinere(true)}
              >
                <Card style={{ width: "15rem", height: "400px" }}>
                  <Card.Title>Intretinere</Card.Title>
                  <Card.Body>
                    <Card.Img
                      style={{ width: "150px", height: "150px" }}
                      src="https://www.e-bloc.ro/images/chart_small.png"
                    />
                    <Card.Text>
                      <ul style={{ marginLeft: "", textAlign: "left" }}>
                        <li>detalii întreţinere</li>
                        <li>documente scanate</li>
                        <li>avizier virtual</li>
                        <li>repartizare facturi</li>
                        <li>diverse rapoarte</li>
                        <li>date contact asociatie</li>
                        <li>orarul incasarilor</li>
                        <li>contbancar asociatie</li>
                      </ul>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Button>
              <ModalIntretinere
                show={showModalIntretinere}
                onHide={() => setShowModalIntretinere(false)}
              />
            </td>
            <td>
              <Button
                variant="link"
                className="text-decoration-none text-reset"
                onClick={() => setShowModalIndex(true)}
              >
                <Card style={{ width: "15rem", height: "400px" }}>
                  <Card.Title>Index Contoare</Card.Title>
                  <Card.Body>
                    <Card.Img
                      style={{ width: "150px", height: "150px" }}
                      src="https://www.e-bloc.ro/images/contor_small.png"
                    />
                    <Card.Text>
                      <ul style={{ marginLeft: "", textAlign: "left" }}>
                        <li>
                          Introducere index contoare apa rece si apa calda
                        </li>
                        <li>Istoricul consumului</li>
                        <li>informari email</li>
                      </ul>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Button>
              <ModalIndex
                show={showModalIndex}
                onHide={() => setShowModalIndex(false)}
              />
            </td>
            <td>
              <Button
                variant="link"
                className="text-decoration-none text-reset"
                onClick={() => setShowModalPlata(true)}
              >
                <Card style={{ width: "15rem", height: "400px" }}>
                  <Card.Title>Plata card</Card.Title>
                  <Card.Body>
                    <Card.Img
                      style={{ width: "150px", height: "150px" }}
                      src="https://www.e-bloc.ro/images/card_small.png"
                    />
                    <Card.Text>
                      <ul style={{ marginLeft: "", textAlign: "left" }}>
                        <li>
                          Plata intretinerii folosind cardul Visa, MasterCard,
                          Maestro
                        </li>
                        <li>Protectie 3D secure</li>
                        <li>Sectie datorii</li>
                        <li>Istoric plati</li>
                      </ul>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Button>
              <ModalPlata
                show={showModalPlata}
                onHide={() => setShowModalPlata(false)}
              />
            </td>
            <td>
              <Button
                variant="link"
                className="text-decoration-none text-reset"
                onClick={() => setShowModalComunicare(true)}
              >
                <Card style={{ width: "15rem", height: "400px" }}>
                  <Card.Title>Comunicare</Card.Title>
                  <Card.Body>
                    <Card.Img
                      style={{ width: "150px", height: "150px" }}
                      src="https://www.e-bloc.ro/images/contor_small.png"
                    />
                    <Card.Text>
                      <ul style={{ marginLeft: "", textAlign: "left" }}>
                        <li>Pagina de discutii</li>
                        <li>Reclamatii</li>
                        <li>Diverse stiri</li>
                      </ul>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Button>
              <ModalComunicare
                show={showModalComunicare}
                onHide={() => setShowModalComunicare(false)}
              />
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default IndexScreen;
