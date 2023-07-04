/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Modal, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
// import TableAssociationInfoById from "./TableAssociationInfo";
import TableAssociationInfoById from "./TableAssociationInfoById";

function ModalInfoAssociationById(props) {
  return (
    <Modal show={props.show} onHide={props.onHide} scrollable="true" size="lg">
      <Modal.Title>Informatii despre asociatie By ID</Modal.Title>
      <Modal.Body>
        <TableAssociationInfoById />
      </Modal.Body>
    </Modal>
  );
}

export default ModalInfoAssociationById;
