/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

function TableAssociationInfo() {
  const dispatch = useDispatch();
  const associationDetails = useSelector((state) => state.associationDetails);
  const { association } = associationDetails;
  return (
    <>
      <Table bordered striped hover>
        <thead>
          <tr>
            <td>Name</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{association ? association.name : null}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{association ? association.email : null}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <td>Phone Number</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{association ? association.phone_number : null}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <td>Schedule of collection</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{association ? association.schedule_of_receipts : null}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <td>Address of Collection</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{association ? association.address_of_collection : null}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <td>Bank IBAN</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{association ? association.bank_iban : null}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <td>Fiscal Code</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{association ? association.fiscal_code : null}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <td>Address</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{association ? association.address : null}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <td>President</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{association ? association.president : null}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <td>Administrator</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{association ? association.administrator : null}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <td>Censor</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{association ? association.censor : null}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default TableAssociationInfo;
