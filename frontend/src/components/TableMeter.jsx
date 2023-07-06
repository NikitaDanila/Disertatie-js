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

  const waterConsumptionList = useSelector(
    (state) => state.waterConsumptionList
  );
  const { waterList } = waterConsumptionList;

  return (
    <Table striped bordered foo>
      <thead>
        <tr>
          <th>{name}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>January</td>
          <td>February</td>
          <td>March</td>
          <td>April</td>
          <td>May</td>
          <td>June</td>
          <td>July</td>
          <td>August</td>
          <td>September</td>
          <td>October</td>
          <td>November</td>
          <td>December</td>
        </tr>
        <tr>
          {waterList?.map((oneUser) =>
            Object.values(oneUser).map((value) => <td key={value}>{value}</td>)
          )}
        </tr>
      </tbody>
    </Table>
  );
}

export default TableMeter;
