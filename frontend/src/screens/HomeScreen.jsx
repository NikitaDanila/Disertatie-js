/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Modal, NavLink, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import Profile from "../components/Profile";

function HomeScreen() {
  const navigateTo = useNavigate();
  const [show, setShow] = useState(false);

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
                onClick={() => setShow(true)}
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
            </td>
            <td>
              <Card style={{ width: "18rem" }}>
                <Card.Title>Index Contoare</Card.Title>
                <Card.Body>
                  <Card.Img src="https://www.e-bloc.ro/images/contor_small.png"></Card.Img>
                  <Card.Text>
                    <ul>
                      <li>Element 1</li>
                      <li>Element 2</li>
                      <li>Element 3</li>
                      <li>Element 4</li>
                      <li>Element 5</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </td>
            <td>
              <Card style={{ width: "18rem" }}>
                <Card.Title>Plata Card</Card.Title>
                <Card.Body>
                  <Card.Img src="https://www.e-bloc.ro/images/card_small.png"></Card.Img>
                  <Card.Text>
                    <ul>
                      <li>Element 1</li>
                      <li>Element 2</li>
                      <li>Element 3</li>
                      <li>Element 4</li>
                      <li>Element 5</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </td>
            <td>
              <Card style={{ width: "18rem" }}>
                <Card.Title>Comunnicare</Card.Title>
                <Card.Body>
                  <Card.Img src="https://www.e-bloc.ro/images/comunicare_small.png"></Card.Img>
                  <Card.Text>
                    <ul>
                      <li>Element 1</li>
                      <li>Element 2</li>
                      <li>Element 3</li>
                      <li>Element 4</li>
                      <li>Element 5</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </td>
          </tr>
        </tbody>
      </Table>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Title>Intretinere</Modal.Title>
        <Modal.Body>
          Prin această platformă online, ne propunem să oferim informaţii cât
          mai detaliate legate de modul de calcul a întreţinerii de la bloc.
          Dorim să existe o transparenţă totală atât legată de cheltuielile care
          se fac, cât şi de modul în care sunt ele repartizate locatarilor. În
          acest sens vă punem la dispoziţie următoarele secţiuni:
          {
            <li>
              <b>Avizier</b> - permite afişarea a peste 60 de rapoarte (ex:
              lista de plată, registre de fonduri, state de salarii etc)
              anunţuri sau alte documente
            </li>
          }
          {
            <li>
              <b>Facturi</b> - arată cheltuielile care au intrat în componenţa
              listei de plată, chletuielile care s-au făcut din fonduri şi
              veniturile pe care le-a avut asociaţia
            </li>
          }
          {
            <li>
              <b>Documente</b> - actele asociaţiei de proprietari, contractele
              încheiate, deciziile comitetului şi hotărârile adunării generale
            </li>
          }
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default HomeScreen;
