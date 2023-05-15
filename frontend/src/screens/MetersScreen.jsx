/* eslint-disable no-unused-vars */
import _ from "lodash";
import { useEffect, useState } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listUsers } from "../actions/userActions";
import { getWaterConsumptionList } from "../actions/waterConsumptionActions";
function MetersScreen() {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;
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
    <Table bordered="true" striped="true">
      {users?.map((user, index) => (
        <>
          <thead key={user.id}>
            <tr>
              <td>{user.fullname}</td>
            </tr>
          </thead>
          <tbody>
            <Table bordered="true" striped="true">
              <thead>
                <tr>
                  <td>index precedent</td>
                  <td>index curent</td>
                  <td>diferenta</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{waterList ? waterList[index].january : null} m&sup3;</td>
                  <td>
                    {waterList ? waterList[index].february : null} m&sup3;
                  </td>
                  <td>
                    {waterList
                      ? Math.abs(
                          waterList[index].february - waterList[index].january
                        ).toFixed(2)
                      : null}{" "}
                    m&sup3;
                  </td>
                </tr>
              </tbody>
            </Table>
          </tbody>
        </>
      ))}
    </Table>
  );
}

export default MetersScreen;
