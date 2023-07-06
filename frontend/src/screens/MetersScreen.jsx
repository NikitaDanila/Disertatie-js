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

  const waterConsumptionList = useSelector(
    (state) => state.waterConsumptionList
  );
  const { waterList } = waterConsumptionList;

  useEffect(() => {
    if (userInfo) {
      dispatch(getWaterConsumptionList());
    }
    if (userInfo) {
      dispatch(listUsers());
    }
  }, [userInfo]);

  return (
    <>
      {users?.map((user) => (
        <TableMeter name={user.fullname} key={user.id} january={null} />
      ))}
    </>
  );
}

export default MetersScreen;
