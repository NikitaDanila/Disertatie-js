/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getWaterConsumptionMonth } from "../actions/waterConsumptionActions";
function TableMeter(props) {
  const dispatch = useDispatch();
  const [indexes, setIndexes] = useState([]);
  const waterConsumptionMonth = useSelector(
    (state) => state.waterConsumptionMonth
  );
  const { monthConsumption } = waterConsumptionMonth;

  useEffect(() => {
    if (props.profile && props.month) {
      // dispatch(
      //   getWaterConsumptionMonth({ profile: props.profile, month: props.month })
      // );
    }
    indexes.push(monthConsumption);
  }, [props.profile]);

  console.log(indexes);
  return (
    <Table bordered="true" striped="true" hover>
      <thead>
        <tr>
          <th>index precedent</th>
          <th>index curent</th>
          <th>diferenta</th>
        </tr>
      </thead>
      <tbody>{}</tbody>
    </Table>
  );
}

export default TableMeter;
