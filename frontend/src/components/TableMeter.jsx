/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  getWaterConsumptionDetails,
  getWaterConsumptionDetailsById,
} from "../actions/waterConsumptionActions";

function TableMeter(props) {
  const dispatch = useDispatch();
  const name = props.name;
  const id = props.id;

  const waterConsumptionList = useSelector(
    (state) => state.waterConsumptionList
  );

  const { waterList } = waterConsumptionList;
  const foo = new Array(100);

  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th>{name}</th>
        </tr>
      </thead>
      <tbody>
        <tr></tr>
      </tbody>
    </Table>
  );
}

export default TableMeter;
