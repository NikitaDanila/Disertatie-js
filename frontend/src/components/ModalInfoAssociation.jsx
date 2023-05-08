/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Modal, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import TableAssociationInfo from "./TableAssociationInfo.jsx";

function ModalInfoAssociation(props) {
  return (
    <Modal show={props.show} onHide={props.onHide} scrollable="true" size="lg">
      <Modal.Title>Informatii despre asociatie</Modal.Title>
      <Modal.Body>
        <TableAssociationInfo />
      </Modal.Body>
    </Modal>
  );
}

export default ModalInfoAssociation;
