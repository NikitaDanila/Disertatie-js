/* eslint-disable no-unused-vars */
import _ from "lodash";
import { useEffect, useState } from "react";
import { Button, Dropdown, Form, Modal, Table } from "react-bootstrap";
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
    <>
      <Dropdown>
        <Dropdown.Toggle>Alegeti Luna</Dropdown.Toggle>
        <Dropdown.Menu>
          {waterList
            ? Object.keys(waterList[0])
                .slice(1, 13)
                .map((month, index) => (
                  <Dropdown.Item key={month}>{month}</Dropdown.Item>
                ))
            : null}
        </Dropdown.Menu>
      </Dropdown>
      <Table bordered="true" striped="true">
        {users?.map((user, index) => (
          <>
            <thead key={user.id}>
              <td>{user.fullname}</td>
            </thead>
            <tbody>
              <Table bordered="true" striped="true">
                <thead>
                  <tr>
                    <th>index precedent</th>
                    <th>index curent</th>
                    <th>diferenta</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {waterList ? waterList[index].january : null} m&sup3;
                    </td>
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
    </>
  );
}

export default MetersScreen;
