/* eslint-disable no-unused-vars */
import _ from "lodash";
import { useEffect, useState } from "react";
import { Button, Dropdown, Form, Modal, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listUsers } from "../actions/userActions";
import {
  getWaterConsumptionDetailsById,
  getWaterConsumptionList,
  getWaterConsumptionMonth,
} from "../actions/waterConsumptionActions";
import TableMeter from "../components/TableMeter";
function MetersScreen() {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userList = useSelector((state) => state.userList);
  const { users } = userList;

  useEffect(() => {
    if (userInfo) {
      dispatch(getWaterConsumptionList());
    }
    if (userInfo) {
      dispatch(listUsers());
    }
  }, [userInfo]);

  const currentMonth = new Date().getMonth();
  const monthsArray = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle>Alegeti Luna</Dropdown.Toggle>
        <Dropdown.Menu>
          {monthsArray
            ? monthsArray.map((month, index) => (
                <Dropdown.Item key={month}>{month}</Dropdown.Item>
              ))
            : null}
        </Dropdown.Menu>
      </Dropdown>
      <br />
      {users?.map((user, index) => (
        <>
          <h5 key={user.id}>{user.fullname}</h5>
          <TableMeter profile={user.id} month={currentMonth} />
        </>
      ))}
    </>
  );
}

export default MetersScreen;
